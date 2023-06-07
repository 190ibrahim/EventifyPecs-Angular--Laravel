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
            $table->string('first_name')->default('First Name');
            $table->string('last_name') ->default('Last Name');
            $table->string('username')->unique() ->default('Username');
            $table->string('email')->unique() ->default('Email');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password') ->default('Password');
            $table->string('nationality') ->default(null) ;
            $table->integer('age')->default(0);
            $table->date('date_of_birth')->nullable() ;
            $table->integer('student_ID')->unique()->nullable();
            $table->integer('contact_number')->nullable();
            $table->string('role_type')->default('student');
            $table->integer('confirmation_code')->nullable();
            $table->timestamp('confirmation_time')->nullable();
            $table->boolean('license_acceptance')->default(false);
            $table->unsignedBigInteger('major_id')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
