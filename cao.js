'use strict'

var EventEmitter = require('events');

class Cao extends EventEmitter {
        check(){
                console.log('check OK!');
        }
}

var Rex = new Cao();

Rex.on('evento_1', Rex.check);

Rex.emit('evento_1');
