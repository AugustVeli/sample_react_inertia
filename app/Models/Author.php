<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Author extends Model
{
    /** @use HasFactory<\Database\Factories\AuthorFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'author',
        'author_russian',
        'type',
        'date_birth',
        'date_death',
        'description',
    ];

        public function books(): BelongsToMany
    {
          return $this->BelongsToMany(Book::class, 'book_author_tabel');
    }
}
