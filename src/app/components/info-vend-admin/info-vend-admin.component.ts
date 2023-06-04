import { Component, Input } from '@angular/core'
import {Vendeurs} from "../../vendeurs";
import {VendeurService} from "../../vendeur.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'info-vend-admin',
  templateUrl: 'info-vend-admin.component.html',
  styleUrls: ['info-vend-admin.component.css'],
})
export class InfoVendAdmin {
  vendeurs:Vendeurs[]
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
  constructor(private vendeurService: VendeurService, private router:Router, private auth:AuthService) {}

  ngOnInit(){
    this.getEntities()
  }

  getEntities(){
    this.vendeurService.getVendeurs().subscribe({
      next:response=>{
        this.vendeurs = response
      },
      error:error=>console.log(error)
    })
  }

  onClickDelete(id){
    this.vendeurService.deleteVendeur(id).subscribe({
      next:response=>{
        console.log(response)
        this.getEntities()
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error=>console.log(error),
    })

  }

  onClickUpdate(id){
    this.auth.vendeurIdEdit = id
    this.router.navigate(['','/modifier_profil1'])
  }
}
