import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {
  photo: string = '';

  constructor(private photosService: PhotosService) {}

  onClick() {
    this.photosService.getPhoto().subscribe((photo) => {
      this.photo = photo;
    })
  }

}
