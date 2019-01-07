import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../animation/animations';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css'],
  animations: fuseAnimations
})
export class ScrumboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
