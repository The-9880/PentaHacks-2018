import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Asset } from '../assets';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-rm-cm',
  templateUrl: './rm-cm.component.html',
  styleUrls: ['./rm-cm.component.css']
})
export class RMCMComponent implements OnInit {

  constructor(private backend: BackendService) { }

  customers: Customer[] = [];
  private currentCustomer: Customer;

  private asset: Asset;

  ngOnInit() {
    this.backend.getAllCustomers().subscribe(data => {

      data.forEach((customer) => {
        this.customers.push(JSON.parse(customer.toString()));
      });

      this.currentCustomer = this.customers[0];

      this.backend.getAssets().subscribe(data => this.asset = JSON.parse(data[0]));
    });
  }

  selectClient(client : Customer)
  {
    // Populate client info fields with client details.
    this.currentCustomer = client;

  }
}
