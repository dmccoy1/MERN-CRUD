## Setting Up

### `Connect to your Database`

In server folder, create a ```.env``` file and add your mongodb credentials

Edit the `.env ` 

```
DB_USERNAME=<username>
DB_PASSWORD=<password>
```

Add this file to ```.gitignore```

Edit the connection with database url 

```
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@<clustername>.<databaseid>.mongodb.net/<databasename>?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
});
```

In the project directory:

### Install Packages 

Install Packages in both client & server folder. From the root of this directory run these commands.

```
cd client && npm install
```
```
cd server && npm install
```

### `npm start`


Backend Server will boot up on http://localhost:80

Frontend will boot up on http://localhost:3000


