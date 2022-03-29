export class Timer {
    #timerId;
    #duration;
    #callback;
    constructor(callback, duration) {
        this.#callback = callback;
        this.#duration = duration;
        this.resume();
    }

    resume() {
        this.#timerId = setTimeout(this.#callback, this.#duration)
    }
}
