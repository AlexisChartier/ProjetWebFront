import { Component, Input } from '@angular/core'
import {ClientService} from "../../client.service";
import {Clients} from "../../clients";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'infos-cli-admin',
  templateUrl: 'infos-cli-admin.component.html',
  styleUrls: ['infos-cli-admin.component.css'],
})
export class InfosCliAdmin {
  clients:Clients[]

  @Input()
  text: string = 'Editer'
  @Input()
  text1: string = 'Supprimer'
  @Input()
  text2: string = 'Lorem ipsum dolor sit amet'
  @Input()
  image_src: string = '/assets/nicepng_user-icon-png_1280406-200h.png'
  @Input()
  image_alt: string = 'profile'
  @Input()
  text3: string = 'Jon Doe'
  constructor(private clientService:ClientService, private router:Router, private auth:AuthService) {}

  ngOnInit(){
    this.getEntities()
  }

  getEntities(){
    this.clientService.getClients().subscribe({
      next:response=>{
        this.clients = response
      },
      error:error=>console.log(error)
    })
  }

  onClickDelete(id){
    this.clientService.deleteClient(id).subscribe({
      next:response=>{
        console.log(response)
        this.getEntities()
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error=>console.log(error),
    })

  }

  onClickUpdate(id){
    this.auth.clientIdEdit = id
    this.router.navigate(['','/modifier_profil1'])
  }
}
