import { Component, OnInit } from '@angular/core';
import { LINKS } from './link-list'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links = LINKS;

  constructor() { }

  ngOnInit() {
  }

  goToLink(url){
    window.open(url);
  }

}
