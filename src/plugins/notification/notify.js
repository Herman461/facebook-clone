import { emitter } from './events';

export const notify = (args) => {
    if (typeof args === 'string') {
        args = { title: "", text: args };
    }
    if (typeof args === 'object') {
        emitter.emit('add', args);
    }
}

notify.close = id => {
    emitter.emit('close', id);
}

