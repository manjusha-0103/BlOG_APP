# BlOG_APP

This is the BlogApp where we can create our blog, Deployed with https://average-raincoat-colt.cyclic.app/ this URL.

First, clone this repository


To start the server on the device, follow the following steps :

- Create .env file in the backend directory
- add your credentials like PORT, JWT_SECRET, MONGO_URI in .env
- connect that .env file with the whole code


In \backend directory use the following command to install all the packages

- npm i

To start the server use the following command in the same directory

- node server.js


URL :

- GET -     https://average-raincoat-colt.cyclic.app/api/blog
- GET -     https://average-raincoat-colt.cyclic.app/api/blog/blog/:id
- GET -     https://average-raincoat-colt.cyclic.app/api/blog/respectBlog

  
- PUT -     https://average-raincoat-colt.cyclic.app/api/blog/update/:id
- DELETE-   https://average-raincoat-colt.cyclic.app/api/blog/delete/:id
  
  
- POST -     https://average-raincoat-colt.cyclic.app/api/blog/create-blog
- POST -     https://average-raincoat-colt.cyclic.app/api/user/register
- POST -    https://average-raincoat-colt.cyclic.app/api/user/login


