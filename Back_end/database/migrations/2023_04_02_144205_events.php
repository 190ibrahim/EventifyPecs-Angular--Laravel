<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Events extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {Schema::create('events', function (Blueprint $table) { //
        $table->id();
        $table->string('event_title');
        $table->string('event_description');
        $table->string('event_image');//
        $table->timestamp('event_created')->nullable();
        $table->timestamp('start_date')->nullable();
        $table->timestamp('end_date')->nullable();
        $table->string('event_badge');//
        $table->string('event_ticket');
        $table->integer('waiting_list');//
        $table->boolean('event_status')->default(false);
        $table->unsignedBigInteger('user_id')->nullable();
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
        Schema::dropIfExists('events');
    }
}
