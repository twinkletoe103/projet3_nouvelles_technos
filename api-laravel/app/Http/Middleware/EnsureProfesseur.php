<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

class EnsureProfesseur
{
    /**
     * Handle an incoming request.
     * Expects header `X-User-Id` with the authenticated user's id.
     */
    public function handle(Request $request, Closure $next)
    {
        $userId = $request->header('X-User-Id');

        if (!$userId) {
            return response()->json(['message' => 'User id missing'], 401);
        }

        $user = User::find($userId);
        if (!$user) {
            return response()->json(['message' => 'Utilisateur non trouvé'], 401);
        }

        // Accept both 'professeur' and 'Professeur'
        if (strtolower($user->type) !== 'professeur') {
            return response()->json(['message' => 'Accès réservé aux professeurs'], 403);
        }

        return $next($request);
    }
}
