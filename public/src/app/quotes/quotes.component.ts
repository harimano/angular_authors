import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  gotAuthor:any;
  allQuotes:any;
  id: any;
  addquote:any;
  auth_id: string;

  constructor(private _httpServices: HttpService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log("Gettin >>>>")
      console.log((params['id']));
      this.id = params['id'];
      this.auth_id = params['id'];
      this._httpServices.getAuthor((params['id']))
        .subscribe(data =>{
          this.gotAuthor=data
          this.allQuotes = this.gotAuthor.quotes;
          console.log(this.gotAuthor)
          console.log(data)
          console.log(this.allQuotes)
        })
    });


  }

  updateAuthor(){
    this._route.params.subscribe((params:Params) => {
      console.log("Gettin >>>>")
      console.log((params['id']));
      this._httpServices.getAuthor((params['id']))
        .subscribe(data =>{
          this.gotAuthor=data
          console.log(this.gotAuthor)
          
        })
    }); 

  }
  onVoteUp(i:string, quote_id: string){
    this.allQuotes[i].vote +=1
    console.log(">>>> ", this.auth_id, quote_id, this.allQuotes[i].vote);
    this._httpServices.updateAuthorQuote(this.auth_id, quote_id, this.allQuotes[i].vote)
      .subscribe(data => {
        console.log(data)
      })
  }
  onVoteDown(id:string){
    this.allQuotes[id].vote -=1
    this.updateAuthor()
  }

  deleteQuote(id:any){
    console.log("deleting quote", id);
    this.allQuotes.splice(this.allQuotes[id], 1);
    this.updateAuthor()
  }

}
