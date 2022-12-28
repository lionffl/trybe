1) Copy books.json to container:
`docker cp ./books.json mongoDB:/tmp/books.json`

2) Import (shoud be executed inside the container) books.json collection:
`mongoimport -d libraty -c books --jsonArray --type json --file /tmp/books.json`