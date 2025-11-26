<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('livres', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('auteur');
            $table->string('isbn')->unique();
            $table->date('date_publication');
            $table->string('editeur');
            $table->integer('nombre_pages');
            $table->text('description')->nullable();
            $table->string('langue')->default('français');
            $table->integer('exemplaires')->default(1);
            $table->string('categorie')->nullable();
            $table->string('couverture')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livres');
    }
};
