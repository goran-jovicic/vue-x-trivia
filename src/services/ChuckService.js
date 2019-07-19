import Chuck from 'chucknorris-io'

export default class ChuckService {
    constructor() {
        this.client = new Chuck()
    }

    getRandomJoke() {
        return this.client.getRandomJoke()
    }

    getNewJoke(category) {
        return this.client.getRandomJoke(category)
    }
}

export const chuckService = new ChuckService()