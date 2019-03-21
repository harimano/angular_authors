import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  allAuthors:any;



  constructor(private _httpService: HttpService ) { }

  ngOnInit() {
    this._httpService.getAllAuthors()
      .subscribe(data => this.allAuthors =data);

  }

  clickdeleteAuthor(id:string){
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => console.log("deleted author with id >>"+id));
  }
  
}
