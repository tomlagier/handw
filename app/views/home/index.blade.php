@extends('layout.master')

@section('head')

	@include('home.head')

@endsection

@section('header')
	<!-- Begin header -->	

	@include('home.header')

	<!-- End header -->
@endsection

@section('content')
	<!-- Begin content -->
	@include('home.page', array('page' => 'home'))
	@include('home.page', array('page' => 'services'))
	@include('home.page', array('page' => 'portfolio'))
	@include('home.page', array('page' => 'team'))
	@include('home.page', array('page' => 'blog'))
	@include('home.page', array('page' => 'contact'))

	<!-- End content -->
@endsection

@section('footer')
	<!-- Begin footer -->

	@include('home.footer')

	<!-- End footer -->
@endsection

@section('overlays')

	<!-- Begin overlays -->

	@include('home.privacy-policy')
	@include('home.terms-overlay')
	
	<!-- End overlays -->

@endsection