const userName = {
  Name: 'Ivan',
  Family: 'Ivanov',
  Age: '30'
 }

Object.getOwnPropertyNames(userName).forEach(function(val) {
  console.log(val + ': ' + userName[val]);
});

//Name: Ivan
//Family: Ivanov
//Age: 30