<?php

namespace App\Http\Controllers\API;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
  public function store(Request $request)
  {
    $student = new Student;

    $student->firstname = $request->input('firstname');
    $student->lastname = $request->input('lastname');
    $student->age = $request->input('age');
    $student->address = $request->input('address');

    $student->save();

    return response()->json([
      'message' => "Added Student"
    ]);
  }

  //fetch data from database

  public function show()
  {
    $student = Student::all();
    return response()->json([
      'list_of_students' => $student,
      'status' => 200,
      'message' => "Success"
    ]);
  }

  public function edit($id)
  {
    $student = Student::find($id);
    if ($student) {
      return response()->json([
        'status' => 200,
        'student' => $student
      ]);
    }
  }
  public function update(Request $request, int $id)
  {

    $student = Student::find($id);
    $student->firstname = $request->input('firstname');
    $student->lastname = $request->input('lastname');
    $student->age = $request->input('age');
    $student->address = $request->input('address');
    $student->save();

  }

  public function delete($id){
    $student = Student::find($id);
    $student->status = 0;
    $student->save();
  }
  public function search(Request $request){
    $student = $request->input('search');
    $result = Student::where('firstname', 'like', "%{$student}%")->get();
    return response()->json([
      'searchList' => $result,
      'message' => "search successfull"
    ]);
  }
}
