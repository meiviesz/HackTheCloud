import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // ✅ Importar RouterModule

// Ajuste o caminho abaixo conforme a localização real do AppComponent
import { AppComponent } from '..app/component.ts';
// outros imports

@NgModule({
  declarations: [
    AppComponent
  ]
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // ✅ Configura rotas (mesmo que vazio)
    // outros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
