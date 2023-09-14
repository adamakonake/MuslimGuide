export class Qibla{
    latitude!: number;
    longitude!: number;
    direction!: number;

    constructor(latitude: number, longitude: number, direction: number){
        this.latitude = latitude;
        this.longitude = longitude;
        this.direction = direction;

    }
}