import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://just-fight.herokuapp.com/';
  
  constructor() { }
}