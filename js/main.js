// list of templates
//1. flexbox-menu
import menuTemplate from '../templates/flexbox-menu/menu-template';
//2. flexbox-layouts
import layoutTemplate from '../templates/complex-layouts/layouts-template';




// self-invoked function
/*
* Convert a template string into HTML DOM nodes
* @param {String} template The template string
* @return {Node} The template HTML
* */
const injectTemplate = ((template) => {
  // 1. identify the template
  const referenceNode = document.getElementById('root');
  // 2. create an element
  let container = document.createElement('div');
  // 3. insert the string template into the element via innerHTML
  container.innerHTML = template;
  // 4. insert the new node before the reference node
  return referenceNode.parentNode.insertBefore(container, referenceNode);
})(layoutTemplate);// RETURN TEMPLATE HERE!



