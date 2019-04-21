import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiCallService } from 'src/app/services/api/apicall.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<any>(null);
  selectedSchool = new BehaviorSubject<any>(null);
  interval: any;
  oldUser: any;

  addingUser = new BehaviorSubject<{
    status: boolean,
    add: boolean,
    user: any
  }>({
    status: false,
    add: true,
    user: null
  });

  constructor(
    private api: ApiCallService,
    private router: Router,
  ) {
    const userDetails = localStorage.getItem('userInformation');
    if (userDetails) {
      this.currentUser.next(JSON.parse(userDetails));
    }
  /*   const school = localStorage.getItem('school');

    if (school !== 'undefined' && school !== null) {
      this.selectedSchool.next(JSON.parse(school));
    } */
    const token = localStorage.getItem('token');
    if (token) {
      this.api.setHeaderToken(token);
    }
  }

  saveCurrentUserInformation(information: any) {
    return new Promise((resolve, reject) => {
      if (information) {
        const info = information.user;
        localStorage.removeItem('token');
        localStorage.setItem('token', information.token);
        this.api.setHeaderToken(information.token);
        localStorage.removeItem('userInformation');
        localStorage.setItem('userInformation', JSON.stringify(info));
        this.currentUser.next(info);
        resolve(true);
      } else {
        this.currentUser.next(null);
        reject(false);
      }
    });
  }
  // refresh user token
  /* checkUserToken(user) {
    this.oldUser = user;
    console.log('checkUserToken :', user);
    if (this.oldUser) {
      this.interval = setInterval(() => {
        const data = {
          _id: this.oldUser._id
        };
        this.renewToken(data).then(res => {
          const newUser = res.user;
          if (this.oldUser) {
            const equal = _.isEqual(this.oldUser, newUser);
            if (!equal) {
              console.log('no match');
              this.oldUser = res.user;
              this.saveCurrentUserInformation(res).then(data => {
                this.router.navigate(['dashboard']);
              });
            }
          }
          console.log('res', res);
        }).catch(err => {
          console.log('err', err);
        });
      }, 15000);
    }
  } */
  clearUserTokenInterval() {
    clearInterval(this.interval);
    this.oldUser = null;
  }
  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(user) {
    this.currentUser.next(user);
  }
  /*  getSelectedSchool() {
     return this.selectedSchool;
   }
   setSelectedSchool(school) {
     this.selectedSchool.next(school);
     localStorage.setItem('school', JSON.stringify(school));
   } */
  logOutUser() {
    console.log('Logout User.');
    this.clearUserTokenInterval();
    // localStorage.removeItem('school');
    localStorage.removeItem('token');
    localStorage.removeItem('userInformation');
    this.currentUser.next(null);
    this.selectedSchool.next(null);
    this.router.navigate(['login']);
  }
  /*  renewToken(data) {
     return this.api.postData(this.api.userRenewTokenUrl, data);
   }
  */
  getUserList() {
    return this.api.getData(this.api.usersUrl);
  }

  setAddingUser(status: boolean) {
    const user = {
      status: status,
      add: true,
      user: null
    };
    this.addingUser.next(user);
  }

  getAddingUser() {
    return this.addingUser;
  }

  updateUser(data, id) {
    return this.api.putData(this.api.updateUserUrl(id), data);
  }

  addUser(data) {
    console.log('addUser :', data);
    return this.api.postData(this.api.usersUrl, data);
  }

  setEditingUser(status: boolean, userId: any) {
    const user = {
      status: status,
      add: false,
      user: userId
    };
    this.addingUser.next(user);
  }

  deleteUser(id) {
    return this.api.deleteData(this.api.deleteUserUrl(id));
  }

  checkMobileExist(mobile: number) {
    return this.api.getData(this.api.checkMobileExistUrl(mobile));
  }
}
