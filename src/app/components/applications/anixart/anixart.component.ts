import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-anixart',
  templateUrl: './anixart.component.html',
  styleUrls: ['./anixart.component.scss']
})
export class AnixartComponent implements OnInit {

  images: String[] = [];
  title: String = 'Anixart Anime Exploring App';
  description: String = 'Anixart is a mobile application that helps you explore a wide variety of Japanese animation works.';

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.imageService.getAnime().subscribe(data => {
      this.images = data;
    });
  }

}
