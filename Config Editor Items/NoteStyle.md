

# Zotero Note Template
- Open the _Config Editor_ (say yes when it ask to be cautious)
- Find the `extensions.zotero.note.css` , right click and select _Modify_ (if you don’t know how to do a right click, you can also double click).
- In the text input, copy the following css:




``` css



body {
    max-width: 35em;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    font-family: "Times New Roman", Times, serif;
    color: black;
}


h1 {
    font-size: 1.8em;
    padding-bottom: none;
    font-family: "Georgia";
    font-weight: bold;
}

h2 {
    font-size: 1.6em;
    font-weight: bold;
    padding-bottom: none;
    border-bottom: none;
    font-family: "Georgia";
    text-transform: capitalize;
    margin-left: 1em;
}

h3 {
    font-size: 1.4em;
    font-family: "Georgia";
    font-style: italic;
    text-transform: capitalize;
    font-weight: bold;
    margin-left: 2em;
}

h4 {
    font-size: 1.2em;
    font-family: "Georgia";
    font-style: underline;
    text-transform: capitalize;
    text-decoration: underline;
    font-weight: bold;
    margin-left: 3em;
}

h5 {
    font-size: 1em;
    font-family: "Times New Roman", Times, serif;
    font-style: underline;
    text-transform: capitalize;
    display: list-item;
    margin-left: 4em;
    font-weight: bold;
}

p {
    text-indent: 1.75em;
    font-family: "Times New Roman", Times, serif;
}

a {
    font-family: "Times New Roman", Times, serif;
    color: black;
    text-decoration: none;
}

ul,
ol {
    padding-left: 1.75em;
}

blockquote {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding-left: 1.55em;
    border-left: 3px solid lightgrey;
    color: grey;
}

blockquote p {
    text-indent: 0;
}

span.citation {
    font-family: "Times New Roman", Times, serif;
    font-size: 0.5em;
}

span.comment {
    font-family: "Times New Roman", Times, serif;
    color: brown;
    background-color: antiquewhite;
    ;
    font-style: italic;
}
```