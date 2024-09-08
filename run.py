import os
from threading import Thread

def start_server():
    os.system('python server/server.py')

def npm_start():
    os.system('npm start')

thread1 = Thread(target=start_server)
thread2 = Thread(target=npm_start)

thread1.start()
thread2.start()

thread1.join()
thread2.join()