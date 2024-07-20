<?php

namespace App\Http\Controllers;

use App\Models\Practica;
use Illuminate\Http\Request;

class PracticaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Practica::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Practica::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Practica $practica)
    {
        return $practica;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Practica $practica)
    {
        $practica->update($request->all());
        return $practica;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Practica $practica)
    {
        $practica->delete();
        return response()->noContent();
    }
}
