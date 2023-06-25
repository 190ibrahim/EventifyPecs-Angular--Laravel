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
    public function definition()
    {
        return [
            'first_name' =>$this -> faker -> firstName(),
            'last_name' => $this -> faker -> lastName(),
            'username' => $this -> faker -> unique() -> userName(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'date_of_birth' => $this -> faker -> date(),
            'role_type' => $this -> faker -> randomElement(['user', 'admin']),
            'license_acceptance' => false
            'remember_token' => Str::random(10),

            'email' => $this -> faker -> unique() -> safeEmail(),
            'email_verified_at' => now(),
            'nationality' =>$this -> faker -> country(),        ];
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
