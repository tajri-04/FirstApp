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
  size:number=5;
  totalPages:number;
  motCle:string ="";
  pages:Array<number>=[];
  constructor(private galleryService:GalleryService) {

  }

  ngOnInit() {
    this.galleryService.search("rabat",this.size,this.currentPage)
      .subscribe( data =>{
        this.pagePhotos = data;
        this.totalPages = data.totalHits/this.size;
        if(data.totalHits % this.size !=0) ++this.totalPages;
        this.pages = new Array(this.totalPages);
      },err =>{
        console.log(err);
      })
  }
  onSearch(dataForm){
      this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
      .subscribe( data =>{
        this.pagePhotos = data;
        this.totalPages = data.totalHits/this.size;
        if(data.totalHits % this.size !=0) ++this.totalPages;
        this.pages = new Array(this.totalPages);
    },err =>{
        console.log(err);
      })
  }


  goToPage(i){
    this.currentPage=i+1;
    this.onSearch({motCle:this.motCle});
  }

}
