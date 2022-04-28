// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates the amount of time required to watch a specific number of Star Trek Episodes. 
 */
function calculateTimeClicked() {
  // input, collects the data the user has inputted into the program
  let numberOfEpisodes = parseFloat(document.getElementById('episode-quantity').value)
  //calculation to find how many hours required to watch the quantity the user has inputted
  let timeRequired = (50/60) * numberOfEpisodes
  //output of the information back to the user
  document.getElementById('duration-of-time').innerHTML = 'The length of time it would take you to watch ' + numberOfEpisodes + ' Star Trek episodes would be approximately ' + timeRequired.toFixed(2) + ' hours.';
}

function calculateEpisodesClicked() {
  //input; this collects the data the user has inputted into the program
  let amountOfTime = parseFloat(document.getElementById('amount-of-time').value)
  //calculation; this finds out how many episodes can be watched in the time period submitted by the user
  let possibleEpisodes =  (60 * amountOfTime) / 50
  //output; the information is released back to the user
  document.getElementById('number-of-episodes').innerHTML = 'In ' + amountOfTime + ' hours, you could watch approximately ' + possibleEpisodes.toFixed(2) + ' episodes of Star Trek';
}
  