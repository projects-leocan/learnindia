<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
		$this->load->library('session');
    	$this->conn = "";
    }

	public function index()
	{
		$this->load->view('header');
		$this->load->view('index');
		$this->load->view('footer');
	}
	public function aboutUs()
	{
		$this->load->view('header');
		$this->load->view('aboutus');
		$this->load->view('footer');
	}
	public function blog()
	{
		$this->load->view('header');
		$this->load->view('blog');
		$this->load->view('footer');
	}
	public function survey()
	{
		$this->load->view('header');
		$this->load->view('survey');
		$this->load->view('footer');
	}
	public function Term()
	{
		$this->load->view('header');
		$this->load->view('t&C');
		$this->load->view('footer');
	}
	public function contactUs()
	{
		$this->load->view('header');
		$this->load->view('contactus');
		$this->load->view('footer');
	}
}

?>