# ZoteroPdfFinder

- Open the _Config Editor_ (say yes when it ask to be cautious)
- Find the `extensions.zotero.findPDFs.resolvers` , right click and select _Modify_ (if you don’t know how to do a right click, you can also double click).
- In the text input, copy the following:

```json


{
	"name":"Sci-Hub-1",
	"method":"GET",
	"url":"https://sci-hub.ru/{doi}",
	"mode":"html",
	"selector":"#pdf",
	"attribute":"src",
	"automatic":true
}
{
	"name":"Sci-Hub-2",
	"method":"GET",
	"url":"https://sci-hubtw.hkvisa.net/{doi}",
	"mode":"html",
	"selector":"#pdf",
	"attribute":"src",
	"automatic":true
}

 {
    "name": "Sci-Hub-3",
    "method": "GET",
    "url": "https://sci-hub.wf/{doi}",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": true
  },

  {
    "name": "Sci-Hub-4",
    "method": "GET",
    "url": "https://sci-hub.st/{doi}",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": true
  },
  {
    "name": "Sci-Hub-5",
    "method": "GET",
    "url": "https://sci-hub.ren/{doi}",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": true
  },
  {
    "name": "Sci-Hub-6",
    "method": "GET",
    "url": "https://sci-hub.se/{doi}",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": true
  },
{
	"name":"QiESearch",
	"method":"GET",
	"url":"https://doi.qqsci.com/?doi={doi}",
	"mode":"html",
	"selector":"#pdf",
	"attribute":"src",
	"automatic":true
}
{
	"name":"Libgen-1",
	"method":"GET",
	"url":"http://library.lol/scimag/{doi}",
	"mode":"html",
	"selector":"#pdf",
	"attribute":"href",
	"automatic":true
}

  {
    "name": "Unpaywall",
    "method": "GET",
    "url": "https://api.unpaywall.org/v2/{doi}?email=me@example.com",
    "mode": "json",
    "selector": ".oa_locations.url_for_pdf",
    "automatic": true
  },

  {
    "name": "Unpaywall2",
    "method": "GET",
    "url": "https://api.unpaywall.org/v2/{doi}?email=me@example.com",
    "mode": "json",
    "selector": ".oa_locations",
    "mappings": { "url": "url_for_pdf", "pageURL": "url_for_landing_page" },
    "automatic": true
  }

```
