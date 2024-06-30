import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoogleMap],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(GoogleMap, { static: true }) map!: any;
  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 };
  zoom = 10;
  mapLoaded:boolean = false;

  constructor(

  ) {
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
  }

  /**
 * @ngdoc controller
 * @name tilesLoaded
 * @description
 * runs when tiles are loaded
 **/
  tilesLoaded($event: any) {
    if (!this.mapLoaded) {
      this.drawPlaceboundary();
      this.mapLoaded = true;
    }
  }

  /**
 * @ngdoc controller
 * @name drawPlaceboundary
 * @description
 * draws place boundary as per place id
 **/
  drawPlaceboundary(){
    let featureLayer = this.map.googleMap.data.map.getFeatureLayer('LOCALITY')
    const featureStyleOptions = {
      strokeColor: "#810FCB",
      strokeOpacity: 1.0,
      strokeWeight: 3.0,
      fillColor: "#810FCB",
      fillOpacity: 0.5,
    };
    //@ts-ignore
    featureLayer.style = (options) => {
      if (options.feature.placeId == "ChIJOwg_06VPwokRYv534QaPC8g") {
        return featureStyleOptions;
      }
    };
  }

  
}
