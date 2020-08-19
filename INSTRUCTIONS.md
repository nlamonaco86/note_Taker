# Unit 11 Express Homework: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Supplemental/HerokuGuide.md) for getting your app deployed on Heroku.

- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

# Deploying a Node Web Server to Heroku
This guide walks through the necessary steps to deploy your full stack Node.js application to Heroku!
## Prerequisites
To begin with, you'll need a git repository initialized locally with your basic web server code working and committed.
There are a couple of ways to do this:
   * If you cloned from a remote repository and then wrote/committed your code to the local clone, you should be set and can go straight to deploying.
   * If you haven't set up a git repository for your files yet (or didn't clone), proceed with the following steps:
1. Run `git init` locally in the folder with your web server files.
   * If you want to also push to GitHub in addition to hosting on Heroku (recommended), you can follow the [Adding Existing Projects to GitHub through the command line Guide](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
2. Commit all changes (if you haven't already with the above steps).
3. You may also want to create a `.gitignore` file if you don't have one already. 
   * This file will allow you to tell git to not track certain files.
   * Inside of the `.gitignore` file, add `node_modules/` as the first line and save the file. Now, git should no longer track `node_modules` files.
   * You can consult the [GitHub gitignore Documentation](https://help.github.com/articles/ignoring-files/) or this [node gitignore example](https://github.com/github/gitignore/blob/master/Node.gitignore) for more information on how to do this.
If you haven't run into any errors at this point, you should be able to proceed to the next section.
## Steps to Deploy
1. Log in to Heroku.
   * If you are a Windows user, open the Command Prompt (cmd.exe NOT Git Bash) and type `heroku login` in the command line. Enter your Heroku credentials.  Keep this Command Prompt open in the background. Then, open Git Bash and navigate to the folder with your code.
   * If you are a Mac user, open the Terminal and type `heroku login` in the command line. Enter your Heroku credentials. Navigate to the folder with your code.
2. Run the command: `git remote –v`.
   * This is to show you that right now, you do not have heroku listed as a remote repository.
3. Run the command `heroku create`.
   * This will create an app instance on the Heroku server and will add heroku as a remote for your local git repository.
4. Run `git remote –v` again.
   * This isn't necessary, but helps to confirm that Heroku is now in your list of remotes. This time you should see the `heroku` remote.
5. Ensure that your `package.json` file is set up correctly. It must have a `start` script and all the project's dependencies defined. E.g.:
   ```json
   {
     "name": "starwars",
     "version": "1.0.0",
     "description": "Helps you find the characters you are looking for",
     "main": "server.js",
     "dependencies": {
        "express": "^4.16.3"
     },
     "scripts": {
       "start": "node server.js"
     }
   }
   ```
6. Ensure your web server is starting with a dynamic port.
   
   * For an express app, the code for this would look like:
   ```js
   var PORT = process.env.PORT || 3001;
   ...
   app.listen(PORT, function() {
   ```
   * This allows you to get the port from the bound environment variable (using `process.env.PORT`) if it exists, so that when your app starts on heroku's machine it will start listening on the appropriate port.
   * You app will still run on port 3001 locally if you haven't set an environment variable.
7. Ensure that you have at least one HTML page being served at the "/" route. Example:
    ```js
    app.get("/", function(req, res) {
      res.json(path.join(__dirname, "public/index.html"));
    });
    ```
8. Make sure that the application actually works locally. If it doesn't work locally, it won't deploy.
9. Commit any changes you've made up until this point.
10. Run the command `git push heroku master`. A series of processes will be initiated. Once the process is complete, note the name of the app.
11. Log in to your [Heroku account](https://id.heroku.com/login). You will see all of your hosted web applications. Click on the app that has the same name as the app you just created.
12. Click on settings. Then, scroll down until you see "Domains". Note the URL listed under Heroku Domain.
13. Navigate to that URL in your browser. If all went well, you should see your web application live online!
### Troubleshooting
* If your Heroku app fails to deploy, run the command `heroku logs` in your command line
  * This should print all the logs produced by both Heroku and your application before the deployment failed. 
  
  * Look for the first indication of an error in the logs. If the error message isn't clear, search on Google or ask the Instructional Staff for help.
