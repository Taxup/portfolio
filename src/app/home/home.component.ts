import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './animate.css']
})
export class HomeComponent implements OnInit {
  isVisible: boolean;

  constructor(private modalService: NgbModal) {
  }

  async ngOnInit() {
    await this.delay(3000);
    this.isVisible = true;
    let someElement = document.getElementById('nav-header');
    someElement.className += ' animated fadeIn';
    someElement = document.getElementById('inner');
    someElement.className += ' animated fadeInLeft';
    someElement = document.getElementById('inner-image');
    someElement.className += ' animated fadeIn';
    someElement = document.getElementById('icon-bar');
    someElement.className += ' animated fadeInLeft';
  }

  openNav() {
    document.getElementById('myNav').style.height = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openModal() {
    var modal = document.getElementById('myModal');
    modal.className += " in";
    modal.style.display = "block";
    modal.style.paddingLeft = "12px";
    var content = document.getElementById("all-content");
    content.className = "modal-open";
  }
}

// export class NgbdModalContent {
//   @Input() name;
//
//   constructor(public activeModal: NgbActiveModal) {}
// }


