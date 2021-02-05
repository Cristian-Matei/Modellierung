import serial
s=serial.Serial('COM4')
while True:
    message = s.readline()
    message = message.decode()
    f = open("data.txt", "a")
    f.write(message)
    f.close()