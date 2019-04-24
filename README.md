# Confection Social App

**Goal**

To create an application with an emphasis on community interactivity, artistic liberty, chronological feed, ease of use between accounts, and striking visual content.

=======================================================================================

**Team**
- **Camille Hughes** https://github.com/camille-the-eel
- **Marshall Dreiling** https://github.com/mdreiling

=======================================================================================

**Technologies Used**

- React
- Express
- Node
- MongoDB
- Javascript
- CSS
- HTML
- <a href="https://jwt.io/">JSON Web Token</a> : user authentication
- <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a> : password encryption
- <a href="https://www.npmjs.com/package/validator">validator</a> : validates account creation and log in input
- APIs: 
    - <a href="https://getstream.io/">Stream</a>
- Materialize CSS Framework
- Adobe Fonts

=======================================================================================

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
