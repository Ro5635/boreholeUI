import {Component, Input, OnInit} from '@angular/core';
import {Borehole} from "../../Borehole";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-display-borehole',
  templateUrl: './display-borehole.component.html',
  styleUrls: ['./display-borehole.component.scss']
})
export class DisplayBoreholeComponent implements OnInit {
  @Input() borehole: Borehole;

  constructor( private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  sendSnackBarNotification(message: string, action: string, duration: number = 2500) {
    this.snackBar.open(message, action, {
      "duration": duration
    });
  }

}
