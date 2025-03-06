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
            throw error;
        }
    }

    //creating array
    static addressBookArray = [];

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

    //creating method to add contacts in an array
static add(contact){
    //checking for duplicates
    const duplicate = AddressBook.addressBookArray.some(existingContact => existingContact.firstName=== contact.firstName&&
        existingContact.lastName === contact.lastName
    );
    if(duplicate){
        console.log(`Duplicate contact found: ${contact.firstName} ${contact.lastName}. Not adding.`);   
    }
    else{ AddressBook.addressBookArray.push(contact);
        console.log(`Contact Added Successfully: ${contact.firstName} ${contact.lastName}`);
       }
   
}
   
   //method to display all contacts using map
   static display(){
       console.log("Address Book Contacts");
       AddressBook.addressBookArray.map(contact => console.log(   `Name: ${contact.firstName} ${contact.lastName}, ` +
        `Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ` +
        `Phone: ${contact.phoneNumber}, Email: ${contact.email}`
));
   }

   //Method to find a contact by name and update it
   static updateContact(firstName,lastName,updatedDetails){
    let contact = AddressBook.addressBookArray.find(contact =>contact.firstName === firstName
        && contact.lastName === lastName);

    if(contact){
        try{
            Object.keys(updatedDetails).forEach(key =>{
                if(contact.hasOwnProperty(`_${key}`)){
                    contact[key] = updatedDetails[key];
                }
            });
            console.log(`Contact Updated Successfully: ${contact.firstName} ${contact.lastName}`);
        }
        catch(error){
            console.error("Error Updating contact",error.message);
        }
    }
    else{
        console.log(`Contact with name ${firstName} ${lastName} not found.`);
    }
   }

   //Method to find a person by name and delete contact
   static delete(firstName,lastName){
    const index = AddressBook.addressBookArray.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);

    if(index !== -1){
        AddressBook.addressBookArray.splice(index,1);
        console.log(`Contact Deleted Successfully: ${firstName} ${lastName}`);
    }else{
        console.log(`Contact with name ${firstName} ${lastName} not found.`);
    }
   }

   //Method to get total contacts in address book using reduce
   static getContacts(){
    const count = AddressBook.addressBookArray.reduce((total,contact)=> total+1,0);
    console.log(`Total Contacts in Address Book: ${count}`);
    return count;
   }

   //Method to find particular city using filter
   static findByCity(city){
    const contactsInCity = AddressBook.addressBookArray.filter(contact=> contact.city.toLowerCase()===city.toLowerCase());
    if(contactsInCity.length>0){
        console.log(`\nContacts in ${city}:`);
        contactsInCity.map(contact=> console.log(`${contact.firstName} ${contact.lastName}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`));
    }
    else{
        console.log(`\nNo contacts found in ${city}.`);
    }
   }
   
    // Method to find people in a particular state using filter()
    static findByState(state) {
        const contactsInState = AddressBook.addressBookArray.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
        if (contactsInState.length > 0) {
            console.log(`\nContacts in ${state}:`);
            contactsInState.map(contact => console.log(`${contact.firstName} ${contact.lastName}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`));
        } else {
            console.log(`\nNo contacts found in ${state}.`);
        }
}


    // Method to count people in a city using reduce()
    static countByCity(city) {
        const count = AddressBook.addressBookArray.reduce((total, contact) => contact.city.toLowerCase() === city.toLowerCase() ? total + 1 : total, 0);
        console.log(`\nTotal contacts in ${city}: ${count}`);
        return count;
    }

    // Method to count people in a state using reduce()
    static countByState(state) {
        const count = AddressBook.addressBookArray.reduce((total, contact) => contact.state.toLowerCase() === state.toLowerCase() ? total + 1 : total, 0);
        console.log(`\nTotal contacts in ${state}: ${count}`);
        return count;
    }
}


//Adding valid contacts in array
try{
    let contact1 = new AddressBook("Ria", "Tandan", "Saket Nagar", "Bhopal", "Madhya Pradesh", "274289", "9876543210", "tandanria@gmail.com");
    AddressBook.add(contact1);
} catch(error){}

 try{
        let contact2 = new AddressBook("Amit", "Sharma", "MG Road", "Indore", "Madhya Pradesh", "452001", "9998887776", "amit.sharma@gmail.com");
        AddressBook.add(contact2);
    }
    catch(error){}
    try{
        let contact3 = new AddressBook("Raj", "Vardhan", "Ashoka garden", "Guna", "Madhya Pradesh", "457624", "9731188777", "raj.vardhan@gmail.com");
        AddressBook.add(contact3);
    } catch(error){}
    try{
        let contact4 = new AddressBook("Shubhi", "Sharma", "2-C", "Gwalior", "Madhya Pradesh", "459011", "4871019311", "shubhi11@gmail.com");
        AddressBook.add(contact4);
    } catch(error){}
    try{
        let contact5 = new AddressBook("Jharna", "Raina", "Old city", "Satna", "Madhya Pradesh", "137612", "6418374184", "jharna@gmail.com");
        AddressBook.add(contact5);
    }catch(error){}


//display contacts
AddressBook.display();


//try to add duplicate contact
try {
    // Attempt to add a duplicate contact
    let duplicateContact = new AddressBook("Amit", "Sharma", "New MG Road", "Indore", "Madhya Pradesh", "452002", "9998887776", "amit.duplicate@gmail.com");
    AddressBook.add(duplicateContact);
} catch (error) {}

//Updating a contact
console.log("Updating Amit Sharma's contact");
AddressBook.updateContact("Amit","Sharma",{phoneNumber: "0987654567",address: "New Town Road"});

//display Contacts
AddressBook.display();

// Deleting a contact
console.log("\nDeleting Amit Sharma's contact...");
AddressBook.delete("Amit", "Sharma");

AddressBook.display();

//get total contacts
AddressBook.getContacts();

// Search and count contacts in a particular city/state
AddressBook.findByCity("Indore");
AddressBook.findByState("Madhya Pradesh");

AddressBook.countByCity("Indore");
AddressBook.countByState("Madhya Pradesh");
