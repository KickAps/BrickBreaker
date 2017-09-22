<?php

namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\Brick;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class LoadBrick extends Fixture
{
    public function load(ObjectManager $manager)
    {

        for ($i = 0; $i < 8; $i++) {

            for ($j = 0; $j < 10; $j++) {
                $brick = new Brick();
                $brick->setXaxis(10+$j*100);
                $brick->setYaxis(10+$i*30);
                $brick->setHp(3);

                $manager->persist($brick);
            }
        }

        $manager->flush();
    }
}