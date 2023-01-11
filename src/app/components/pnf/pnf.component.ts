import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pnf',
  templateUrl: './pnf.component.html',
  styleUrls: ['./pnf.component.css']
})
export class PnfComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  backToHome():void{
    this.router.navigateByUrl('home')
  }

}
