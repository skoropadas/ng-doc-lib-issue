import { Component } from '@angular/core';
import {MylibComponent} from "mylib";

@Component({
  selector: 'app-my-demo',
  standalone: true,
  imports: [MylibComponent],
  templateUrl: './my-demo.component.html',
  styleUrl: './my-demo.component.css'
})
export class MyDemoComponent {

}
