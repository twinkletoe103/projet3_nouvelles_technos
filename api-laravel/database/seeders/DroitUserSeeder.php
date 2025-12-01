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
                    ['nom' => 'Consulter les livres', 'description' => 'Parcourir le catalogue complet de la bibliothèque'],
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder et consulter vos informations personnelles'],
                    ['nom' => 'Réserver des livres', 'description' => 'Réserver des livres disponibles pour un emprunt futur'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les heures d\'ouverture et fermeture']
                ]
            ],
            [
                'type' => 'Etudiant',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder et modifier vos informations personnelles'],
                    ['nom' => 'Réserver des livres', 'description' => 'Réserver des livres académiques pour vos études'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les heures d\'ouverture et services disponibles']
                ]
            ],
            [
                'type' => 'Professeur',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder à votre profil professionnel'],
                    ['nom' => 'Réserver des livres', 'description' => 'Réserver des ressources pour votre enseignement'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les services disponibles pour vos cours']
                ]
            ],
            [
                'type' => 'User',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Consulter vos informations de compte'],
                    ['nom' => 'Réserver des livres', 'description' => 'Emprunter des livres de la bibliothèque'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter les heures d\'ouverture']
                ]
            ],
            [
                'type' => 'Admin',
                'droits' => [
                    ['nom' => 'Voir mon profil', 'description' => 'Accéder à votre profil administrateur'],
                    ['nom' => 'Ajouter des livres', 'description' => 'Ajouter des livres ou modifier des livres existants.'],
                    ['nom' => 'Voir l\'horaire de la bibliothèque', 'description' => 'Consulter et modifier les horaires'],
                    ['nom' => 'Consulter tous les comptes', 'description' => 'Gérer tous les utilisateurs du système'],
                    ['nom' => 'Consulter tous les emprunts', 'description' => 'Superviser tous les emprunts de livres']
                ]
            ],
        ];

        foreach ($droits as $droit) {
            DroitUser::create($droit);
        }
    }
}
