REST Backend API
--

REST Backend API created with ExpressJS and Mongodb, for general usages.


## Installation

```bash
$ npm install
```

## Running the app

### Run with codes
Launch database
```bash
cd database
./launch-database.sh
```
Run the service
```bash
./run.sh
```

### Run with containers
Build Image
```shell
./build-image.sh
```
Run the containers
```shell
docker-compose -f docker-compose.yaml up -d

# shutdown
docker-compose -f docker-compose.yaml down -v
```
