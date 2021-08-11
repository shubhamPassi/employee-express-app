const fs = require("fs");
let data = JSON.parse(fs.readFileSync(__dirname + "/employee.json", "utf-8"));

const insert = (name) => {
    data.last_id += 1;
    data.employee.push({ id: data.last_id + 1, name: name });

    fs.writeFileSync(__dirname + "/employee.json", JSON.stringify(data));
};

const update = (id, newName) => {
    for (let i = 0; i < data.employee.length; i++) {
        if (data.employee[i].id === id) {
            data.employee[i].name = newName;
        }
        fs.writeFileSync(__dirname + "/employee.json", JSON.stringify(data));
    }
};

const del = (id) => {
    data.employee = data.employee.filter((value) => value.id != id);

    fs.writeFileSync(__dirname + "/employee.json", JSON.stringify(data));
};

let get = () => {
    return data.employee;
};

let employee = {
    insert,
    update,
    del,
    get,
};

module.exports = employee;
