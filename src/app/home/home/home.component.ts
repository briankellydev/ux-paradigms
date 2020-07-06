import { Component, OnInit } from '@angular/core';
import { NAVIGATION } from '../../consts/navigation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navigation = NAVIGATION;

  constructor() { }

  ngOnInit(): void {
  }

}
