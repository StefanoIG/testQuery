<?php

use App\Http\Controllers\EstadoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\PracticaController;
use App\Http\Controllers\EstudianteController;

Route::get('/test-cors', function () {
    return response()->json(['message' => 'CORS enabled']);
});


Route::apiResource('empresas', EmpresaController::class);
Route::apiResource('practicas', PracticaController::class);
Route::apiResource('estudiantes', EstudianteController::class);
Route::apiResource('estado',EstadoController::class);
