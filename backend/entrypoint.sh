#!/bin/bash

echo "Running migrations..."
python3 manage.py migrate --no-input
python3 manage.py makemigrations --no-input
python3 manage.py migrate --no-input

DJANGO_SUPERUSER_PASSWORD=admin python3 manage.py createsuperuser --username admin --email admin@gmail.com --noinput

echo "Starting Django server..."
exec python3 manage.py runserver 0.0.0.0:8000
