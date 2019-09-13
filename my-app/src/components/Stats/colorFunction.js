const randomColor = () => {
  const colorFirst = (Math.random() * 255).toFixed(0);
  const colorSecond = (Math.random() * 255).toFixed(0);
  const colorThird = (Math.random() * 255).toFixed(0);
  const color = `${colorFirst}, ${colorSecond}, ${colorThird}`;
  return color;
};

export default randomColor;
