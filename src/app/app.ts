import { Component, signal } from '@angular/core';
import { Defer } from "./defer/defer";
import { Placeholder } from './placeholder/placeholder';
import { Loading } from './loading/loading';
import { AdvancedDefer } from './advanced-defer/advanced-defer';
import { Error } from './error/error';

@Component({
  selector: 'app-root',
  imports: [Placeholder, Defer, Loading, AdvancedDefer, Error],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-control-flow-syntax');
}
