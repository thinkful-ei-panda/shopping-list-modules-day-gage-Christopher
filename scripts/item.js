
const foo = 'bar';

function validateName(name){
  if(!name){
    throw Error('Name must no be blank');
  } return name; 
}  

function create(name){
  let item = {
    id : cuid(),
    name : name,
    checked : false,
  }; 
  return item; 
}


export default{
  validateName,
  create
};