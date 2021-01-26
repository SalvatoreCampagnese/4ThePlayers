import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  IAPProduct,
  InAppPurchase2,
} from "@ionic-native/in-app-purchase-2/ngx";
import { AlertController, Platform } from "@ionic/angular";

const STARTER_PACK = "tpcoins_starter_pack";

@Component({
  selector: "app-buy-credits",
  templateUrl: "./buy-credits.page.html",
  styleUrls: ["./buy-credits.page.scss"],
})
export class BuyCreditsPage implements OnInit {
  gems = 0;
  isPro = false;
  products: IAPProduct[] = [];

  constructor(
    private plt: Platform,
    private store: InAppPurchase2,
    private alertController: AlertController,
    private ref: ChangeDetectorRef
  ) {
    this.plt.ready().then(() => {
      // Only for debugging!
      this.store.verbosity = this.store.DEBUG;

      this.registerProducts();
      this.setupListeners();

      // Get the real product information
      this.store.ready(() => {
        window.alert(JSON.stringify(this.store.products));
        this.products = this.store.products;
        this.ref.detectChanges();
      });
    });
  }
  ngOnInit() {}

  registerProducts() {
    this.store.register({
      id: STARTER_PACK,
      type: this.store.NON_CONSUMABLE,
    });

    this.store.refresh();
  }

  setupListeners() {
    // General query to all products
    this.store.when("product", "APPROVED", (p: IAPProduct) => {
      // Handle the product deliverable
      if (p.id === STARTER_PACK) {
        this.isPro = true;
      }
      this.ref.detectChanges();

      return p.verify();
    });

    // Specific query for one ID
    this.store.when(STARTER_PACK, "OWNED", (p: IAPProduct) => {
      this.isPro = true;
    });
  }

  purchase(product: IAPProduct) {
    this.store.order(product).then(
      (p) => {
        // Purchase in progress!
        window.alert("ciao");
        this.presentAlert("ok", "ok");
      },
      (e) => {
        this.presentAlert("Failed", `Failed to purchase: ${e}`);
      }
    );
  }

  // To comply with AppStore rules
  restore() {
    this.store.refresh();
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
