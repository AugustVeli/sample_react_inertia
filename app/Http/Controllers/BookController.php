<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Author;
use App\Models\Editor;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BookController extends Controller
{
    function show(): \Inertia\Response {
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
        // try {
            // var_dump($validated);
            $author_array = Author::where("author", $validated["author"])->firstOrFail();
            // if (isset($validated["editor"])) {
            //     $editor = Editor::where("editor", $validated["editor"])->firstOrFail();
            //     $editor_id = $editor->id;
            // }
        // } catch (ModelNotFoundException $e) {

        //     return redirect()->route('dashboard.book')->with("error", "Something went wrong!");
        // }


        $id_author = $author_array->id;


        $book_table = Book::create([
            "book_name"=>$validated["book_name"],
            "iso"=>$validated["iso"],
            "author_id"=> (int)$id_author,
            "publisher"=> "hihihii",
            "name_genre"=>$validated["name_genre"],
            "binding"=>$validated["binding"],
            "amount"=>(int)$validated["amount"],
            "price"=>(float)$validated["price"],
            "discount"=>0,
        ]);

        $book_table->authors()->attach($id_author);
        //Add new author if there is not one


        return redirect()->route('dashboard.book')->with("success", "You added a new book");
    }
}
