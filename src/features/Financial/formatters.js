export function cardNumberFormatter(oldValue, newValue) {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  return newValue
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .substring(0, 21);
}

export function expirationDateFormatter(oldValue, newValue) {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  return newValue
    .replace(/\W/gi, '')
    .replace(/(.{2})/g, '$1/')
    .substring(0, 5);
}
