FROM golang:1.15.6-alpine3.12 AS build

WORKDIR /app

COPY desafio.go .

RUN go build desafio.go

FROM scratch

WORKDIR /app

COPY --from=build /app/desafio .

ENTRYPOINT [ "./desafio" ]