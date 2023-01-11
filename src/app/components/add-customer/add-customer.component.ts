import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:Customer={
     
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
  }

  constructor(private cs:CustomerService) { }

  ngOnInit(): void {
  }

  addNewCustomer(){
    this.cs.addCustomer(this.customer)
    .then(()=>{
      console.log('customer was added');
      this.reset()
      
    })
    .catch((err)=>console.log(err)
    )


  }
  reset(){
    this.customer={
      firstName:'',
      lastName:'',
      email:'',
      phone:''
    }

  }

}
