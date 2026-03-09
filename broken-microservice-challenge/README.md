# Broken Microservice Challenge

This repository is intentionally broken for a Weekly Coding challenge.

## Scenario

An e-commerce platform built with Docker and microservices is not working correctly.
Your task is to inspect the containers, analyze the logs, and fix the broken configuration.

## Services

- gateway
- user-service
- product-service
- order-service

## Start

```bash
docker compose up --build
```

## Goal

The following endpoints should work:

- `GET /users`
- `GET /products`
- `GET /orders`

Gateway URL:

- `http://localhost:8080/users`
- `http://localhost:8080/products`
- `http://localhost:8080/orders`

## Useful Commands

```bash
docker compose logs
docker compose ps
docker logs weekly-gateway
docker logs weekly-product-service
docker logs weekly-order-service
```

## Validation

```bash
./check.sh
```
