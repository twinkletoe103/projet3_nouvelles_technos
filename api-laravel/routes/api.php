<?php

use App\Http\Controllers\LivreController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DroitController;
use Illuminate\Support\Facades\Route;

// Gestion utilisateur
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::get('/droits/{type}', [DroitController::class, 'getDroitsByType']);

// Routes des livres
Route::get('/livres', [LivreController::class, 'index']);
