<?php
/**
 * Class RegisteredEvent
 * @package App\Models
 *
 * @property int $id
 * @property int $event_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 *
 * @property-read \App\Models\User $user
 * @property-read \App\Models\Event $event
 */
class RegisteredEvent extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'event_id',
        'user_id',
    ];

    /**
     * Get the user that registered for the event.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the event that was registered for.
     */
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
?>