import { EventBus } from './event-bus/event-bus';

const registry = EventBus.getInstance().register('hello-world', (name: string) => {
    if(name)
        console.log('Hello ' + name);
    else 
        console.log('Hello world');
});


EventBus.getInstance().dispatch<string>('hello-world', 'Luis');
EventBus.getInstance().dispatch<string>('hello-world');

registry.unregister();
EventBus.getInstance().dispatch<string>('hello-world');


