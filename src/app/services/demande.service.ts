import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  upload(user:FormData){
    return this.http.post(AUTH_API + 'demande/createDemande',user)

  }
  GetChambreByCode = (type:any): Observable<any[]> => {
    return this.http.get<any[]>(AUTH_API + "demande/getListDemande/02/12222/"+type);
  };
  GetTitreFormation = (): Observable<any[]> => {
    return this.http.get<any[]>(AUTH_API + "demande/getTitreFormation");
  };
  GetTypeFormation = (codTit:any): Observable<any[]> => {
    return this.http.get<any[]>(AUTH_API + "demande/getTypeFormation/"+codTit);
  };

  GetThemeFormation = (codTit:any,codeTyp:any): Observable<any[]> => {
    return this.http.get<any[]>(AUTH_API + "demande/getThemeFormation/"+codTit+"/"+codeTyp);
  };
}
