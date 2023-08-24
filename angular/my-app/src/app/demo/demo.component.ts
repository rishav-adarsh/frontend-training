import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  demoData:string = "demo data";
  
  showAlert() {
    alert("Welcome to Angular :)");
    this.demoData = "updated data";
  }
}
