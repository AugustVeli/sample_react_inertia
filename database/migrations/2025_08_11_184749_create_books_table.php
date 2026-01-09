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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->longText('photo_link');
            $table->string('book_name');
            $table->string('author');
            $table->string('author_org')->nullable();
            $table->date("dateOfBook");
            $table->string('iso')->unique()->nullable();
            $table->string("name_genre");
            $table->string("series")->nullable();
            $table->string("publisher")->nullable();
            $table->string("binding")->nullable();
            $table->integer('amount');
            $table->string('location');
            $table->longText("description");
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
            $table->string("want_look")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
