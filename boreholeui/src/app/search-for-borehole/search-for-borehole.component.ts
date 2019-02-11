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
  retrievedBoreholes: Borehole[];

  constructor(private _formBuilder: FormBuilder, private boreholesService: BoreholesService) {
  }

  ngOnInit() {
    this.boreholeSearchForm = this._formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }

  searchForBorehole(boreholeID: string) {
    console.log(`Calling service to search for ID: ${boreholeID}`);

    this.boreholesService.getBoreholes()
      .subscribe(acquiredBoreholes => {
        if (acquiredBoreholes.length > 0) {
          // Acquired boreholes
          this.retrievedBoreholes = acquiredBoreholes
        } else {
          // No borehole retrieved
          this.retrievedBoreholes = [];

        }
      });

  }

}
