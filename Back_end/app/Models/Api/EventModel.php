<?php

namespace App\Models\Api;

use App\Models\Api\ResponseModel;
use App\Models\Event;

class EventModel extends ResponseModel {
    public string $title;
    public string $description;
    public string $startDate;
    public string $endDate;
    public string $created;
    public string $location;
    public string $price;
    public string $ticket;
    public string $startSale;
    public string $endSale;
    public int $catId;

    public static function fromEvent(Event $event) : EventModel {
        $viewEvent = new EventModel();
        $viewEvent->title = $event->event_title;
        $viewEvent->description = $event->event_description;
        $viewEvent->startDate = $event->start_date;
        $viewEvent->endDate = $event->end_date;
        $viewEvent->created = $event->event_created;
        $viewEvent->location = $event->event_location;
        $viewEvent->ticket = $event->event_ticket;
        $viewEvent->startSale = $event->start_sale;
        $viewEvent->endSale = $event->end_sale;
        $viewEvent->catId = $event->cat_id;

        $viewEvent->success();

        return $viewEvent;
    }

    public static function fromError(string $message) : EventModel {
        $viewEvent = new EventModel();
        $viewEvent->message = $message;

        return $viewEvent;
    }
}
// php artisan make:controller CategoriesController --api