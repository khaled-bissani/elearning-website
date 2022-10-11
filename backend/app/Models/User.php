<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory; 
    
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'assignments', 'users_id', 'courses_id')
        ->belongsToMany(Course::class, 'announcments', 'users_id', 'courses_id')
        ->belongsToMany(Course::class, 'assigns', 'users_id', 'courses_id')
        ->belongsToMany(Course::class, 'enrolls', 'users_id', 'courses_id');
    }
}
