const students =[
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];
const names = students.map( s => s.name);
console.log(names);
//access array object property using .map
const ids = students.map( sid => sid.id);
console.log(ids);
//access array object property using .filter
const biggerId = students.filter( sbid => sbid.id>40);
console.log(biggerId);
//access array object property using .find
const biggerOneId = students.find( sbid => sbid.id>40);
console.log(biggerOneId);