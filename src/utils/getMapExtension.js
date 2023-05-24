/* eslint-disable import/prefer-default-export */
export const getFileExtension = (fileName = '') => {
  const splitFile = fileName.split('.');
  const extensionFile = splitFile[-1];
  return extensionFile;
};
