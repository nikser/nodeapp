# **nodeapp**

## Building **nodeapp**

To build **nodeapp** lockally with *Dockerfile*: 
`$ sudo docker build srcmaxim/nodeapp:v1 .`

## Running **nodeapp**

To start **nodeapp** use: `npm npm start`.

To start  **nodeapp** locally with *Docker* you can use:
`$ sudo docker run -d -p 3000:3000 srcmaxim/nodeapp:v1`

Also you can build and run **nodeapp** using *Docker-compose*:
```
$ sudo docker-compose build
  sudo docker-compose up        
```

Then you can connect to server:
`$ curl http://localhost:3000/`
