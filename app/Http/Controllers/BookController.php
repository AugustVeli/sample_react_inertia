<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Author;
use App\Models\Editor;
use Illuminate\View\View;

class BookController extends Controller
{
    function show() {
            return Inertia::render('Books', [
                'books' => Book::all()->map(function ($book) {
                    return [
                        'id' => $book->id,
                        'name' => $book->book_name,
                        'amount' => $book->amount,
                        'price' => $book->price,
                        'discount' => $book->discount,
                        'price_discount' => $book->price_discount,

                        // 'edit_url' => route('books.edit', $book),
                    ];
                }),
                'create_url' => route('book.show'),
        ]);
    }



    function store(Request $request) {

        $validated = $request->validate([
            "book_name" => "required|max:100",
            "iso" => "required|max:50",
            "author"=>"required|max:50",
            "author_russian"=>"required|max:50",
            "name_genre"=>"required",
            "editor"=>"max:30",
            "binding"=>"max:30",
            "amount"=>"required",
            "price"=>"required",

        ]);

        var_dump($validated);

        $author_array = Author::where("author", $validated["author"])->firstOrFail();
        if (isset($validated["editor"])) {
            $editor = Editor::where("editor", $validated["editor"])->firstOrFail();
            $editor_id = $editor->id;
        }
        $id_author = $author_array->id;
        //Add new author if there is not one
        // $author = $author_array->author;
        // $author_russion = $author_array->author_russion;

        // return Book::create([
        //     "book_name"=>$validated["book_name"],
        //     "iso"=>$validated["iso"],
        //     "auth_id"=>$id_author,
        //     "editor_id"=>isset($editor_id) ? $editor_id : null,
        //     "author"=>$validated["author"],
        //     "name_genre"=>$validated["name_genre"],
        //     "editor"=>$validated["editor"],
        //     "binding"=>$validated["binding"],
        //     "amount"=>$validated["amount"],
        //     "price"=>$validated["price"],
        // ]);
    }
}
