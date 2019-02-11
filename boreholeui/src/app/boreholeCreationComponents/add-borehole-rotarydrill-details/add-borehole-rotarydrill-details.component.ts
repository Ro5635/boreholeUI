import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-borehole-rotarydrill-details',
  templateUrl: './add-borehole-rotarydrill-details.component.html',
  styleUrls: ['./add-borehole-rotarydrill-details.component.scss']
})
export class AddBoreholeRotarydrillDetailsComponent implements OnInit {
  @Output() boreholeTypeDetails = new EventEmitter<object>();
  typeDetails: FormGroup;

  emitTypeDetails() {
    this.boreholeTypeDetails.emit(this.typeDetails.value);
  }


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.typeDetails = this._formBuilder.group({
      DrillStrength: new FormControl('', Validators.required),
      DrillID: new FormControl('', Validators.required)
    });
  }

}
