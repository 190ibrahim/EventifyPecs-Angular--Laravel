<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        {
            return [
                'event_title' =>$this -> faker -> title(),
                'event_description' => $this -> faker -> text(),
                'event_image' => $this->faker->imageUrl(640, 480, 'event', true, 'Faker'),
                'event_badge' => $this->faker->imageUrl(120, 220, 'event', true, 'Faker'),
                'event_ticket' =>$this -> faker -> numberBetween(1000000, 9999999),
                'waiting_list' => $this -> faker -> numberBetween(1000000, 9999999),//
                'user_id' => $this -> faker -> numberBetween(1, 5),
                'remember_token' => Str::random(10),
                'event_status' => false
            ];
        }
    }

public function unverified() 
{
    return $this->state(function (array $attributes) { //
        return [



        ];
    });
}

}