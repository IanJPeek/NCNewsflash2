// import React from 'react';

// function utils(created_at) {

  export const dateConverter = (created_at) {
    // console.log({created_at})
    // const date = {created_at}
    // const newDate = created_at.toDateString()
    // console.log(date)
    // const newDate = date.toDateString
    // console.log(Date.parse(date))
    const newDate = Date.parse(created_at)
    console.log(newDate)
    // console.log(new Date (newDate))
    const displayDate = new Date(newDate)
    const dateString = "" + displayDate
    console.log(displayDate)
    console.log(dateString)
    // return displayDate
    return dateString
  }


  return (
    <div>
      
    </div>
  );
// }

// export default utils;