import { Component, signal } from '@angular/core';
import { Defer } from "./defer/defer";
import { Placeholder } from './placeholder/placeholder';

@Component({
  selector: 'app-root',
  imports: [Placeholder],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-control-flow-syntax');
}
