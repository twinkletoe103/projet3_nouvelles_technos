<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    protected $table = 'utilisateurs';

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'type',
    ];

    public $timestamps = false;

    public function emprunts()
    {
        return $this->hasMany(Emprunt::class);
    }
}
