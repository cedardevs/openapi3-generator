module.exports = (Handlebars, _) =>{

  /**
   * Uppercases a string.
   */
  Handlebars.registerHelper('isDefined', (input) => {
    return input !== undefined
  });

}
