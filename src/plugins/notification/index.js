import { notify } from './notify'

export default function install(app, options = {}) {
    const name = options.name || "notify";
    app.config.globalProperties['$' + name] = notify;
}
