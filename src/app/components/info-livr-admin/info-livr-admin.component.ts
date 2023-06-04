import { Component, Input } from '@angular/core'
import {Livreurs} from "../../livreurs";
import {LivreurService} from "../../livreur.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'info-livr-admin',
  templateUrl: 'info-livr-admin.component.html',
  styleUrls: ['info-livr-admin.component.css'],
})
export class InfoLivrAdmin {
  livreurs: Livreurs[]
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
  constructor(private livreurService:LivreurService,private router:Router, private auth:AuthService) {}

  ngOnInit(){
    this.getEntities()
  }

  getEntities(){
    this.livreurService.getLivreurs().subscribe({
      next:response=>{
        this.livreurs = response
      },
      error:error=>console.log(error)
    })
  }

  onClickDelete(id){
    this.livreurService.deleteLivreur(id).subscribe({
      next:response=>{
        console.log(response)
        this.getEntities()
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error=>console.log(error),
    })

  }

  onClickUpdate(id){
    this.auth.livreurIdEdit = id
    this.router.navigate(['','/modifier_profil1'])
  }
}
