<?php namespace Wardrobe\Core\Controllers\Api;

use Wardrobe\Core\Controllers\BaseController;
use Input, Response;

use Carbon\Carbon;
use Wardrobe\Core\Repositories\UserRepositoryInterface;

class UserController extends BaseController {

	/**
	 * The user repository implementation.
	 *
	 * @var Wardrobe\UserRepositoryInterface
	 */
	protected $users;

	/**
	 * Create a new API User controller.
	 *
	 * @param UserRepositoryInterface $users
	 *
	 * @return ApiUserController
	 */
	public function __construct(UserRepositoryInterface $users)
	{
		parent::__construct();

		$this->users = $users;

		$this->beforeFilter('wardrobe.auth');
		$this->beforeFilter('csrf_header', array('only' => array('store', 'update', 'destroy')));
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return (string) $this->users->all();
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$messages = $this->users->validForCreation(
			Input::get('first_name'),
			Input::get('last_name'),
			Input::get('email'),
			Input::get('password')
		);

		if (count($messages) > 0)
		{
			return Response::json($messages->all(), 400);
		}

		return $this->users->create(
			Input::get('first_name'),
			Input::get('last_name'),
			Input::get('email'),
			(bool) Input::get('active'),
			Input::get('password')
		);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return $this->users->find($id);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		return (string) $this->users->find($id);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$messages = $this->users->validForUpdate(
			$id,
			Input::get('first_name'),
			Input::get('last_name'),
			Input::get('email'),
			Input::get('password')
		);

		if (count($messages) > 0)
		{
			return Response::json($messages->all(), 400);
		}

		return $this->users->update(
			$id,
			Input::get('first_name'),
			Input::get('last_name'),
			Input::get('email'),
			(bool) Input::get('active'),
			Input::get('password')
		);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->users->delete($id);
		return Response::json(array('success'));
	}

}
