
copy the following code as item template in betternote template editor.

```
${await new Promise(async (r) => {
  const creators = topItem.getCreators();
      let content = "";
      const year = topItem.getField("year");
      if (creators.length === 0) {
        content = "no author";
      } else if (creators.length === 1) {
        content = `${creators[0].lastName}, ${year}`;
      } else if (creators.length === 2) {
		content = `${creators[0].lastName} & ${creators[1].lastName} ${year}`;
	  } else {
        content = `${creators[0].lastName} etal., ${year}`;
      }
  let res = `<h1>${content}</h1>
  <h2>${topItem.getField("title")}</h2>
<br>
<h2>💡Purpose</h2>
<br>
<h2>❓Research questions </h2>
<br>
<h2>📚Theory </h2>
<br>
<h2>❗Hypotheses</h2>
<br>
<h2>📉Model</h2>
<br>
<h2>⛏️Method</h2>
<br>
<h2>📝Results</h2>
<br>
<h2>❌Limitation</h2>
<br>
<h2>↪️Future Direction</h2>  `;
  r(res);
})}



```

