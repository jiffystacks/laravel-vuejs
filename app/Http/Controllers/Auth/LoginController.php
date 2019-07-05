<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    public $successStatus = 200;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('guest')->except('logout');
        //$this->middleware('guest:admin')->except('logout');
        //$this->middleware('guest:driver')->except('logout');
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(Request $request){
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        //Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))
        //Auth::guard('driver')->attempt(['phone' => $request->phone, 'password' => $request->password], $request->get('remember'))
        //Auth::guard('web')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))

        $guard = 'api';
        if(!empty($request->guard)){
            $guard = $request->guard;
        }
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ])) {
            $user = $this->guard($guard)->user();
            $response = [
                'success' => 1,
                'access_token' => $user->createToken('MyApp')->accessToken,
                'user' => $user,
                'message' => __('messages.loggedin'),
            ];

            return response()->json($response, $this->successStatus);
        } else {
            return response()->json([
                'success' => 0,
                'message' => __('messages.invalid_email_pass'),
            ], $this->successStatus);
        }
    }

    public function logout(){
        if (Auth::check()) {
            Auth::user()->token()->revoke();
            return response()->json([
                'success' => 1,
                'message' => __('messages.loggedout'),
            ], $this->successStatus);
        } else {
            return response()->json([
                'success' => 0,
                'message' => __('messages.error_msg', ['error_code' => 'Auth']),
            ], $this->successStatus);
        }
    }

    public function guard($guard = 'api') {
        return Auth::Guard($guard);
    }
}
