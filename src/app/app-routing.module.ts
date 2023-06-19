import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePrincipalComponent } from './components/template/table-principal/table-principal.component';
import { FormCadastrarComponent } from './components/template/form-cadastrar/form-cadastrar.component';
import { TextAboutComponent } from './components/template/text-about/text-about.component';
import { FormAdicionarComponent } from './components/template/form-adicionar/form-adicionar.component';
import { PesquisarComponent } from './components/template/pesquisar/pesquisar.component';
import { ResultadoComponent } from './components/template/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: TablePrincipalComponent},
  { path: 'principal', component: TablePrincipalComponent},
  { path: 'cadastrar', component: FormCadastrarComponent},
  { path: 'pesquisar', component: PesquisarComponent},
  { path: 'resultado/:id', component: ResultadoComponent},
  // { path: 'adicionar', component: FormAdicionarComponent},
  { path: 'adicionar/:id', component: FormAdicionarComponent},
  { path: 'sobre', component: TextAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
