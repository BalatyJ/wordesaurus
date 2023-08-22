const amqp = require('amqplib/callback_api');
const { v4: uuidv4 } = require('uuid');


// Establishes a class object to connect with my partner's microservice.
class RandomWord {
    constructor() {
        this.response = null;
        this.connection = null;
        this.channel = null;
        this.callback_queue = null;
        this.corr_id = null;
        this.callback_client = null;
    }

    end() {
        process.exit();
    }

    consumeMsg = (msg) => {
        if (this.corr_id == msg.properties.correlationId) {
            this.response = msg.content;
        }
    }

    establishQueue = (error, q) => {
        if (error) {
            throw error;
        }

        this.callback_queue = q.queue;
        this.channel.consume(
            this.callback_queue, this.consumeMsg, { noAck: true })
    }

    establishChannel = (error, channel) => {
        console.log("Beginning of channel.")
        if (error) {
            throw error;
        }

        this.channel = channel
        this.channel.assertQueue('', { exclusive: true }, this.establishQueue)
    }

    establishConnection = (error, connection) => {

        if (error) {
            throw error;
        }

        this.connection = connection;
        this.connection.createChannel(this.establishChannel)
    }



    start() {
        amqp.connect('amqp://localhost', this.establishConnection)
    }


    checkResponse = () => {
        console.log(this.response)
        if (this.response !== null) {
            this.callback_client(this.response);
        } else {
            setTimeout(this.checkResponse, 1000);
        }
    };

    call(callback) {
        this.response, this.corr_id = null, uuidv4()
        this.callback_client = callback
        const options = {
            correlationId: this.corr_id,
            replyTo: this.callback_queue
        }

        this.channel.sendToQueue('msgbox',
            Buffer.from("0"), options);

        this.checkResponse();
    }
}

module.exports = RandomWord