<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Livre;

class LivreSeeder extends Seeder
{
    public function run(): void
    {
        Livre::create([
            'titre' => '1984',
            'auteur' => 'George Orwell',
            'isbn' => '9780451524935',
            'date_publication' => '1949-06-08',
            'editeur' => 'Secker & Warburg',
            'nombre_pages' => 328,
            'description' => 'Un roman dystopique qui explore un futur totalitaire.',
            'langue' => 'français',
            'exemplaires' => 4,
            'categorie' => 'Roman',
            'couverture' => null,
        ]);

        Livre::create([
            'titre' => 'Le Seigneur des Anneaux',
            'auteur' => 'J.R.R. Tolkien',
            'isbn' => '9780544003415',
            'date_publication' => '1954-07-29',
            'editeur' => 'Allen & Unwin',
            'nombre_pages' => 1216,
            'description' => 'L\'une des œuvres fondatrices de la fantasy moderne.',
            'langue' => 'français',
            'exemplaires' => 2,
            'categorie' => 'Fantastique',
            'couverture' => null,
        ]);

        Livre::create([
            'titre' => 'Le Petit Prince',
            'auteur' => 'Antoine de Saint-Exupéry',
            'isbn' => '9780156013987',
            'date_publication' => '1943-04-06',
            'editeur' => 'Reynal & Hitchcock',
            'nombre_pages' => 96,
            'description' => 'Un conte poétique et philosophique intemporel.',
            'langue' => 'français',
            'exemplaires' => 6,
            'categorie' => 'Jeunesse',
            'couverture' => null,
        ]);
    }
}
