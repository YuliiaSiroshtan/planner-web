import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'pl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userProfile: any;
  isEdit: boolean;

  get user$(){
    return this._accountService.user$;
  }

  constructor(
    private _accountService: AccountService
    ) { }

  ngOnInit() {
    this._accountService.getUser();
  }


  toggleEditUser() {
    this.isEdit = !this.isEdit;
  }
}
