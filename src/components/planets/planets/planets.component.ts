import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanetService } from 'src/Services/planets-service';
import { Planet, PlanetResult } from 'src/models/Planet';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  pageData!: Planet;
  planets!: PlanetResult[];
  prevDisabled: boolean = false;
  nextDisabled: boolean = false;
  // currentPage: number | null = 1;
  planetResult!: PlanetResult;
  @Input() viewmore: boolean = false;


  url: string = `https://swapi.dev/api/planets/?format=json`;

  constructor(private planetService: PlanetService) { }


  handleClose = () => {
    this.viewmore = false;
  }

  handlePlanetDetailsChanged(planet: PlanetResult): void {
    this.planetResult = planet;
    console.log(this.planetResult);
  }

  checkButtonStatus = () => {

  }

  goToNext = () => {
    console.log(this.pageData);
    if (this.pageData.next) {
      this.url = this.pageData.next;
      this.getPlanets(this.url);
    }
  }

  goToPrevious = () => {
    if (this.pageData.previous) {
      this.url = this.pageData.previous;
      this.getPlanets(this.url);
    }
  }



  handleViewMoreChanged(viewmore: boolean): void {
    this.viewmore = viewmore;
  }

  getPlanets = (url: string) => {
    this.planetService.getPlanets(url).subscribe((data: Planet) => {
      this.pageData = data;
      this.planets = data.results;
      console.log(this.planets);

      if (!this.pageData.previous && this.pageData.next) {
        this.prevDisabled = true;
        this.nextDisabled = false;
      } else if (this.pageData.previous && !this.pageData.next) {
        this.prevDisabled = false;
        this.nextDisabled = true;
      } else if (this.pageData.previous && this.pageData.next) {
        this.prevDisabled = false;
        this.nextDisabled = false;
      } else {
        this.prevDisabled = true;
        this.nextDisabled = true;
      }
    });
  }

  ngOnInit(): void {
    this.getPlanets(this.url);
  }

}
