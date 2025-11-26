<?php

use App\Http\Controllers\LivreController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Gestion utilisateur
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// Routes des livres
Route::get('/livres', [LivreController::class, 'index']);
