<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\StudentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/add-student', [StudentController::class, 'store']);
Route::get('/fetch-student', [StudentController::class, 'show']);
Route::get('/student-edit/{id}', [StudentController::class, 'edit']);
Route::put('/student-update/{id}', [StudentController::class, 'update']);
Route::put('/student-delete/{id}', [StudentController::class, 'delete']);
Route::get('/student-search', [StudentController::class, 'search']);
//
Route::post('/register-user', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);


Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Logged out']);
});
