<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\Auth\LoginRegisterController;

Route::get('/',[BookController::class, 'show'])->name('home');

Route::inertia('/about', 'About');

//Dashboard--------------
Route::get('/account/dashboard', function () {
    return inertia("Dashboard");
})->name('dashboard');
Route::get('/account/dashboard/book', function () {
    return inertia("Dashboard_Book");
})->name('dashboard.book');
Route::post('/account/dashboard/add_book', [BookController::class, 'store'])
->name('book.add');
// Route::get('/account/dashboard/author', function () {
//     return inertia("Dashboard_Author");
// })->name('dashboard.author');
// Route::post('/account/dashboard/add_author', [LoginRegisterController::class, 'store'])
// ->name("dashboard.author_add");
// Route::post('/admin/dashboard/add_author', [AuthorController::class, 'show'])
// ->name("dashboard.author");

// /admin/dashbord/author
Route::get('/account', [LoginRegisterController::class, 'home'])->name('auth.home');
Route::post('/account', [LoginRegisterController::class, 'authenticate'])->name('auth.enter');
Route::get('/register', [LoginRegisterController::class, 'register'])->name('register.show');
Route::post('/register', [LoginRegisterController::class, 'store'])->name('register.add');

