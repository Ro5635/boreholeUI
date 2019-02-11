import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-borehole-fundamental-details',
  templateUrl: './add-borehole-fundamental-details.component.html',
  styleUrls: ['./add-borehole-fundamental-details.component.scss']
})
export class AddBoreholeFundamentalDetailsComponent implements OnInit {
  fundamentalDetails: FormGroup;
  @Output() boreholeFundamentalDetails = new EventEmitter<object>();

  boreholeTypes: any = [{name: "Rotarydrill", viewValue: "Rotary"}, {name: "Cable", viewValue: "Cable"}];

  emitFundamentalDetails() {
    this.boreholeFundamentalDetails.emit(this.fundamentalDetails.value);
  }

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.fundamentalDetails = this._formBuilder.group({
      id: new FormControl('', Validators.required),
      Diameter: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
      Depth: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
      Type: new FormControl('', [Validators.required]),
    });
  }

}
