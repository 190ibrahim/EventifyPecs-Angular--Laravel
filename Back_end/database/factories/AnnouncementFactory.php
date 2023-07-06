<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AnnouncementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'announcement_title' =>$this -> faker -> text(),
            'announcement_content' =>$this -> faker -> text(),
            'badges' => $this->faker->imageUrl(120, 220, 'event', true, 'Faker'),
            'user_id' => $this -> faker -> numberBetween(1, 5),
            'comment_id' => $this -> faker -> numberBetween(1, 5),
        ];
    }
    public function unverified() 
{
    return $this->state(function (array $attributes) { //
        return [



        ];
    });
}


}
