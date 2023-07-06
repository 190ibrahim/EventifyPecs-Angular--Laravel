<?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;




// class Event extends Model
// {
//     use HasFactory;
//     protected $fillable = [
//         'event_title',
//         'event_description',
//        'start_date',
//         'end_date',
//         'event_created',
//         'event_location',
//         'event_price',
//         'event_ticket',
//         'start_sale',
//         'end_sale',
//         'cat_id'
//         ];

//         public function registeredUsers(): BelongsToMany
//         {
//             return $this->belongsToMany(User::class, 'registered_events');
//         }
//         public function category(): BelongsTo
// {
//     return $this->belongsTo(Categories::class, 'cat_id');
// }
    
// }






namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Event Model
 *
 * @property int $id
 * @property string $event_title
 * @property string $event_description
 * @property \DateTime $start_date
 * @property \DateTime $end_date
 * @property \DateTime $event_created
 * @property string $event_location
 * @property float $event_price
 * @property int $event_ticket
 * @property \DateTime $start_sale
 * @property \DateTime $end_sale
 * @property int $cat_id
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $registeredUsers
 * @property-read int|null $registered_users_count
 * @property-read \App\Models\Categories $category
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event query()
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereCatId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEventCreated($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEventDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEventLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEventPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEventTicket($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEventTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereStartSale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEndSale($value)
 * @mixin \Eloquent
 */
class Event extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    /**
     * Get the users that have registered for the event.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function registeredUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'registered_events');
    }

    /**
     * Get the category that the event belongs to.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Categories::class, 'cat_id');
    }
}