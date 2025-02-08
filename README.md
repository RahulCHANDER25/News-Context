# News Context

This project introduces an innovative chatbot that leverages the Mistral LLM to analyze and summarize articles, newspapers, or even works by specific journalists. In addition to providing a clear and concise summary of the submitted document, the chatbot offers in-depth context 
by including the **editorial policy** of the newspaper or information source.

## Table Of Contents

- [Purposes](#purposes)
- [Features](#features)
- [Launch Instructions](#launch-instructions)
- [Contribution guidelines](#contribution-guidelines)
- [Authors](#authors)

## Purpose

The primary goal of this project is to enable users to access reliable and transparent information. By providing not only an accurate summary but also details about the source's editorial policy, this chatbot helps users understand the context and potential biases behind each piece of information. This promotes a more informed understanding of the news and combats misinformation.

## Features

- **Article Summaries**: Get a quick and precise summary of any article or document.
- **Editorial Context**: Learn about the editorial policy of the source for a deeper understanding of the information.

## **Launch Instructions**

To launch our application, simply use Docker Compose. This will start all the necessary services (frontend, backend and ollama) in the correct order with proper configurations:

```
docker compose up
```

This command will build and start all containers defined  in our docker-compose.yml file. Once the containers are up and running,  you can access the application through your web browser.

## **Contribution guidelines**

Feel free to try and contribute to our repository, in order to do this you need to comply with some guidelines. We are following the [conventionnal commits norm](https://www.conventionalcommits.org/en/v1.0.0/). We also have Github Actions checking our code, for example a linter to not forgot about typing in typescript, for the frontend 
development part in Next.js.

If you want to check the same thing as our Github Action for the frontend part before pushing, you may run those commands in the **news-context-front/** directory.

```
npm ci --legacy-peer-deps
```

*Stand for **npm clean & install** permit to clean the node_modules directory and install the dependecies necessary to run this project.*

```
npm run build --if-present
```

*Execute our build script present in the package.json, here it's the next build used to build our client web, apply a linter and check for validity types, and generates statics pages, to check if our client compiles.*

Here is back-end command to run the server, you may run this command in the **news-context-back/** directory.

```
fastapi run main.py --port 8000 --reload
```

You can also suggest us new features to add to our project, our contact are down [here](https://www.notion.so/News-Context-1942a009765c80f89751f2c69f6df7bb?pvs=21).

## **Authors**

rahul.chander@epitech.eu