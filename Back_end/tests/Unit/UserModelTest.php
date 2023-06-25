<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Api\UserModel;
use App\Models\User;
use App\Models\Api\ResponseState;
use Exception;

class UserModelTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */


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
    public function test_that_fromUser_fills_correct_properties()
    {
        // Arrange
        $user = User::factory()->make([
            'first_name' => 'Test',
            'last_name' => 'Case',
            'username' => 'testcase',
            'role_type' => 'student',
            'date_of_birth' => '1973-06-09',
            'license_acceptance' => true,
            'email' => 'testcase@sugar.com',
            'nationality' => 'American',

        ]);

        // Act
        $userResponseModel = UserModel::fromUser($user);

        // Assert
        $this->assertInstanceOf(UserModel::class, $userResponseModel);
        $this->assertEquals('testcase', $userResponseModel->username);
        $this->assertEquals('testcase@sugar.com', $userResponseModel->email);
        $this->assertEquals('Test Case', $userResponseModel->name);
        $this->assertEquals('1973-06-09', $userResponseModel->dob);
        $this->assertEquals(true, $userResponseModel->license_acceptance);
        $this->assertEquals('American', $userResponseModel->nationality);
        $this->assertEquals('student', $userResponseModel->role_type);
        $this->assertEquals(ResponseState::Success, $userResponseModel->state);
    }

    public function test_that_fromError_fills_correct_properties()
    {
        // Arrange
        $errorMsg = 'Something happened';

        // Act
        $userResponseModel = UserModel::fromError($errorMsg);

        // Assert
        $this->assertInstanceOf(UserModel::class, $userResponseModel);
        $this->assertFalse(isset($userResponseModel->email));
        $this->assertFalse(isset($userResponseModel->name));
        $this->assertFalse(isset($userResponseModel->dob));
        $this->assertFalse(isset($userResponseModel->license_acceptance));
        $this->assertFalse(isset($userResponseModel->nationality));
        $this->assertFalse(isset($userResponseModel->role_type));
        $this->assertEquals(ResponseState::Error, $userResponseModel->state);
        $this->assertEquals($errorMsg, $userResponseModel->message);
    }
}
