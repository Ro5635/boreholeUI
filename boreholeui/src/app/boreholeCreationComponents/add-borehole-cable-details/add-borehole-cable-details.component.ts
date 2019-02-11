import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-borehole-cable-details',
  templateUrl: './add-borehole-cable-details.component.html',
  styleUrls: ['./add-borehole-cable-details.component.scss']
})
export class AddBoreholeCableDetailsComponent implements OnInit {
  @Output() boreholeTypeDetails = new EventEmitter<any>();
  typeDetails: FormGroup;

  emitTypeDetails() {
    this.boreholeTypeDetails.emit(this.typeDetails.value);
  }

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.typeDetails = this._formBuilder.group({
      CableStrength: new FormControl('',[Validators.required]),
      CableLength: new FormControl('',[Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
      CableDiameter: new FormControl('',[Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")])
    });
  }

}
