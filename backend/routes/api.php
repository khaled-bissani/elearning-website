<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

Route::group(["prefix"=>"v0.1"], function(){
        Route::group(["prefix"=>"authentication"], function(){
            Route::post("/login", [LoginController::class, "logIn"])->name("login"); 
        });    
});
