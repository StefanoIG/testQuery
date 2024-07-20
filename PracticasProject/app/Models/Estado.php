<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_estado', 'descripcion_estado',
    ];

    // No necesitas definir explícitamente las relaciones si siguen el naming convention
    // Laravel asumirá automáticamente que 'nombre_estado_id' es la llave foránea.

    public function practicas()
    {
        return $this->hasMany(Practica::class, 'estado_id');
    }
}
