<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;
use App\Models\Assign;

class AddController extends Controller
{
    function addUser(Request $request){
        $fullname = $request->fullname;
        $email = $request->email;
        $password = $request->password;
        $types_id=$request->types_id;
        
        User::insert([
            'full_name' => $fullname,
            'email' => $email,
            'password' => $password,
            'types_id' => (int)$types_id,
        ]);

        return response()->json([
            "status" => "Success"
        ]);
    }

    function addCourse(Request $request){
        $course_code = $request->course_code;
        $course_name = $request->course_name;
        $course_date = $request->course_date;
        $id=$request->id;
        
        Course::insert([
            'id'=>$id,
            'course_code' => $course_code,
            'course_name' => $course_name,
            'course_date' => $course_date
        ]);

        return response()->json([
            "status" => "Success"
        ]);
    }

    function assignInstructor(Request $request){
        $user_id=$request->user_id;
        $course_id=$request->course_id;

        Assign::insert([
            'users_id' => $user_id,
            'courses_id' => $course_id
        ]);

        return response()->json([
            "status" => "Success"
        ]);
    }
}
