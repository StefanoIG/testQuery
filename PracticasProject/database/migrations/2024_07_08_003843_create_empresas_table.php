<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_empresa', 250);
            $table->string('nombre_tutor_empresa', 50);
            $table->string('email_tutor_empresa', 60);
            $table->string('telefono_empresa', 15)->nullable();
            $table->string('direccion_empresa', 250)->nullable();
            $table->integer('num_practicantes')->nullable();
            $table->string('area_practicas', 15)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('empresas');
    }
}
