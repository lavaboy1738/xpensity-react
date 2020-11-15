let id = 0;

const createID = () => {
    id += 1;
    console.log(id);
    return id;
}

export {createID};