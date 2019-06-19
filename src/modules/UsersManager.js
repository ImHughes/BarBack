const src = "http://localhost:5003";

export default {

    get(id) {
        return fetch(`${src}/users/${id}`).then(e => e.json());
    },
    getUser() {
        return fetch(`${src}/users/?UserId=1`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${src}/users/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
    },
    post(users) {
        return fetch(`${src}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        }).then(e => e.json())
    },
    edit(editUser) {
        return fetch(`${src}/users/${editUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editUser)
        }).then(e => e.json())
    }
}