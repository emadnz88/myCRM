import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  email!:string;
  customers:Customer[]=[];
  firstName:string='';
  lastName:string='';
  phone:string='';


  constructor(private cs:CustomerService,private modal:NgbModal) { }

  ngOnInit(): void {
    this.cs.getCustomers()
    .subscribe({
      next:(customersData:Customer[])=>{
        this.customers=customersData
      }
    })
     this.email=sessionStorage.getItem('email') as string;
  }
  deleteCustomer(customer:Customer){
    if(confirm('are you sure delete customer')){
      this.cs.deleteCustomer(customer)
      .then(()=>{
        console.log('customer was deleted');
        
      }).catch((err)=>console.log(err)
      )
    }

  }

  updateCustomer(customer:Customer){
    let modalRef = this.modal.open(EditCustomerComponent,{
      size:'lg',
      centered:true,
      windowClass:'dark-modal',


    })
    modalRef.componentInstance.id=customer.id

  }

}
