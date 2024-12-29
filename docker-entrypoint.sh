#!/bin/sh
set -e

echo "Waiting for Postgres to be ready..."

sleep 5

echo "Running setup-dbs..."
npm run setup-dbs

echo "Running seed..."
npm run seed

echo "Starting the application..."
exec npm run start
