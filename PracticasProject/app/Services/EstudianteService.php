<?php

namespace App\Services;

use GuzzleHttp\Client;

class EstudianteService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => env('DJANGO_API_BASE_URL'),
        ]);
    }

    public function getAllEstudiantes()
    {
        $response = $this->client->get('/api/estudiantes/');
        return json_decode($response->getBody()->getContents(), true);
    }

    public function getEstudiante($id)
    {
        $response = $this->client->get("/api/estudiantes/{$id}/");
        return json_decode($response->getBody()->getContents(), true);
    }

    public function createEstudiante($data)
    {
        $response = $this->client->post('/api/estudiantes/', [
            'json' => $data
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function updateEstudiante($id, $data)
    {
        $response = $this->client->put("/api/estudiantes/{$id}/", [
            'json' => $data
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function deleteEstudiante($id)
    {
        $this->client->delete("/api/estudiantes/{$id}/");
        return response()->noContent();
    }
}
