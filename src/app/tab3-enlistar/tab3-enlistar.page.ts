import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3-enlistar',
  templateUrl: './tab3-enlistar.page.html',
  styleUrls: ['./tab3-enlistar.page.scss'],
})
export class Tab3EnlistarPage implements OnInit {
  listingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {
    // Initialize the form with controls
    this.listingForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      image: [null]
    });
  }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.listingForm.patchValue({ image: file });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  async submitListing() {
    if (this.listingForm.valid) {
      console.log('Form submitted:', this.listingForm.value);
      // Handle form submission logic here

      // Show success toast
      this.presentToast('Listing created successfully!');
      this.listingForm.reset(); // Optionally reset the form after submission
    } else {
      this.presentToast('Please fill in all required fields.');
    }
  }
}
