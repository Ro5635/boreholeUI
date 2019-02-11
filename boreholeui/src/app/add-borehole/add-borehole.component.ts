import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Borehole} from "../../Borehole";
import {BoreholesService} from "../boreholes.service";
import {MatSnackBar} from "@angular/material";
import {SnackbarNotificationComponent} from "../snackbar-notification/snackbar-notification.component";

@Component({
  selector: 'app-add-borehole',
  templateUrl: './add-borehole.component.html',
  styleUrls: ['./add-borehole.component.scss']
})
export class AddBoreholeComponent implements OnInit {
  boreholeModel = new Borehole();
  currentBoreholeType: string;
  saveDisabled: boolean = false;


  constructor(private boreholesService: BoreholesService, public router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  completeFundamentalDetails($fundamentalDetails: Borehole) {
    // Update teh current borehole type to drive the switch case in the UI
    this.currentBoreholeType = $fundamentalDetails.Type;

    // Reset any content from the boreholeModel first in case the user backtracked
    this.boreholeModel = new Borehole();
    this.boreholeModel = Object.assign(this.boreholeModel, $fundamentalDetails);
  }

  completeTypeDetails($typeDetails: object) {
    this.boreholeModel = Object.assign(this.boreholeModel, $typeDetails);
  }

  saveBorehole() {
    // Attempt to save the borehole
    this.saveDisabled = true;

        this.boreholesService.saveBorehole(this.boreholeModel)
      .subscribe(response => {

        // Hacky deal with that I have not typed things properly
        const serviceResponse: any = response;

        if (serviceResponse.failedCreationBoreholes && serviceResponse.failedCreationBoreholes.length === 0) {
          // Successfully created all boreholes
          this.openSnackBar('Successfully Saved', 'Create Borehole');

        } else{
          // failed to create one or more submitted boreholes
          this.openSnackBar('Failed to Save', 'Create Borehole');

        }
        this.saveDisabled = false;
      });

    // Take the user back to the home page
    this.router.navigate(['/']);

    // this.boreholesService.getBoreholes()
    //   .subscribe(acquiredBoreholes => this.tmpTestBoreholes = acquiredBoreholes);

  }

  openSnackBar(message: string, action: string, duration: number = 2500) {
    this.snackBar.open(message, action, {
      "duration": duration
    });

    // Alternative method for loading via component, gives better customisation options.
    // this.snackBar.openFromComponent(SnackbarNotificationComponent, {
    //   duration: 2500
    // });
  }

}
