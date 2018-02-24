import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class GalleryService{
  constructor(private http:Http){

  }
  search(motCle:string,size:number,page:number){
    return this.http.get("https://pixabay.com/api/?key=7152448-5471aff514a0cf2bf10c7f46d&q="
      +motCle+"&per_page="+size+"&page="+page)
      .map(resp =>{
        console.error(resp);
        return resp.json()
      });

  }
}
