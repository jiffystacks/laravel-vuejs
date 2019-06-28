<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Driver extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $guard = 'driver';

    protected $fillable = [
        'name', 'phone', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
