import { emitter } from './events';

export function notify(args) {
    if (typeof args === 'string') {
        args = {
            title: "",
            text: args
        }
    }
    if (typeof args === 'object') {
        // console.log(args)
        emitter.emit('add', args)
    }
}
