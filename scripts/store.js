import item from './item.js';

let items = [];
const hideCheckedItems = false;

function findById(id) {
  return items.find( x => x.id === id );
}

function addItem(name) {
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  }catch(e){
    console.log('opps?');
  }
}

function findAndToggleChecked(id){
  const checkedItem = findById(id);
  checkedItem.checked = !checkedItem.checked;
}

function findAndUpdateName(id,newName){
  try{
    let name = item.validateName(newName);
    findById(id);
    this.name = name; 

  }catch(e){
    console.log(`can not Update name : ${e.message}`);
  }
}
// items[0].id
function findAndDelete(id){
  const i = (findById(id));
  console.log(i);
  items = items.filter(x => x.id !== i.id );
  console.log(items);
  return items;
}


export default {
  hideCheckedItems,
  items, 
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
}; 

