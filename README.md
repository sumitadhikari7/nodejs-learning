# Node.js Learning Progress

This repository documents my journey learning Node.js through a comprehensive course. It covers fundamentals, core modules, asynchronous patterns, HTTP, Express.js, and more.

## Topics Covered So Far

### Day 1

- Introduction to Node.js
- Environment setup and installation
- REPL and CLI basics
- Global variables in Node.js
- Module system and creating modules
- Built-in modules overview
- OS module
- Path module
- File System (FS) module — synchronous and asynchronous methods

### Day 2

- Sync vs Async Concepts
- Introduction to HTTP
- HTTP module setup and basics
- Advanced HTTP module features
- NPM overview and info
- Using npm commands effectively
- Creating first npm package
- Sharing code between projects
- Using Nodemon for automatic restarts
- Uninstalling Packages
- Global package installation
- Understanding package-lock.json
- Intro to important Node.js topics
- Event Loop fundamentals
- Evenr loop slides review
- Evenr loop coding examples
- Async patterns - blocking code, setting up promises, refractoring to async

### Day 3

- EventEmitter with code examples
- Emitting and listening to custom events
- Chaining multiple event listeners
- Practical use of EventEmitter with HTTP module
- Introduction to Streams in Node.js
- Reading files using fs.createReadStream()
- Understanding highWaterMark for stream buffer size
- Encoding streams (utf8) for readable output
- Listening to stream events 'data' 'end' 'error'
  -Streaming file data into HTTP responses
- Installing express as a project dependency

### Day 4

- **HTTP Basics**
  - Understanding Request and Response cycle
  - Setting response headers using `res.writeHead()`
- **HTTP Headers**
  - Content-Type: `text/html`, `application/json`, etc.
  - Status codes: 200 OK, 404 Not Found
- **Request Object**
  - `req.url`, `req.method` and their usage
- **Serving HTML files**
  - Reading and sending HTML using `fs.readFileSync()`
- **HTTP App Example**
  - Basic routing using native `http` module
  - Sending different responses for `/`, `/about`, etc.
- **Express Overview**
  - What is Express and why it simplifies HTTP handling
- **Express Basics**
  - Creating routes using `app.get()` and `app.all()`
  - Using `res.send()` and `res.json()`
- **Building Express App**
  - Serving static files using `express.static()`
  - Folder structure for routes and public files
- **API vs SSR**
  - Difference between sending JSON vs rendering HTML
  - Use cases of API (React/SPA) vs SSR (template engines like EJS)
- **JSON Basics**
  - What is JSON and how it's used in APIs
  - Creating and serving static JSON data using Express
  - Creating a `data.js` module for products and people

### Day 5

- **Express Route Parameters**

  - Defining dynamic routes using \`:paramName\`
  - Accessing route params with \`req.params\`
  - Using route params for fetching single items (e.g., \`/api/products/:productId\`)

- **Advanced Route Params**

  - Nested route parameters (e.g., \`/api/products/:productId/reviews/:reviewId\`)
  - Extracting and using multiple params

- **Express Query Strings**

  - Accessing query strings using \`req.query\`
  - Filtering and slicing arrays using query values (\`search\`, \`limit\`, etc.)
  - Returning modified results based on queries

- **Middleware Setup**

  - Creating custom middleware functions
  - Using \`next()\` to move through middleware chains
  - Logging request method, URL, and timestamp

- **app.use() Explained**
  - Applying middleware globally using \`app.use(logger)\`
  - Applying middleware to specific route groups (e.g., \`app.use('/api', logger)\`)
  - Difference between route-specific middleware and global middleware

### Day 6

- **Multiple Middleware Functions**
  - Using multiple middleware for the same route
  - Chaining custom middlewares in Express
- **Additional Middleware Info**
  - Middleware ordering and execution flow
  - How `next()` controls middleware chain
- **Methods - GET**
  - Handling GET requests in Express
  - Sending JSON and HTML responses
- **Methods - POST**
  - Handling POST requests
  - Sending and receiving JSON data
- **Methods - POST (Form Example)**
  - Using `express.urlencoded()` for HTML form data
- **Methods - POST (JavaScript Example)**
  - Using `fetch` or Axios to send POST requests from frontend
- **Install Postman**
  - Using Postman to test API endpoints
  - Sending GET, POST, PUT requests
- **Methods - PUT**
  - Updating resources using PUT
  - Accessing `req.params` and `req.body`
  - Updating arrays immutably or in-place

This repo will be continuously updated as I progress through the full course.
