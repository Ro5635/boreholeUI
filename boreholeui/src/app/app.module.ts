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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavMenuComponent } from './main-nav-menu/main-nav-menu.component';
import { AddBoreholeComponent } from './add-borehole/add-borehole.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddBoreholeFundamentalDetailsComponent } from './add-borehole-fundamental-details/add-borehole-fundamental-details.component';
import { AddBoreholeRotarydrillDetailsComponent } from './add-borehole-rotarydrill-details/add-borehole-rotarydrill-details.component';
import { AddBoreholeCableDetailsComponent } from './add-borehole-cable-details/add-borehole-cable-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavMenuComponent,
    AddBoreholeComponent,
    AddBoreholeFundamentalDetailsComponent,
    AddBoreholeRotarydrillDetailsComponent,
    AddBoreholeCableDetailsComponent
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
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
