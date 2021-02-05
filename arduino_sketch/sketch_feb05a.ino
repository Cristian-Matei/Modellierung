String data = "";                //Variable for storing received data
void setup() 
{
Serial.begin(9600);         //Sets the data rate in bits per second (baud) for serial data transmission
pinMode(13, OUTPUT);        //Sets digital pin 13 as output pin
}
void loop()
{
if(Serial.available() > 0)  // Send data only when you receive data:
{
data = Serial.readString();      //Read the incoming data and store it into variable data
data = data + "  | Conference Room A";
Serial.print(data);        //Print Value inside data in Serial monitor
Serial.print("\n");        //New line 

}                        

}
