
import React, { Component } from 'react';
import { Button, Header, Form } from 'semantic-ui-react';
//import { withRouter } from 'react-router-dom';

export class Home extends Component {
    
    state = {
        address:''
    }

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <Header as='h1'>Diploma Storage Application</Header>

                <Form>
                    <Form.Input
                    label='Contract Address'
                    type='text'
                    value={this.state.address}
                    onChange={this.onChange}
                    />
                <Button
                    type='submit'
                    onClick={this.onSubmit}
                 >

                    Submit
                </Button>
                </Form>
            </div>
        );
    }

    onChange(event) {
        this.setState({address: event.target.valie});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/diplomastorage/${this.state.address}`)
    }
}
