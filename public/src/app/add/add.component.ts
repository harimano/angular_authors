import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor:any;

  constructor(private _httpService: HttpService ) { }

  ngOnInit() {
    this.newAuthor = {name : ""}
    
  }
  onSubmit(){
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe( data => 
    {
      console.log(data)
      console.log("author>>>>"+this.newAuthor.name)
      this.newAuthor = { name:'' };
    });

    
  }


}
