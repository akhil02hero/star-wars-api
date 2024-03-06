import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlanetService } from 'src/Services/planets-service';
import { PlanetResult } from 'src/models/Planet';

@Component({
  selector: 'planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent {
  @Input() planet!: PlanetResult;
  viewmore: boolean = false;
  @Output() planetDetailsChanged = new EventEmitter<PlanetResult>();
  @Output() viewMoreChanged = new EventEmitter<boolean>();

  constructor(private planetService: PlanetService) { }

  handlePlanetViewMore = () => {
    this.viewmore = !this.viewmore;
    this.viewMoreChanged.emit(this.viewmore);
    this.planetDetailsChanged.emit(this.planet);
  }
}
