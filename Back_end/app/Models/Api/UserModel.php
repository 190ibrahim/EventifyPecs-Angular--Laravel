<?php

namespace App\Models\Api;

use App\Models\Api\ResponseModel;
use App\Models\User;
$table->id();
$table->string('first_name');
$table->string('last_name');
$table->string('username');
$table->string('password');
$table->date('date_of_birth');
$table->string('role_type')->default('user');
$table->boolean('license_acceptance')->default(0);
$table->string('remember_token')->nullable();
$table->timestamps();
$table->string('email');
$table->timestamp('email_verified_at')->nullable();
$table->string('nationality');
$table->integer('confirmation_code')->nullable();
$table->timestamp('confirmation_time')->nullable();
class UserModel extends ResponseModel {
    public string $name;
    public string $username;
    public string $email;
    public string $dob;
    public string $nationality;
    public string $role_type;
    public bool $license_acceptance;

    public static function fromUser(User $user) : UserModel {
        $viewUser = new UserModel();
        $viewUser->name = $user->first_name . ' ' . $user->last_name;
        $viewUser->username = $user->username;
        $viewUser->dob = explode(' ', $user->date_of_birth)[0];
        $viewUser->email = $user->email;
        $viewUser->nationality = $user->nationality;
        $viewUser->role_type = $user->role_type;
        $viewUser->license_acceptance = $user->license_acceptance;

        $viewUser->success();

        return $viewUser;
    }

    public static function fromError(string $message) : UserModel {
        $viewUser = new UserModel();
        $viewUser->message = $message;

        return $viewUser;
    }
}
