import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';

@NgModule({
  declarations: [AppComponent, RegistroComponent, ListarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'registro', component: RegistroComponent },
    { path: 'listar', component: ListarComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
