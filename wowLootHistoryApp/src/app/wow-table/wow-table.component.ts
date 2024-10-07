import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-wow-table',
  templateUrl: './wow-table.component.html',
  styleUrls: ['./wow-table.component.scss']
})
export class WowTableComponent implements OnInit {
  displayedColumns: string[] = ['player', 'class', 'date', 'item', 'boss', 'note'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;  // Add pagination
  }

   // Method to update the data in the table
   updateTableData(newData: any) {
    this.dataSource.data = newData;  // Update the table data
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
