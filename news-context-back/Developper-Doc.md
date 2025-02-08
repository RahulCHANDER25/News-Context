# Backend Developer Documentation

This Markdown explains you how to contribute to this project !

We really appreciate the time you took for us !

## File Architecture

Above all, the first thing to do is understanding the file architecture of the project !

```
/
 |
 |---routes/                # All the API routes
 |
 |---schemas/               # All the types classes
 |
 |---tools/                 # External tools used
 |
 |---configBack/            # Configuration about the program
 |
 |--main.py                 # Main function where the app starts
```

The file architecture is simple, the most important thing to understand is: to always to create new Pages.

## Creating new routes

Inside the `routes/`, create directories to organize the route but the most important thing is to create an `APIRouter` and put all the routes in it.

When you're done doing that, you can link this `APIRouter` to the main app in the `main.py` file.

## Ollama Communication

As we are using Ollama without any dependencies, for scalability purposes, you have to create your own request, using the `requests` python package and send it to the Ollama instance you've created.

The host and the port can be found while looking at the `docker-compose.yml` at root.
