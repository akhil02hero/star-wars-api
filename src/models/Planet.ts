export interface Planet {
    count: number;
    next: string | null;
    previous: string | null;
    results: PlanetResult[];
}

export interface PlanetResult {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Residents {
    residents: string[];
}