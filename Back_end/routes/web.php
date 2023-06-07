<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AnnouncementsController;
use App\Models\Listing;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',function (){
    return view('index');
});

Route::get('/hello', function(){
    return 'Hello';
});

Route::get('/posts/{id}', function ($id){
    return response('Posts'. $id);
});

Route::get('/lists',function(){
    return view('listings',[
        'heading'=>'Latest Listings',
        'listings'=> Listing::all() 
    ]);
});
//How does the foolowing route works
//the following route is a dynamic route that takes the id from the url and passes it to the view listing1
//
Route::get('/lists/{id}',function($id){
            return view('listing1',[
             'listing'=>Listing::find($id)   
            ]);
});



//create signup route
Route::get('/register',[UserController::class,'create']);

//create user post route
 Route::post('/users',[UserController::class,'store']);



 
 //create logout route
 Route::get('/logout',[UserController::class,'logout']);

 //show login form
 Route::get('/login',[UserController::class,'login']);

 //submit form
 Route::post('/users/authenticate',[UserController::class,'authenticate']);




 Route::get('/',[AnnouncementsController ::class,'index']);

 Route::post('/announcements',[AnnouncementsController ::class,'store']);