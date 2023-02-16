import pika, sys, os, json, datetime


# This is my partner's microservice program that calculates the days
# to the user's birthday.
#   
#   Communication Pipeline: RabbitMQ
#   Queue name: birthdayApp
#   Needed Import Packages from sending program using Python:
#       pika, json, uuid
#   
#   Receives a JSON string in this format:
#       { day: <value1>, month: <value2> }
# 
#   To work with this program, you should use RabbitMQ's Remote Procedure Call (RPC):
#       https://www.rabbitmq.com/tutorials/tutorial-six-python.html
#   



def main():

    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='birthdayApp')


#   Function daysToBirthday
#   Calculates the day until a birthdate and returns that value.
#
#   Parameters: Accepts a day (1-31) and month (1-12) as integers.
#   Output: Returns the days until the user's birthday as an integer.

    def daysToBirthday(day, month):
        current_date = datetime.date.today()
        birthday = datetime.date(current_date.year, month, day)

        # If the birthday has already occurred this year, then 
        # add 1 to the year of the birthday.
        
        if ( birthday < current_date ):
            birthday = birthday.replace(year=current_date.year + 1)
        
        days_to_birthday = (birthday - current_date).days
        print(days_to_birthday)

        return days_to_birthday


    def callback(ch, method, props, body):
        print(f' [x] Received {body}')

        birthday = json.loads(body)
        days_birth = daysToBirthday(birthday['day'], birthday['month'])

        ch.basic_publish(exchange='',
                     routing_key=props.reply_to,
                     properties=pika.BasicProperties(correlation_id=props.correlation_id),
                     body=str(days_birth))

        ch.basic_ack(delivery_tag=method.delivery_tag)


    channel.basic_qos(prefetch_count=1)
    channel.basic_consume(queue='birthdayApp', on_message_callback=callback)

    print(' [*] Waiting for birthday.')
    channel.start_consuming()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)



