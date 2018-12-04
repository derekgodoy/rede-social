import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user : any;

  @ViewChild('usuario') email; // campo do formulário
  @ViewChild('senha') password; // campo do formulário

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController, // exibe mensagem
    public firebaseauth: AngularFireAuth, // Autenticação Firebase
    public storageService: StorageService // Armazena usuário em storage
  ) {
  
  }

  login(){
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(()=>{
        this.mensagem("Login efetuado com sucesso!");//Login efetuado com sucesso
      })
      .catch((erro:any)=>{
        this.mensagem("Login incorreto!");//login incorreto
      })
  }

  cadastro(){
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(()=>{
        this.mensagem("Cadastro efetuado com sucesso!");//Login efetuado com sucesso
      })
      .catch((erro:any)=>{
        this.mensagem("Dados incorretos!");//login incorreto
      })
  }


  mensagem(texto:string){
    let msg = this.toastCtrl.create({
      duration:1000,
      position: 'botton'
    })
    msg.setMessage(texto);
    msg.present();
  }



}
