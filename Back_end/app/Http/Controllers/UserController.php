<?php

// namespace App\Http\Controllers;

// use App\Models\user;
// use Illuminate\Database\Eloquent\Relations\BelongsTo;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Validation\Rule;
// use Illuminate\Support\Facades\Auth;

// class UserController extends Controller
// {
//     /**
//      * Display a listing of the resource.
//      *
//      * @return \Illuminate\Http\Response
//      */
//     public function index()
//     {
//         //
//     }
//     public function create()
//     {
//         return view('register');
//     }



//     public function store(Request $request)
// {
//     $formFields = $request->validate([
//         'firstname' => ['required'],
//         'lastname' => ['required'],
//         'username' => ['required'],
//         'password' => ['required'],
//         'date_of_birth'=>['required'],
//         'role_type' => ['required'], // Add role field
//         'license_acceptance' => ['required'], // Add role field
//         'remember_token' => ['required'], // Add role field
// =        'email' => ['required', 'email', Rule::unique('users', 'email')],
//         'nationality' => ['required']
//      ]);

//     $user = User::create([
//         'first_name' => $formFields['firstname'],
//         'last_name' => $formFields['lastname'],
//         'username' => $formFields['username'],
//         'password' => Hash::make($formFields['password']),
//         'date_of_birth' => $formFields['date_of_birth'],
//         'role_type' => $formFields['role_type'], // Save the role in the database
//         'license_acceptance' => $formFields['license_acceptance'], // Add role field
//         'remember_token' => $formFields['remember_token'], // Add role field
//         'email' => $formFields['email'],
//         'nationality' => $formFields['nationality'],

//     ]);

//     return response()->json([
//         'message' => 'Your account has been created',
//         'user'=>$user,
//     ], 201);
// }


//     /**
//      * Display the specified resource.
//      *
//      * @param  \App\Models\user  $user
//      * @return \Illuminate\Http\Response
//      */
//     public function show(user $user)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  \App\Models\user  $user
//      * @return \Illuminate\Http\Response
//      */
//     public function update(Request $request, user $user)
//     {
//         //
//     }

//     /**
//      * Remove the specified resource from storage.
//      *
//      * @param  \App\Models\user  $user
//      * @return \Illuminate\Http\Response
//      */
//     public function destroy(user $user)
//     {
//         //
//     }

//     public function login()
//     {
//         return view('login');
//     }


// public function authenticate(Request $request)
// {
//     $formFields = $request->validate([
//         'email' => ['required', 'email'],
//         'password' => ['required'],
//     ]);

//     if (Auth::attempt($formFields)) {
//         $user = Auth::user();
//         if ($user->role === 'admin') {
//             return response()->json(['message' => 'Logged in as admin',  'user'=>$user,]);
//         } else {
//             return response()->json(['message' => 'Logged in as user',   'user'=>$user,]);
//         }
//     }
//     return response()->json(['error' => 'The provided credentials do not match our records'], 401);
// }


//     public function logout(Request $request)
//     {

//         Auth::logout();

//         $request->session()->invalidate();
//         $request->session()->regenerateToken();

//         return response()->json(['message' => 'You have been logged out']);
//     }











// }



namespace App\Http\Controllers;

use App\Models\user;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('register');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'firstname' => ['required'],
            'lastname' => ['required'],
            'username' => ['required'],
            'password' => ['required'],
            'date_of_birth'=>['required'],
            // 'role_type' => ['required'], // Add role field
            // 'license_acceptance' => ['required'], // Add role field
            // 'remember_token' => ['required'], // Add role field
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'nationality' => ['required']
        ]);

        $user = User::create([
            'first_name' => $formFields['firstname'],
            'last_name' => $formFields['lastname'],
            'username' => $formFields['username'],
            'password' => Hash::make($formFields['password']),
            'date_of_birth' => $formFields['date_of_birth'],
            // 'role_type' => $formFields['role_type'], // Save the role in the database
            // 'license_acceptance' => $formFields['license_acceptance'], // Add role field
            // 'remember_token' => $formFields['remember_token'], // Add role field
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

    /**
     * Show the login form.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function login()
    {
        return view('login');
    }

    /**
     * Authenticate the user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * Logout the user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'You have been logged out']);
    }
}
?>
