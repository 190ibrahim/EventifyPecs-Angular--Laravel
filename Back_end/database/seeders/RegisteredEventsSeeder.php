<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RegisteredEventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                \App\Models\RegisteredEvents::factory(10)->create();
    }
}
