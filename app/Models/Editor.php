<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsToMany;

class Editor extends Model
{
    public function Book(): belongsToMany
    {
          return $this->belongsToMany(book::class, 'book_author_editor_tabel');
    }
}
