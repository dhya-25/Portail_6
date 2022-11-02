import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  tab: any;
  tab2: any;

  x:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
