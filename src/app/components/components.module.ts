import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinksAdmin } from './navigation-links-admin/navigation-links-admin.component'
import { ItemRead1 } from './item-read1/item-read1.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { ItemRead } from './item-read/item-read.component'
import { Header } from './header/header.component'
import { HeaderAdmin } from './header-admin/header-admin.component'
import { RegisterBtn } from './register-btn/register-btn.component'
import { LoginBtn } from './login-btn/login-btn.component'
import { Footer } from './footer/footer.component'
import { RestaurantBlock } from './restaurant-block/restaurant-block.component'
import { LoginForm } from './login-form/login-form.component'
import { DetailCommande } from './detail-commande/detail-commande.component'
import { ContenuCommande } from './contenu-commande/contenu-commande.component'
import { EditLivreur1 } from './edit-livreur1/edit-livreur1.component'
import { EditMagasin1 } from './edit-magasin1/edit-magasin1.component'
import { EditProduit1 } from './edit-produit1/edit-produit1.component'
import { EditProfil1 } from './edit-profil1/edit-profil1.component'
import { InfosCommande } from './infos-commande/infos-commande.component'
import { InfosCommandeActive } from './infos-commande-active/infos-commande-active.component'
import { LoginSend } from './login-send/login-send.component'
import { CommandeDispo } from './commande-dispo/commande-dispo.component'
import { InfosMagasin } from './infos-magasin/infos-magasin.component'
import { InfosProduit } from './infos-produit/infos-produit.component'
import { InfoLivraisonEnCours } from './info-livraison-en-cours/info-livraison-en-cours.component'
import { FormAddClient } from './form-add-client/form-add-client.component'
import { FormAddVendeur } from './form-add-vendeur/form-add-vendeur.component'
import { InfoMagAdmin } from './info-mag-admin/info-mag-admin.component'
import { OrderBtn } from './order-btn/order-btn.component'
import { FormAddLivreur } from './form-add-livreur/form-add-livreur.component'
import { FormAddProduit } from './form-add-produit/form-add-produit.component'
import { FormAddMagasin } from './form-add-magasin/form-add-magasin.component'
import { EditProfilBtn } from './edit-profil-btn/edit-profil-btn.component'
import { OrderHistoryBtn } from './order-history-btn/order-history-btn.component'
import { OrderBtn2 } from './order-btn2/order-btn2.component'
import { InfosCliAdmin } from './infos-cli-admin/infos-cli-admin.component'
import { InfoLivrAdmin } from './info-livr-admin/info-livr-admin.component'
import { InfoVendAdmin } from './info-vend-admin/info-vend-admin.component'
import { InfosProduitPanier } from './infos-produit-panier/infos-produit-panier.component'
import { InfosCommandePanier } from './infos-commande-panier/infos-commande-panier.component'
import { RegisterForm } from './register-form/register-form.component'
import { ClientRegisterBtn } from './client-register-btn/client-register-btn.component'
import { LivreurRegisterBtn } from './livreur-register-btn/livreur-register-btn.component'
import { InfosProdVendeur } from './infos-prod-vendeur/infos-prod-vendeur.component'
import { AddProdVForm } from './add-prod--form/add-prod--form.component'
import { AddProdBtnVend } from './add-prod-btn-vend/add-prod-btn-vend.component'
import { BlockInfoMA } from './block-info-ma/block-info-ma.component'
import { BlockInfoCA } from './block-info-ca/block-info-ca.component'
import { BlockInfoLA } from './block-info-la/block-info-la.component'
import { BlockInfoVA } from './block-info-va/block-info-va.component'
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderLivreur} from "./header-livreur/header-livreur.component";
import {NavigationLinksLivreur} from "./navigation-links-livreur/navigation-links-livreur.component";
import {NavigationLinksVendeur} from "./navigation-links-vendeur/navigation-links-vendeur.component";
import {HeaderVendeur} from "./header-vendeur/header-vendeur.component";
import {EditVendeur} from "../pages/edit-vendeur/edit-vendeur.component";
import {EditVendeur1} from "./edit-vendeur1/edit-vendeur1.component";

@NgModule({
  declarations: [
    NavigationLinksAdmin,
    EditVendeur1,
    ItemRead1,
    NavigationLinks,
    ItemRead,
    Header,
    HeaderAdmin,
    RegisterBtn,
    LoginBtn,
    Footer,
    RestaurantBlock,
    LoginForm,
    HeaderLivreur,
    HeaderVendeur,
    NavigationLinksLivreur,
    NavigationLinksVendeur,
    DetailCommande,
    ContenuCommande,
    EditLivreur1,
    EditMagasin1,
    EditProduit1,
    EditProfil1,
    InfosCommande,
    InfosCommandeActive,
    LoginSend,
    CommandeDispo,
    InfosMagasin,
    InfosProduit,
    InfoLivraisonEnCours,
    FormAddClient,
    FormAddVendeur,
    InfoMagAdmin,
    OrderBtn,
    FormAddLivreur,
    FormAddProduit,
    FormAddMagasin,
    EditProfilBtn,
    OrderHistoryBtn,
    OrderBtn2,
    InfosCliAdmin,
    InfoLivrAdmin,
    InfoVendAdmin,
    InfosProduitPanier,
    InfosCommandePanier,
    RegisterForm,
    ClientRegisterBtn,
    LivreurRegisterBtn,
    InfosProdVendeur,
    AddProdVForm,
    AddProdBtnVend,
    BlockInfoMA,
    BlockInfoCA,
    BlockInfoLA,
    BlockInfoVA,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    NavigationLinksAdmin,
    ItemRead1,
    NavigationLinks,
    ItemRead,
    Header,
    HeaderAdmin,
    RegisterBtn,
    LoginBtn,
    Footer,
    RestaurantBlock,
    LoginForm,
    DetailCommande,
    ContenuCommande,
    EditLivreur1,
    EditMagasin1,
    EditProduit1,
    EditProfil1,
    InfosCommande,
    InfosCommandeActive,
    LoginSend,
    CommandeDispo,
    InfosMagasin,
    InfosProduit,
    InfoLivraisonEnCours,
    FormAddClient,
    FormAddVendeur,
    InfoMagAdmin,
    OrderBtn,
    FormAddLivreur,
    FormAddProduit,
    FormAddMagasin,
    EditProfilBtn,
    OrderHistoryBtn,
    OrderBtn2,
    InfosCliAdmin,
    InfoLivrAdmin,
    InfoVendAdmin,
    InfosProduitPanier,
    InfosCommandePanier,
    RegisterForm,
    ClientRegisterBtn,
    LivreurRegisterBtn,
    InfosProdVendeur,
    AddProdVForm,
    AddProdBtnVend,
    BlockInfoMA,
    BlockInfoCA,
    BlockInfoLA,
    BlockInfoVA,
    HeaderLivreur,
    HeaderVendeur,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
