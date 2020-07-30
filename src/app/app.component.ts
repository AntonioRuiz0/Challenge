import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge';
  username = 'Antonio Ruiz';
  

  onpress() {
   var title = (<HTMLInputElement>document.getElementById('blogtitle')).value;    
  console.log(title);
  document.getElementById('titleblog').innerHTML = title;

  var content = (<HTMLInputElement>document.getElementById('contentblog')).value;
  console.log(content);
  document.getElementById('blogcontent').innerHTML = content;

  
  }
}
