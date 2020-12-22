import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  images: String[] = [];
  title: String = 'Weather App';
  description: String = 'This weather app is one of best free weather apps with full features: Local weather, weather map (weather map service) and weather widgets.';

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.imageService.getWeather().subscribe(data => {
      this.images = data;
    });
  }

}
