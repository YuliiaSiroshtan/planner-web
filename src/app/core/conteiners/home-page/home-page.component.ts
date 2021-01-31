import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../models/user-info.model';
import { AccountService } from '../../services/account.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'pl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userProfile: any;// UserInfo;
  //userInfo:
  isEdit: boolean;

  constructor(
    //private authenticationService: AuthenticationService,
    //private userDataService: UserDataService
    private _userService: UserService,
    private _accountService: AccountService
    ) { }

  ngOnInit() {
    this._accountService.getUser();
    // this._userService.getUserInfo().subscribe(data =>{
    //   console.log(data);
    //   this.userProfile = data[0].data;
    // });
  }


  toggleEditUser() {
    this.isEdit = !this.isEdit;
  }

}
