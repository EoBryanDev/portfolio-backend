# Bryan Portfolio 2.0 Backend

## Overview

The backend project will be created using the Fastify web framework to enable HTTP communication. Also, I'll use a RESTful API to communicate with the frontend.

### Start application

#### Run application

To run the application on watch mode run:

**`pnpm dev`**

To run static:

**`pnpm start`**

#### Test application

To test the application you can run and exit:

**`pnpm test`**

To run in watch mode:

**`pnpm test:watch`**

To see the test coverage:

**`pnpm test:coverage`**

## Tech and Tools

`Web Framework`: Fastify, Fastify Cors

`HTTP Validator`: Zod

`Security`: JWT

`DB`: MongoDB

`Package Manager`: PNPM

`Documentation`: Swagger

`Observability`: Fastify Metrics

## Structure

### Folder Structure

### Architecture

I've chosen to use Ports and Adapter Architecture to help the application be built tool-agnostic and to guide it toward a clean code approach.

That choice, consequently, is going to lead my solution, for the most part, to follow an OOP paradigm.

To build an application less susceptible to errors, I chose to use TDD.

## Release Notes
