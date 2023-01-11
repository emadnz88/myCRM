import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={email: '',password: ''};

  constructor(private us:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  login() 
  {this.us
    .login(this.user)
    .then((data) => {
      console.log(data);
      
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('email', data.user.email as string);
    this.router.navigateByUrl('home');
  })
  .catch((err) =>{ console.log(err)
    alert('wrong password or email');
    this.reset();
    


  })
  
}
reset(){
  this.user={
    email:"",
    password:''

  }
}

  loginWithGoogle(){
    this.us.loginGoogle()
    .then((data) => {
      console.log(data);
      
      sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('email', data.user.email as string);
    this.router.navigateByUrl('home');
  })
  .catch((err) => console.log(err));}

 

}

 

