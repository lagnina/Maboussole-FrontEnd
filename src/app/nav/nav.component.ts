import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(buttonType) {
    
    if(buttonType === "login"){
      this.router.navigateByUrl('/Login');
    }
    if(buttonType === "register"){
      this.router.navigateByUrl('/Register');
    }


    
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
