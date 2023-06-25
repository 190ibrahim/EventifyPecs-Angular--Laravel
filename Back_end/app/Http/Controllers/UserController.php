<?php

namespace App\Http\Controllers;

use App\Models\user;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function create()
    {
        return view('register');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(Request $request) //this is the post route for the register form  in the register.blade.php
    // {
    //     // $formFields=$request->validate([
    //     //     'firstname'=>['required'],
    //     //     'lastname'=>['required'],
    //     //     'username'=>['required'],
    //     //     'email'=>['required','email',Rule::unique('users','email')],
    //     //     'password'=>'required',
    //     //     'age'=>['required'],
    //     //     'nationality'=>['required']
    //     // ]);


        



        
    //     // $user=User::create([
    //     //     'first_name'=>$formFields['firstname'],
    //     //     'last_name'=>$formFields['lastname'],
    //     //     'username'=>$formFields['username'],
    //     //     'email'=>$formFields['email'],
    //     //     'password'=>Hash::make($formFields['password']),
    //     //     'age'=>$formFields['age'],
    //     //     'nationality'=>$formFields['nationality']
    //     // ]);

    //     // auth()->login($user);

    //     // return redirect('/')->with('success','Your account has been created');

    //     $formFields = $request->validate([
    //         'firstname' => ['required'],
    //         'lastname' => ['required'],
    //         'username' => ['required'],
    //         'email' => ['required', 'email', Rule::unique('users', 'email')],
    //         'password' => 'required',
    //         'age' => ['required'],
    //         'nationality' => ['required']
    //     ]);

    //     $user = User::create([
    //         'first_name' => $formFields['firstname'],
    //         'last_name' => $formFields['lastname'],
    //         'username' => $formFields['username'],
    //         'email' => $formFields['email'],
    //         'password' => Hash::make($formFields['password']),
    //         'age' => $formFields['age'],
    //         'nationality' => $formFields['nationality']
    //     ]);

    //     return response()->json(['message' => 'Your account has been created'], 201);
    
    // }


    public function store(Request $request)
{
    $formFields = $request->validate([
        'firstname' => ['required'],
        'lastname' => ['required'],
        'username' => ['required'],
        'password' => ['required'],
        'date_of_birth'=>['required'],
        'role_type' => ['required'], // Add role field
        'license_acceptance' => ['required'], // Add role field
        'remember_token' => ['required'], // Add role field
=        'email' => ['required', 'email', Rule::unique('users', 'email')],
        'nationality' => ['required']
     ]);
    
    $user = User::create([
        'first_name' => $formFields['firstname'],
        'last_name' => $formFields['lastname'],
        'username' => $formFields['username'],
        'password' => Hash::make($formFields['password']),
        'date_of_birth' => $formFields['date_of_birth'],
        'role_type' => $formFields['role_type'], // Save the role in the database
        'license_acceptance' => $formFields['license_acceptance'], // Add role field
        'remember_token' => $formFields['remember_token'], // Add role field
        'email' => $formFields['email'],
        'nationality' => $formFields['nationality'],
        
    ]);

    return response()->json([
        'message' => 'Your account has been created', 
        'user'=>$user,
    ], 201);
}


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function show(user $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, user $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(user $user)
    {
        //
    }

    public function login()
    {
        return view('login');
    }

// public function authenticate(Request $request){
//     // $formFields=$request->validate([
//     //     'email'=>['required','email'],
//     //     'password'=>['required']
//     // ]);

//     // if(auth()->attempt($formFields)){

//     //     $request->session()->regenerate();//this is to regenerate the session id for the user

//     //     return redirect('/')->with('success','You have been logged in');
//     // }
     
//     // return back()->withErrors([
//     //     'email'=>'The provided credentials do not match our records'
//     // ])->onlyInput('email');

//     $formFields = $request->validate([
//         'email' => ['required', 'email'],
//         'password' => ['required'],
//     ]);

//     if (Auth::attempt($formFields)) {
//         return response()->json(['message' => 'You have been logged in']);
//     }

//     return response()->json(['error' => 'The provided credentials do not match our records'], 401);
// }

public function authenticate(Request $request)
{
    $formFields = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($formFields)) {
        $user = Auth::user();
        if ($user->role === 'admin') {
            return response()->json(['message' => 'Logged in as admin',  'user'=>$user,]);
        } else {
            return response()->json(['message' => 'Logged in as user',   'user'=>$user,]);
        }
    }
    return response()->json(['error' => 'The provided credentials do not match our records'], 401);
}


    public function logout(Request $request)
    {
        // auth()->logout();


        // $request->session()->invalidate();//this is to destroy the session which is the cookie that is stored in the browser used to authenticate the user
        // $request->session()->regenerateToken();//this is to regenerate the token for the session
        // return redirect('/')->with('success','You have been logged out');
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return response()->json(['message' => 'You have been logged out']);
    }










    
}
