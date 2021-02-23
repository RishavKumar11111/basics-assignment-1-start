import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-success-alert',
  // templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
  selector: '.app-success-alert',
  template: `
    <h1>This is a success alert!</h1>
  `,
  styles: [`
    h1 {
      text-align: center;
      color: white;
      background: green;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
