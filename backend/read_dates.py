from datetime import datetime

def get_new_visits():
    res = []
    with open("data.txt", "r") as f:
        for lines in f:
            name, date, room = lines.strip().split("|")
            date = date.strip().replace("GMT+02:00", "")
            name = name.strip()
            room = room.strip()
            datetime_object = datetime.strptime(date.strip(), '%a %b %d %H:%M:%S  %Y')
            res.append({
                "name" : name,
                "room" : room,
                "time" : datetime_object
            })

    return res
