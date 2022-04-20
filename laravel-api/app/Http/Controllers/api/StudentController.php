<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    //read
    public function index()
    {
        $students = Student::all();
        return response()->json([
            'status' => 200,
            'students' => $students
        ]);
    }

    //create
    public function create(Request $request)
    {
    }

    //edit
    public function edit($id)
    {
    }

    //update
    public function store($id, Request $request)
    {
    }

    //delete
    public function destroy($id)
    {
    }
}