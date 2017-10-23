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
- Undestructible bricks (UB) have -1 hp, they never loose HPs,
		and the never offer points to players.
- Special bricks (SB) gives a power to the ball (only)
		at the first contact between the ball and the SB.





------------------------- POWERS ----------------------------
------------- (given by special (pink) bricks) --------------

SUPERBALL :

- For the 5 next brick contacts (including the SP which gives the power).
- 1 contact destroy the brick even if it have more than 1 lives remaining ...
- ... then player receive 10 points per life remaining to the brick,
		and also 1 combo point per life.


SLOWBALL :

- For the 5 next brick contacts.
- Ball's ySpeed is divided per 2.


CLONEBALL :

- Create a second ball.
- Starting from the same init point than a classic ball.
- The clonball die like a classic ball under the players cursors.
- The cloneball gives points, and combo points,
		and remove lifes exactly like a classic ball.


TELEPORT :

- 2 Teleport SB (TSB) linked.
- !!! When adding a TSB to the scheme, we must add a second TSB :
- When a ball touch a TSB, it's teleported to the second TSB.
- TSB are undestructible (remind to set their hp to -1).
- TSB allowed unlimited number of teleportations.
- TSB do not gives points.