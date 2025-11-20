<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\Auth\LoginRegisterController;
use App\Http\Controllers\AccountController;

Route::get('/',[BookController::class, 'show'])->name('home');

Route::get('/one_book/{id}',[BookController::class, 'bookOne'])->name('one_book');
// Route::get('/',[BookController::class, 'search'])->name('home.search');

Route::inertia('/about', 'About');
// Route::get('/account/dashboard/author', function () {
//     return inertia("Dashboard_Author");
// })->name('dashboard.author');
// Route::post('/account/dashboard/add_author', [LoginRegisterController::class, 'store'])
// ->name("dashboard.author_add");
// Route::post('/admin/dashboard/add_author', [AuthorController::class, 'show'])
// ->name("dashboard.author");
//Dashboard--------------
Route::middleware("auth")->group(function () {
    Route::get('/account',
        [AccountController::class, 'show'])->name('account');
    Route::post('/account/update',
        [AccountController::class, 'update'])->name('account.update');
    Route::get('/account/dashboard/book',
        [BookController::class, 'showInDashboard'])->name('dashboard.books');
    Route::post('/account/dashboard/add_book',
        [BookController::class, 'store'])->name('book.add');
    Route::post('/account/dashboard/update_book/{id}',
        [BookController::class, 'update'])->name('book.update');
    Route::get('/account/dashboard/delete_book/{id}',
        [BookController::class, 'delete'])->name('book.delete');
    Route::get('/logout', [LoginRegisterController::class, 'logout'])->name('auth.logout');
});

Route::middleware("guest")->group(function() {
    Route::get('/back', function() {
        return redirect()->back();
    })->name('back');
    Route::get('/login', [LoginRegisterController::class, 'login'])->name('login');
    Route::post('/login', [LoginRegisterController::class, 'authenticate'])->name('login.enter');
    Route::get('/register', [LoginRegisterController::class, 'register'])->name('register.show');
    Route::post('/register', [LoginRegisterController::class, 'store'])->name('register.add');
});



