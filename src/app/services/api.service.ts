import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const API_URL = environment.urlServer;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  host = API_URL;

  private header: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders();
  }

  GetChambre = (): Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/facture/get");
  };

  GetChambreByCode = (): Observable<any[]> => {
    return this.httpClient.get<any[]>(API_URL + "/demande/getListDemandee/02");
  };
}
