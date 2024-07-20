<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practica extends Model
{
    use HasFactory;

    protected $fillable = [
        'empresa_id', 'estudiante_id', 'estado_id', 'horas_por_cumplir',
        'fecha_inicio', 'fecha_fin'
    ];

    public function empresa()
    {
        return $this->belongsTo(Empresa::class);
    }

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class, 'estudiante_id');
    }

    public function estado()
    {
        return $this->belongsTo(Estado::class);
    }
}
