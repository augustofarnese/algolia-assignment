# Algolia Demo - TED Talks search 

This project is a demo of Algolia, using basic features to build a working search interface in a few hours. The demo can be accessed at <https://augustofarnese.github.io/algolia-assignment/>.

Based on the problem that there are many TED Talks available, from various speakers, and divided into many different topics, it may be hard to find a relevant talk to watch. This demo gives an easy way to explore the talks and find a good one to watch. 

Users can type relevant keywords to find a topic they want, and also refine their search by some attributes:
* *Tags*: There are several tags available for filtering based on the topic covered by each video. They can be selected on the left menu or typed on the search text input.
* *Speaker*: They can be selected on the left menu or typed on the search text input.
* *Characteristics*: Each video has a ratting attribute to some characteristics they might have for the viewers. Users can filter by them using a range slider for each of those characteristics:
  * Funny
  * Beautiful
  *  Courageous 
  * Fascinating 
  * Informative 
  * Ingenious 
  * Inspiring 
  * Jaw-Dropping

Each result hit contains the speaker's name, title, and description of the talk. 

## Improvements for the Demo
As this demo was built just in few hours, it lacks some features that would significantly increase the user experience while searching TED Talks:

1. Add direct links for the talks on each search result, so users can click and watch the talk, instead of having to go to [YouTube](www.youtube.com) or [TED Talks website](www.ted.com) to find the video;
2. Use sorting instead of refinements for attributes like Funny Rating, Beautiful Rating, etc. Although refinements give the ability to filter by more than one attribute, it resulted in a more complex interface, and sorting would be better recognized by users in a search interface;
3. Reduce description size and add a "show more" button to display the whole description;
4. Each hit thumbnail is too big for a thumbnail, causing loading delays with bad internet connections. There should be smaller images and progressive image loading for a better user experience. 

## Feedbacks

1. The documentation is well written and was very helpful to learn Algolia's features;
2. The [Live Demo link](https://codesandbox.io/s/github/algolia/doc-code-samples/tree//InstantSearch.js/getting-started) available at [InstantSearch.js Docs page](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/) isn't working;
3. The [settings file](https://github.com/algolia/datasets/blob/master/tedtalks/talks_settings.json) available for the TED Talks dataset may be outdated and the format couldn't be loaded into the dashboard;


_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._
_It was used a public dataset of TED Talks, available at <https://github.com/algolia/datasets/tree/master/tedtalks>._