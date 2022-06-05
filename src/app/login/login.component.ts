// import { BasicAuthenticationService } from './../service/basic-authentication.service';
// import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// selector: 'app-root',
  
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = ''
  invalidLogin = false
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
  //  roles: string[] = [];
  

  constructor(private router: Router,private authService:
     AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = !!this.tokenStorage.getToken();
     // this.roles = this.tokenStorage.getUser().roles;
    }
  }
 
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['todo'])
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }



  // handleJWTAuthLogin() {
  //   this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
  //       .subscribe(
  //         data => {
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false      
  //         },
  //         error => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  // }

}
