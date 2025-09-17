<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;

Route::get('/', function () {
    return inertia("Home");
});

Route::get('/books', [BookController::class, 'show'])->name('books.show');

Route::inertia('/about', 'About');

//Dashboard--------------
Route::get('/admin/dashboard', function () {
    return inertia("Dashboard");
})->name('dashboard');
Route::get('/admin/dashboard/book', function () {
    return inertia("Dashboard_Book");
})->name('dashboard.book');
Route::post('/admin/dashboard/add_book', [BookController::class, 'store'])
->name('book.add');
Route::get('/admin/dashboard/author', function () {
    return inertia("Dashboard_Author");
})->name('dashboard.author');
Route::post('/admin/dashboard/add_author', [AuthorController::class, 'store'])
->name("dashboard.author_add");
// Route::post('/admin/dashboard/add_author', [AuthorController::class, 'show'])
// ->name("dashboard.author");

// /admin/dashbord/author
Route::get('/account', [AuthController::class, 'show'])->name('auth.show');

