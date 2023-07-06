<?php

namespace App\Http\Controllers;

use App\Models\RegisteredEvent;
use App\Models\Api\RegisteredEventModel;
use Illuminate\Http\Request;

class RegisteredEventController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $registeredEvents = RegisteredEvent::all();

        $registeredEventViews = [];
        foreach ($registeredEvents as $registeredEvent) {
            $registeredEventViews[] = RegisteredEventModel::fromRegisteredEvent($registeredEvent);
        }

        return response()->json($registeredEventViews);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $registeredEvent = RegisteredEvent::create($request->all());

        if ($registeredEvent) {
            return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent), 201);
        } else {
            return response()->json(RegisteredEventModel::fromError('Failed to register event'), 500);
        }
    }

    // Display the specified resource.
    public function show($id)
    {
        $registeredEvent = RegisteredEvent::find($id);

        if ($registeredEvent) {
            return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent));
        } else {
            return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
        }
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $registeredEvent = RegisteredEvent::find($id);

        if ($registeredEvent) {
            $registeredEvent->update($request->all());
            return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent));
        } else {
            return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
        }
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $registeredEvent = RegisteredEvent::find($id);

        if ($registeredEvent) {
            $registeredEvent->delete();
            return response()->json(['message' => 'Registered event deleted successfully']);
        } else {
            return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
        }
    }

    public function getRegistrationCount($eventId)
    {
        $registrationCount = RegisteredEvent::findOrFail($eventId)->registrations()->count();

        return response()->json(['count' => $registrationCount]);
    }
}