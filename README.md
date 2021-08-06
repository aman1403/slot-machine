### Slot Machine Task

## Installation

Requires [Node, React and Redis] to run the code.

## Pull the repository

```sh
git pull
```

## Client Side(In client Folder)

```sh
npm install
```
```sh
npm start
```


## Server Side(In server Folder)

```sh
npm install
```
```sh
npm start
```

Once done, you can access the client as well as server running on ports 3000 and 5000 respectively

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:3000                                           #React-Client
```

```sh
127.0.0.1:5000                                           #Express-API
```

> 

## THANK YOU :)





### Objective

Jackpot! You've landed a summer gig in Las Vegas! Unfortunately, its 2021, and the casinos are closed due to COVID-19. Your boss wants to move some of the business online and asks you to build a fullstack app — a simple slot machine game, with a little twist. Build it to ensure that the house always wins!

### Brief

When a player starts a game/session, they are allocated 10 credits. 
Pulling the machine lever (rolling the slots) costs 1 credit. 
The game screen has 1 row with 3 blocks. 
For player to win the roll, they have to get the same symbol in each block.
There are 4 possible symbols: cherry (10 credits reward), lemon (20 credits reward), orange (30 credits reward), and watermelon (40 credits reward).
The game (session) state has to be kept on server.
If the player keeps winning, they can play forever, but the house has something to say about that...
There is  CASH OUT button on the screen, but there's a twist there as well.

### Tasks

- Implement assignment using:
    - Language: *Node*
    - Framework: *any framework*
- When a user opens the app, a session is created on the server, and they have 10 starting credits.
- **Server side:**
    - When a user has less than 40 credits in the game session, their rolls are truly random.
    - If a user has between 40 and 60 credits, then the server begins to slightly cheat:
        - For each winning roll, before communicating back to client, the server does one 30% chance roll which decides if server will re-roll the that round.
        - If that roll is true, then server re-rolls and communicates the new result back.
    - If user has above 60 credits, the server acts the same, but in this case the chance of re-rolling the round increases to 60%.
        - If that roll is true, then server re-rolls and communicates the new result back.
    - There is a cash-out endpoint which moves credits from the game session to user's account and closes the session.

- **Client side:**
    - Include a super simple, minimalistic table with 3 blocks in 1 row.
    - Include a button next to the table that starts the game.
    - The components for each sign can be a starting letter (C for cherry, L for lemon, O for orange, W for watermelon), but bonus points for using SVG assets (maybe get something from the internet).
    - After submitting a roll-request to server, all blocks should enter a spinning state (can be 'X' character spinning, but bonus points for getting spinner SVG from the internet).
    - After receiving response from server, the first sign should spin for 1 second more and then display the result, then display the second sign at 2 seconds, then the third sign at 3 seconds.
    - If the user wins the round, their session credit is increased by the amount from the server response, else it is deducted by 1.
    - Include a button on the screen that says "CASH OUT", but when the user hovers it, there is 50% chance that button moves in a random direction by 300px, and 40% chance that it becomes unclickable (this roll should be done on client side). If they succeed to hit it, credits from session are moved to their account.

### Evaluation Criteria

- *Node* best practices
- Completeness: did you complete the features as briefed?
- Correctness: does the solution perform in sensible, thought-out ways?
- Maintainability: is the code written in a clean, maintainable way?

### CodeSubmit

Please organize, design and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Acintya Global Holdings Team