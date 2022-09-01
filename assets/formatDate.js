const formatDate = data => {
  data.map(el => {
    const date = new Date(el.createdAt);
    const dateFormated = date.toLocaleString("en-US");
    el.createdAt = dateFormated;
  });
};
export default formatDate;
