import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  gotAuthor:any;

  constructor(private _httpServices: HttpService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.gotAuthor ={ name:''}
    this._route.params.subscribe((params:Params) => {
      console.log("here >>>>")
      console.log((params['id']));
      this._httpServices.getAuthor((params['id']))
        .subscribe(data =>{
          this.gotAuthor=data
           console.log(this.gotAuthor)
           console.log(data);
        })
    });
   
    
    
  }

  
  onSubmit2(){
      this._httpServices.updateAuthor(this.gotAuthor,this.gotAuthor._id)
      .subscribe(data => console.log("updated"));
  }

    
}
