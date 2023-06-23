<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegisteredEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'user_id',
    ];

    // Define the relationship with the User model
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Define the relationship with the Event model
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
