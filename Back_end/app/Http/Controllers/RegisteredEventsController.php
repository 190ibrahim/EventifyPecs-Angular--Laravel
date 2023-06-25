<?php

// namespace App\Http\Controllers;

// use App\Models\RegisteredEvent;
// use App\Models\Api\RegisteredEventModel;
// use Illuminate\Http\Request;

// class RegisteredEventController extends Controller
// {
//     // Display a listing of the resource.
//     public function index()
//     {
//         $registeredEvents = RegisteredEvent::all();

//         $registeredEventViews = [];
//         foreach ($registeredEvents as $registeredEvent) {
//             $registeredEventViews[] = RegisteredEventModel::fromRegisteredEvent($registeredEvent);
//         }

//         return response()->json($registeredEventViews);
//     }

//     // Store a newly created resource in storage.
//     public function store(Request $request)
//     {
//         $registeredEvent = RegisteredEvent::create($request->all());

//         if ($registeredEvent) {
//             return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent), 201);
//         } else {
//             return response()->json(RegisteredEventModel::fromError('Failed to register event'), 500);
//         }
//     }

//     // Display the specified resource.
//     public function show($id)
//     {
//         $registeredEvent = RegisteredEvent::find($id);

//         if ($registeredEvent) {
//             return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent));
//         } else {
//             return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
//         }
//     }

//     // Update the specified resource in storage.
//     public function update(Request $request, $id)
//     {
//         $registeredEvent = RegisteredEvent::find($id);

//         if ($registeredEvent) {
//             $registeredEvent->update($request->all());
//             return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent));
//         } else {
//             return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
//         }
//     }

//     // Remove the specified resource from storage.
//     public function destroy($id)
//     {
//         $registeredEvent = RegisteredEvent::find($id);

//         if ($registeredEvent) {
//             $registeredEvent->delete();
//             return response()->json(['message' => 'Registered event deleted successfully']);
//         } else {
//             return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
//         }
//     }
// }









/**
 * Class RegisteredEventController
 * @package App\Http\Controllers
 */
class RegisteredEventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registeredEvents = RegisteredEvent::all();

        $registeredEventViews = [];
        foreach ($registeredEvents as $registeredEvent) {
            $registeredEventViews[] = RegisteredEventModel::fromRegisteredEvent($registeredEvent);
        }

        return response()->json($registeredEventViews);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $registeredEvent = RegisteredEvent::create($request->all());

        if ($registeredEvent) {
            return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent), 201);
        } else {
            return response()->json(RegisteredEventModel::fromError('Failed to register event'), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $registeredEvent = RegisteredEvent::find($id);

        if ($registeredEvent) {
            return response()->json(RegisteredEventModel::fromRegisteredEvent($registeredEvent));
        } else {
            return response()->json(RegisteredEventModel::fromError('Registered event not found'), 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
 * Returns the total number of registered events.
 *
 * @return \Illuminate\Http\JsonResponse
 */

    public function count()
{
    $totalRegistrations = RegisteredEvents::count();

    return response()->json(['totalRegistrations' => $totalRegistrations], Response::HTTP_OK);
}





    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    
    public function getAllRegistrations()
    {
        $registeredEvents = RegisteredEvents::with('user', 'event')->get();

        return response()->json(['registeredEvents' => $registeredEvents], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
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
}
?>