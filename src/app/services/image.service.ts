import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private anixartURL: string = 'http://localhost:3000/anixart';
  private icqURL: string = 'http://localhost:3000/icq';
  private githubURL: string = 'http://localhost:3000/github';
  private mifitURL: string = 'http://localhost:3000/mi-fit';
  private weatherURL: string = 'http://localhost:3000/weather';


  constructor(private http: HttpClient) {

  }

  public getAnime(): Observable<any> {
    return this.http.get(this.anixartURL);
  }

  public getICQ(): Observable<any> {
    return this.http.get(this.icqURL);
  }

  public getGithub(): Observable<any> {
    return this.http.get(this.githubURL);
  }

  public getMiFit(): Observable<any> {
    return this.http.get(this.mifitURL);
  }

  public getWeather(): Observable<any> {
    return this.http.get(this.weatherURL);
  }
}
