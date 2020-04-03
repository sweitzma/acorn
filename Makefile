.PHONY: start stop
build:
	docker-compose build

start:
	docker-compose up --no-recreate -d nginx
	open -a firefox 'http://localhost:8080'

stop:
	docker-compose down
