# Basic Informational Site

This is a simple Node.js project that serves an informational website with multiple pages (`index.html`, `about.html`, and `contact-me.html`). It handles HTTP GET requests and serves the corresponding HTML files based on the request path. If an unknown path is requested, it serves a `404.html` page.

## Features
- Serves multiple static HTML pages (`index.html`, `about.html`, `contact-me.html`).
- Returns a `404.html` page for any other invalid route.
- Built using Node.js' `http`, `fs`, and `path` modules.

## Installation

To run this project locally, you'll need [Node.js](https://nodejs.org/) installed.

1. Clone the repository:

    ```bash
    git clone https://github.com/Four26/basic-informational-site.git
    ```

2. Navigate to the project directory:

    ```bash
    cd basic-informational-site
    ```

3. Install dependencies (if any):

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node index.js
    ```

The server will run on `http://localhost:8080`.

## Usage

Once the server is running, you can visit the following pages:

- **Home Page**: `http://localhost:8080/`
- **About Page**: `http://localhost:8080/about`
- **Contact Page**: `http://localhost:8080/contact-me`
- **404 Page**: Any invalid route (e.g., `http://localhost:8080/invalid`) will return the `404.html` page.

## Folder Structure

├── pages/ 
  ├── index.html 
  ├── about.html 
  ├── contact-me.html
  └── 404.html
├── index.js 
├── README.md

## Acknowledgements

This project was built as part of a learning exercise with Node.js.
