<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AddController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\AnnouncmentController;
use App\Http\Controllers\EnrollController;

Route::group(["prefix"=>"v0.1"], function(){
        Route::group(["prefix"=>"authentication"], function(){
            Route::post("/login", [LoginController::class, "logIn"])->name("login"); 
        });
        Route::group(["prefix"=>"add"], function(){
            Route::post("/add_user", [AddController::class, "addUser"])->name("add-user");
            Route::post("/add_course", [AddController::class, "addCourse"])->name("add-course");
            Route::post("/assign", [AddController::class, "assignInstructor"])->name("assign-instructor");
        });
        Route::group(["prefix"=>"assignment"], function(){
            Route::post("/create_assignment", [AssignmentController::class, "createAssignment"])->name("create-assignment");
            Route::post("/view_assignment", [AssignmentController::class, "viewAssignment"])->name("view-assignment");
        });
        Route::group(["prefix"=>"announcment"], function(){
            Route::post("/create_announcment", [AnnouncmentController::class, "createAnnouncment"])->name("create-announcment");
            Route::post("/view_announcment", [AnnouncmentController::class, "viewAnnouncment"])->name("view-announcment");
        });
        Route::group(["prefix"=>"enroll"], function(){
            Route::post("/view_enroll", [EnrollController::class, "viewEnroll"])->name("view-enroll");
        });
});
