<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePracticasTable extends Migration
{
    public function up()
    {
        Schema::create('practicas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('empresa_id')->constrained('empresas')->onDelete('cascade');
            $table->unsignedBigInteger('estudiante_id');
            $table->foreignId('estado_id')->constrained('estados')->onDelete('cascade');
            $table->integer('horas_por_cumplir')->nullable();
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_fin')->nullable();
            $table->timestamps();

            $table->foreign('estudiante_id')
                  ->references('id')
                  ->on('estudiante_estudiante')
                  ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('practicas');
    }
}
