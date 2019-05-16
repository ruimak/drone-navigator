const fs = require("fs");
// If you want to run this file, comment out this next line (with the appropriate path) and the line 125, which runs the main function
// const path = "./data/problem-basic-input.txt";

//This function updates the variable 'direction', which specifies where the drone is pointing to

const directionUpdater = (direction, command) => {
  switch (direction) {
    case "N": {
      if (command === "L") {
        return "W";
      } else if ((command = "R")) {
        return "E";
      }
    }
    case "S": {
      if (command === "L") {
        return "E";
      } else if ((command = "R")) {
        return "W";
      }
    }
    case "E": {
      if (command === "L") {
        return "N";
      } else if ((command = "R")) {
        return "S";
      }
    }
    case "W": {
      if (command === "L") {
        return "S";
      } else if ((command = "R")) {
        return "N";
      }
    }
  }
};

//This function tests a character, if its a direction it will return true
//If its not a direction, it will either be a drag command, a move command or empty space
const directionUpdateChecker = character => {
  return character.match(/[LR]/) ? true : false;
};

//This function checks wether the next command is to drag or not
//It will return either the direction to drag or false if its not
const draggerChecker = character => {
  return character.match(/[NSEW]/) ? character : false;
};

//This function increments or decrements a step on a specific direction
const stepTaker = (step, direction, coords) => {
  if (step === " ") {
    return coords;
  } else {
    switch (direction) {
      case "N": {
        return step === "+"
          ? [coords[0], coords[1] + 1]
          : [coords[0], coords[1] - 1];
      }
      case "S": {
        return step === "+"
          ? [coords[0], coords[1] - 1]
          : [coords[0], coords[1] + 1];
      }
      case "E": {
        return step === "+"
          ? [coords[0] + 1, coords[1]]
          : [coords[0] - 1, coords[1]];
      }
      case "W": {
        return step === "+"
          ? [coords[0] - 1, coords[1]]
          : [coords[0] + 1, coords[1]];
      }
    }
  }
};

//This function takes a path to the file with the directions, and returns a string with the end coordinates and direction as a promise
const scanDirections = pathToFile => {
  return new Promise(resolve => {
    fs.readFile(pathToFile, "utf8", (err, data) => {
      let direction = "N";
      let coords = [0, 0];
      let dragging = false;

      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < data.length; i++) {
          //If next instruction is a direction change (L or R), we update the variable direction and reset the variable dragging
          if (directionUpdateChecker(data.charAt(i))) {
            dragging = false;
            direction = directionUpdater(direction, data.charAt(i));
          }
          //Next step is to check if its a drag command (N S E or W)
          else if (draggerChecker(data.charAt(i))) {
            //If the dragger variable is false, its not dragging and has default moving, otherwise its dragged
            dragging = draggerChecker(data.charAt(i));
            //If its not a drag command nor a change direction command, its a move command or a blank space so we skip to the last condition
          } else {
            //If its dragging, call drag function, otherwise call stepTaker function
            if (dragging !== false) {
              coords = stepTaker(data.charAt(i), dragging, coords);
            } else {
              coords = stepTaker(data.charAt(i), direction, coords);
            }
          }
        }
        // resolve(
        //     coords
        //     );

        resolve(
          `Final coordinates: [${coords}]. Final direction: ${direction}`
          );
      }
    });
  });
};

// scanDirections(path).then(data=>{console.log(data)})

//The final coordinates for the basic exercise are : [-33,22] while facing South
//The final coordinates for the advanced exercise are : [-27,-6] while facing South


module.exports = { directionUpdateChecker, directionUpdater, draggerChecker, stepTaker, scanDirections };
