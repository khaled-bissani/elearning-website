<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    function logIn(Request $request){
        $user_type= $request->types_id;
        
        $login = User::
        where("types_id",(int)$user_type)
        ->get(['email','password']);

        return response()->json([
            "status" => "Success",
            "data" => $login
        ]);
    }
}
