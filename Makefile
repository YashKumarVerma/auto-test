# Commands required to build the project
build:
	@echo "Building...\n\n"
	# could be go build src/main.go for golang
	# could be poetry install for django/python
	npm install

# Commands required to run the project
run:
	@echo "Running...\n\n"
	# could be go run src/main.go for golang
	# could be poetry run python manage.py runserver for django/python
	# ensure that this server runs in background
	@echo "\n"

test:
	@echo "Testing...\n\n"
	npm test

.PHONY: build run test
