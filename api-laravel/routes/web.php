<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/livres', [\App\Http\Controllers\LivreController::class, 'index'])->name('livres.index');
Route::post('livres', [\App\Http\Controllers\LivreController::class, 'store'])->name('livres.store');
Route::get('/utilisateurs', [\App\Http\Controllers\UtilisateurController::class, 'index'])->name('utilisateurs.index');
Route::post('/utilisateurs', [\App\Http\Controllers\UtilisateurController::class, 'store'])->name('utilisateurs.store');
Route::post('/emprunts', [\App\Http\Controllers\EmpruntController::class, 'store'])->name('emprunts.store');
Route::get('/emprunts', [\App\Http\Controllers\EmpruntController::class, 'index'])->name('emprunts.index');
Route::get('/emprunts/{id}', [\App\Http\Controllers\EmpruntController::class, 'show'])->name('emprunts.show');
Route::post('/emprunts/{id}/retour', [\App\Http\Controllers\EmpruntController::class, 'retour'])->name('emprunts.retour');
