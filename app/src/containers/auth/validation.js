export const requiredValidation = value => {
  return value ? undefined : 'Required'
}
export const numberValidation = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const emailValidation = value => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value && !re.test(String(value).toLowerCase()) ? 'Invalid' : undefined
}
