1

const people = ["Greg", "Mary", "Devon", "James"];
 for (i=0; i<people.length; i++)
 {
   console.log(`${people[i]}`);
}

2
const filteredPeople = people.filter(function(person)
{

return person!=='Greg';
}

)

console.log(filteredPeople);

3

const filteredPeople2 = people.filter(function(person2)
{
return person2!=='James';
})

console.log(filteredPeople2);

4
const people1 = ["Greg", "Mary", "Devon", "James"];
people1.unshift("Matt");
console.log(people1);

5
const people3 = ["Greg", "Mary", "Devon", "James"];
people3.push('shadi');
console.log(people3);

6
const people5 = ["Greg", "Mary", "Devon", "James"];

for (const person of people5) {
  console.log(person5);
  if (person === "Mary") {
    break;
  }
}

// 7
const people6 = ["Greg", "Mary", "Devon", "James","Matt"];
const peopleCopy = people6.slice().filter(person => person !=="Mary" && person !== "Matt");
console.log(peopleCopy);

8
const people7 = ["Greg", "Mary", "Devon", "James","Matt"];

indexMarry = people7.indexOf('Mary');

console.log(indexMarry);

9
const people8 = ["Greg", "Mary", "Devon", "James","Matt"]; 

indexFoo =  people8.indexOf('Foo');
console.log(indexFoo);

10
const people9 = ["Greg", "Mary", "Devon", "James"];
people9.splice(2, 1, "Elizabeth", "Artie");
console.log(people9);

11
const people10 = ["Greg", "Mary", "Devon", "James"];
const withBob = people10.concat('Bob');
console.log(withBob);