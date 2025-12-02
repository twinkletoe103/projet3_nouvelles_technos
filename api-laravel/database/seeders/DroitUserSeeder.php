<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DroitUser;

class DroitUserSeeder extends Seeder
{
    public function run(): void
    {
        $droits = [
            [
                'type' => 'Invite',
                'droits' => [
                    ['nom' => 'Consulter les livres', 'description' => 'Parcourir le catalogue complet de la bibliothèque'], //done
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder et consulter vos informations personnelles'], //done
                    ['nom' => 'Réserver des livres', 'description' => 'Réserver des livres disponibles pour un emprunt futur'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les heures d\'ouverture et fermeture'] //done
                ]
            ],
            [
                'type' => 'Etudiant',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder et modifier vos informations personnelles'], //done
                    ['nom' => 'Réserver des livres', 'description' => 'Réserver des livres académiques pour vos études'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les heures d\'ouverture et services disponibles'] //done
                ]
            ],
            [
                'type' => 'Professeur',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder à votre profil professionnel'], //done
                    ['nom' => 'Réserver des livres', 'description' => 'Réserver des ressources pour votre enseignement'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les services disponibles pour vos cours'] //done
                ]
            ],
            [
                'type' => 'User',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Consulter vos informations de compte'], //done
                    ['nom' => 'Réserver des livres', 'description' => 'Emprunter des livres de la bibliothèque'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les heures d\'ouverture'] //done
                ]
            ],
            [
                'type' => 'Admin',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder à votre profil administrateur'], //done
                    ['nom' => 'Ajouter des livres', 'description' => 'Ajouter des livres ou modifier des livres existants.'], //done
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter et modifier les horaires'], //done
                    ['nom' => 'Consulter tous les comptes', 'description' => 'Gérer tous les utilisateurs du système'], //done
                    ['nom' => 'Consulter tous les emprunts', 'description' => 'Superviser tous les emprunts de livres']
                ]
            ],
        ];

        foreach ($droits as $droit) {
            DroitUser::create($droit);
        }
    }
}
