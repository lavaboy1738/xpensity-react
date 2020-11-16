let id = parseInt(window.localStorage.getItem("XpensityID") || "0");

const createID = () => {
    id += 1;
    window.localStorage.setItem("XpensityID", id.toString());
    return id;
}

export {createID};