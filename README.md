### Communication Contract for Microservice Program days-to-birthday.py:




#### Input:
A JSON object formatted as { 'day': value1, 'month': value2 }
where value1 and value2 are integers representing the day and month of a birthday.

#### Output:
Returns the days until the birthday as a string.

#### Client Module Dependencies:
      import pika
      import json
      import uuid

#### Call Example:

Use the following template to make a call to days-to-birthday.py, where the method "call(self, birthday)" sends a request to
days-to-birthday.py containing the day and month of a birthday in JSON. Once a response is received, the value is stored in a variable
called response.

    class BirthdayStart(object):

      def __init__(self):

          self.connection = pika.BlockingConnection(
              pika.ConnectionParameters(host='localhost'))
          self.channel = self.connection.channel()

          result = self.channel.queue_declare(queue='', exclusive=True)
          self.callback_queue = result.method.queue

          self.channel.basic_consume(
              queue=self.callback_queue,
              on_message_callback=self.on_response,
              auto_ack=True)

      def on_response(self, ch, method, props, body):
          if self.corr_id == props.correlation_id:
              self.response = body

      def call(self, birthday):
          self.response = None
          self.corr_id = str(uuid.uuid4())
          self.channel.basic_publish(
              exchange='',
              routing_key='birthdayApp',
              properties=pika.BasicProperties(
                  reply_to=self.callback_queue,
                  correlation_id=self.corr_id,
              ),
              body=json.dumps(birthday))
        
          self.connection.process_data_events(time_limit=None)

          return int(self.response)
        
    calculateDaysToBirthday = BirthdayStart()
    response = calculateDaysToBirthday.call(birthday)
  

### Sequence Diagram

![image](https://user-images.githubusercontent.com/107899791/217441325-3a93ccf5-9987-4386-b30d-9a1542286501.png)





















