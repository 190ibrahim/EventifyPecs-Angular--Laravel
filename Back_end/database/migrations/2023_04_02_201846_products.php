<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Products extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) { //
            $table->id();
            $table->string('product_title');
            $table->string('product_description');
            $table->string('product_image');//
            $table->integer('product_price');//
            $table->boolean('product_status')->default(false);
            $table->string('meeting_address');
            $table->string('product_type');
            $table->timestamp('upload_date')->nullable();
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
        Schema::dropIfExists('products');
    }
}
