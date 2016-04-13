
const getTag = (pathname) => {
  const locationPieces = pathname.substr(1).split('/');
  const tag = locationPieces.length === 2 && locationPieces[0] === 'tag' ? (locationPieces[1]) : '';

  return tag;

}
export default getTag;
