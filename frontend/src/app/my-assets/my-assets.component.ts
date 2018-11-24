import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Asset } from '../assets';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.css']
})
export class MyAssetsComponent implements OnInit {
  
  private asset : Asset;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getAssets().subscribe(data => this.asset = JSON.parse(data[0]));
  }

}
