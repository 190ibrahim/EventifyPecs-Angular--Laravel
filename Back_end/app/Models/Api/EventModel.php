<?php

namespace App\Models\Api;

use App\Models\Api\ResponseModel;
use App\Models\Event;

class EventModel extends ResponseModel {
    public string $title;
    public string $description;
    public string $image;
    public string $created;
    public string $startDate;
    public string $endDate;
    public string $status;
    public string $badge;
    public string $ticket;
    public bool $waitingList;
    public int $userId;

    public static function fromEvent(Event $event) : EventModel {
        $viewEvent = new EventModel();
        $viewEvent->title = $event->event_title;
        $viewEvent->description = $event->event_description;
        $viewEvent->image = $event->event_image;
        $viewEvent->created = $event->event_created;
        $viewEvent->startDate = $event->start_date;
        $viewEvent->endDate = $event->end_date;
        $viewEvent->status = $event->event_status;
        $viewEvent->badge = $event->event_badge;
        $viewEvent->ticket = $event->event_ticket;
        $viewEvent->waitingList = $event->waiting_list;
        $viewEvent->userId = $event->user_id;

        $viewEvent->success();

        return $viewEvent;
    }

    public static function fromError(string $message) : EventModel {
        $viewEvent = new EventModel();
        $viewEvent->message = $message;

        return $viewEvent;
    }
}
