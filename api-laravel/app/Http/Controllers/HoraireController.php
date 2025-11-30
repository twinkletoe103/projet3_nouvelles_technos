<?php

namespace App\Http\Controllers;

use App\Models\Horaire;
use Illuminate\Http\Request;

class HoraireController extends Controller
{
    public function index()
    {
        return Horaire::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'journee' => 'required|string',
            'heure_ouverture' => 'nullable|date_format:H:i',
            'heure_fermeture' => 'nullable|date_format:H:i',
            'ouvert' => 'required|boolean',
        ]);

        return Horaire::create($validated);
    }

    public function show(Horaire $horaire)
    {
        return $horaire;
    }

    public function update(Request $request, Horaire $horaire)
    {
        $validated = $request->validate([
            'journee' => 'required|string',
            'heure_ouverture' => 'nullable|date_format:H:i',
            'heure_fermeture' => 'nullable|date_format:H:i',
            'ouvert' => 'required|boolean',
        ]);

        $horaire->update($validated);

        return $horaire;
    }

    public function destroy(Horaire $horaire)
    {
        $horaire->delete();
        return response()->json(['message' => 'Supprimé']);
    }
}
