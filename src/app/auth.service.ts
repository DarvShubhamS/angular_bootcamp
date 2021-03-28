export class Authentication {

    loggedIn = false

    isAuthenticated() {
        return this.loggedIn
    }

    logIn() {
        this.loggedIn = true
        alert('logged in successfuly....')

    }

    logOut() {
        this.loggedIn = false
    }

}