export interface Commandes {
  commande_id: number;
  client_id: number;
  livreur_id: number;
  statut_commande: 'en attente' | 'en cours' | 'livrée';
  date_commande: Date | null;
  magasin_id: number;
}
