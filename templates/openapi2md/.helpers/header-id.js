module.exports = (Handlebars, _) =>{

  Handlebars.registerHelper('headerId', id => {
    try {
      return Handlebars.compile("#{ {{~var~}} }")({var:id})//+id
    } catch (e) {
      return '';
    }
  });

}
