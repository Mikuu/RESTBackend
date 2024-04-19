REST Backend API
--

REST Backend API created with ExpressJS and Mongodb, for general usages.


## Installation

```bash
$ npm install
```

## Running the app

The backend service can query database or not, depends on the start method, when start the service with environment `TEST_MODE` == `air`, it returns mocked response, never query database, thus doesn't need to deploy database service. This mode is for providing a fast SUT to performance tests.

### Run backend service with querying database
Launch database
```bash
cd database
./launch-database.sh
```
Run the service
```bash
./run.sh
```

### Run backend service without querying database
```shell
./runair.sh
```

### Run with containers
Build Image
```shell
./build-image.sh
```
Run the containers with database query
```shell
docker-compose -f docker-compose.yaml up -d

# shutdown
docker-compose -f docker-compose.yaml down -v
```

Run the container without database query
```shell
docker run -d -p 3128:3128 -e TEST_MODE=air --name restBackend ariman/rest-backend:0.0.3
```
