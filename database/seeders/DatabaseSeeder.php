<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Book;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(5)->has(Book::factory(5), "books")->create();
        $all_names = User::all('name')->pluck('name')->toArray();
        Book::whereUserId(1)->update(["want_look" => implode(',', $all_names)]);
        Book::whereUserId(2)->update(["want_look" => implode(',', $all_names)]);
    }
}
