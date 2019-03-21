import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  editAuthorid:String;
  constructor(private _http: HttpClient) { }


addAuthor(newAuthor){
  return this._http.post('/api/authors',newAuthor)
}

getAllAuthors(){
  return this._http.get('/api/authors')
}

updateAuthor(data:any,id:string){
  return this._http.put('/api/authors/'+id,data)
}

deleteAuthor(id){
  return this._http.delete('/api/authors/'+id)
}
getAuthor(id){
  return this._http.get('/api/authors/'+id)
}

}
