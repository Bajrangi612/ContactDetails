import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDirectivesTask';

  name:String;
  email:String;
  address:String
  userData:Array<any> =[];

  saveData(){
    this.userData.push({
      'name':this.name,
      'email': this.email,
      'address':this.address
    });
    console.log(this.userData);
    
  }
  deleteData(i){
    this.userData.splice(i,1);
  }
}
