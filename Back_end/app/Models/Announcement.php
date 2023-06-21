<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        'announcement_title',
        'announcement_content',
        'badges',
        'user_id',
        'comment_id'

        ];

        public function user()
{
    return $this->belongsTo(User::class);
}

}
