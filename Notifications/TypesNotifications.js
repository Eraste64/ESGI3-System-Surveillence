import Email from "./Email.js";
import Discord from "./Discord.js";
import Log from "./Log.js";

export default class NotificationFactory {
    constructor(item) {
        if (item.type === 'email') {
            return new Email(item);
        }
        if (item.type === 'discord') {
            return new Discord(item);
        }
        if (item.type === 'log') {
            return new Log(item);
        }
    }
}