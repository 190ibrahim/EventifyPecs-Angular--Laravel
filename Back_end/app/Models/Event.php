<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'event_title',
        'event_description',
        'event_image',
        'event_created',
        'start_date',
        'end_date',
        'event_status',
        'event_badge',
        'event_ticket',
        'waiting_list',
        'user_id',
        ];

      
}
