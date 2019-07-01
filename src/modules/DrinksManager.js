const src = "http://localhost:5002";

export default {

    get(id) {
        return fetch(`${src}/drinks/${id}`).then(e => e.json());
    },
    getBeer() {
        return fetch(`${src}/drinks/?drinkTypeId=1`).then(e => e.json());
    },
    getWine() {
        return fetch(`${src}/drinks/?drinkTypeId=2`).then(e => e.json());
    },
    getCocktail() {
        return fetch(`${src}/drinks/?drinkTypeId=3`).then(e => e.json());
    },
    getShots() {
        return fetch(`${src}/drinks/?drinkTypeId=4`).then(e => e.json());
    },
    getMenu(locId) {
        return fetch(`${src}/locationDrinks/?locationId=${locId}&_expand=drink`).then(e => e.json());
    },
    getDrinksList() {
        return fetch(`${src}/drinks`).then(e => e.json());
    },
    getAll() {
        return fetch(`${src}/drinks/`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${src}/drinks/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
    },
    post(drinks) {
        return fetch(`${src}/drinks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drinks)
        }).then(e => e.json())
    },
    edit(editDrink) {
        return fetch(`${src}/drinks/${editDrink.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editDrink)
        }).then(e => e.json())
    }
}