module.exports = (Handlebars, _) =>{

  Handlebars.registerHelper('linkList', items =>{

    if(!items) return '';

    return items.map(i => `[${i.externalDocs.description}](${i.externalDocs.url})`).join(', ');

  });

}
