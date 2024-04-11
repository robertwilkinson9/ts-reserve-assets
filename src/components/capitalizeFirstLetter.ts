export const capitalizeFirstLetter = (name: string) => {
  if (name && name.length) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  } else {
  } return "";
};

export default capitalizeFirstLetter;
