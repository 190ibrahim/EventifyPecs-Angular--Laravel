<?php

// namespace App\Models;

// //use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Foundation\Auth\User as Authenticatable;
// use Illuminate\Notifications\Notifiable;
// use Laravel\Sanctum\HasApiTokens;











// class User extends Authenticatable
// {
//     use HasApiTokens, HasFactory, Notifiable;

//     /**
//      * The attributes that are mass assignable.
//      *
//      * @var array<int, string>
//     */
//     protected $fillable = [
//             'first_name',
//             'last_name',
//             'username',
//             'password',
//             'date_of_birth',
//             'role_type',
//             'license_acceptance',
//             'remember_token',
//             'email',
//             'email_verified_at',
//             'nationality',
//             'confirmation_code'
//             ];
//     /**
//      * The attributes that should be hidden for serialization.
//      *
//      * @var array<int, string>
//      */
//     protected $hidden = [
//         'password',
//         'remember_token'
//     ];

//     /**
//      * The attributes that should be cast meaning that they will be automatically converted to the given type.
//      *
//      * @var array<string, string>
//      */

//      //below is up for review
//     protected $casts = [
//         'email_verified_at' => 'datetime',
//         'date_of_birth' => 'datetime',
//         'confirmation_time' => 'datetime',

//         'confirmation_code' => 'integer',
//         'license_acceptance' => 'boolean',

//     ];
//     public function registeredEvents(): BelongsToMany
//     {
//         return $this->belongsToMany(Event::class, 'registered_events');
//     }


//     public function announcements()
// {
//     return $this->hasMany(Announcement::class);
// }
// }



namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * User Model
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $username
 * @property string $password
 * @property \DateTime $date_of_birth
 * @property string $role_type
 * @property bool $license_acceptance
 * @property string $remember_token
 * @property string $email
 * @property \DateTime $email_verified_at
 * @property string $nationality
 * @property int $confirmation_code
 * @property \DateTime $confirmation_time
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Event[] $registeredEvents
 * @property-read int|null $registered_events_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Announcement[] $announcements
 * @property-read int|null $announcements_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereConfirmationCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereConfirmationTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLicenseAcceptance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereNationality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRoleType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'username',
        'password',
        'date_of_birth',
        'role_type',
        'license_acceptance',
        'remember_token',
        'email',
        'email_verified_at',
        'nationality',
        'confirmation_code'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'datetime',
        'confirmation_time' => 'datetime',
        'confirmation_code' => 'integer',
        'license_acceptance' => 'boolean',
    ];

    /**
     * Get the events that the user has registered for.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function registeredEvents(): BelongsToMany
    {
        return $this->belongsToMany(Event::class, 'registered_events');
    }

    /**
     * Get the announcements that the user has created.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }
}