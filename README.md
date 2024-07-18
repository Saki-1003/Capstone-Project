A repository for IOD Capstone Project - Ecommerce for honey products

From the shop owners perspective, this application serves the funcitionalities to manage products and suppliers in database as well as the basic inventory management functionality.
Customer users can use the functionalities expected in any ecommerce websites such as signup, wishlist, shopping cart and checkout (Note it does not support the real payment transaction).

To locally run the application, ensure the following have been installed:
1. MySQL Workbench(assuming you have an account created and MySQL server is connected and running)
2. A web browser (preferably Google Chrome)
3. VScode (preferrably)

Steps for setup:
1. Pull the code from Github
2. In the ecommerce folder, create '.env' file with the following information
  DB_NAME=ecommerce
  DB_USER=root
  DB_PASSWORD= Enter your MySQL password here
  DB_HOST=localhost
  DB_PORT=3306
  PORT=8090

3. Run npm install 
4. To set up the database, create a new database named "ecommerce" from your MySQL Workbench
5. Create a 'config.json' file inside the config folder (ecommerce->database->config)
6. In the 'config.json' file you created above, copy and paste the following and replace with your password. The other part should remain unchanged. Without this json file, next step 7 will fail.
   {
  "development": {
    "username": "root",
    "password": "Enter your MySQL password here",
    "database": "ecommerce",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Enter your MySQL password here",
    "database": "ecommerce",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "Enter your MySQL password here",
    "database": "ecommerce",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

7. To migrate schemas, run npx sequelize-cli db:migrate --env development in the VS Code terminal. Now, the tables should have been created in your MySQL Workbench but tables don't have the relationship as yet.
   Associations(relationship) need to be migrated separately after the schemas have been migrated into the database. If you try to migrate the associations before the tables get created in the database, it will cause error.
8. To migrate associations(relationship), go to ecommerce->database->migrations->associations folder. Inside this associations folder, there are 6 files. Move all 6 association files outside of the folder.
   (now these 6 files should have been placed directly under the migrantions folder in the same layer as the schemas that had been migrated in 5.) 
9. Run npm run dev in the VS Code terminal.

If everything was successful, a landing page will show up.
