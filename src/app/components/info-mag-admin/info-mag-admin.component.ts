import { Component, Input } from '@angular/core'
import {Magasins} from "../../magasins";
import {MagasinService} from "../../magasin.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'info-mag-admin',
  templateUrl: 'info-mag-admin.component.html',
  styleUrls: ['info-mag-admin.component.css'],
})
export class InfoMagAdmin {
  magasins:Magasins[]

  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000'
  @Input()
  image_alt: string = 'image'
  @Input()
  text: string = 'Editer'
  @Input()
  text1: string = 'Supprimer'
  @Input()
  text2: string = 'Restaurant'
  @Input()
  text3: string = 'Nom restaurant'
  @Input()
  text4: string = 'Adresse'
  @Input()
  image_src1: string = '/assets/nicepng_user-icon-png_1280406-200h.png'
  @Input()
  image_alt1: string = 'profile'
  @Input()
  text5: string = 'Nom Vendeur'
  @Input()
  rootClassName: string = ''
  constructor(private magasinService:MagasinService, private router: Router, private auth:AuthService) {}

  ngOnInit(){
    this.getEntities()
  }

  getEntities(){
    this.magasinService.getMagasins().subscribe({
      next:response=>{
        this.magasins = response
      },
      error:error=>console.log(error)
    })
  }

  onClickDelete(id){
    this.magasinService.deleteMagasin(id).subscribe({
      next:response=>{
        console.log(response)
        this.getEntities()
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error=>console.log(error),
    })

  }

  onClickUpdate(id){
    this.auth.magasinIdEdit = id
    this.router.navigate(['','/edit-magasin'])
  }
}
