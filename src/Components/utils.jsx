
export const dateConverter = created_at => {

  const newDate = Date.parse(created_at);
  const fullDate = new Date(newDate);
  const dateString = "" + fullDate;
  const dateParts = dateString.split(" ");
  const displayDate =
    dateParts[0] +
    " " +
    dateParts[1] +
    " " +
    dateParts[2] +
    " " +
    dateParts[3] +
    " " +
    dateParts[4].slice(0, 5);

  return displayDate;
};

export const textTrimmer = body => {
  const sentenceArray = body.split(".");
  const twoSentence = sentenceArray[0] + "." + sentenceArray[1] + "...";

  if (sentenceArray.length > 1) {
    return twoSentence;
  } else return sentenceArray[0] + "...";
};
