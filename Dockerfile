version: '3'
services:
  app:
    build: .
    tty: true
    ports:
      - 8000:8000
    volumes:
      - .:/websocket-study-4009