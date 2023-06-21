<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = [
        'service_title',
        'price_per_hour',
        'service_address',
        'service_type',
        'categories_id',
        'user_id'
        ];
}
