<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Emprunt extends Model
{
    protected $table = 'emprunts';

    protected $fillable = [
        'utilisateur_id',
        'livre_id',
        'date_emprunt',
        'date_retour',
        'statut',
    ];

    public $timestamps = false;

    public function utilisateur()
    {
        return $this->belongsTo(User::class, 'utilisateur_id');
    }

    public function livre()
    {
        return $this->belongsTo(Livre::class, 'livre_id');
    }
}
