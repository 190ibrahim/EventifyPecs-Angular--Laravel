<?php

use Faker\Core\Number;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) { //
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('username');
            $table->string('password');
            $table->date('date_of_birth');
            $table->string('role_type')->default('user');
            $table->boolean('license_acceptance')->default(0);
            $table->string('remember_token')->nullable();
            $table->timestamps();
            $table->string('email');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('nationality');
            $table->integer('confirmation_code')->nullable();
            $table->timestamp('confirmation_time')->nullable(); //kjndf
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users'); // kjndf     jsd=jnadfjhbadvklknvfd
        
    }
}
