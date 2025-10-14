<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;


class LoginRegisterController extends Controller
{
    // public static function middleware(): array
    // {
    //     return [
    //         new Middleware('guest', except: ['home', 'logout']),
    //         new Middleware('auth', only: ['home', 'logout']),
    //     ];
    // }

    public function register(): \Inertia\Response
    {
        return Inertia::render('Registration');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:250',
            'email' => 'required|string|email:rfc,dns|max:250|unique:users,email',
            'password' => 'required|string|min:8|confirmed'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        Auth::login($user);
        $request->session()->regenerate();
        return redirect()->route('home')
            ->withSuccess('You have successfully registered & logged in!');
    }

    public function login(): \Inertia\Response
    {
        return Inertia::render('Login');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt($credentials))
        {
            $user_id = User::whereEmail($credentials['email'])->value('id');
            $request->session()->regenerate();
            $request->session()->put('user_id', $user_id);
            return redirect()->route('dashboard.books')->with("success", "Log in was success");

        }

        return back()->with("error",'Your provided credentials do not match in our records.')
            ->onlyInput('email');

    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('home')
            ->with("success", "You added a new book");
    }
}
