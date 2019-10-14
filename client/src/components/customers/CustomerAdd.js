import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
})
class CustomerAdd extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: null,
            fileName: "",
            name: "",
            ssn: "",
            yymmdd: "",
            address1: "",
            address2: "",
            city: "",
            myState: "",
            zipCode: "",
            isActivated: 1,
            open: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClickClose = this.handleClickClose.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.addCustomer()    
            .then((response) => {
            console.log(response.data);
            this.props.stateRefresh();
        })
        this.setState({
            file: null,
            fileName: "",
            name: "",
            ssn: "",
            yymmdd: "",
            address1: "",
            address2: "",
            city: "",
            myState: "",
            zipCode: "",
            isActivated: 0,
            open: false
        })
        this.props.stateRefresh();
    }
        
    handleFileChange(e) {    
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });
    }
        
    handleValueChange(e) {    
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
        
    addCustomer(){   
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.name);
        formData.append('ssn', this.state.ssn);
        formData.append('yymmdd', this.state.yymmdd);
        formData.append('address1', this.state.address1);
        formData.append('address2', this.state.address2);
        formData.append('city', this.state.city);
        formData.append('myState', this.state.myState);
        formData.append('zipCode', this.state.zipCode);
        formData.append('isActivated', this.state.isActivated);
        console.log("My isActivate value is:");
        console.log(this.state.isActivated);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);  
    }
        
    handleClickOpen() {
        this.setState({
            open: true
        })
    }

    handleClickClose() {
        this.setState({
            file: null,
            fileName: "",
            name: "",
            ssn: "",
            yymmdd: "",
            address1: "",
            address2: "",
            city: "",
            myState: "",
            zipCode: "",
            isActivated: 0,
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant ="contained" color="primary" onClick={this.handleClickOpen}>
                    Add new customer
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClickClose}>
                    <DialogTitle>Adding a Customer</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {this.state.fileName === ''? "Select Profile Image" : this.state.fileName}
                        </Button>
                        </label><br/>
                        <TextField label="NAME" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br/>
                        <TextField label="SSN" type="text" name="ssn" value={this.state.ssn} onChange={this.handleValueChange} /><br/>
                        <TextField label="YYMMDD" type="text" name="yymmdd" value={this.state.yymmdd} onChange={this.handleValueChange} /><br/>
                        <TextField label="ADDRESS1" type="text" name="address1" value={this.state.address1} onChange={this.handleValueChange} /><br/>
                        <TextField label="ADDRESS2" type="text" name="address2" value={this.state.address2} onChange={this.handleValueChange} /><br/>
                        <TextField label="CITY" type="text" name="city" value={this.state.city} onChange={this.handleValueChange} /><br/>
                        <TextField label="STATE" type="text" name="myState" value={this.state.myState} onChange={this.handleValueChange} /><br/>
                        <TextField label="ZIPCODE" type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>ADD</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClickClose}>CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }
}

export default withStyles(styles)(CustomerAdd)