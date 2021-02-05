from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from read_dates import get_new_visits
import copy

app = Flask(__name__)
CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

EMPLOYEES = {
    "employees":
    [{
        "name":"John",
        "contamination" : False
    },
    {
        "name":"Jane",
        "contamination": False
    },
    {
        "name":"Bob",
        "contamination" : False
    },
    {
        "name":"Charlie",
        "contamination" : False
    }]
}
ROOMS = {
    "rooms":
    [{
        "name":"Conference Room A",
        "contamination" : False
    },
    {
        "name":"Conference Room B",
        "contamination": False
    },
    {
        "name":"Conference Room C",
        "contamination" : False
    }]
}

VISITS = {
    "visits" : []
}

JSON_VISITS = {
    "visits" : []
}


class Employees(Resource):
    def get(self):
        return EMPLOYEES

class Rooms(Resource):
    def get(self):
        return ROOMS

class Visit(Resource):
    def get(self):
        visits = get_new_visits()
        for visit in visits:
            if visit not in VISITS["visits"]:
                VISITS["visits"].append(visit)
        JSON_VISITS = copy.deepcopy(VISITS)
        for entry in JSON_VISITS["visits"]:
            entry["time"] = entry["time"].strftime("%m/%d/%Y, %H:%M:%S")
        return JSON_VISITS


@app.route("/contamination", methods=["POST"])
def do_something():
    data = request.json
    #name = data["name"]
    #time = data["time"]
    print(data)
    return "a",201


api.add_resource(HelloWorld, '/')
api.add_resource(Employees, "/employees")
api.add_resource(Rooms, "/rooms")
api.add_resource(Visit, "/visits")

if __name__ == '__main__':
    app.run(debug=True)