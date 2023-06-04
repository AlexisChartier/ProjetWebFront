import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {AuthService} from "../../auth.service";
import {ClientService} from "../../client.service";
import {Clients} from "../../clients";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html',
  styleUrls: ['profile-page.component.css'],
})
export class ProfilePage {
  constructor(private title: Title, private meta: Meta, private auth:AuthService, private clientService:ClientService) {

    this.title.setTitle('ProfilePage - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ProfilePage - DeliveryGo',
      },
    ])
  }

  idUser:number = this.auth.currentUserId;
  user: Clients;
  ngOnInit(){
    this.clientService.getClientById(this.idUser).subscribe({
      next:response => {
        this.user = response
      },
      error:error => console.log(error)
    })
  }

}
