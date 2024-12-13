import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('ERROR CAPTURADO:', error);
    if (error.toString().includes('NG0200')) {
      console.error('Se detectó un ciclo de dependencia: ', error);
    }
    throw error; // Opcional: Lanza el error nuevamente si deseas detener la ejecución
  }
}
