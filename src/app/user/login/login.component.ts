import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credential = {
    email: '',
    password: ''
  }
  showAlert = false
  alertMsg = "please wait!we are logging you in."
  alertColor = "blue"
  inSubmission = false
  constructor(private auth: AngularFireAuth) { }

  async logIn() {
    this.showAlert = true
    this.alertMsg = "please wait!we are logging you in."
    this.alertColor = "blue"
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credential.email, this.credential.password
      )
    } catch (err) {
      this.inSubmission = false
      this.alertMsg = "something wrong!please try it again."
      this.alertColor = "red"
      return
    }
    this.alertMsg = "You are now logged in."
    this.alertColor = "green"

  }
}
