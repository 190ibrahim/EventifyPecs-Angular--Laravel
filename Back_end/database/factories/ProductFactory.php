<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
             'product_title' =>$this -> faker -> title(),
                'product_description' => $this -> faker -> text(),
                'product_price' => $this -> faker -> numberBetween(1000000, 9999999),
                'product_image' => $this->faker->imageUrl(640, 480, 'product', true, 'Faker'),
                'product_status' => false,
                'meeting_address' => $this -> faker -> address(),
                'product_type' => $this -> faker -> randomElement(['book', 'electronic', 'furniture', 'clothes']),
                'upload_date' => $this -> faker -> date(),
                'user_id' => $this -> faker -> numberBetween(1, 5),


                ];
    }
}
