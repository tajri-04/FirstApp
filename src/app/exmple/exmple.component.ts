import { Component, OnInit } from '@angular/core';
import {StreamService} from "../../services/stream.service";

@Component({
  selector: 'app-exmple',
  templateUrl: './exmple.component.html',
  styleUrls: ['./exmple.component.css']
})
export class ExmpleComponent implements OnInit {

  constructor(private streamService:StreamService) {
    this.loadNumberStrem();
  }

  ngOnInit() {

  }

  loadMe(){
    this.streamService.createStream().subscribe((next) => {
     console.log(next)
    },error => {
      console.log(error);
    },() => {
      console.log("done");
    })
  }

  loadNumberStrem(){
    this.streamService.createNumberStream().subscribe((data) => {
      console.log(data);
    },er => {
      console.log(er);
    },()=> {
      console.log("terminé");
    })
  }


}
