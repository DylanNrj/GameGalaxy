<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Game;
use Symfony\Component\HttpFoundation\Response;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::all();
        return response()->json(["result"=>$reviews], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
       $review = new Review();

       $game = Game::where('name', $request->game)->first();

        $review->create([
            'game' => $request->game,
            'gameId' => $game->id,
            'user' => $request->user,
            'rating'=> $request->rating,
            'comment' => $request->comment
        ]);

        $review->save();

        return response()->json(["result"=>$review], Response::HTTP_CREATED);
    }

    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();
        return response()->json(["result"=>$review], Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);

        $review->game = $request->game;
        $review->user = $request->user;
        $review->rating = $request->rating;
        $review->comment = $request->comment;

        $review->save();
        return response()->json(["result"=>$review], Response::HTTP_OK);
    }
}
