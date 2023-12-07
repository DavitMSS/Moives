import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounce, debounceTime, switchMap, tap } from 'rxjs';
import { HeaderItem } from 'src/app/interfaces/header';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerItems: HeaderItem[] | undefined;

  searchText : FormControl = new FormControl(null);
  searchResults$! : Observable<any> ;

  constructor(private APIService:APIService) { }

  ngOnInit(): void {
    this.headerItems = [
      {
        label:"Home",
        routerLink: "/home"
      },
      {
        label:"TV Shows",
        routerLink: "/tvshows"
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
   this.search()
  }


 search() {
     this.searchResults$ =  this.searchText.valueChanges.pipe(
      debounceTime(1000),
      switchMap((val) => {
        return this.APIService.search(val);
      })
     )
  }


}
