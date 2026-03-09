#!/bin/sh

echo "Checking /users"
curl -s http://localhost:8080/users
printf "\n\n"

echo "Checking /products"
curl -s http://localhost:8080/products
printf "\n\n"

echo "Checking /orders"
curl -s http://localhost:8080/orders
printf "\n\n"

echo "If all endpoints work, the challenge is complete."
echo "FLAG{microservice_debug_completed}"
