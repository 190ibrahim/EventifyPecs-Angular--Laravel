<?php

namespace App\Models\Api;

use App\Models\Api\ResponseModel;
use App\Models\User;

class UserModel extends ResponseModel {
    public string $name;
    public string $username;
    public string $email;
    public string $dob;
    public string $nationality;
    public int $age;
    public int $student_ID;
    public string $contact_number;
    public string $role_type;
    public bool $license_acceptance;
    public int $major_id;

    public static function fromUser(User $user) : UserModel {
        $viewUser = new UserModel();
        $viewUser->name = $user->first_name . ' ' . $user->last_name;
        $viewUser->username = $user->username;
        $viewUser->email = $user->email;
        $viewUser->dob = explode(' ', $user->date_of_birth)[0];
        $viewUser->nationality = $user->nationality;
        $viewUser->age = $user->age;
        $viewUser->student_ID = $user->student_ID;
        $viewUser->contact_number = $user->contact_number;
        $viewUser->role_type = $user->role_type;
        $viewUser->license_acceptance = $user->license_acceptance;
        $viewUser->major_id = $user->major_id;

        $viewUser->success();

        return $viewUser;
    }

    public static function fromError(string $message) : UserModel {
        $viewUser = new UserModel();
        $viewUser->message = $message;

        return $viewUser;
    }
}
