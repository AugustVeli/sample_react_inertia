<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $genre = ['poem', 'roman', 'play'];
        $location = ['Daugavpils', 'Riga', 'Rezekne'];
        return [
            'book_name' => fake()->sentence(3),
            'iso' => Str::random(15),
            'author' => fake()->name(),
            'author_org' => fake()->name(),
            'dateOfBook' => fake()->date(),
            'name_genre' => fake()->randomElement($genre),
            'publisher' => Str::random(10),
            'binding' => Str::random(10),
            'location' => fake()->randomElement($location),
            'description' => fake()->sentence(),
            'amount' => fake()->randomDigit(),
        ];
    }
}
