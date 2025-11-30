<?php

namespace Database\Seeders;

use App\Models\Horaire;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HoraireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Horaire::create([
            'journee' => 'Dimanche',
            'heure_ouverture' => null,
            'heure_fermeture' => null,
            'ouvert' => false
        ]);
        Horaire::create([
            'journee' => 'Lundi',
            'heure_ouverture' => '08:00',
            'heure_fermeture' => '18:00',
            'ouvert' => true
        ]);
        Horaire::create([
            'journee' => 'Mardi',
            'heure_ouverture' => '08:00',
            'heure_fermeture' => '18:00',
            'ouvert' => true
        ]);
        Horaire::create([
            'journee' => 'Mercredi',
            'heure_ouverture' => '08:00',
            'heure_fermeture' => '18:00',
            'ouvert' => true
        ]);
        Horaire::create([
            'journee' => 'Jeudi',
            'heure_ouverture' => '08:00',
            'heure_fermeture' => '18:00',
            'ouvert' => true
        ]);
        Horaire::create([
            'journee' => 'Vendredi',
            'heure_ouverture' => '08:00',
            'heure_fermeture' => '12:00',
            'ouvert' => true
        ]);
        Horaire::create([
            'journee' => 'Samedi',
            'heure_ouverture' => '08:00',
            'heure_fermeture' => '12:00',
            'ouvert' => true
        ]);
    }
}
