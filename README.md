# An application for employee distancing management

### 1. The mobile app
Is developed for the Android 8 platform and acts a method for the user to interact with the microcontroller via bluetooth and send data

### 2. The Arduino sketch
Reads data from the bluetooth module and forwards it to the serial port to be further processed

### 3. The backend 
Consists of a Python server written in Flask. It reads the data from the microcontroller and serves as a REST API for the frontend

### 4. The frontend
Consists of a React app to visualize all the collected resources