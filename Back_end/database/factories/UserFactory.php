<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' =>$this -> faker -> firstName(),
            'last_name' => $this -> faker -> lastName(),
            'username' => $this -> faker -> unique() -> userName(),
            'email' => $this -> faker -> unique() -> safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'nationality' =>$this -> faker -> country(),
            'age' => $this -> faker -> numberBetween(18, 100),
            'date_of_birth' => $this -> faker -> date(),
            'student_ID' => $this -> faker -> numberBetween(1000000, 9999999),
            'contact_number' => $this -> faker -> numberBetween(1000000, 9999999),
            'role_type' => $this -> faker -> randomElement(['student', 'admin']),
            'major_id' => $this -> faker -> numberBetween(1, 5),
            'remember_token' => Str::random(10),
            'license_acceptance' => false
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified() 
    {
        return $this->state(function (array $attributes) { //
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
