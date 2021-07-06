const getFormattedDate = (date) => {
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formatDate;
};

export default getFormattedDate;
