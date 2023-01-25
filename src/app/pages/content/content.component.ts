import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ='https://www.koimoi.com/wp-content/new-galleries/2022/10/robert-downey-jr-finally-breaks-silence-on-iron-mans-comeback-to-avengers-001.jpg';
  contentTitle:string ='RDJ vai vestir a armadura novamente';
  contentDescription:string ='blablablabla';
  constructor() { }

  ngOnInit(): void {
  }

}
