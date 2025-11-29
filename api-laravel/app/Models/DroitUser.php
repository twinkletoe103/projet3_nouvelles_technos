<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DroitUser extends Model
{
    protected $table = 'droit_user';

    protected $fillable = [
        'type',
        'droits',
        'description'
    ];

    protected $casts = [
        'droits' => 'array',
    ];
}
