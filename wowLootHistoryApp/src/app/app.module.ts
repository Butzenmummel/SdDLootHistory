import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { WowTableComponent } from './wow-table/wow-table.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    WowTableComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Required for Angular Material animations
    AppRoutingModule,
    MatTableModule,           // Required for mat-table
    MatSortModule,            // Required for sorting
    MatPaginatorModule        // Required for pagination (optional, but good to have)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
