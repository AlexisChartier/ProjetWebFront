import { Component, Input } from '@angular/core'
import {MagasinService} from "../../magasin.service";
import {Magasins} from "../../magasins";
import {AuthService} from "../../auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'infos-magasin',
  templateUrl: 'infos-magasin.component.html',
  styleUrls: ['infos-magasin.component.css'],
})
export class InfosMagasin {
  magasin: Magasins;

  @Input()
  text: string = 'Little Lemon'
  @Input()
  Imgpop_src: string = '/assets/external/imgpopi191-0ds-200w.png'
  @Input()
  Imgpop_alt: string = 'ImgpopI191'
  @Input()
  text1: string =
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'
  constructor(private magasinService:MagasinService, private auth:AuthService) {}

  ngOnInit(){

    this.magasinService.getMagasinById(this.auth.getMagasinDetailId()).subscribe({
      next:response=>{
        this.magasin = response
      },
      error:error=>console.log(error)
    })
  }
}
