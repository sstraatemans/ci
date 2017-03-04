export const ci = (id) => {
  if(window === this){
    return new ci(id);
  }

  /** event listeners */
  let resize = (callback) => {
    id.addEventListener("resize", callback);
    return this;
  };

  let off = (type, callback) => {
    id.removeEventListener(type, callback);
    return this;
  };
  /** event listeners */

  /** classes */
  let addClass = (className) => {
    if (!hasClass(className)) {
        id.className += ' ' + className;
    }
    return this;
  };

  let removeClass = (className) => {
    var newClass = ' ' + id.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        id.className = newClass.replace(/^\s+|\s+$/g, '');
    }
    return this;
  };

  let hasClass = (className) => {
		return new RegExp(' ' + className + ' ').test(' ' + id.className + ' ');
  };

  let toggleClass = (className) => {
    if (hasClass(className)) {
        removeClass(className);
    } else {
        addClass(className);
    }

    return this;
  };
  /** classes */

  return {
    resize,
    off,
    addClass,
    removeClass,
    hasClass,
    toggleClass
  };
};



export default ci;
