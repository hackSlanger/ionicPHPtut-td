import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SubmitArticlePage } from '../submit-article/submit-article';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public articles:any=[];
  constructor(public navCtrl: NavController,public http:Http) {
    this.http.get('http://localhost/td/show.php')
      .subscribe((res)=>{
        this.articles=res.json();
        console.log(this.articles);
      });
  }

  openSubmit(){
    this.navCtrl.push(SubmitArticlePage);
  }



}
