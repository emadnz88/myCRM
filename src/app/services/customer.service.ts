import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersRef=collection(this.firestore,'customers')

  constructor(private firestore:Firestore) { }

  //add new customer
  addCustomer(customer:Customer):Promise<any>{
    return addDoc(this.customersRef,customer)as Promise<any>
  }

  //get all customers from data-base

  getCustomers():Observable<Customer[]>{
    return collectionData(this.customersRef,{idField:"id"}) as Observable<Customer[]>
    
  }
  deleteCustomer(customer:Customer):Promise<void>{
    let custumerRef = doc(this.firestore,`customers/${customer.id}`);
    return deleteDoc(custumerRef) as Promise<void>
  }

  updateCustomer(newCustomer:Customer):Promise<any>{
    let custumerRef = doc(this.firestore,`customers/${newCustomer.id}`);
    return setDoc(custumerRef,newCustomer) as Promise<any>
  }

  getCustomerById(id:string):Observable<Customer>{
    let custumerRef=doc(this.firestore,`customers/${id}`);
    return docData(custumerRef,{idField:"id"}) as Observable<Customer>

  }

}
