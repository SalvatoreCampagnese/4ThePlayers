import { Injectable } from "@angular/core";
/*
  Generated class for the GlobalProvider provider.
*/
@Injectable()
export class GlobalEnv {
  public baseUri: string = "https://for-the-players.herokuapp.com";
  //public baseUri: string = "http://localhost:3000";
  public notificationsCounter = null;
  public ticketUpdates = null;
  public isLoading: boolean = false;
}
