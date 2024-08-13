import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CryptoCurrency} from "../models/cryptocurrency";



@Injectable({ providedIn: 'root' })


export class CryptocurrencyService {


  constructor(private http: HttpClient) {
  }

  getCryptoByShortname(shortname: string): Observable<CryptoCurrency> {
    return this.http.get<CryptoCurrency>(`https://api.coinbase.com/v2/prices/${shortname}-USD/spot`);
  }

}
