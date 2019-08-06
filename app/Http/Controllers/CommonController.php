<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use App\Models\User;

class CommonController extends Controller
{
    public $successStatus = 200;
    public function user(){
        $customer = Auth::user();

        return response()->json([
            'success' => 0,
            'data' => $customer
        ], $this->successStatus);
    }

    public function getDashboard(){
        return response()->json([
            'success' => 0,
            'data' => [
                'users' => User::count(),
                'drivers' => Driver::count()
            ]
        ], $this->successStatus);
    }
}
