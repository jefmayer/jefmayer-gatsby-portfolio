/* eslint-disable import/prefer-default-export */
const getSectionIdFromClassNames = (classNames) => (
  classNames.substr(classNames.lastIndexOf('-') + 1)
);

export {
  getSectionIdFromClassNames,
};
/* eslint-enable import/prefer-default-export */
