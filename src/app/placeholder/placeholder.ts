import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss',
})
export class Placeholder {
  // Convertimos la variable en una señal inteligente
  isImageVisible = signal(false);

  showImage() {
    setTimeout(() => {
      // Para cambiar el valor de una señal se usa .set()
      this.isImageVisible.set(true);
    }, 4000);
  }
}