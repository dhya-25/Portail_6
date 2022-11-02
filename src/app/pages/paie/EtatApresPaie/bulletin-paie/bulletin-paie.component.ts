import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-paie',
  templateUrl: './bulletin-paie.component.html',
  styleUrls: ['./bulletin-paie.component.css'],
})
export class BulletinPaieComponent implements OnInit {
  tab: number = 1;
  x: string='';
  constructor() {}

  ngOnInit(): void {}
}
