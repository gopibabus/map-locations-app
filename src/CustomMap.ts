import { Mappable } from './Mappable';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    const mapSelector = document.getElementById(elementId);
    this.googleMap = new google.maps.Map(mapSelector, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}