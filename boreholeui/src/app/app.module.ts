import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavMenuComponent } from './main-nav-menu/main-nav-menu.component';
import { AddBoreholeComponent } from './add-borehole/add-borehole.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddBoreholeFundamentalDetailsComponent } from './boreholeCreationComponents/add-borehole-fundamental-details/add-borehole-fundamental-details.component';
import { AddBoreholeRotarydrillDetailsComponent } from './boreholeCreationComponents/add-borehole-rotarydrill-details/add-borehole-rotarydrill-details.component';
import { AddBoreholeCableDetailsComponent } from './boreholeCreationComponents/add-borehole-cable-details/add-borehole-cable-details.component';
import { SnackbarNotificationComponent } from './snackbar-notification/snackbar-notification.component';
import { SearchForBoreholeComponent } from './search-for-borehole/search-for-borehole.component';
import { DisplayBoreholeComponent } from './boreholeDisplayComponents/display-borehole/display-borehole.component';
import { DisplayBoreholeRotarydrillComponent } from './boreholeDisplayComponents/display-borehole-rotarydrill/display-borehole-rotarydrill.component';
import { DisplayBoreholeCableComponent } from './boreholeDisplayComponents/display-borehole-cable/display-borehole-cable.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavMenuComponent,
    AddBoreholeComponent,
    AddBoreholeFundamentalDetailsComponent,
    AddBoreholeRotarydrillDetailsComponent,
    AddBoreholeCableDetailsComponent,
    SnackbarNotificationComponent,
    SearchForBoreholeComponent,
    DisplayBoreholeComponent,
    DisplayBoreholeRotarydrillComponent,
    DisplayBoreholeCableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarNotificationComponent]
})
export class AppModule { }
