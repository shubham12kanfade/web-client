import { Injectable } from '@angular/core';
import { ApiCallService } from 'src/app/services/api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiCallService) { }

  verifyMobileNo(MobNo) {
    return this.api.getData(this.api.verifyMobileNoUrl(MobNo), false);
  }
  sendOTP(MobNo) {
    return this.api.getData(this.api.sendOTPUrl(MobNo), false);
  }
  verifyOTP(data) {
    return this.api.postData(this.api.verifyOTPUrl, data, false);
  }
}
