function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function randomString(len = 10) {
  let str = '';
  while (len--) {
    str += String.fromCharCode(48 + ~~(Math.random() * 42));
  }
  return str;
};

export {
  hasClass,
  randomString
}