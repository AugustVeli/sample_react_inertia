<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\User;
use Illuminate\Support\Facades\Auth as AuthFacades;

class BookController extends Controller
{
    function show(Request $request): \Inertia\Response {
        if (AuthFacades::check()) {
            $user_id = $request->session()->get("user_id");
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
                        "want_look"=>$book->want_look
                    ];
                }),

                "user_is_auth" => true
            ]);
        }
        $search = $request->search;
        if ($search) {
            $books = Book::whereLike('book_name', "%$search%")->get();
            // $books['search'] = $search;
            return Inertia::render('Home', [
                    'books' => $books
                ]
            );
        }
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
                        "want_look"=>$book->want_look
                    ];
                }),
        ]);
    }

    // function search(Request $request) {
    //     $search = $request->search;
    //     $books = Book::whereLike('book_name', $search)->get();
    //     return Inertia::render('Home', [
    //             'books' => $books
    //         ]
    //     );
    // }

    function showInDashboard(Request $request): \Inertia\Response {
        $new_want_look = [];
        $user_array = [];
        $user_id = $request->session()->get('user_id');
        $want_look = Book::whereUserId($user_id)->pluck('want_look')->toArray();
        foreach ($want_look as $key => $value) {
            $new_want_look[$key] = explode(',', $value);
        }
        foreach ($new_want_look as $key => $value) {
            $num = count($value);
            for ($i=0; $i < $num; $i++) {
                $user_array[$key][$i] = User::whereName($value[$i])->get();
            }
        }

        return Inertia::render('Dashboard_Book', [
            'books' => Book::whereUserId($user_id)->get(),
            // 'users' =>$new_want_look,
            'users' =>$user_array

        ]);


    }

    function bookOne($id):\Inertia\Response {
        return Inertia::render('BookOne', [
                'book' => Book::find($id)
        ]);
    }

    function store(Request $request) {
        $validated = $request->validate([
            "book_name" => "required|string|max:100",
            "iso" => "max:30",
            "author"=>"required|max:50",
            "author_org"=>"max:50",
            "name_genre"=>"required|max:20",
            "binding"=>"required|max:30",
            "publisher"=>"max:30",
            "location"=>"required|max:30",
            "description"=>"required|string|max:300",
            "amount"=>"required",
        ]);

        $user_id = $request->session()->get("user_id");

        Book::create([
            "book_name"=>$validated["book_name"],
            "iso"=>$validated["iso"],
            "author"=> $validated["author"],
            "author_org"=> $validated["author_org"],
            "name_genre"=>$validated["name_genre"],
            // "publisher"=> isset($validated["publisher"]) ? $validated["publisher"] : null,
            "binding"=>$validated["binding"],
            "location"=>$validated["location"],
            "description"=>$validated["description"],
            "amount"=>(int)$validated["amount"],
            "user_id"=> $user_id,
            "dateOfBook"=>'1999-08-15'
        ]);
        //Add new author if there is not one

        return redirect()->route('dashboard.books')->with("success", "You added a new book");
    }

    function update($id, Request $request) {
        $request->validate([
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
