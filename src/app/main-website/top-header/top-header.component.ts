import { Component, OnInit } from '@angular/core';
import { TopNavBarService } from "../../service/top-navbar.service";

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {

  constructor( public nav: TopNavBarService) { }

  ngOnInit() {
  }

}
