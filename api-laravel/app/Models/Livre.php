<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Livre extends Model
{
    protected $table = 'livres';

    protected $fillable = [
        'titre',
        'auteur',
        'isbn',
        'date_publication',
        'editeur',
        'nombre_pages',
        'description',
        'langue',
        'exemplaires',
        'categorie',
        'couverture',
    ];

    public function emprunts()
    {
        return $this->hasMany(Emprunt::class);
    }
}
