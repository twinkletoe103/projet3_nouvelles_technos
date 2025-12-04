<?php

use App\Http\Controllers\LivreController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DroitController;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HoraireController;

// Gestion utilisateur
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::put('/users/{id}', [AuthController::class, 'updateProfile']);
Route::get('/droits/{type}', [DroitController::class, 'getDroitsByType']);
Route::get('/accounts', [AuthController::class, 'getAllAccounts']);

// Routes des livres
Route::get('/livres', [LivreController::class, 'index']);

// Création d'un livre (réservé aux professeurs)
Route::post('/livres', function(Request $request) {
	$userId = $request->header('Id');
	if (!$userId) {
		return response()->json(['message' => 'User id missing'], 401);
	}
	$user = User::find($userId);
	if (!$user) {
		return response()->json(['message' => 'Utilisateur non trouvé'], 401);
	}
	if (strtolower($user->type) !== 'professeur') {
		return response()->json(['message' => 'Accès réservé aux professeurs'], 403);
	}

	$controller = new LivreController();
	return $controller->store($request);
});

// Suppression d'un livre (réservé aux professeurs)
Route::delete('/livres/{id}', function(Request $request, $id) {
	$userId = $request->header('Id');
	if (!$userId) {
		return response()->json(['message' => 'User id missing'], 401);
	}
	$user = User::find($userId);
	if (!$user) {
		return response()->json(['message' => 'Utilisateur non trouvé'], 401);
	}
	if (strtolower($user->type) !== 'professeur') {
		return response()->json(['message' => 'Accès réservé aux professeurs'], 403);
	}

	$controller = new LivreController();
	return $controller->destroy($id);
});

// Gestion horaire
Route::apiResource('horaires', HoraireController::class);

// Emprunts (API)
Route::post('/emprunts/{id}', function(Illuminate\Http\Request $request) {
	$controller = new \App\Http\Controllers\EmpruntController();
	return $controller->store($request, $id);
});

Route::get('/emprunts', function() {
	$controller = new \App\Http\Controllers\EmpruntController();
	return $controller->index();
});

Route::get('/emprunts/{id}', function($id) {
	$controller = new \App\Http\Controllers\EmpruntController();
	return $controller->show($id);
});

Route::post('/emprunts/{id}/retour', function($id) {
	$controller = new \App\Http\Controllers\EmpruntController();
	return $controller->retour($id);
});
