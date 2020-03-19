# Project Cake

This is the backend for cake project.
you can find working example [here]().
It uses nodejs with express framework backed by mongodb for storing data.

## Getting Started

There are two ways you can run this project on your local system,
1. With node (bold)
   -
   `git clone`

    `cd `

     `npm install`

     `npm start`
2. With Docker 

    ` docker build -t <docker-username>/cakes_server .`

    `docker run -it -p 8080:3999 -d nrj07/cakes_server`

### Prerequisites

. node

```
Give examples
```
## Running the tests

Explain how to run the automated tests for this system

cd into the directory after cloning and type

`npm test`


## How to try it ?
Open http://localhost:1337 to see the results.

```

GET /cakes/all -> List all the cakes in JSON.

GET /cakes/:id -> Returns the cake for the given ID

POST /cakes/add -> JSON data to inserted to the cakes db.

PUT /cakes/edit/:id -> JSON data to update the cake data.

DELETE /cakes/remove/:id -> Removes the cake with the specified ID.

OPTIONS / -> Gives the list of allowed request types.

HEAD / -> HTTP headers only, no body.

TRACE / -> Blocked for security reasons.

```


## Deployment

Add additional notes about how to deploy this on a live system
hook it up actions and badges

## Built With

* [Express](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Mongoose](https://maven.apache.org/) - Dependency Management
* [Jest](https://rometools.github.io/rome/) - Used to generate RSS Feeds


## Authors

* **devnrj07** - *portfolio* - [mywebsite](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


