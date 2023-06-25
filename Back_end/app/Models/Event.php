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
       'start_date',
        'end_date',
        'event_created',
        'event_location',
        'event_price',
        'event_ticket',
        'start_sale',
        'end_sale',
        'cat_id'
        ];

        public function registeredUsers(): BelongsToMany
        {
            return $this->belongsToMany(User::class, 'registered_events');
        }
        public function category(): BelongsTo
{
    return $this->belongsTo(Categories::class, 'cat_id');
}
    
}
