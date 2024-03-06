import { Component, Input, OnInit } from '@angular/core';
import { PlanetService } from 'src/Services/planets-service';
import { Resident } from 'src/models/Resident';

@Component({
  selector: 'resident-info',
  templateUrl: './resident-info.component.html',
  styleUrls: ['./resident-info.component.scss']
})
export class ResidentInfoComponent implements OnInit {

  @Input() url!: string;
  resident!: Resident;

  constructor(private planetService: PlanetService) {

  }

  ngOnInit(): void {
    this.planetService.getResidents(this.url).subscribe(data => { this.resident = data });
  }
}
