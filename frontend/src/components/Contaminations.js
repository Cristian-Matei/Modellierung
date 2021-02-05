import React, { Component } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default class Contamination extends Component {



    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            visits: [],
            risk: [],
            text: ""
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/visits").then((response) => {
            console.log(response);
            this.setState({ visits: response.data.visits })
        });
    }

    renderVisits = (tableData) => {
        return (
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contaminated</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(entry =>
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.room}</td>
                            <td>{entry.time}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    handleDateChange = (date) => {
        console.log(date);
        this.setState({ selectedDate: date })
    }

    handletextChange = (e) => {
        this.setState({ text: e.target.value });
        console.log(e.target.value);
    }

    submit = () =>{
        axios.post("http://127.0.0.1:5000/contamination", {
            "name" : this.state.text,
            "date": this.state.selectedDate
        });
    }

    render() {
        return (
            <div>
                <Layout data={this.state}>
                    <h1>Risk exposure management</h1>
                    {/* <h2>{this.state.token}</h2> */}
                    <p>Here you can see all the visits</p>

                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <h3>Visits</h3>
                            {this.renderVisits(this.state.visits)}
                        </Grid>
                    </Grid>

                    <h3>Enter a new contamination:</h3>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <TextField id="standard-basic" label="Standard" onChange={this.handletextChange} />
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="contained" onClick={this.submit}>Submit</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}> <Grid item xs={8}><h5>Affected people and rooms: Paul, Diana, Conference Room A </h5></Grid></Grid>
                </Layout>
            </div>
        );
    }

}