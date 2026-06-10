import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [],
  templateUrl: './if.html',
  styleUrl: './if.scss',
})
export class If {
  protected isVisible = true;
}
