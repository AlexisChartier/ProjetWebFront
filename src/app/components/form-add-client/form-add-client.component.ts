import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {Livreurs} from "../../livreurs";
import {Clients} from "../../clients";
import {ClientService} from "../../client.service";

@Component({
  selector: 'form-add-client',
  templateUrl: 'form-add-client.component.html',
  styleUrls: ['form-add-client.component.css'],
})
export class FormAddClient {
  @Input()
  textinput_placeholder: string = 'Nom'
  @Input()
  textinput_placeholder1: string = 'Prénom'
  @Input()
  textinput_placeholder2: string = 'Mot de passe'
  @Input()
  textinput_placeholder3: string = 'Confirmer mot de passe'
  @Input()
  textinput_placeholder4: string = 'Adresse'
  @Input()
  textinput_placeholder5: string = 'Email'
  @Input()
  text: string = 'Ajouter client'


  addClientForm=new FormGroup({
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    adresse:new FormControl('', Validators.required),
    motdepasse:new FormControl('', Validators.required),
    confmdp:new FormControl('', Validators.required),

  });
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router,private formBuilder: FormBuilder, private clientService:ClientService) {
  }

  onClick(){
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.addClientForm.invalid) {
      return;
    }
    if(this.addClientForm.value.motdepasse !== this.addClientForm.value.confmdp){
      return;
    }

    const user:Clients = {
      client_id:null ,
      email: this.addClientForm.value.email,
      mot_de_passe: this.addClientForm.value.motdepasse,
      nom_client:this.addClientForm.value.nom,
      prenom_client:this.addClientForm.value.prenom,
      adresse_client:this.addClientForm.value.adresse,
      role: "client"
    }
    console.log(user)

    this.clientService.addClient(user).subscribe({
      next:response => {
        console.log(response)
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error => console.log(error)
    });
  }
  }

