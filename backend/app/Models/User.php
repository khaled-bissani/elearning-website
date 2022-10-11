<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
// use Illuminate\Database\Eloquent\Model;

class User extends Eloquent
{
    use HasFactory; 

    protected $connection = 'mongodb';

    protected $fillable = [
        'id','full_name', 'email','password','types_id'
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'assignments', 'users_id', 'courses_id')
        ->belongsToMany(Course::class, 'announcments', 'users_id', 'courses_id')
        ->belongsToMany(Course::class, 'assigns', 'users_id', 'courses_id')
        ->belongsToMany(Course::class, 'enrolls', 'users_id', 'courses_id');
    }
}
