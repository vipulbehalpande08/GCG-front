import { Component, OnInit, Injectable } from '@angular/core';
import { FooterService } from '../../service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  constructor( public footer: FooterService) { }

  ngOnInit() {
  }

}
