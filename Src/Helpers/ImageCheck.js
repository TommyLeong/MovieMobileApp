import Api from '../Services/Api';

const ImageCheck = (path) => {
  const imagePath = path
    ? {uri: `${Api.IMAGE_DOMAIN}${path}`}
    : require('../Theme/imagePlaceholder.png');

  return imagePath;
};

export {ImageCheck};
