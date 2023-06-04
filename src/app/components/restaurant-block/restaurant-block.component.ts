import { Component, Input } from '@angular/core'
import {MagasinService} from "../../magasin.service";
import {Magasins} from "../../magasins";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'restaurant-block',
  templateUrl: 'restaurant-block.component.html',
  styleUrls: ['restaurant-block.component.css'],
})
export class RestaurantBlock {

  magasins:Magasins[]
  @Input()
  text: string = 'New York, NY'
  @Input()
  Subtract_src: string = '/assets/external/subtract1671-ko8u.svg'
  @Input()
  Subtract_alt: string = 'Subtract1671'
  constructor(private magasinService:MagasinService, private auth:AuthService, private router:Router) {}

  ngOnInit(){
    this.magasinService.getMagasins().subscribe({
        next:response=>{
          this.magasins = response;
        },
        error:error=>console.log(error),
    }
    )
  }

  onClick(id){
    this.auth.setMagasinDetailId(id);
    this.router.navigate(['/','magasin-page'])
  }
}
