import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

export default class CustomerDelete extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClickClose = this.handleClickClose.bind(this)
    }

    handleClickOpen(){
        this.setState({
            open: true
        })
    }

    handleClickClose(){
        this.setState({
            open: false
        })
    }

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    DELETE
                </Button>
                <Dialog onClose={this.handleClickClose} open={this.state.open}>
                    <DialogTitle onClose={this.handleClickClose}>
                        DELETE CAUTION
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterButtom>
                            INFOMATION WILL BE DELETED
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.customerId)}}>DELETE</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClickClose}>CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}