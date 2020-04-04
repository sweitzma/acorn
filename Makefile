# Yarn/Webpack
.PHONY: buildjs watch analyze-webpack
buildjs:
	yarn webpack

watch:
	yarn webpack --watch

analyze-webpack:
	yarn webpack-bundle-analyzer --port 4200 dist/stats.json

# NGINX Webserver
.PHONY: build start stop
build:
	docker-compose build

start:
	docker-compose up --no-recreate -d nginx
	open -a firefox 'http://localhost:8080'

stop:
	docker-compose down
