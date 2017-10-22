<?php
namespace AppBundle\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * Brick
 *
 * @ORM\Table(name="brick")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BrickRepository")
 */
class Brick
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;


    /**
     * @var int
     *
     * @ORM\Column(name="xAxis", type="integer")
     */
    public $xAxis;


    /**
     * @var int
     *
     * @ORM\Column(name="yAxis", type="integer")
     */
    public $yAxis;


    /**
     * @var int
     *
     * @ORM\Column(name="hp", type="integer")
     */
    public $hp;


    /**
     * @var string
     *
     * @ORM\Column(name="power", type="text")
     */
    public $power;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * Set xAxis
     *
     * @param integer $xAxis
     *
     * @return Brick
     */
    public function setXAxis($xAxis)
    {
        $this->xAxis = $xAxis;
        return $this;
    }

    /**
     * Get xAxis
     *
     * @return int
     */
    public function getXAxis()
    {
        return $this->xAxis;
    }


    /**
     * Set yAxis
     *
     * @param integer $yAxis
     *
     * @return Brick
     */
    public function setYAxis($yAxis)
    {
        $this->yAxis = $yAxis;
        return $this;
    }

    /**
     * Get yAxis
     *
     * @return int
     */
    public function getYAxis()
    {
        return $this->yAxis;
    }
    

    /**
     * Set hp
     *
     * @param integer $hp
     *
     * @return Brick
     */
    public function setHp($hp)
    {
        $this->hp = $hp;
        return $this->hp;
    }


    /**
     * Set power
     *
     * @param text $power
     *
     * @return Brick
     */
    public function setPower($power)
    {
        $this->power = $power;

        return $this;
    }

    /**
     * Get power
     *
     * @return string
     */
    public function getPower()
    {
        return $this->power;
    }
}