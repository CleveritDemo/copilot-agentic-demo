#!/bin/sh
if [ ! -f "./data/tasks.json" ]; then
  mkdir -p ./data
  echo "[]" > ./data/tasks.json
fi

exec "$@"
