# Desafio PFA 1

## Comandos necessários:

### Create the network

```
docker network create pfa-net
```

### Run mysql

```
docker run --rm -it --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nodedb -v $(pwd)/mysql:/var/lib/mysql --network pfa-net -d mysql:5.7
```

### Run node

```
docker run --rm -it --name node -v $(pwd)/node:/usr/src/app -v /usr/src/app/node_modules --network pfa-net -d kayphaz/tfa-node
```

### Run nginx

```
docker run --rm -it --name nginx -p 8080:80 --network pfa-net -d kayphaz/nginx-custom
```
