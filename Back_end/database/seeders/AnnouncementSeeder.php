<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Announcement::factory(1)->create();
    }
}
