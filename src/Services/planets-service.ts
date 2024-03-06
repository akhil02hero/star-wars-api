import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resident } from 'src/models/Resident';
import { Observable } from 'rxjs';
import { Planet } from 'src/models/Planet';

@Injectable({
    providedIn: 'root'
})
export class PlanetService {

    constructor(private http: HttpClient) { }

    getPlanets(url: string): Observable<Planet> {
        return this.http.get<Planet>(url);
    }

    getResidents(url: string): Observable<Resident> {
        return this.http.get<Resident>(url);
    }
}
