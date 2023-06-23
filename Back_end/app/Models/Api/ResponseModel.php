<?php

namespace App\Models\Api;

class ResponseModel {
    public string $state;
    public string $message;

    public function success() {
        $this->state = 'success';
        $this->message = '';
    }

    public function error(string $message) {
        $this->state = 'error';
        $this->message = $message;
    }
}

