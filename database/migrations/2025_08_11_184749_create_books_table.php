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
            $table->string('book_name');
            $table->string('iso')->unique();
            $table->foreignId('auth_id')->constrained();
            $table->foreignId('editor_id')->constrained();
            $table->string("name_genre");
            $table->string("publisher");
            $table->string("binding");
            $table->integer('amount');
            $table->double('price');
            $table->boolean('discount');
            $table->double('price_discount')->nullable();
            $table->timestamps();
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
