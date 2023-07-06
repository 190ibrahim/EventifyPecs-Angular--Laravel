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
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('event_title');
            $table->text('event_description');
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->timestamp('event_created')->useCurrent();
            $table->string('event_location');
            $table->decimal('event_price', 11, 2);
            $table->integer('event_ticket');
            $table->timestamp('start_sale')->nullable();
            $table->timestamp('end_sale')->nullable();
            $table->unsignedBigInteger('cat_id')->nullable(); // Make the foreign key nullable
            $table->timestamps();

            $table->foreign('cat_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() //drop table
    {
        Schema::dropIfExists('events');
    }
}