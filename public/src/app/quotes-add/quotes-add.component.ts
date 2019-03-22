import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-quotes-add',
  templateUrl: './quotes-add.component.html',
  styleUrls: ['./quotes-add.component.css']
})
export class QuotesAddComponent implements OnInit {
  addquote:any;
  gotAuthor:any;
  id: any;

  constructor(private _httpService: HttpService,private _route:ActivatedRoute, private _router:Router ) { }

  ngOnInit() {
    this.addquote ={content:'', vote:0}
    this._route.params.subscribe((params:Params) => {
      console.log("Gettin >>>>")
      console.log((params['id']));
      this.id = params['id'];
      this._httpService.getAuthor((params['id']))
        .subscribe(data =>{
          this.gotAuthor=data
          console.log(this.gotAuthor)
          console.log(data)
         
        })
    });
  }


  onSubmit3(){
    // let observable = this._httpService.addQuote(this.addquote)
    //   observable.subscribe(data => {
    //     console.log(data)
    //     console.log("here is the quote"+this.addquote)
    //   });
    this.gotAuthor.quotes.push(this.addquote);
    this._httpService.updateAuthor(this.gotAuthor,this.id).subscribe(data=>console.log(data));
  }

  

}
