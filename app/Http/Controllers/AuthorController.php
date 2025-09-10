<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Attributes\UseEloquentBuilder;
// use Illuminate\Support\Facades\DB;
use App\Models\Author;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

use function Termwind\render;

class AuthorController extends Controller
{
    function show() {
        $author = Author::all();
        return Inertia::render('Dashboard_Author', [
            "authors"=>Author::all()->map(function ($author) {
                    return [
                        'author' => $author->author,
                        'author_russian' => $author->author_russian,
                        'type' => $author->type,
                        'date_birth' => $author->date_birth,
                        'date_death' => $author->date_death,
                        'description' => $author->description
                    ];

            })]
        );
    }

    function store(Request $request) {
        $validated = $request->validate([
            "author"=>"required|max:50|unique:App\Models\Author,author",
            "author_russian"=>"required|max:50|unique:App\Models\Author,author_russian",
            "type"=>"required|max:50",
            "date_birth"=>"required|date",
            "date_death"=>"date",
            "description"=>"required",
        ]);

        // var_dump($validated);
        Author::create([
            "author"=>$validated["author"],
            "author_russian"=>$validated["author_russian"],
            "type"=>$validated["type"],
            "date_birth"=>$validated["date_birth"],
            "date_death"=>$validated["date_death"],
            "description"=>$validated["description"]
        ]);

        return redirect()->route('dashboard.author');

    }
}
