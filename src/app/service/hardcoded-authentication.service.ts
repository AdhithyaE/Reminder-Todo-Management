import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
setData(data){
  localStorage.setItem('total',data.packageAndDeliveryCharge+data.processingCharge)
  localStorage.setItem('dateOfDelivery',data.dateOfDelivery)
  localStorage.setItem('requestId',data.requestId)
  localStorage.setItem('packageAndDeliveryCharge',data.packageAndDeliveryCharge)
  localStorage.setItem('processingCharge',data.processingCharge)
}
// setRequest(name){
//   //const request=JSON.stringify(todo)
//   localStorage.setItem('username',name)
// }
// getUserName(){
//   return localStorage.getItem('username')
// }
getRequestId(){
  return localStorage.getItem('requestId')
}
getTotal(){
  return localStorage.getItem('total')
}
getDateOfDelivery(){
  return localStorage.getItem('dateOfDelivery')
}
getPackageAndDeliveryCharge(){
  return localStorage.getItem('packageAndDeliveryCharge')
}
getProcessingCharge(){
  return localStorage.getItem('processingCharge')
}
  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="in28minutes" && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
