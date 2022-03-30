# React-Users-Posts-List

Process To Run the Project\
-> Make sure node.js is installed\
-> Clone the project\
-> Open Command Prompt in React-Users-Posts-List project\
-> Run the command "npm install"\
-> Run the command "npm run"\
-> It should open a browser tab with login page\

The static credentials for login are

adminId: admin1234\
password: admin1234

For reference I've added Screenshots


# Project Description

By default user will be refirected to login page. Once the user logins, It will open the dashboard page.

The user will see the entire page in iframe with sticky header table.

I have used both in-function state handler and redux state management. But due to iframe loading. I've just commented out the redux state updates with thunk middleware and used the in-function state updates.

FYI Redux state update is also fully functional just the dispatch is commented and not fetching the data from store
