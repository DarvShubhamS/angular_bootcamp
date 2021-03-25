export class Authentication {

    loggedIn = false

    isAuthenticated() {
        return this.loggedIn
    }

    logIn() {
        this.loggedIn = true

    }

    logOut() {
        this.loggedIn = false
    }

}