import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContactModalComponent} from '../common/contact-modal/contact-modal.component';
import {Observable} from "rxjs";
import {ComponentCanDeactivate} from "../../guard/leave-form.guard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: ['.udacity-text {margin-left: 20px;}'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, ComponentCanDeactivate {
  isVisible: boolean;
  isVisitedContacts: boolean = false;
  introItems: String[] = ["<div><img src=\"assets/img/udacity-logo.svg\" class='iconDetails' alt=\"Udacity Android Nanodegree Logo\"></div>" +
  "<div class='udacity-text'><p class=\"intro-3-course\">Udacity Android Developer Nanodegree</p></div>"
    , "<p class=\"intro-3-work\">Ex-Software Engineer-Android, Peach Studio</p>"];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {}

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openModal() {
    this.isVisitedContacts = true;
    const ref = this.modalService.open(ContactModalComponent);

    ref.result.then((yes) => {
        console.log('ok click');
      },
      (cancel) => {
        console.log('cancel click');
      });
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.isVisitedContacts) {
      return confirm(
        "You didn't explore contact form\n" +
        "Leave this page?"
      );
    } else {
      return true;
    }
  }


  changeVisibility($event: boolean) {
    this.isVisible = $event;
    console.log($event)
  }
}

