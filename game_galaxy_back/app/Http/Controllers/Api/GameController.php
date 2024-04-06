<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GameController extends Controller
{
    public function index()
    {
        $games = Game::all();
        return response()->json($games, Response::HTTP_OK);
    }
}
