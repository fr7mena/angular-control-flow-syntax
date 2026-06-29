import { Component } from '@angular/core';

@Component({
  selector: 'app-error-child',
  imports: [],
  template: `<p>Hola Mundo</p>`,
  styleUrl: './error.scss',
})

export class ErrorComponentChild {
  constructor() {
    throw new Error('Simulated load Error');
  }
}

@Component({
  selector: 'app-error',
  imports: [ErrorComponentChild],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error {
  isContentReady = false;
  isContentReadyError = true;

  ngOnInit() {
    setTimeout (() => {
      this.isContentReady = true;
    }, 300);
  }
}

