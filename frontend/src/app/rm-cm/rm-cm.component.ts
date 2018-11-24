import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

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

  ngOnInit() {
    this.backend.getAllCustomers().subscribe(data => {

      data.forEach((customer) => {
        this.customers.push(JSON.parse(customer.toString()));
      });

    });
  }

  selectClient(client : Customer)
  {
    // Populate client info fields with client details.
    alert("Selected");
    this.currentCustomer = client;

  }
}
