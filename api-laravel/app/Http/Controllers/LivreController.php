<?php

namespace App\Http\Controllers;

use App\Models\Livre;

class LivreController extends Controller
{
    public function index()
    {
        return Livre::all();
    }
}
