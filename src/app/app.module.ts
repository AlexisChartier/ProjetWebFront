import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import {HttpClientModule} from "@angular/common/http";
import {ClientService} from "./client.service";
import {LivreurService} from "./livreur.service";
import {VendeurService} from "./vendeur.service";
import {AdminService} from "./admin.service";
import {MagasinService} from "./magasin.service";
import {ProduitService} from "./produit.service";
import {CommandeService} from "./commande.service";
import {ContenuCommandeService} from "./contenu-commande.service";
import {AuthGuard, AuthGuardAdmin, AuthGuardClient, AuthGuardLivreur, AuthGuardVendeur} from "./auth.guard";

const routes = [
  {
    path: 'monitoring-livraison',
    loadChildren: () =>
      import('./pages/monitoring-livraison/monitoring-livraison.module').then(
        (m) => m.MonitoringLivraisonModule
      ),
    canActivate: [AuthGuardLivreur || AuthGuardAdmin]
  },
  {
    path: 'vendeur-page',
    loadChildren: () =>
      import('./pages/vendeur-page/vendeur-page.module').then(
        (m) => m.VendeurPageModule
      ),
  },
  {
    path: 'commandes-historique',
    loadChildren: () =>
      import(
        './pages/historique-commande-page/historique-commande-page.module'
      ).then((m) => m.HistoriqueCommandePageModule),
    canActivate:[AuthGuardClient || AuthGuardAdmin]

  },
  {
    path: 'command-detail',
    loadChildren: () =>
      import('./pages/detail-commande-page/detail-commande-page.module').then(
        (m) => m.DetailCommandePageModule
      ),
    canActivate:[AuthGuardClient || AuthGuardAdmin]
  },
  {
    path: 'livreur',
    loadChildren: () =>
      import('./pages/livreur-page/livreur-page.module').then(
        (m) => m.LivreurPageModule
      ),
    canActivate:[AuthGuardLivreur || AuthGuardAdmin]
  },
  {
    path: 'edit-magasin',
    loadChildren: () =>
      import('./pages/edit-magasin/edit-magasin.module').then(
        (m) => m.EditMagasinModule
      ),
    canActivate:[AuthGuardAdmin]

  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/connexion/connexion.module').then(
        (m) => m.ConnexionModule
      ),
  },
  {
    path: 'modifier-profil',
    loadChildren: () =>
      import('./pages/edit-profil/edit-profil.module').then(
        (m) => m.EditProfilModule
      ),

  },
  {
    path: 'edit-livreur',
    loadChildren: () =>
      import('./pages/edit-livreur/edit-livreur.module').then(
        (m) => m.EditLivreurModule
      ),
    canActivate:[AuthGuardAdmin]

  },
  {
    path: 'monitoring-page-read',
    loadChildren: () =>
      import('./pages/monitoring-page-read/monitoring-page-read.module').then(
        (m) => m.MonitoringPageReadModule
      ),
    canActivate:[AuthGuardAdmin]

  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./pages/livraison-page/livraison-page.module').then(
        (m) => m.LivraisonPageModule
      ),
    canActivate:[AuthGuardAdmin || AuthGuardClient]
  },
  {
    path: 'magasin-page',
    loadChildren: () =>
      import('./pages/magasin-page/magasin-page.module').then(
        (m) => m.MagasinPageModule
      ),
  },
  {
    path: 'monitoring-page-add',
    loadChildren: () =>
      import('./pages/monitoring-page-add/monitoring-page-add.module').then(
        (m) => m.MonitoringPageAddModule
      ),
    canActivate:[AuthGuardAdmin]

  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/client-page/client-page.module').then(
        (m) => m.ClientPageModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'register-hub',
    loadChildren: () =>
      import('./pages/register-hub/register-hub.module').then(
        (m) => m.RegisterHubModule
      ),
  },
  {
    path: 'edit-produit',
    loadChildren: () =>
      import('./pages/edit-produit/edit-produit.module').then(
        (m) => m.EditProduitModule
      ),
  },
  {
    path: 'profile-page',
    loadChildren: () =>
      import('./pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
    canActivate:[AuthGuardClient || AuthGuardAdmin || AuthGuardLivreur || AuthGuardVendeur]
  },
  {
    path: 'panier-page',
    loadChildren: () =>
      import('./pages/panier-page/panier-page.module').then(
        (m) => m.PanierPageModule
      ),
    canActivate:[AuthGuardClient || AuthGuardAdmin]

  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
  },
  {
    path: 'modifier-vendeur',
    loadChildren: () =>
      import('./pages/edit-vendeur/edit-vendeur.module').then(
        (m) => m.EditVendeurModule
      ),
    canActivate:[AuthGuardVendeur || AuthGuardAdmin]
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule, HttpClientModule],
  providers: [ClientService,LivreurService,VendeurService,AdminService,MagasinService,ProduitService,CommandeService,ContenuCommandeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
