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
            'email',
            'email_verified_at',
            'password',
            'nationality',
            'age',
            'date_of_birth',
            'student_ID',
            'contact_number',
            'role_type',
            'confirmation_code',
            'confirmation_time',
            'license_acceptance',
            'major_id'
            ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
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

        'age' => 'integer',
        'student_ID' => 'integer',
        'major_id' => 'integer',
        'confirmation_code' => 'integer',
        'license_acceptance' => 'boolean',

    ];


    public function announcements()
{
    return $this->hasMany(Announcement::class);
}

}
