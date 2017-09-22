#!/bin/bash

sudo php bin/console cache:clear --env=prod --no-warmup
sudo php bin/console cache:clear --env=dev --no-warmup
sudo chmod -R 777 /var/cache
sudo chmod -R 777 /var/log
