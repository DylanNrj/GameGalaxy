<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;
class Review extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'reviews';

    protected $fillable = [
        'game',
        'gameId',
        'user',
        'rating',
        'comment'
    ];
}
