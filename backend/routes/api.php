<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AddController;

Route::group(["prefix"=>"v0.1"], function(){
        Route::group(["prefix"=>"authentication"], function(){
            Route::post("/login", [LoginController::class, "logIn"])->name("login"); 
        });
        Route::group(["prefix"=>"add"], function(){
            Route::post("/add_user", [AddController::class, "addUser"])->name("add-user");
            Route::post("/add_course", [AddController::class, "addCourse"])->name("add-course");
            Route::post("/assign", [AddController::class, "assignInstructor"])->name("assign-instructor");
        });
});
