<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/games', [GameController::class, 'index']);

Route::controller(ReviewController::class)->group(function (){
    Route::get('/reviews', [ReviewController::class, 'index']);
    Route::post('/review', [ReviewController::class, 'store']);
    Route::delete('/review/{id}', [ReviewController::class, 'destroy']);
    Route::put('/review/{id}', [ReviewController::class, 'update']);
});

Route::post('/user', [UserController::class, 'createUser']);
Route::post('/login', [UserController::class, 'login']);
