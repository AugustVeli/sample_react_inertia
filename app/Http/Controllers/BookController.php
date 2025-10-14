<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Author;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BookController extends Controller
{
    function show(): \Inertia\Response {
            return Inertia::render('Home', [
                'books' => Book::all()->map(function ($book) {
                    return [
                        "id" => $book->id,
                        "book_name" => $book->book_name,
                        "iso" => $book->iso,
                        "author"=>$book->author,
                        "author_org"=>$book->author_org,
                        "name_genre"=>$book->name_genre,
                        "binding"=>$book->binding,
                        "publisher"=>$book->publisher,
                        "location"=>$book->location,
                        "amount" => $book->amount,
                        "description"=>$book->description,
                        // 'edit_url' => route('books.edit', $book),
                    ];
                }),
        ]);
    }


    function showInDashboard(Request $request): \Inertia\Response {
         $user_id = $request->session()->get('user_id');
            return Inertia::render('Dashboard_Book', [
                'books' => Book::whereUserId($user_id)->get(),
        ]);
    }

    function bookOne($id):\Inertia\Response {
        return Inertia::render('BookOne', [
                'book' => Book::find($id)
        ]);
    }

    function store(Request $request): string {
        $validated = $request->validate([
            "book_name" => "required|string|max:100",
            "iso" => "max:30",
            "author"=>"required|max:50",
            "author_org"=>"max:50",
            "name_genre"=>"required|max:20",
            "binding"=>"required|max:30",
            "publisher"=>"max:30",
            "location"=>"required|max:30",
            "description"=>"required",
            "amount"=>"required",
        ]);
        // try {
            // $author_array = Author::where("author", $validated["author"])->firstOrFail();
        // } catch (ModelNotFoundException $e) {

        //     return redirect()->route('dashboard.book')->with("error", "Something went wrong!");
        // }

        // $id_author = $author_array->id;
        $user_id = $request->session()->get("user_id");

        $book_table = Book::create([
            "book_name"=>$validated["book_name"],
            "iso"=>$validated["iso"],
            "author"=> $validated["author"],
            "author_org"=> $validated["author_org"],
            "name_genre"=>$validated["name_genre"],
            "publisher"=> isset($validated["publisher"]) ? $validated["publisher"] : null,
            "binding"=>$validated["binding"],
            "location"=>$validated["location"],
            "description"=>$validated["description"],
            "amount"=>(int)$validated["amount"],
            "user_id"=> $user_id
        ]);
        //Add new author if there is not one

        return redirect()->route('dashboard.books')->with("success", "You added a new book");
    }

    function search(Request $request):string {
        $search = $request->search();
        $book = Book::whereLike('book_name', $search);
        $book->delete(); //returns true/false
        return redirect()->route('dashboard.books')->with('success', 'You deleted the book');
    }

    function update($id, Request $request) {
        $validated = $request->validate([
            // "id"=>"required|integer",
            "book_name" => "required|string|max:100",
            "iso" => "max:30",
            "author"=>"required|max:50",
            "author_org"=>"max:50",
            "name_genre"=>"required|max:20",
            "binding"=>"required|max:30",
            "publisher"=>"max:30",
            "location"=>"required|max:30",
            "description"=>"required",
            "amount"=>"required",
        ]);
        $book=Book::find($id);
        // ->update(function ($book) {
        //     return [
        //         "book_name" => $book->book_name,
        //         "iso" => $book->iso,
        //         "author"=>$book->author,
        //         "author_org"=>$book->author_org,
        //         "name_genre"=>$book->name_genre,
        //         "binding"=>$book->binding,
        //         "publisher"=>$book->publisher,
        //         "location"=>$book->location,
        //         "description"=>$book->description,
        //         "amount" => $book->amount,
        //         "user_id"=> $book->user_id
        //         // 'edit_url' => route('books.edit', $book),
        //     ];
        // });
        $book->update($request->all());
        // return redirect()->back();
        return redirect()->route('dashboard.books')->with('success', 'You edited the book');
    }

     function delete($id):string {
        $book = Book::find($id);
        $book->delete(); //returns true/false
        return redirect()->route('dashboard.books')->with('success', 'You deleted the book');
    }
}
