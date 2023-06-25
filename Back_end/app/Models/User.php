<?php

namespace App\Models;

//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

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
     * The attributes that should be cast meaning that they will be automatically converted to the given type.
     *
     * @var array<string, string>
     */

     //below is up for review
    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'datetime',
        'confirmation_time' => 'datetime',

        'confirmation_code' => 'integer',
        'license_acceptance' => 'boolean',

    ];
    public function registeredEvents(): BelongsToMany
    {
        return $this->belongsToMany(Event::class, 'registered_events');
    }


    public function announcements()
{
    return $this->hasMany(Announcement::class);
}
}