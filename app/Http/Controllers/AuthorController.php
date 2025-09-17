<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Author;

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
        //made data format work
        $validated = $request->validate([
            "author"=>"required|max:50|unique:App\Models\Author,author",
            "author_russian"=>"required|max:50|unique:App\Models\Author,author_russian",
            "type"=>"required|max:50",
            "date_birth"=>"required|string",
            "date_death"=>"string",
            "description"=>"required",
        ]);

        Author::create([
            "author"=>$validated["author"],
            "author_russian"=>$validated["author_russian"],
            "type"=>$validated["type"],
            "date_birth"=>$validated["date_birth"],
            "date_death"=>$validated["date_death"],
            "description"=>$validated["description"]
        ]);

        return redirect()->route('dashboard');

    }
}
