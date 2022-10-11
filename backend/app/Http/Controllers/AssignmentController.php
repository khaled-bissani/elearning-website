<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;

class AssignmentController extends Controller
{
    function createAssignment(Request $request){
        $user_id=$request->user_id;
        $course_id=$request->course_id;
        $assignment=$request->assignment;

        Assignment::insert([
            'users_id' => $user_id,
            'courses_id' => $course_id,
            'assignment' => $assignment
        ]);

        return response()->json([
            "status" => "Success"
        ]);
    }

    function viewAssignment(Request $request){
        $course_id=$request->course_id;

        $assignment = Assignment::
        where("courses_id",$course_id)
        ->get(['assignment']);

        return response()->json([
            "status" => "Success",
            "assignment"=> $assignment
        ]);
    }
}
