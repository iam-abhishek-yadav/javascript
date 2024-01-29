class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) this.events.set(eventName, []);
        const eventListeners = this.events.get(eventName);
        eventListeners.push(callback);
        return {
            unsubscribe: () => {
                const index = eventListeners.indexOf(callback);
                if (index !== -1) eventListeners.splice(index, 1);
            }
        };
    }
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) return [];
        const eventListeners = this.events.get(eventName);
        const results = eventListeners.map(callback => callback(...args));
        return results;
    }
} 
