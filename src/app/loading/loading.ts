import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading implements OnInit {                   
  isContentReady = signal(false);

  ngOnInit() {
    setTimeout( () => {
      this.isContentReady.set(true);
    }, 4000)
  }
  
}
