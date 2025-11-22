use App\Http\Controllers\LivreController;

Route::get('/livres', [LivreController::class, 'index']);
