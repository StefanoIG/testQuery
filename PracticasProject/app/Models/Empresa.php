<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_empresa', 'nombre_tutor_empresa', 'email_tutor_empresa',
        'telefono_empresa', 'direccion_empresa', 'num_practicantes', 'area_practicas'
    ];
}
