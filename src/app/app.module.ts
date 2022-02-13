import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchBoxComponent } from './search-box/search-box.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AppComponent } from './app.component';
import { DataService } from './service/data-service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SearchBoxComponent,
    PageLayoutComponent,
    DataTableComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
