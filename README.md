# node-postgres-docker
Small project made for learning communication between Docker containers. The project consists of two Docker containers initialized via Dockerfiles and a small code base.

One is a Node.js server using Express.js framework, a basic server which only has two routes: a GET which presents a simple form for voting for your favorite food between two options and a POST that actually saves the votes. The other container is a PostgreSQL database that stores the food votes.

Both containers have reference to volumes and some initializing tasks.

### Prerequisites
A local [Docker](https://www.docker.com/) installation.

### Instructions

1. To initialize the database server, once you clone this repo (and you're on project's root): 
```
cd postgres && docker image build -t node-db . && docker container run --name node-db --rm -p 9999:5432 -v [absolute-path-to/node-postgress-docker]/postgres/data:/var/lib/postgresql/data node-db
```

Once it's done, you should see the following message:

```
LOG:  database system is ready to accept connections
```

2. To initialize the node server, once you clone this repo (and you're on project's root):
```
cd node && docker image build -t node-server . && docker container run --name node-server --rm -p 8888:8888 -v [absolute-path-to/node-postgress-docker]/node/src:/usr/src/app/src node-server
```

Once it's done, you should be able to visualize the form by browsing http://localhost:8888


**Notes:** You have to replace [absolute-path-to/node-postgress-docker] to the path for this project on your local filesystem, without the `[]`.

Also, you don't have to use `node-db` or `node-server` as tags for the Docker containers, you can use any string you like.


(I know the repository name has a typo on "postgress", mea culpa).