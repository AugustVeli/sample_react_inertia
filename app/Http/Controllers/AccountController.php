<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

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
            "inTouch" => "required|string|max:50",
            "password" => "required|string|min:8",
        ]);
        $user_id = $request->session()->get('user_id');
        $user = User::find($user_id);
        $user->update($request->all());
        return redirect()->route('dashboard.books')->with("success", "You change your account");
    }

    public function delete(Request $request): string
    {
        $user_id = $request->session()->get('user_id');
        $user = User::find($user_id);
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        $user->delete(); //returns true/false
        return redirect()->route('home')->with("success", "You deleted your account");
    }
}
