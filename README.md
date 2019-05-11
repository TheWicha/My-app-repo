# My-app-repo

Welcome to My App Repo where I'm creating my prototype app.
It's a blog page, and here is my setup:<br>
  -Node<br>
  -Express<br>
  -React<br>
  -knex<br>
  -bookshelf<br>
  -Postgresql<br>
  -Docker<br>
  -Docker-compose<br>
  
  
# Creating an App
<strong> You’ll need to have Node 8.10.0 or later</strong> <br>
  
### npm:
  
``` 
npm install 
```
 <br>
 ```
npm run start:dev
```

to start server in developer mode
<br>

```
npm run build:watch
```

to build with webpack

```
docker-compose up
```
 
to start database
 
``` 
knex migrate:latest
```

to create database table

 ```
 knex seed:run
 ```
 to seed table with data

Application will run on `localhost:8080`
