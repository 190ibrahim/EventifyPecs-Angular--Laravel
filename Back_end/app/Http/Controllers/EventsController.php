<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;
  class EventsController extends Controller
{
    public function index()
    {
        $events = Event::all();

        return response()->json($events);
    }

    public function eventsCalendar()
    {
        $events = DB::table('reg_events')->get();
        $events =  DB::table('reg_events')
        ->join('users', 'reg_events.user_id', '=', 'users.id')
        ->select('reg_events.*', 'users.*')
        ->get();

        return response()->json(['message' => 'Event registered successfully', 'events' => $events], 201);
    }


    public function registerEvent(Request $request){

        $validator = Validator::make($request->all(), [
        'event_title' => 'required',
        'event_description' => 'required',
        'start_date' => 'required',
        'end_date' => 'required',
        'user_id' => 'required',
        
        ]);
        
        if ($validator->fails()) {
        return response()->json($validator->errors()->toJson(), 400);
        }
        
        
        // Insert the event data into the `reg_events` table using DB
        DB::table('reg_events')->insert($request->all());
        
        return response()->json(['message' => 'Event registered successfully'], 200);
        
        }
    public function store(Request $request)
    {
        $data = $request->validate([
            'event_title' => 'required',
            'event_description' => 'required',
            'event_image' => 'required',
            'event_created' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'event_badge' => 'required',
            'event_ticket' => 'required',
            'waiting_list' => 'required',
            'event_status' => 'required',
            'price' => 'required',
         ]);

        $event = Event::create($data);
        return response()->json(['id' => $event->id], 201);
    }

    public function show($id)
    {
        $event = Event::findOrFail($id);
        return response()->json($event);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'event_title' => 'required',
            'event_description' => 'required',
            'event_image' => 'required',
            'event_created' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'event_badge' => 'required',
            'event_ticket' => 'required',
            'waiting_list' => 'required',
            'event_status' => 'required',
            'price' => 'required',
        ]);

        $event = DB::table('events')->where('id', $id)->update($data);

        return response()->json(['message' => 'Event updated successfully']);
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
}
