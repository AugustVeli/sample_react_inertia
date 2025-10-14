<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'book_name',
        'author',
        'author_english',
        'dateOfBook',
        'iso',
        "name_genre",
        "series",
        "publisher",
        "binding",
        "amount",
        "location",
        'user_id'
    ];

    public function users(): BelongsTo
    {
          return $this->BelongsTo(User::class);
    }

}
