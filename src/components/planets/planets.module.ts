import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { NumberFormatPipe } from 'src/Pipes/numberFormat';
import { ResidentInfoComponent } from './resident-info/resident-info.component';



@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetDetailsComponent,
    PlanetCardComponent,
    NumberFormatPipe,
    ResidentInfoComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoadingComponent,
  ],
  exports: [
    PlanetsComponent,
    PlanetCardComponent
  ]
})
export class PlanetsModule { }
