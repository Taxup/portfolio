import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-mi-fit',
  templateUrl: './mi-fit.component.html',
  styleUrls: ['./mi-fit.component.scss']
})
export class MiFitComponent implements OnInit {

  images: String[] = [];
  title: String = 'Mi Fit App';
  description: String = 'Mi Fit can track your exercises and analyze your sleep & activity data. It keeps you motivated while exercising, helps to build healthy lifestyle and makes a better you.';

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.imageService.getMiFit().subscribe(data => {
      this.images = data;
    });
  }
}
