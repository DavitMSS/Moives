import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }
  images : any[] = [];

  ngOnInit(): void {
    this.images = [
      { itemImageSrc: 'https://images2.alphacoders.com/724/724132.jpg' },
      { itemImageSrc: 'https://i.pinimg.com/originals/c0/99/9e/c0999e45d3a4a017a4097eb1eb893a72.jpg'},
      { itemImageSrc: 'https://wallpaperaccess.com/full/37943.jpg'},
      { itemImageSrc: 'https://wallpaperaccess.com/full/25915.jpg'},
      { itemImageSrc: 'https://getwallpapers.com/wallpaper/full/0/1/2/1495711-popular-4k-movie-wallpapers-2560x1600-for-retina.jpg'},
      { itemImageSrc: 'https://getwallpapers.com/wallpaper/full/9/f/f/1495740-beautiful-4k-movie-wallpapers-3840x2160-images.jpg'},
      { itemImageSrc: 'https://getwallpapers.com/wallpaper/full/8/b/7/1495739-4k-movie-wallpapers-3562x1913-720p.jpg'},
    ];
  }
}
