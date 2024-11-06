## 1. Install Bun @ https://bun.sh/docs/installation

## 2. Docker commands

```bash
# init
$ docker-compose -p app up --build -V -d

# start
$ docker-compose -p app up

# stop
$ docker-compose -p app down

# stop-all
$ docker stop $$(docker ps -aq)

# rebuild
$ docker-compose -p app up --build -V -d
