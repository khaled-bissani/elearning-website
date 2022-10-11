<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AddController extends Controller
{
    function addUser(Request $request){
        $fullname = $request->fullname;
        $email = $request->email;
        $password = $request->password;
        $types_id=$request->types_id;
        
        $add = User::
        insert([
            'full_name' => $fullname,
            'email' => $email,
            'password' => $password,
            'types_id' => (int)$types_id,
        ]);

        return response()->json([
            "status" => "Success"
        ]);
    }
}
