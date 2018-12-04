import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LogoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logoff',
  templateUrl: 'logoff.html',
})
export class LogoffPage {

  constructor(
    public navCtrl: NavController,
    public Angularfireauth:AngularFireAuth, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.Angularfireauth.auth.signOut()
      .then(()=>{
        
      })
      .catch((error:any) =>{

      });
  }

}
