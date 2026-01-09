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
        $photo_link = [
            'https://imgs.search.brave.com/0_YudaiRcdEE7j6jBwuvSWm5VxngSZYS3MnEM3e_pdk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbnRpcXVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNC9DbGFzc2lj/LUhhcmRjb3Zlci1w/aG90by1ib29rLUZv/bGQtNS0xLmpwZz93/aWR0aD0yNTAmY3Jv/cD0xOjEsc21hcnQ',
            'https://imgs.search.brave.com/KWfVVVNwa9aeG_0Dmfzt2UyPvz5TKaeZs9PyuxiOlKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbnRpcXVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wOS9DbGFzc2lj/LUJvdW5kLVNvZnRj/b3Zlci1QRFAtaW1h/Z2VzLV8wMDAwc18w/MDA0X0dlbmVyYXRp/dmUtRmlsbC0zLmpw/Zz93aWR0aD0yNTAm/Y3JvcD0xOjEsc21h/cnQ',
            'https://imgs.search.brave.com/BCbZ8r7Kgk8GaJ-wQq1WOx0JnUBhgoc3LAam1hbsZ_4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zb2Np/YWxwcmludHN0dWRp/by5jb20vY2RuL3No/b3AvZmlsZXMvc29s/aWQtb3Blbi13aGl0/ZS5qcGc_dj0xNzYy/Mjk4NTA3JndpZHRo/PTE0NDU'
        ];
        return [
            'photo_link'=>fake()->randomElement($photo_link),
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
