import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Residents } from 'src/models/Planet';
import { Resident } from 'src/models/Resident';

@Component({
  selector: 'planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  @Input() residents!: string[];
  @Input() viewmore: boolean = false;
  @Output() closeClicked = new EventEmitter<boolean>();


  constructor() { }

  // handleFetchResidentDetails = () => {
  //   this.residents.forEach(url => console.log(url));
  // }


  handleClose = () => {
    this.closeClicked.emit(this.viewmore);
  }

  ngOnInit(): void {
    console.log("Residents", this.residents);
    // this.handleFetchResidentDetails();
    // console.
    //   if(!this.residents) {
    //   this.handleClose();
    // }
  }
}
