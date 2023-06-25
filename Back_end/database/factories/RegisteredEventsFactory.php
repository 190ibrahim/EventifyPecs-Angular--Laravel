<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RegisteredEventsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
                
                    'user_id' => $this -> faker -> numberBetween(1, 10),
                    'event_id' => $this -> faker -> numberBetween(1, 10),
                    'is_attended' => $this -> faker -> numberBetween(0, 1),
        ];
    }
}

