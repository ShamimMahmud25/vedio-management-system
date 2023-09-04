First of you need to download the file or you can clone the repository.

#For Service
Go to the server folder and configure the env variable.

DB_URI=mongodb+srv://userName:userPassword@cluster0.vygpv.mongodb.net/CollectionName?retryWrites=true&w=majority
Here you have to put your userName ,your password and your collectionName.
Note: If you do not have mongodb account ,create one and add a new database. Or you can use local database.

Then install the necessary packages just by entering "npm i" in command line of root directory.

Run the service using the command "npm run start:dev"

Go to the browser and go to "http://localhost:3000/graphql" and click the button "Query your server", you will see the apollo sandbox and get all the query and mutation.


#For portal 

Go to client folder.Then install the necessary packages just by entering "npm i" in command line of root directory.Then run the command "npm run dev" and then go to "http://localhost:8080/". You will see the home page. Click the button go to list page. If you already add some videos in the database, you will see those in this page. You can add video just by clicking the  add video button.

If you click top of the video card, it will take you to details page, where you can update or delete videos.


#Technology used

Front-end: Next.js, ReduxToolKit, TailwindCss and MUI
Back-end: Nest.js, Graphql
Database: MongoDB

