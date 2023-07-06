<?php
namespace App\Models;
class Listing{
    public static function all(){
       return[ [
            'id'=>'1',
            'name'=>'Listings one',
            'description'=>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nemo tenetur a iste facilis adipisci quibusdam molestiae velit dolores. Excepturi est quod magnam enim, nulla accusantium illum odit libero atque?"
            ],

            [
                'id'=>'2',
                'name'=>'Listings tow',
                'description'=>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nemo tenetur a iste facilis adipisci quibusdam molestiae velit dolores. Excepturi est quod magnam enim, nulla accusantium illum odit libero atque?"
                ]
            ];
    }
    public static function find($id){
        $listings= self::all();
        foreach($listings as $listing){
            if($listing['id']==$id){
                return $listing;
            }
        }
    }

}