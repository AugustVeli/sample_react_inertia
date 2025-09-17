<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class AuthController extends Controller
{
    function show() : \Inertia\Response {
        return Inertia::render('Account');
    }
}
