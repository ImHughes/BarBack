const src = "http://localhost:5002";

export default {

    get(id) {
        return fetch(`${src}/carts/${id}`).then(e => e.json());

    },

    getAll() {
        return fetch(`${src}/carts?_expand=drink`).then(e => e.json());
    },

    post(drink) {
        // Check if drinkId exists in cart
        this.getAll()
            .then((currentCart) => {
                console.log("current cart", currentCart)
                let foundDrinkInCart = false

                // Loop through the cart array and check if drinkId already exists
                for (let i = 0; i < currentCart.length; i++) {

                    // Check if the drink passed in as a parameter already exists in the cart based on ID
                    if (currentCart[i].drinkId === drink.drinkId) {

                        // Set that boolean to true to bypass if statement for POST
                        foundDrinkInCart = true

                        // Update the quantity of the currentCart item
                        currentCart[i].quantity += 1;

                        // Define the fetch URL based on the currentCart ID
                        const fetchURL = `${src}/carts/${currentCart[i].id}`

                        // Create the patchContent object
                        let patchContent = {
                            "quantity": currentCart[i].quantity
                        }

                        // Make a PATCH request to update the cart ID item
                        return fetch(fetchURL, {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify(patchContent)
                        }).then(e => e.json())
                    }
                }

                // Check if the drink was found in the cart, if it is not, POST a new drink
                if (foundDrinkInCart === false) {
                    return fetch(`${src}/carts`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(drink)
                    }).then(e => e.json())
                }

            })
    },

    edit(editDrink) {
        return fetch(`${src}/carts/${editDrink.id}`, {
            method: "PATCH",
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

    increaseQty(drink) {
        console.log("CartManager increaseQty function")
        // Define the fetch URL based on the currentCart ID
        const fetchURL = `${src}/carts/${drink.id}`
        console.log(fetchURL)

        // Create the patchContent object
        let newQty = drink.quantity + 1
        console.log(newQty)

        let patchContent = {
            "quantity": newQty
        }

        // Make a PATCH request to update the cart ID item
        return fetch(fetchURL, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(patchContent)
        }).then(e => e.json()).then(console.log("PATCHED"))
    },

    decreaseQty(drink) {
        // Define the fetch URL based on the currentCart ID
        const fetchURL = `${src}/carts/${drink.id}`

        // Create the patchContent object
        let newQty = drink.quantity - 1
        console.log(newQty)

        let patchContent = {
            "quantity": newQty
        }

        // Check if decreasing quantity would result in 0, if so, delete item
        if (newQty === 0) {
            return fetch(fetchURL, {
                method: "DELETE"
            }).then(e => e.json())
        }
        // If decreasing quantity would not result in 0, PATCH the cart item with the new qty
        else {
            // Make a PATCH request to update the cart ID item
            return fetch(fetchURL, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(patchContent)
            }).then(e => e.json())
        }
    }
}