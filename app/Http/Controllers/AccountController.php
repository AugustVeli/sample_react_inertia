<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Symfony\Component\Routing\Route;

class AccountController extends Controller
{
    public function show(Request $request): \Inertia\Response
    {
        $user_id = $request->session()->get('user_id');
        $user = User::whereId($user_id)->get();
        return Inertia::render('Account', ['user' => $user, 'user_is_auth' => true]);
    }

    public function update(Request $request): string
    {
        $validated=$request->validate([
            "user_name" => "required|string|max:50",
            "email" => "required|string|max:50",
            "user_name" => "required|string|max:50",
            "user_name" => "required|string|max:50",

        ]);
        $user_id = $request->session()->get('user_id');
        User::WhereId($user_id)->update($validated);
        return redirect()->route('account')->with("success", "You added a new book");
    }
}
