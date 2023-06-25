<?php

// namespace App\Http\Controllers;

// use App\Models\Event;
// use Illuminate\Http\Request;
// use Validator;
// use Illuminate\Support\Facades\DB;
//   class EventsController extends Controller
// {
//     public function index()
//     {
//         $events = Event::all();

//         return response()->json($events);
//     }

//     public function eventsCalendar()
//     {
//         $events = DB::table('registered_events')->get();
//         $events =  DB::table('registered_events')
//         ->join('users', 'registered_events.user_id', '=', 'users.id')
//         ->select('registered_events.*', 'users.*')
//         ->get();

//         return response()->json(['message' => 'Event registered successfully', 'events' => $events], 201);
//     }










//     public function registerEvent(Request $request){

//         $validator = Validator::make($request->all(), [

//         ]);

//         if ($validator->fails()) {
//         return response()->json($validator->errors()->toJson(), 400);
//         }


//         // Insert the event data into the `registered_events` table using DB
//         DB::table('registered_events')->insert($request->all());

//         return response()->json(['message' => 'Event registered successfully'], 200);

//         }





//     public function store(Request $request)
//     {
//         $data = $request->validate([
//             'event_title' => 'required',
//             'event_description' => 'required',
//             'start_date' => 'required',
//             'end_date' => 'required',
//             'event_created' => 'required',
//             'event_location' => 'required',
//             'event_price' => 'required',
//             'event_ticket' => 'required',
//             'start_sale' => 'required',
//             'end_sale' => 'required',
//             'cat_id' => 'required'
//                  ]);

//         $event = Event::create($data);
//         return response()->json(['id' => $event->id], 201);
//     }

//     public function show($id)
//     {
//         $event = Event::findOrFail($id);
//         return response()->json($event);
//     }






//     public function update(Request $request, $id)
//     {
//         $data = $request->validate([
//             'event_title' => 'required',
//             'event_description' => 'required',
//             'start_date' => 'required',
//             'end_date' => 'required',
//             'event_created' => 'required',
//             'event_location' => 'required',
//             'event_price' => 'required',
//             'event_ticket' => 'required',
//             'start_sale' => 'required',
//             'end_sale' => 'required',
//             'cat_id' => 'required'
//         ]);

//         $event = DB::table('events')->where('id', $id)->update($data);

//         return response()->json(['message' => 'Event updated successfully']);
//     }

//     public function destroy($id)
//     {
//         $event = Event::findOrFail($id);
//         $event->delete();

//         return response()->json(['message' => 'Event deleted successfully']);
//     }
// }



<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

/**
 * Class EventsController
 *
 * @package App\Http\Controllers
 */
class EventsController extends Controller
{
    /**
     * Retrieves and returns all events from the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $events = Event::all();

        return response()->json($events);
    }

    /**
     * Retrieves and returns all registered events along with user data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function eventsCalendar()
    {
        $events =  DB::table('registered_events')
        ->join('users', 'registered_events.user_id', '=', 'users.id')
        ->select('registered_events.*', 'users.*')
        ->get();

        return response()->json(['message' => 'Event registered successfully', 'events' => $events], 201);
    }

    /**
     * Registers a new event using request data.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function registerEvent(Request $request)
    {
        $validator = Validator::make($request->all(), []);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        DB::table('registered_events')->insert($request->all());

        return response()->json(['message' => 'Event registered successfully'], 200);
    }

    /**
     * Validates the request and creates a new event.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'event_title' => 'required',
            'event_description' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'event_created' => 'required',
            'event_location' => 'required',
            'event_price' => 'required',
            'event_ticket' => 'required',
            'start_sale' => 'required',
            'end_sale' => 'required',
            'cat_id' => 'required'
        ]);

        $event = Event::create($data);

        return response()->json(['id' => $event->id], 201);
    }

    /**
     * Retrieves and returns a specific event by id.
     *
     * @param  int  $id Event id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $event = Event::findOrFail($id);

        return response()->json($event);
    }

    /**
     * Validates the request and updates a specific event by id.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id Event id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'event_title' => 'required',
            'event_description' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'event_created' => 'required',
            'event_location' => 'required',
            'event_price' => 'required',
            'event_ticket' => 'required',
            'start_sale' => 'required',
            'end_sale' => 'required',
            'cat_id' => 'required'
        ]);

        $event = DB::table('events')->where('id', $id)->update($data);

        return response()->json(['message' => 'Event updated successfully']);
    }

    /**
     * Deletes a specific event by id.
     *
     * @param  int  $id Event id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
}