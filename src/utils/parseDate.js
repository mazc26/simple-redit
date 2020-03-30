export const parseDate = utcDate => {
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDate();

  const lastDate = new Date(utcDate * 1000)
  const lastHour = lastDate.getHours();
  const lastDay = lastDate.getDate();
  
  if (currentDay === lastDay){
    return `Created ${currentHour - lastHour} hours ago`;
  } else {
    const days = currentDay - lastDay;
    console.log(days, "LOS DIAS")
    return `Created ${ days > 1 ? days `days` : `a day` } ago`;
  }
}