class AddressBook {
    // Defining attributes (private variables)
    _firstName;
    _lastName;
    _address;
    _city;
    _state;
    _zip;
    _phoneNumber;
    _email;

    // Constructor
    constructor(...params) {
        try {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNumber = params[6];
            this.email = params[7];
        } catch (error) {
            console.error("Error creating contact:", error.message);
        }
    }

    // Getters and Setters

    // Validate First Name
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        const firstNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (firstNameRegex.test(firstName)) this._firstName = firstName;
        else throw new Error("First Name must start with a capital letter and have at least 3 characters.");
    }

    // Validate Last Name
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        const lastNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (lastNameRegex.test(lastName)) this._lastName = lastName;
        else throw new Error("Last Name must start with a capital letter and have at least 3 characters.");
    }

    // Validate Address
    get address() { return this._address; }
    set address(address) {
        if (address.length >= 4) this._address = address;
        else throw new Error("Address must have at least 4 characters.");
    }

    // Validate City
    get city() { return this._city; }
    set city(city) {
        if (city.length >= 4) this._city = city;
        else throw new Error("City must have at least 4 characters.");
    }

    // Validate State
    get state() { return this._state; }
    set state(state) {
        if (state.length >= 4) this._state = state;
        else throw new Error("State must have at least 4 characters.");
    }

    // Validate Zip Code
    get zip() { return this._zip; }
    set zip(zip) {
        const zipRegex = /^\d{5,6}$/; 
        if (zipRegex.test(zip)) this._zip = zip;
        else throw new Error("Zip must be a valid 5 or 6-digit number.");
    }

    // Validate Phone Number
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        const phoneRegex = /^[0-9]{10}$/; 
        if (phoneRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw new Error("Phone number must be a valid 10-digit number.");
    }

    // Validate Email
    get email() { return this._email; }
    set email(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if (emailRegex.test(email)) this._email = email;
        else throw new Error("Invalid email format.");
    }
}

// Checking valid contacts
try {
    let contact = new AddressBook("Ria", "Tandan", "Saket Nagar", "Bhopal", "Madhya Pradesh", "274289", "9876543210", "tandanria@gmail.com");
    console.log("Contact added successfully:", contact);
} catch (error) {
    console.error(" Error adding contact:", error.message);
}

// Checking for invalid contact (Expected to throw an error)
try {
    let contact = new AddressBook("Jo", "doe", "12", "NY", "N", "123", "98765", "invalid-email");
} catch (error) {
    console.error(" Error adding contact:", error.message);
}
