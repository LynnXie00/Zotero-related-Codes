copy the following code as item template in betternote template editor.


```
${{
    async function getAnnotationsByColor(_item, color) {
    const annots = _item
    .getAnnotations()
    .filter((item) => item.annotationColor === color);
    if (annots.length === 0) {
    return "";
    }
    return Zotero.BetterNotes.api.convert.annotations2html(annots, {
    noteItem: targetNoteItem,
    });
    }
    
    const attachments = Zotero.Items.get(topItem.getAttachments()).filter((i) =>
    i.isPDFAttachment()
    );
    
    const creators = topItem.getCreators();
    let content = "";
    const year = topItem.getField("year");
    if (creators.length === 0) {
      content = "no author";
    } else if (creators.length === 1) {
      content = `${creators[0].lastName}, ${year}`;
    } else {
      content = `${creators[0].lastName} etal., ${year}`;
    }
    
    let res = `<h1>${content}</h1> <h2>${topItem.getField("title")}</h2>`;
    
    const colors = {
    "#aaaaaa": "💡 Purpose", // Grey
    "#fd7b41": "🔍 Research Gap", // Redish Orange (customized)
    "#2ea8e5": "📚 Theory", // Blue
    "#5fb236": "❗Hypotheses", // Green
    "#a28ae5": "⛏️ Method", // Purple
    "#e56eee": "📝 Results", // Magenta
    "#f19837": "👍 Contribution", // Orange
    "#ff6666": "⁉️ Attention & Limitation", // Red
    "#34eb86": "🕞 Future Research", // Lighter Green(customized)
    
    };
    for (const attachment of attachments) {
    res += `<h2>📄For Document:${attachment.attachmentFilename}</h2>`;
    for (const color in colors) {
    if (Object.hasOwnProperty.call(colors, color)) {
    const colorName = colors[color];
    const renderedAnnotations = await getAnnotationsByColor(
    attachment,
    color
    );
    if (renderedAnnotations) {
    res += `<h3>
        <p style="background-color:${color};">${colorName}</p>
    </h3>${renderedAnnotations}`;
    }
    }
    }
    const renderedAnnotations = await getAnnotationsByColor(
    attachment,
    (_annot) => !colors.includes(_annot.annotationColor)
    );
    if (renderedAnnotations) {
    res += `<h2>
        <p>Other Annotations</p>
    </h2>${renderedAnnotations}`;
    }
    }
    return res;
    }}$

    ```
    