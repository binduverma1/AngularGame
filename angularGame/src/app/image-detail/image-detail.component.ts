import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';
import { HttpClientModule} from '@angular/common/http';
import { createRendererV1 } from '@angular/core/src/view/refs';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  title = 'Recent Photos'
  visibleImages: any[] = [];
  rimage;
  foo;
  constructor(private imageServiceService:ImageServiceService) {
    //this.visibleImages = this.imageServiceService.getImages();   
   }

  ngOnInit() {
    this.visibleImages = this.imageServiceService.getImages();
   this.randomImage();
    //console.log(this.visibleImages);
  }
   public randomImage(){
     
    this.rimage=Math.floor(Math.random() * this.visibleImages.length);
    return this.foo=this.visibleImages[this.rimage].url;
  }

  
}//end export
