const getFormattedDate = (date: any) => {
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formatDate;
};

export default getFormattedDate;
