<?php

namespace App\Http\Controllers;

use App\Models\Livre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LivreController extends Controller
{
    public function index()
    {
        return Livre::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'titre' => 'required|string|max:255',
            'auteur' => 'required|string|max:255',
            'exemplaires' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $livre = Livre::create([
            'titre' => $request->titre,
            'auteur' => $request->auteur,
            'isbn' => $request->isbn ?? null,
            'date_publication' => $request->date_publication ?? null,
            'editeur' => $request->editeur ?? null,
            'nombre_pages' => $request->nombre_pages ?? null,
            'description' => $request->description ?? null,
            'langue' => $request->langue ?? null,
            'exemplaires' => $request->exemplaires,
            'categorie' => $request->categorie ?? null,
            'couverture' => $request->couverture ?? null,
        ]);

        return response()->json(['message' => 'Livre créé', 'livre' => $livre], 201);
    }

    public function destroy($id)
    {
        $livre = Livre::find($id);
        if (!$livre) {
            return response()->json(['message' => 'Livre non trouvé'], 404);
        }

        $livre->delete();
        return response()->json(['message' => 'Livre supprimé'], 200);
    }

    public function update(Request $request, $id)
    {
        $livre = Livre::find($id);
        if (!$livre) {
            return response()->json(['message' => 'Livre non trouvé'], 404);
        }

        $validator = Validator::make($request->all(), [
            'titre' => 'sometimes|required|string|max:255',
            'auteur' => 'sometimes|required|string|max:255',
            'exemplaires' => 'sometimes|required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $livre->fill($request->only([
            'titre', 'auteur', 'isbn', 'date_publication', 'editeur', 'nombre_pages', 'description', 'langue', 'exemplaires', 'categorie', 'couverture'
        ]));

        $livre->save();

        return response()->json(['message' => 'Livre mis à jour', 'livre' => $livre], 200);
    }
}
