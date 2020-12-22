import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-icq',
  templateUrl: './icq.component.html',
  styleUrls: ['./icq.component.scss']
})
export class IcqComponent implements OnInit {
  images: String[] = [];
  title: String = 'ICQ Social Networking App';
  description: String = 'Convert audio messages to text, use smart replies, stay online even with bad internet connection.';

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.imageService.getICQ().subscribe(data => {
      this.images = data;
    });
  }

}
