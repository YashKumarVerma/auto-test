# Commands required to build the project
build:
	@echo "Building...\n\n"
	# could be go build src/main.go for golang
	# could be poetry install for django/python
	@echo "\n"

# Commands required to run the project
run:
	@echo "Running...\n\n"
	# could be go run src/main.go for golang
	# could be poetry run python manage.py runserver for django/python
	@echo "\n"

.PHONY: build run
