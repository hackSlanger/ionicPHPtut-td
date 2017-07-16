import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ Http,Headers,RequestOptions } from '@angular/http';
/**
 * Generated class for the SubmitArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-submit-article',
  templateUrl: 'submit-article.html',
})
export class SubmitArticlePage {

  heading:string;
  detail:string;
  constructor(public navCtrl: NavController,public http:Http ,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitArticlePage');
  }
  submitArticle(){
    // this.http.get('http://localhost/td/save.php?heading='+this.heading+'&detail='+this.detail)
    //   .subscribe((res)=>{
    //     alert("sent");
    //   });
      let body:string = "heading="+this.heading+"&detail="+this.detail,
    type    :string = "application/x-www-form-urlencoded; charset=UTF-8",
    headers :any    = new Headers({'Content-Type':type}),
    options :any    = new RequestOptions({headers:headers}),
    url     :any    = 'http://localhost/td/save.php';
    this.http.post(url,body,options)
    .subscribe((res)=>{
      if(res.status === 200){
      console.log("Submitted");
      } else{
        alert("Failed ..!!");
      }
    });
  }
}
