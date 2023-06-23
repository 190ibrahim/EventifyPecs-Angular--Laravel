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
    public function test_that_fromUser_fills_correct_properties()
    {
        // Arrange
        $user = User::factory()->make([
            'first_name' => 'Test',
            'last_name' => 'Case',
            'username' => 'testcase',
            'email' => 'testcase@sugar.com',
            'date_of_birth' => '1973-06-09',
            'nationality' => 'American',
            'age' => 50,
            'student_ID' => 12345,
            'contact_number' => '1234567890',
            'role_type' => 'student',
            'license_acceptance' => true,
            'major_id' => 1
        ]);

        // Act
        $userResponseModel = UserModel::fromUser($user);

        // Assert
        $this->assertInstanceOf(UserModel::class, $userResponseModel);
        $this->assertEquals('testcase@sugar.com', $userResponseModel->email);
        $this->assertEquals('Test Case', $userResponseModel->name);
        $this->assertEquals('1973-06-09', $userResponseModel->dob);
        $this->assertEquals(true, $userResponseModel->license_acceptance);
        $this->assertEquals('American', $userResponseModel->nationality);
        $this->assertEquals(50, $userResponseModel->age);
        $this->assertEquals(12345, $userResponseModel->student_ID);
        $this->assertEquals('1234567890', $userResponseModel->contact_number);
        $this->assertEquals('student', $userResponseModel->role_type);
        $this->assertEquals(1, $userResponseModel->major_id);
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
        $this->assertFalse(isset($userResponseModel->age));
        $this->assertFalse(isset($userResponseModel->student_ID));
        $this->assertFalse(isset($userResponseModel->contact_number));
        $this->assertFalse(isset($userResponseModel->role_type));
        $this->assertFalse(isset($userResponseModel->major_id));
        $this->assertEquals(ResponseState::Error, $userResponseModel->state);
        $this->assertEquals($errorMsg, $userResponseModel->message);
    }
}
