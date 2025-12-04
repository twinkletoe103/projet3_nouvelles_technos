<?php

namespace App\Http\Controllers;

use App\Models\Emprunt;
use App\Models\Utilisateur;
use App\Models\Livre;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmpruntController extends Controller
{
    public function index()
    {
        return Emprunt::with(['livre', 'utilisateur'])->get();
    }

    public function show($id)
    {
        $emprunt = Emprunt::with(['livre', 'utilisateur'])->find($id);
        if (!$emprunt) {
            return response()->json(['message' => 'Emprunt non trouvé'], 404);
        }
        return $emprunt;
    }

    public function store(Request $request, $id)
    {
        if (!$id) {
            return response()->json(['message' => 'User id missing'], 401);
        }

        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Utilisateur non trouvé'], 401);
        }

        if (strtolower($user->type) !== 'Étudiant') {
            return response()->json(['message' => 'Seuls les étudiants peuvent emprunter'], 403);
        }

        $validator = Validator::make($request->all(), [
            'livre_id' => 'required|integer|exists:livres,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $livre = Livre::find($request->livre_id);
        if (!$livre) {
            return response()->json(['message' => 'Livre non trouvé'], 404);
        }

        $emprunt = Emprunt::create([
            'utilisateur_id' => $user->id,
            'livre_id' => $livre->id,
            'date_emprunt' => now()->toDateString(),
            'statut' => 'en_cours'
        ]);

        return response()->json(['message' => 'Emprunt créé', 'emprunt' => $emprunt], 201);
    }

    public function retour($id)
    {
        $emprunt = Emprunt::find($id);
        if (!$emprunt) {
            return response()->json(['message' => 'Emprunt non trouvé'], 404);
        }

        $emprunt->statut = 'retourne';
        $emprunt->date_retour = now()->toDateString();
        $emprunt->save();

        return response()->json(['message' => 'Livre marqué comme retourné', 'emprunt' => $emprunt], 200);
    }
}
