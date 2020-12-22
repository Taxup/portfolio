import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  @Input() images: String[];
  @Input() title: String;
  @Input() description: String;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.images);
  }


}
