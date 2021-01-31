import { Component, OnInit } from '@angular/core';
import { UserInfo } from "src/app/shared/models/user-info.model";
import { UserDataService } from "src/app/core/services/user-data.service";
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProfile: UserInfo;
  //userInfo:
  isEdit: boolean;

  constructor(private _authenticationService: AuthenticationService,
    private _userDataService: UserDataService,
    private _accountService: AccountService) {
     }

  ngOnInit() {
    this.userProfile = new UserInfo();
    // this._accountService.getUser();
  }


  toggleEditUser() {
    this.isEdit = !this.isEdit;
  }

}
