<?php
// namespace App\Http\Controllers;

// use App\Models\Categories;
// use Illuminate\Http\Request;







namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
/**
 * Class CategoriesController
 *
 * @package App\Http\Controllers
 */
class CategoriesController extends Controller
{
    /**
     * Retrieves and returns all categories from the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Categories::all();

        return response()->json(['categories' => $categories], Response::HTTP_OK);
    }

    /**
     * Validates the request and creates a new category.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'cat_title' => 'required|string|max:255',
        ]);

        $category = Categories::create([
            'cat_title' => $request->cat_title,
        ]);

        return response()->json($category, 201);
    }

    /**
     * Retrieves and returns a specific category by id.
     *
     * @param  int  $id Category id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $category = Categories::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json($category);
    }

    /**
     * Validates the request and updates a specific category by id.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id Category id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'cat_title' => 'required|string|max:255',
        ]);

        $category = Categories::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->update($request->all());

        return response()->json($category);
    }

    /**
     * Deletes a specific category by id.
     *
     * @param  int  $id Category id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $category = Categories::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->delete();

        return response()->json(['message' => 'Category deleted successfully']);
    }
}
