import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./despesas/despesas.module').then( m => m.DespesasPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'enquetes',
    loadChildren: () => import('./enquetes/enquetes.module').then( m => m.EnquetesPageModule)
  },
  {
    path: 'regras',
    loadChildren: () => import('./regras/regras.module').then( m => m.RegrasPageModule)
  },
  {
    path: 'moradores',
    loadChildren: () => import('./moradores/moradores.module').then( m => m.MoradoresPageModule)
  },
  {
    path: 'visitantes',
    loadChildren: () => import('./visitantes/visitantes.module').then( m => m.VisitantesPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
