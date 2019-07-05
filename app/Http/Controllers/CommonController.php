<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommonController extends Controller
{
    public $successStatus = 200;
    public function customer(){
        $customer = Auth::user();

        return response()->json([
            'success' => 0,
            'data' => $customer
        ], $this->successStatus);
    }
}
