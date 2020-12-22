import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  filter: String;
  apps = [
    {'link': '/anixart', 'title': 'Anime Exploring App'},
    {'link': '/icq', 'title': 'Social Networking App'},
    {'link': '/mi-fit', 'title': 'Mi Fit Fitness App'},
    {'link': '/github', 'title': 'Github Version Control App'},
    {'link': '/weather', 'title': 'Weather App'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById('myNav').style.height = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }
}
