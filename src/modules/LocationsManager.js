const src = "http://localhost:5002";

export default {

    get(id) {
        return fetch(`${src}/locations/${id}`).then(e => e.json());
    },

    getAll() {
        return fetch(`${src}/locations/`).then(e => e.json());
    },

    post(locations) {
        return fetch(`${src}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locations)
        }).then(e => e.json())
    },
}