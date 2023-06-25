<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{

    protected $fillable = [
        'cat_title'
    ];


    public function category(): BelongsTo
{
    return $this->belongsTo(Categories::class, 'cat_id');
}


public function events(): HasMany
{
    return $this->hasMany(Event::class);
}
}
