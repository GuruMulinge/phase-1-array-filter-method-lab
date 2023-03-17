// Code your solution here
  
// findMatching function
function findMatching(drivers, argument) {
    return drivers.filter((driver => driver.toString().toLowerCase() === argument.toLowerCase()));
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, argument) {
    return drivers.filter(driver => driver.toString().toLowerCase().startsWith(argument.toLowerCase()));
  }
  
  // matchName function
  function matchName(drivers, argument) {
    return drivers.filter(driver => driver.name === argument);
  }

 
  

  let drivers = [
    { name: "John Kimani", hometown: "Nairobi" },
    { name: "Mary Wanjiku", hometown: "Mombasa" },
    { name: "Peter Kariuki", hometown: "Kisumu" },
    { name: "Joyce Njeri", hometown: "Nakuru" },
    { name: "Daniel Mwangi", hometown: "Eldoret" },
    { name: "Wambui Kamau", hometown: "Thika" },
  ];

console.log(fuzzyMatch(drivers, "John Kimani"));