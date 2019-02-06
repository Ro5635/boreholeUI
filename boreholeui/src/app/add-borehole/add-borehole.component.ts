import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-borehole',
  templateUrl: './add-borehole.component.html',
  styleUrls: ['./add-borehole.component.scss']
})
export class AddBoreholeComponent implements OnInit {
  firstFormGroupA: FormGroup;
  secondFormGroup: FormGroup;

  boreholeTypes: any = [{name: "RotaryDrill", viewValue: "Rotary"}, {name: "Cable", viewValue: "Cable"}];

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroupA = this._formBuilder.group({
      IDTextInput: ['', Validators.required],
      DiameterTextInput: ['', Validators.required],
      DepthTextInput: ['', Validators.required],
      BoreholeTypeSelect: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({

    });
  }

}
