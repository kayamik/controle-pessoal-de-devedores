import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { CardsComponent } from './components/template/cards/cards.component';
import { FormCadastrarComponent } from './components/template/form-cadastrar/form-cadastrar.component';
import { FormAdicionarComponent } from './components/template/form-adicionar/form-adicionar.component';
import { TablePrincipalComponent } from './components/template/table-principal/table-principal.component';
import { TextAboutComponent } from './components/template/text-about/text-about.component';
import { PesquisarComponent } from './components/template/pesquisar/pesquisar.component';
import { ResultadoComponent } from './components/template/resultado/resultado.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    FormCadastrarComponent,
    FormAdicionarComponent,
    TablePrincipalComponent,
    TextAboutComponent,
    PesquisarComponent,
    ResultadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
