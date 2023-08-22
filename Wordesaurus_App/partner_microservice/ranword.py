import pika
import requests

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))

channel = connection.channel()

channel.queue_declare(queue='msgbox')


def word_gen():
    url = "https://wordsapiv1.p.rapidapi.com/words/"
    querystring = {"lettersmin": "3", "limit": "100",
                   "letterPattern": "^[a-z]{3,}$", "page": "1", "hasDetails": "hasDetails=synonyms,antonyms", "random": "true"}
    headers = {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
    }

    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    print(response.text)
    return response.text


def on_request(ch, method, props, body):
    response = word_gen()

    ch.basic_publish(exchange='',
                     routing_key=props.reply_to,
                     properties=pika.BasicProperties(
                         correlation_id=props.correlation_id),
                     body=response)
    ch.basic_ack(delivery_tag=method.delivery_tag)


channel.basic_qos(prefetch_count=1)
channel.basic_consume(queue='msgbox', on_message_callback=on_request)

print("Awaiting request for random word.")
channel.start_consuming()
