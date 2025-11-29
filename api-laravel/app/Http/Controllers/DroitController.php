<?php

namespace App\Http\Controllers;

use App\Models\DroitUser;
use Illuminate\Http\Request;

class DroitController extends Controller
{
    public function getDroitsByType($type)
    {
        $droitUser = DroitUser::where('type', $type)->first();

        if (!$droitUser) {
            return response()->json([
                'message' => 'Aucun droit trouvé pour ce type',
                'droits' => []
            ], 404);
        }

        return response()->json([
            'type' => $droitUser->type,
            'droits' => $droitUser->droits,
            'description' => $droitUser->description
        ]);
    }
}
