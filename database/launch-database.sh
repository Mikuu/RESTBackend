#!/usr/bin/env bash
docker run -d --name restdb \
	-e MONGO_INITDB_ROOT_USERNAME=mgadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=mgadminpwd \
	-e MONGO_INITDB_DATABASE=restabase \
	-v "$(pwd)/initializer:/docker-entrypoint-initdb.d" \
	-p 28008:27017 \
	mongo:6.0