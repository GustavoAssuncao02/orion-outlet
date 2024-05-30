class UserInterface {
    constructor() {
        if (new.target === UserInterface) {
            throw new TypeError("Cannot construct UserInterface instances directly");
        }
        if (this.getName === undefined) {
            throw new TypeError("Must override method getName");
        }
        if (this.setName === undefined) {
            throw new TypeError("Must override method setName");
        }
        if (this.getNumber === undefined) {
            throw new TypeError("Must override method getName");
        }
        if (this.setNumber === undefined) {
            throw new TypeError("Must override method setName");
        }
        if (this.getEmail === undefined) {
            throw new TypeError("Must override method getEmail");
        }
        if (this.setEmail === undefined) {
            throw new TypeError("Must override method setEmail");
        }
        if (this.getAge === undefined) {
            throw new TypeError("Must override method getAge");
        }
        if (this.setAge === undefined) {
            throw new TypeError("Must override method setAge");
        }
    }

    getName() {
        throw new Error("Method 'getName()' must be implemented.");
    }

    setName(name) {
        throw new Error("Method 'setName(name)' must be implemented.");
    }

    getEmail() {
        throw new Error("Method 'getEmail()' must be implemented.");
    }

    setEmail(email) {
        throw new Error("Method 'setEmail(email)' must be implemented.");
    }

    getAge() {
        throw new Error("Method 'getAge()' must be implemented.");
    }

    setAge(age) {
        throw new Error("Method 'setAge(age)' must be implemented.");
    }
}

// Implementing the UserInterface
class User extends UserInterface {
    constructor(name, email, age) {
        super();
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getEmail() {
        return this._email;
    }

    setEmail(email) {
        this._email = email;
    }

    getAge() {
        return this._age;
    }

    setAge(age) {
        this._age = age;
    }
}

// Example usage
const user = new User("João", "joao@example.com", 30);
console.log(user.getName());  // Output: João
console.log(user.getEmail());  // Output: joao@example.com
console.log(user.getAge());  // Output: 30

user.setName("Carlos");
user.setEmail("carlos@example.com");
user.setAge(25);

console.log(user.getName());  // Output: Carlos
console.log(user.getEmail());  // Output: carlos@example.com
console.log(user.getAge());  // Output: 25
