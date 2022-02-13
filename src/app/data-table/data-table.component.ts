import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  users$: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }
}
