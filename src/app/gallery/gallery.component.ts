import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {GalleryService} from "../../services/gellery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos : any;
  currentPage:number = 1;
  size:number=10;
  totalPages:number;
  motCle:string ="";
  currentMotCle:string ="";
  pages:Array<number>=[];
  constructor(private galleryService:GalleryService) {

  }

  ngOnInit() {
  }
  onSearch(dataForm){
      this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
      .subscribe( data =>{
        this.currentMotCle = dataForm.motCle;
        this.motCle = "";
        this.pagePhotos = data;
        this.totalPages = Math.ceil(data.totalHits/this.size);
        this.pages = new Array(this.totalPages);
    },err =>{
        console.log(err);
      })
  }


  goToPage(i){
    this.currentPage=i+1;
    this.onSearch({motCle:this.currentMotCle});
  }

}
