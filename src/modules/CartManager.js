const src = "http://localhost:5002";

export default {

    get(id) {
        return fetch(`${src}/carts/${id}`).then(e => e.json());

    },
    getAll() {
        return fetch(`${src}/carts?_expand=drink`).then(e => e.json());
    },
    post(drink) {
        return fetch(`${src}/carts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drink)
        }).then(e => e.json())
    },
    edit(editDrink) {
        return fetch(`${src}/carts/${editDrink.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editDrink)
        }).then(e => e.json())
    },

    delete(id) {
        return fetch(`${src}/carts/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
    },
}