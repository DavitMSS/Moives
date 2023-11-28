import { Component, OnInit } from '@angular/core';
import { HeaderItem } from 'src/app/interfaces/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerItems: HeaderItem[] | undefined;
  // items: HeaderItem[] | undefined;


  constructor() { }

  ngOnInit(): void {
 
    this.headerItems = [
      {
        label:"Home",
        routerLink: "home"
      },
      {
        label:"TV Shows",
        routerLink: "tvshows"
      },
      {
        label:"Movies",
        routerLink: "/movies"
      },
      {
        label:"New & Popular",
        routerLink: "newPopular"
      },
      {
        label:"My list",
        routerLink: "myList"
      },
      {
        label:"Browse by Languages",
        routerLink: "BrowsebyLanguages"
      },

    ]

  }

}
