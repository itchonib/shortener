# 📥  Submission: 🔗 Url Shortener 

## Description
Long URLs aren't easy to email, tweet, or otherwise share. This application takes long urls and shortens them. 

## 🌱 Set Up
1. Clone this repo onto your local machine using `git clone git@github.com:itchonib/url-shortener.git` and open it
2. Ensure you are in the root folder (url-shortener)
3. Run the command `npm run install:all` to install all client and server-side dependicies 
4. Create and .env file in the root of your directory. Make sure your .env file has the below set up (the MongoDB connection string has been emailed). Reminder that if you change the`PORT`, please update `BASE_URL` and the proxy value in the package.json of the client:
```
MONGODB_URL=
PORT=8080
BASE_URL=http://localhost:8080
```
5. Run the project with `npm run dev` to run both the client and the server

## Assumptions 

1. Any user visiting the page can use the site 

## 💡 Solution Plan 

1. Design [rough plan](https://www.figma.com/file/HknyxyN6SrUzUl3bivfCv3/Snip-It?node-id=0%3A1) for FE design and set up database
2. Set up API using Express and add route tests 
3. Build out basic FE component layout and styles
4. Add functionality to components and unit + integration tests
5. Review and refactor and make it better   

## ⚖️ Decisions/Tradeoffs 
- It can be anticipated that there can be millions of millions of links stored in the DB. As such, Mongo was used for its scalability. Moreover, there is no need to have relationships between tables/documents, so a relational database is not necessary. 
- Adding tests did require more work/time, however it will reduce time on future refactors and addition new features 
- It would take some more time to build an inhouse id generator and robust url validator so third party packages were used instead
- A cache layer was added to reduce load on the DB, however, for ease of running the project, it was kept in a separate branch. If you would like to run the project with the cache layer, please follow the instructions in the last section.

## 📦 Libraries/Packages Used 

For packages used for testing please see the testing section.

### Client 
The front end was built with react components and sass files. Apart from the built in packages that come with create-react-app, the following packages were used:
- [`axios`](https://www.npmjs.com/package/axios) was used to conduct HTTP requests
- [`valid-url`](https://www.npmjs.com/package/valid-url) was used to validate format of URLs 
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) v6 was used to set up routes on the front end

### Database
[MongoDB](https://www.mongodb.com/) was utilized as the database for this application.

### Server Side 
The server side was built in [`Node.js`](https://nodejs.org/en/) with [`Express`](https://expressjs.com/). [`Mongoose`](https://mongoosejs.com/) was used as the ORM. Along with standard packages like [`dotenv`](https://www.npmjs.com/package/dotenv), [`nodemon`](https://www.npmjs.com/package/nodemon), and [`cors`](https://www.npmjs.com/package/cors), more notable packages include:  
- [`hashids`](https://www.npmjs.com/package/hashids) was used to generate the "short" id used in the shortened URL. 
- [`mongoose-sequence`](https://www.npmjs.com/package/mongoose-sequence) was used to assign a unique counter number to each url document. The counter was used as part of the creation of the short id to ensure that each id generated was unique 
- Similar to the front end, [`valid-url`](https://www.npmjs.com/package/valid-url) was used on the back end to validate format of URLs 
- [`Concurrently`](https://www.npmjs.com/package/concurrently) was used to allow multiple commands simultaneously

## 🧪 Running Tests 
- Server Side: 
  - This application utilizes [`supertest`](https://www.npmjs.com/package/supertest) and [`jest`](https://www.npmjs.com/package/jest) to test the server API. In order to run the server tests, in the root directory run `npm run test:server`
- Client Side: 
  - [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/) was used to created unit tests for specific components and [`Cypress`](https://www.cypress.io/) was used for intergration tests. To run unit tests from the root folder please `cd client && npm test`. To run cypress integration tests, in the root directory run `npm run cypress`.
  - Note please be aware there will be a deprecation warning when running cypress due to the `"nodeVersion": "bundled"` in the cypress.json. If you are using node version >=17, please do not remove that line, it is currently the only work around for a current cypress bug ([reference](https://github.com/cypress-io/cypress/issues/19320))

## 🔮 In the future...
- I would like to add a feature so a user can see previous links they have created without an account 
- I would like to add a flo/feature where users can create an account to save their links and track how many times their link has been clicked
- I would like to add additional styles and designs to the client
- I would like to deploy the app 
- I would like to add continous integration by running cypress tests with github actions
- I would like to build in house code to generate the short URL id 

## 📖 Code References / Citations

In order to create a cache layer and use react testing library for the first time, the following resources were used:  

- This [article by Subhra Paladhi](https://subhrapaladhi.medium.com/using-redis-with-nodejs-and-mongodb-28e5a39a2696) was a fantastic guide. It provided boiler plate code to set up the cache layer that was used in the project.  
- This [article by Robin Wieruch](https://www.robinwieruch.de/react-testing-library/) was a wonderful resource as it provided detailed guidance on how to set up tests using react testing library 

Documentation for all packages listed above were also consulted often for best practices. 

## 🏃 Running Project with Cache 

This project utilized [redis](https://redis.io/) and [util](https://www.npmjs.com/package/util) to set up the cache layer.

1. If you do not have redis installed, please install it by running `brew install redis`. Start redis with the following command: `brew services start redis` 
2. Make sure to clone the repo with `git clone` and install all dependencies using `npm run install:all`
3. In addtional to the what was listed above, please add the following to your .env file
```
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```
3. Checkout into the feature branch with `git checkout feature/add-redis-cache`
4. Once in the branch please run `npm run dev`. 
5. Once you are done with the app, do not forget to run `brew services stop redis` to turn off the redis server.  
