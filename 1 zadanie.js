const userIvanov = function(a) {
  a = {Name: 'Ivan',
  Family: 'Ivanov',
  Age: '30'}
for (let key in a) {
  console.log(key+ ': ' + a[key]);
}

 }
userIvanov();

//Name: Ivan
//Family: Ivanov
//Age: 30
