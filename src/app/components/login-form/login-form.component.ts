import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css'],
})
export class LoginForm {
  @Input()
  textinput_placeholder: string = 'Login'

  @Input()
  textinput_placeholder1: string = 'Password'

  @Input()
  button: string = 'Connexion'


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  // Raccourci pour accéder facilement aux contrôles du formulaire
  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.value.email;
    console.log(username);
    const password = this.loginForm.value.password;
    console.log(password);
    this.authService.logIn(username, password);
    console.log(this.authService.isLoggedIn())
    console.log(this.authService.isClient())
  }
}
