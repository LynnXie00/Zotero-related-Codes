//cope and paste the codes in tools-developer-run javascript
//the following count authors and sort by count descendingly


var CurrentCollection = Zotero.getActiveZoteroPane().getSelectedCollection();
var sql = "SELECT TRIM(lastName || ', ' || firstName) AS author, COUNT(*) AS num FROM items JOIN itemCreators USING (itemID) JOIN creators USING (creatorID) JOIN collectionItems USING (itemID) JOIN collections USING (collectionID) WHERE collectionName=? GROUP BY author ORDER BY COUNT(*) DESC, author";
var rows = await Zotero.DB.queryAsync(sql,CurrentCollection.name);
var lines = [];
for (let row of rows) {
lines.push(row.author + '\t' + row.num);
}
return lines.join('\n');
