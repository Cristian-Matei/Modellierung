import React, { Component } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            rooms: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/employees").then((response) => {
            this.setState({ employees: response.data.employees });
            console.log(response);
        });
        axios.get("http://127.0.0.1:5000/rooms").then((response) => {
            this.setState({ rooms: response.data.rooms });
            console.log(response);
        });
    }

    renderEmployees = (tableData) => {
        return (
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contaminated</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(entry =>
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.contamination.toString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    renderRooms = (tableData) => {
        return (
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contaminated</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(entry =>
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.contamination.toString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }



    render() {
        return (
            <div>
                <Layout data={this.state}>
                    <h1>Risk exposure management</h1>
                    {/* <h2>{this.state.token}</h2> */}
                    <p>Here you can see the following
            </p>
                    <ul>
                        <li>All the users and rooms</li>
                        <li>All the visits</li>
                    </ul>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <h3>Employees</h3>
                            {this.renderEmployees(this.state.employees)}
                        </Grid>
                        <Grid item xs={6}>
                            <h3>Conference Rooms</h3>
                            {this.renderRooms(this.state.rooms)}
                        </Grid>
                    </Grid>
                </Layout>
            </div>
        );
    }
}