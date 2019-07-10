const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('greet', (user) => {
    console.log(`Hello ${user.name} ${user.surname}`);
});

const userInfo = {
    id: 1, 
    name: 'Mahmut', 
    surname: 'Ozçiçek'
};
eventEmitter.emit('greet',userInfo);