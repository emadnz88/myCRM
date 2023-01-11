import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  

  constructor(private us : UsersService,private router:Router) { }

  ngOnInit(): void {
   

  }

  logout(){
    this.us
    .logout()
    .then(()=>{
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('isLoggedIn');
      this.router.navigateByUrl('login');
    })
    .catch((err)=>console.log(err)
    )
  }

}
