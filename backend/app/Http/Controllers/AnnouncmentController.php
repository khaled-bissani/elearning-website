<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcment;

class AnnouncmentController extends Controller
{
    function createAnnouncment(Request $request){
        $user_id=$request->user_id;
        $course_id=$request->course_id;
        $announcment=$request->announcment;

        Announcment::insert([
            'users_id' => $user_id,
            'courses_id' => $course_id,
            'announcment' => $announcment
        ]);

        return response()->json([
            "status" => "Success"
        ]);
    }

    function viewAnnouncment(Request $request){
        $course_id=$request->course_id;

        $announcment = Announcment::
        where("courses_id",$course_id)
        ->get(['announcment']);

        return response()->json([
            "status" => "Success",
            "assignment"=> $announcment
        ]);
    }
}
