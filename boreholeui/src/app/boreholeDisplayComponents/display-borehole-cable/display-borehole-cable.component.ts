import {Component, Input, OnInit} from '@angular/core';
import {Borehole} from "../../../Borehole";

@Component({
  selector: 'app-display-borehole-cable',
  templateUrl: './display-borehole-cable.component.html',
  styleUrls: ['./display-borehole-cable.component.scss']
})
export class DisplayBoreholeCableComponent implements OnInit {
  @Input() borehole: Borehole;

  constructor() { }

  ngOnInit() {
  }

}
