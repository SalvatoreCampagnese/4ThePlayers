import { Injectable } from "@angular/core";
/*
  Generated class for the GlobalProvider provider.
*/
@Injectable()
export class GlobalEnv {
  public baseUri: string = "https://for-the-players.herokuapp.com";
  public notificationsCounter = null;
  public isLoading: boolean = false;
}
