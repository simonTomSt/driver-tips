export const handleProps = (propsObj, propKey, defaultKey) => {
  if (propsObj.hasOwnProperty(propKey)) {
    return propsObj[propKey];
  } else if (propKey) {
    return propKey;
  } else {
    return propsObj[defaultKey];
  }
};
