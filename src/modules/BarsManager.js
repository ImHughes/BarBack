const src = "http://localhost:5002";

export default {

    get(id) {
        return fetch(`${src}/bars/${id}`).then(e => e.json());
    },
    getAll() {
        return fetch(`${src}/bars/`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${src}/bars/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
    },
    post(bars) {
        return fetch(`${src}/bars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bars)
        }).then(e => e.json())
    },
    edit(editDrink) {
        return fetch(`${src}/bars/${editDrink.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editDrink)
        }).then(e => e.json())
    }
}