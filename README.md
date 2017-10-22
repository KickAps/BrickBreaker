**To update the database schema : (when an entity is added or modified)**

*php bin/console doctrine:schema:update --dump-sql*

*php bin/console doctrine:schema:update --force*


**To load fixtures in the database :**

*php bin/console doctrine:fixtures:load --purge-with-truncate*


A Symfony project created on September 19, 2017, 12:34 pm.











---------------------- SOME RULES -------------------------

- The current player is the last player who touched the ball.
- 1 brick touch gives 10 points to the current player
	+ the combo points accumulated by the player.
- Each brick touch gives 1 more combo point to the current player.
- When the current player changes, combo points come back to 0.
- The first player to lose all his life is the looser.
- When no more bricks, the player with the most points wins.




------------------------ BRICKS ---------------------------

- Classic bricks (CB) could have between 0 & 4 HPs.
- CB dissappear when reach 0 HP.
- Each ball touch remove 1 HP to the brick.
- Undestructible bricks (UB) have -1 hp, they never loose HPs, and the never offer points to players.
- Special bricks (SB) gives a power to the ball (only) at the first contact between the ball and the SB.





------------------------- POWERS ----------------------------
------------- (given by special (pink) bricks) --------------

SUPERBALL :

- For the 5 next brick contacts (including the SP which gives the power).
- 1 contact destroy the brick even if it have more than 1 lives remaining ...
- ... then player receive 10 points per life remaining to the brick, and also 1 combo point per life.


SLOWBALL :

- For the 5 next brick contacts.
- Ball's ySpeed is divided per 2.


(TODO) CLONEBALL :

- Create a second ball.
- (TODefine) Starting from ???
- (TODefine) The Cloneball disappear when ??? After some contacts ? Or only when dying under player ?
- (TODefine) Do the Cloneball removes lifes, gives as points and combo points as the main ball ?


(TODO) TELEPORT :

- 2 Teleport SB (TSB) linked.
- When a ball touch a TSB, it's teleported to the second TSB.
- (TODefine) Are TSB undestructible ? Or TSB allows only a limited number of teleportations ?
- (TODefine) Points ?