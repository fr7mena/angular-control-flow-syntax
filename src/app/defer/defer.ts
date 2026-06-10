import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.html',
  styleUrl: './defer.scss',
})
export class Defer {
  //?Permite cargar contenido de forma diferida, segun una condicion
  //? Mejora el rendimiento , aplica lazy loading ya que retrasa la carga de partes no críticas
  isImageVisible = false;

  showImage() {
    this.isImageVisible = true;
  }
}
