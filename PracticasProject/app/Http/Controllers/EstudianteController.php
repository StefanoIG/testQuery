<?php

namespace App\Http\Controllers;

use App\Services\EstudianteService;
use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    protected $estudianteService;

    public function __construct(EstudianteService $estudianteService)
    {
        $this->estudianteService = $estudianteService;
    }

    public function index()
    {
        return $this->estudianteService->getAllEstudiantes();
    }

    public function show($id)
    {
        return $this->estudianteService->getEstudiante($id);
    }

    public function store(Request $request)
    {
        return $this->estudianteService->createEstudiante($request->all());
    }

    public function update(Request $request, $id)
    {
        return $this->estudianteService->updateEstudiante($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->estudianteService->deleteEstudiante($id);
    }
}
