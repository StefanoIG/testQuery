<?php

namespace App\Http\Controllers;

use App\Models\Estado;
use Illuminate\Http\Request;

class EstadoController extends Controller
{
    public function index()
    {
        return Estado::all();
    }

    public function store(Request $request)
    {
        return Estado::create($request->all());
    }

    public function show(Estado $estado)
    {
        return $estado;
    }

    public function update(Request $request, Estado $estado)
    {
        $estado->update($request->all());
        return $estado;
    }

    public function destroy(Estado $estado)
    {
        $estado->delete();
        return response()->noContent();
    }
}
