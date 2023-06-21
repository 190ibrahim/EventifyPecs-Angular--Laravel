<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'service_title' =>$this -> faker -> title(),
            'price_per_hour' => $this -> faker -> numberBetween(1000000, 9999999),
            'service_address' => $this -> faker -> address(),
            'service_type' => $this -> faker -> randomElement(['book', 'electronic', 'furniture', 'clothes']),
            'categories_id' => $this -> faker -> numberBetween(1, 5),
            'user_id' => $this -> faker -> numberBetween(1, 5),
        ];
    }
}
