import {Component, Input, OnInit} from '@angular/core';
import {Borehole} from "../../../Borehole";

@Component({
  selector: 'app-display-borehole-rotarydrill',
  templateUrl: './display-borehole-rotarydrill.component.html',
  styleUrls: ['./display-borehole-rotarydrill.component.scss']
})
export class DisplayBoreholeRotarydrillComponent implements OnInit {
  @Input() borehole: Borehole;

  constructor() { }

  ngOnInit() {
  }

}
