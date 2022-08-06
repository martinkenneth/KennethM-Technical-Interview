# Chi-Matic-Technical-Interview
Repository of files for Technical Interview


## Non-Trivial Contents
**./**
  - front_end.html
  - back_end.html

**./assets**
  - amanda-jones-P787-xixGio-unsplash.jpg (static image file used in front_end.js)
  - front_end.js (primary script file for front_end.js)
  - provider_versions.py (for reference only to simplify reading the dict included in back_end.html)
  - simpsons_episodes.py (for reference only to simplify reading the dict included in back_end.html)
  - style.css (for override styling if you wish)
  - utilities.js (supplemental script file for front_end.js)


## Objectives
### GitHub
For this exercise, clone this repo and make changes in a separate branch from main. You can name the branch whatever you wish, but should only push commits once you are ready to create a pull request. **Please push your new branch commits to remote and create a pull request at least 2 hours prior to your interview start time.**

***Note*** that as of now, this repository is public because of how we've structured our corporate account licensure with GitHub (that's on me, I'm sorry -- jon). Once we receive your pull request, we'll update this repository's visibility to 'private' so that your implementation is no longer visible (that will include your access). We are staggering when we send each individualized repository in order to provide equal time to all.
 

### Front End
Drawing Cards from a Single Deck:<br>
NB: Details about interacting with the API retrieving the cards can be found [here](http://deckofcardsapi.com/)
  1. Opening front_end.html in your browser *should* load a deck of cards, but it doesn't. I know the AJAX call is correct, the data returned is dumped into the console... it was working, but it's not rendering any more. Can you take a look, please?
  2. It would be nice if the cards appeared in order of value, highest-to-lowest when viewed left-to-right (assume suit does not matter if 2 cards have the same value)
  3. When I click the "Draw" button, I'd like to draw an additional 5 cards from the same deck (if there are at least 5 available), but I keep getting a different deck each time 
  4. I keep seeing the old cards that should no longer appear :/
  5. When I close the browser window and then reopen the page, I'm hoping to get a fresh hand from the same deck I was drawing from previously (if there are enough cards to draw a new 5, otherwise 5 cards from a new deck)


General:
  - Can you please update the font to something more appealing than Times New Roman? Dealer's choice!
  - Can you please take a brief pass at modifying the layout/design for how the information is currently organized? Particularly the image, text, and attributions of the history_of_poker section? This is definitely bringing some 1994 GeoCities vibes right now...

### Back End
Working with Datasets:
  1. Using the dictionary **simpsons_episodes**, print the title, viewership count, and IMDB rating such that:

      - The format is "Episode Title: ##,###,### Viewers, #.# IMDB Rating" with a line per episode (where 'Episode Title' is the actual title of the episode)
      - Only episodes with an IMDB rating of > 9.0 display
      - Episodes are ordered in the output by the size of viewership (highest first)

  2. Print 12 asterisks/stars (*) as a separator
  3. Output the date of three weeks ago from today (dynamically identified as of when the page is viewed) as a string 
  4. Print 12 asterisks/stars (*) as a separator
  5. Iterate through the nested dictionaries contained as values in **provider_versions** to identify differences

      - Consider each nested dictionary, or sub-dictionary, as a new 'version'
      - Output the date of each version (the keys of provider_versions) followed by a colon 
        - On the same line output a comma-delimited list of the items (keys of the sub-dictionary) where its value differs from that of the immediately preceding version
        - If there are no differences, print the string 'No Changes Found'
  
  6. Print 12 asterisks/stars (*) as a separator
  7. Assume we have a csv file named 'data_file' that was opened in Python and assigned the variable name 'data_file'
  
      - From the Python3 documentation (or another source you choose), can you find a way that we could evaluate a sample of data_file's content to deduce its dialect?
      - Print a string that would represent valid Python code setting a variable named **dialect** to the csv.Dialect class determined by evaluating data_file 


## Interview
During the interview, we'll ask you to share your browser window to review the html files rendered as a web page, then step through the code discussing each of the objectives' tasks and how you chose to address them. 

Before wrapping up, we'll explore various ways potential client-requested enhancements might be approached to work through how we might define next steps collaboratively.


## Notes
Executing the tasks listed under objectives should (hopefully) take less than an hour, save any time you choose to devote to the "General" section of the Front End portion or research you wish to undertake.

Challenge us on anything that doesn't make sense - inefficient use of memory, CPU, codespace, or other questionable practices :)

You are more than welcome to incorporate any additional code libraries or tools you wish (css frameworks, icon packs, etc.) to address the front-end portion!

[PyScript](https://pyscript.net/) is relatively new and still in alpha release. Adding modules such as *requests* and *csv* via the py-env configuration caused failures in building the runtime environment. This is why the variables 'simpsons_episodes' and 'provider_versions' are defined in-line: fetching it via API or loading from CSV was not workable, and inclusions via path definition to the .py file in *assets* required hosting all files on an independent server, which is a little beyond the scope of what's reasonable of us to ask.

Though fun to experiment with new tools and technologies, the use of PyScript is less about exploring the tool or your knowledge of it than it is to provide a mechanism of sharing and executing Python code independent of a CLI or third-party site. Also, using standard console output commands like *print* or *repr* is what we're expecting... there is no need or expectation that you use PyScript to interact with the DOM or learn its built-in functions here. Realistically, the tool has a lot of interesting features for helping demonstrate data visualizations relating to training datasets and output variance for machine learning models and other statistical endeavors - at least that's my initial impression with the heavy emphasis on dedication to including numpy, matplotlib, scikit, and the like. Its implications and uses are, of course, more broad but I worry that it's a little under-performant compared to the speed people expect of modern web apps and user interfaces to yet be the javascript replacement some tout. If you're here, leave the single print statement currently in the back_end file in place, just comment it out to not display. The rest of this is just to make sure that last instruction is wrapped in boring text. That, and machine learning model comprehensiblity is an area of interest. We're definitely looking forward to employing data-trained models in a few future projects if that's an area you want to explore, too.
