<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsToMany;

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
        'iso',
        // 'author_id',
        // 'editor_id',
        "name_genre",
        "publisher",
        "binding",
        "amount",
        "price",
        "discount",
        "price_discount"
    ];

    public function authors(): belongsToMany
    {
          return $this->belongsToMany(Author::class, 'book_author_tabel');
    }

}
