function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Ivan",
    family: "Ivanov",
    age: 30,
    course: "Fullstack",
  };

  console.log(showProps(student1, "game"));  // false
  console.log(showProps(student1, "name"));  // true
  console.log(showProps(student1, "age"));   // true
  console.log(showProps(student1, "rage"));  // false