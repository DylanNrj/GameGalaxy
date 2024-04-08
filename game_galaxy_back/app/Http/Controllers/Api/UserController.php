<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(["result"=>$users], Response::HTTP_OK);
    }

    public function createUser(Request $request)
    {
        $user = new User();
        $user->user = $request->user;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json(["result"=>$user], Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        $user = User::where('user', $request->user)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(["message"=>"Credenciales incorrectas"], Response::HTTP_UNAUTHORIZED);
        }
        return response()->json(["result"=>"Logueado con exito"], Response::HTTP_OK);
    }
}
