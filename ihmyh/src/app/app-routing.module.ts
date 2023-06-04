import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
   
  },
  {
    path: 'informate',
    loadChildren: () => import('./informate/informate.module').then( m => m.InformatePageModule),
   
  },
  {
    path: 'flores',
    loadChildren: () => import('./flores/flores.module').then( m => m.FloresPageModule),
   
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule),
   
  },
  {
    path: 'exteriores',
    loadChildren: () => import('./exteriores/exteriores.module').then( m => m.ExterioresPageModule),
   
  },
  {
    path: 'desejados',
    loadChildren: () => import('./desejados/desejados.module').then( m => m.DesejadosPageModule),
   
  },
  {
    path: 'interiores',
    loadChildren: () => import('./interiores/interiores.module').then( m => m.InterioresPageModule),
   
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule),
   
  },
  {
    path: 'registar',
   loadChildren: () => import('./registar/registar.module').then(m => m.RegistarPageModule)
  },
  {
    path: 'entregas',
    loadChildren: () => import('./entregas/entregas.module').then(m => m.EntregasPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosPageModule)
  },
  {
    path: '',
    redirectTo: 'recuperar',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'interiores',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'carrinho',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'registar',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'entregas',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'exteriores',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'desejados',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'flores',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'informate',
    pathMatch: 'full'
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
