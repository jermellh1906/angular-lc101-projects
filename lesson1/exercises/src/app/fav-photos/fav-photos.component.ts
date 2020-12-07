import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos To See';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/St._Louis_Cardinals_logo.svg/1200px-St._Louis_Cardinals_logo.svg.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Northwest_Missouri_State_Bearcats_logo.svg/1200px-Northwest_Missouri_State_Bearcats_logo.svg.png';

  constructor() { }

  ngOnInit() {
  }

}