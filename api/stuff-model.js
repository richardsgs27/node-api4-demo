module.exports = {
  getAll,
  getByIndex,
  add,
};

const OBJECTS = [];

async function getAll(){
    return OBJECTS
}

async function getByIndex(i){
    return OBJECTS[i]
}

async function add(object){
    OBJECTS.push(object)
    return object
}