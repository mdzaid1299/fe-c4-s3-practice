import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiveStreamComponent } from './live-stream/live-stream.component';

  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material/core';
  import {MatInputModule} from '@angular/material/input';
  import {MatAutocompleteModule} from '@angular/material/autocomplete';
  import {MatChipsModule} from '@angular/material/chips';
  import {MatSnackBarModule} from '@angular/material/snack-bar';
  import {MatButtonModule} from '@angular/material/button';
  import {MatToolbarModule} from '@angular/material/toolbar';

  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LiveStreamComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatSnackBarModule,
      MatButtonModule,
      MatToolbarModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
