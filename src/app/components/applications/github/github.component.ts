import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  images: String[] = [];
  title: String = 'Github System Of Control Version App';
  description: String = 'GitHub is a web-based version-control and collaboration platform for software developers.';

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getGithub().subscribe(data => {
      this.images = data;
    });
  }

}
