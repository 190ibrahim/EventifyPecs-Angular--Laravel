<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Api\EventModel;
use App\Models\Event;
use App\Models\Api\ResponseState;
use Exception;

class EventModelTest extends TestCase
{
    public function test_that_fromEvent_fills_correct_properties()
    {
        // Arrange
        $event = Event::factory()->make([
            'event_title' => 'Test Event',
            'event_description' => 'This is a test event',
            'event_image' => 'test.jpg',
            'event_created' => '2023-06-23',
            'start_date' => '2023-07-01',
            'end_date' => '2023-07-10',
            'event_status' => 'active',
            'event_badge' => 'badge.jpg',
            'event_ticket' => 'ticket.jpg',
            'waiting_list' => true,
            'price' => 0.00,
            'user_id' => 1
        ]);

        // Act
        $eventResponseModel = EventModel::fromEvent($event);

        // Assert
        $this->assertInstanceOf(EventModel::class, $eventResponseModel);
        $this->assertEquals('Test Event', $eventResponseModel->title);
        $this->assertEquals('This is a test event', $eventResponseModel->description);
        $this->assertEquals('test.jpg', $eventResponseModel->image);
        $this->assertEquals('2023-06-23', $eventResponseModel->created);
        $this->assertEquals('2023-07-01', $eventResponseModel->startDate);
        $this->assertEquals('2023-07-10', $eventResponseModel->endDate);
        $this->assertEquals('active', $eventResponseModel->status);
        $this->assertEquals('badge.jpg', $eventResponseModel->badge);
        $this->assertEquals('ticket.jpg', $eventResponseModel->ticket);
        $this->assertEquals(true, $eventResponseModel->waitingList);
        $this->assertEquals(0.00, $eventResponseModel->price);
        $this->assertEquals(1, $eventResponseModel->userId);
        $this->assertEquals(ResponseState::Success, $eventResponseModel->state);
    }

    public function test_that_fromError_fills_correct_properties()
    {
        // Arrange
        $errorMsg = 'Something happened';

        // Act
        $eventResponseModel = EventModel::fromError($errorMsg);

        // Assert
        $this->assertInstanceOf(EventModel::class, $eventResponseModel);
        $this->assertFalse(isset($eventResponseModel->title));
        $this->assertFalse(isset($eventResponseModel->description));
        $this->assertFalse(isset($eventResponseModel->image));
        $this->assertFalse(isset($eventResponseModel->created));
        $this->assertFalse(isset($eventResponseModel->startDate));
        $this->assertFalse(isset($eventResponseModel->endDate));
        $this->assertFalse(isset($eventResponseModel->status));
        $this->assertFalse(isset($eventResponseModel->badge));
        $this->assertFalse(isset($eventResponseModel->ticket));
        $this->assertFalse(isset($eventResponseModel->waitingList));
        $this->assertFalse(isset($eventResponseModel->price)); // Floats are not set by default
        $this->assertFalse(isset($eventResponseModel->userId));
        $this->assertEquals(ResponseState::Error, $eventResponseModel->state);
        $this->assertEquals($errorMsg, $eventResponseModel->message);
    }
}
