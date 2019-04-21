import { Injectable } from '@angular/core';
import { ApiCallService } from 'src/app/services/api/apicall.service';
import { BehaviorSubject } from 'rxjs';
import { apiUrl } from 'src/app/configuration/api';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private api: ApiCallService) {
  }
  onModel = new BehaviorSubject<any>(null);
  postName = new BehaviorSubject<any>(null);

  getProducts() {
    return this.api.getData(this.api.products);
  }

  getProductsOff() {
    return this.api.getData(this.api.Offers);
  }
  openModel(status) {
    this.onModel.next(status);
  }
  getModel() {
    return this.onModel;
  }

  registerUser(data) {
    return this.api.postData(this.api.usersUrl, data);
  }
  getUser(data) {
    return this.api.postData(this.api.usersUrl + '/login', data);
  }

  userName(user) {
    this.postName.next(user);
  }
  getUserName() {
    return this.postName
  }
}
