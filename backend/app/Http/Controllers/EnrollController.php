<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enroll;

class EnrollController extends Controller
{
    function viewEnroll(Request $request){  
        $user_id=$request->user_id;

        $enroll = Enroll::
        where("users_id",$user_id)
        ->get(['courses_id']);

        return response()->json([
            "status" => "Success",
            "assignment"=> $enroll
        ]);
    }
}
