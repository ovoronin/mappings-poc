import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MappingComponent } from './mapping/mapping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MappingTreeComponent } from './mapping-tree/mapping-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    MappingComponent,
    MappingTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTreeModule, MatIconModule, MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
