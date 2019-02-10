import {Component, OnInit} from '@angular/core';
import {Borehole} from "../../Borehole";
import {BoreholesService} from "../boreholes.service";

@Component({
  selector: 'app-add-borehole',
  templateUrl: './add-borehole.component.html',
  styleUrls: ['./add-borehole.component.scss']
})
export class AddBoreholeComponent implements OnInit {
  boreholeModel = new Borehole();
  currentBoreholeType: string;
  tmpTestBoreholes: Borehole[];

  constructor(private boreholesService: BoreholesService) {
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
    console.log(this.boreholeModel);

    this.boreholesService.getBoreholes()
      .subscribe(acquiredBoreholes => this.tmpTestBoreholes = acquiredBoreholes);

  }

}
