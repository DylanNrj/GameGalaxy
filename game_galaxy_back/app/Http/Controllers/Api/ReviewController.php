<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;
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
       $review = new review();

        $review->game = $request->game;
        $review->user = $request->user;
        $review->rating = $request->rating;
        $review->comment = $request->comment;

        $review->save();

        return response()->json(["result"=>$review], Response::HTTP_CREATED);
    }

    public function destroy($id)
    {
      
    }

    public function update(Request $request, $id)
    {
       
    }
}
