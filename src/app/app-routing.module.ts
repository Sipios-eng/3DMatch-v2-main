import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab3-login',
    loadChildren: () => import('./tab3-login/tab3-login.module').then( m => m.Tab3LoginPageModule)
  },
  {
    path: 'tab3-register',
    loadChildren: () => import('./tab3-register/tab3-register.module').then( m => m.Tab3RegisterPageModule)
  },
  {
    path: 'tab3-contrasena',
    loadChildren: () => import('./tab3-contrasena/tab3-contrasena.module').then( m => m.Tab3ContrasenaPageModule)
  },
  {
    path: 'tab2-chat',
    loadChildren: () => import('./tab2-chat/tab2-chat.module').then( m => m.Tab2ChatPageModule)
  },
  {
    path: 'tab3-enlistar',
    loadChildren: () => import('./tab3-enlistar/tab3-enlistar.module').then( m => m.Tab3EnlistarPageModule)
  },
  {
    path: 'chat',
    children: [
      {
        path: '',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: ':chatId',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
      }
    ]
  }
  
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
