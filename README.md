# Drone navigation

## Getting started

First of all, you need to clone this repo into your local machine, using:

```
git clone https://github.com/ruimak/thegig.git
```

If you have all the dependencies installed and you want to see the functions running, comment in the line 3 and 125.
Then you should be able to run the script:
```
npm start

```

If you want to run the functions for a different instructions file, just change the pathing in line 3. All the data files are in the data folder.
There is also commented out a different way to return the results of the function, as an array of coordinates instead of a string. Commenting this in will break the tests for the main functions.

## Running the tests

Script:

```
npm test

```

Tested with Mocha and Chai.
Every individual function was tested and included a custom test file.

## Answers to both exercises

The final coordinates for the basic exercise are : [-33,22] while facing South.
The final coordinates for the advanced exercise are : [-27,-6] while facing South.