import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Posts } from '../../model/posts';
import { PostsService } from '../../services/posts.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {



  public posts: Posts[]= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public postService: PostsService) {
   
    this.postService.getPosts()
    .subscribe(response => {
      console.log(response);
      this.posts=response; 
    })

  }

  detalheNoticia(id: string){
    this.navCtrl.push('PostPage',{'id': id});
  }

}
