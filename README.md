# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-stack project including token-based authentication

Here's the process to create a new MERN-Stack project that starts with the infrastructure code:

1. Clone the mern-infrastructure repo: git clone <url of mern-infrastructure> <name-of-project>

2. Note that the folder created will be same as <name-of-project> instead of mern-infrastructure

3. cd <name-of-project>

4. Install the Node modules: npm i

5. Builds the react app: npm run build

6. Create a .env (touch .env) and add entries for DATABASE_URL and SECRET

7. Update the "name": "mern-infrastructure" in package.json to the name of your project.

8. Create a new repo on your personal GH account.

9. Copy the new GH repo's URL.

10. Update the remote's URL: git remote set-url origin <paste the copied GH url>

11. Make the initial commit: git add -A && git commit -m "Initial commit"

12. Push for the first time: git push -u origin main
