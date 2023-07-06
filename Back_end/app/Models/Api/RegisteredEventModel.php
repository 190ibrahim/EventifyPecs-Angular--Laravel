<?php

namespace App\Models\Api;

use App\Models\Api\ResponseModel;
use App\Models\RegisteredEvents;
use App\Models\User;
use App\Models\Event;

class RegisteredEventModel extends ResponseModel {
    public int $eventId;
    public int $userId;

    public static function fromRegisteredEvent(RegisteredEvents $registeredEvent) : RegisteredEventModel {
        $viewRegisteredEvent = new RegisteredEventModel();
        $viewRegisteredEvent->eventId = $registeredEvent->event_id;
        $viewRegisteredEvent->userId = $registeredEvent->user_id;

        $viewRegisteredEvent->success();

        return $viewRegisteredEvent;
    }

    public static function fromError(string $message) : RegisteredEventModel {
        $viewRegisteredEvent = new RegisteredEventModel();
        $viewRegisteredEvent->message = $message;

        return $viewRegisteredEvent;
    }
}