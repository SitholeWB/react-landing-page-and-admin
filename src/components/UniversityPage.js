import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//block ui
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

//redux
import { connect } from 'react-redux';


export class UniversityPage extends React.Component {

    state = {
        pendingRequestsCount: 0,
        searchText: '',
        confirmDelete: ''
    }

    render() {
        let rows = [];
        rows.push({
            name: 'University of KwaZulu Natal'
        });
        rows.push({
            name: 'University of South Africa'
        });
        rows.push({
            name: 'Durban University of Technology'
        });
        return (
            <div>
                <BlockUi tag="div" blocking={this.state.pendingRequestsCount > 0}>
                    <Typography align="center" variant="h4" color="inherit" className="headertypoclass" >
                        Universities
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: 'gray' }}>
                                    <TableCell>Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </BlockUi>
            </div>
        );
    }


    componentDidMount() {
        this.setState({ pendingRequestsCount: this.state.pendingRequestsCount + 1 });

        setTimeout(function() { //Start the timer
            this.setState({ pendingRequestsCount: this.state.pendingRequestsCount - 1 }); //After 3 second,
        }.bind(this), 3000)
    }

}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        tokenObject: state.authReducer.tokenObject
    };
};


const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(UniversityPage);