<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 // Create a new event
Route::post('/events', [EventsController::class, 'store']);
// Get all events
Route::get('/events', [EventsController::class, 'index']);
Route::get('/reg_events', [EventsController::class, 'eventsCalendar']);
Route::post('/registerEvent', [EventsController::class, 'registerEvent']);

// Get a specific event
Route::get('/events/{id}', [EventsController::class, 'show']);
// Update an event
Route::put('/events/{id}', [EventsController::class, 'update']);
// Delete an event
Route::delete('/events/{id}', [EventsController::class, 'destroy']);



//create signup route
Route::post('/register',[UserController::class,'store']);
//create user post route
//  Route::post('/users',[UserController::class,'store']);
 //create logout route
 Route::get('/logout',[UserController::class,'logout']);
 //show login form
 Route::post('/login',[UserController::class,'authenticate']);
 //submit form
//  Route::post('/users/authenticate',[UserController::class,'authenticate']);
//



// get all categories
Route::get('/categories', [CategoriesController::class, 'index']);

// get all registrations
Route::get('/registeredEvents', [RegisteredEventsController::class, 'getAllRegistrations']);
// get all registrations count
Route::get('/registeredEvents/count', [RegisteredEventsController::class, 'count']);