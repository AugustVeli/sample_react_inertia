<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsToMany;

class Editor extends Model
{
    public function author(): belongsToMany
    {
          return $this->belongsToMany(Author::class, 'book_author_editor_tabel');
    }
}
