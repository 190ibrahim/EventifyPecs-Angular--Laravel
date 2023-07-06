<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_title',
        'product_description',
        'product_price',
        'product_image',
        'product_status',
        'meeting_address',
        'product_type',
        'upload_date',
        'user_id',
        ];
}
