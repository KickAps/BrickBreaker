<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

    	$bricks=[];
    	$i=0;

    	$repository = $this
					->getDoctrine()
					->getManager()
					->getRepository('AppBundle:Brick');

		while($repository->find($i+1)){
			$bricks[$i] = $repository->find($i+1);
			$i++;
		}

        return $this->render('@app_bundle/brick-breaker.html.twig', array(
        					'bricks' => $bricks,
        					));
    }
}
