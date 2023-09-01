# auto-test

prototype of a solution to automatically test machine coding type assignments based on test cases.

## Task
- implement a server that listens to port 3000 and expose a CRUD API.

## How to test locally
There are multiple ways to test this locally:

**Method 1 : npm**
- Make sure you have npm installed.
- run `npm install`
- run `npm test`


**Method 2 : docker**
- Make sure you have docker installed
- run `docker run -v $(pwd):/app yashkumarverma/just-test`
