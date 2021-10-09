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
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
</article>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
