import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BoreholesService} from "../boreholes.service";
import {Borehole} from "../../Borehole";

@Component({
  selector: 'app-search-for-borehole',
  templateUrl: './search-for-borehole.component.html',
  styleUrls: ['./search-for-borehole.component.scss']
})
export class SearchForBoreholeComponent implements OnInit {
  boreholeSearchForm: FormGroup;
  retrievedBorehole: Borehole;

  constructor(private _formBuilder: FormBuilder, private boreholesService: BoreholesService) {
  }

  ngOnInit() {
    this.boreholeSearchForm = this._formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }


  getBorehole(boreholeID: string) {
    console.log(`Calling service to search for ID: ${boreholeID}`);

    this.boreholesService.getBorehole(boreholeID)
      .subscribe(acquiredBorehole => {
        // I can only say that this API design is a fail
        // glad I played around with this away from a live project. :D
        // jump the borehole into a intermediate variable for clarity, the API returns an object where the
        // target borehole sits under the requested key name.
        const borehole = acquiredBorehole[boreholeID];
        if (borehole.id) {
          // Acquired boreholes
          this.retrievedBorehole = borehole
        } else {
          // No borehole retrieved
          this.retrievedBorehole = new Borehole();

        }
      });

  }


}
