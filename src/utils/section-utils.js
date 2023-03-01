const getImageDataById = (id, data) => {
  const { assets } = data;
  return assets.find((asset) => asset.id === id);
};

const getSectionIdFromClassNames = (classNames) => (
  classNames.substr(classNames.lastIndexOf('-') + 1)
);

export {
  getImageDataById,
  getSectionIdFromClassNames,
};
