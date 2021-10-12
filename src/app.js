const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'RSIU36TZFW',
  'f3b3f24a1a1c0af22cf872bf59853858'
);

const search = instantsearch({
  indexName: 'ted_talks',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <article>
          <div> <img style="width:100%" src=" {{image_url}} "/></div>
          <div class="author">{{speakers}}</div>
          <h3 class="title">{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}} </h3>
          <p class="description">{{#helpers.highlight}}{"attribute":"description"} {{/helpers.highlight}}</p>
        </article>
        `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
	  instantsearch.widgets.refinementList({
    container: '#speaker',
    attribute: 'speakers',
  }),
	  instantsearch.widgets.rangeSlider({
    container: '#funny_rating',
    attribute: 'funny_rating',
  }),
	  instantsearch.widgets.rangeSlider({
    container: '#beautiful_rating',
    attribute: 'beautiful_rating',
  }),
	  instantsearch.widgets.refinementList({
    container: '#tags',
    attribute: 'tags',
  }),
	instantsearch.widgets.clearRefinements({
  container: '#clear_refinements',
	}),
	instantsearch.widgets.rangeSlider({
    container: '#jaw_droping_rating',
    attribute: 'jaw_droping_rating',
  }),
  instantsearch.widgets.rangeSlider({
    container: '#inspiring_rating',
    attribute: 'inspiring_rating',
  }),
  instantsearch.widgets.rangeSlider({
    container: '#ingenious_rating',
    attribute: 'ingenious_rating',
  }),
  instantsearch.widgets.rangeSlider({
    container: '#informative_rating',
    attribute: 'informative_rating',
  }),
  instantsearch.widgets.rangeSlider({
    container: '#fascinating_rating',
    attribute: 'fascinating_rating',
  }),
  instantsearch.widgets.rangeSlider({
    container: '#courageous_rating',
    attribute: 'courageous_rating',
  }),
//  instantsearch.widgets.sortBy({
//    container: '#sortby',
//    items: [
//	    { label: 'Funny', value: 'ted_talks_funny_desc' },
//    ],
//  }),
]);

search.start();
