<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Announcements extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    { 
         
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->string('announcement_title');
            $table->string('announcement_content');
            $table->string('badges')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('comment_id')->nullable();

            $table->rememberToken(); 
            $table->timestamps(); // this is the timestamp that will be used to determine the time of creation of the event
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('announcements');
    }
}
