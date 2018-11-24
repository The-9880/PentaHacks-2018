import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-rm-ca',
  templateUrl: './rm-ca.component.html',
  styleUrls: ['./rm-ca.component.css']
})
export class RMCAComponent implements OnInit {

  private customers : Customer[] = [];
  private currentCustomer : Customer;

  constructor(private backend : BackendService) { }

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