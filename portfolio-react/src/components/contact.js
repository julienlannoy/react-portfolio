import React, { Component } from 'react';
import { Textfield, Grid, Cell, Button, Checkbox } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
           <div>
               <h1>Contact Page</h1>
               <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <Textfield
                            onChange={() => {}}
                            label="First Name..."
                            floatingLabel
                        />
                    </Cell>
                    <Cell col={4}>
                        <Textfield
                            onChange={() => {}}
                            label="Last Name..."
                            floatingLabel
                        />
                    </Cell>
                    <Cell col={4}>
                        <Textfield
                            onChange={() => {}}
                            label="Email..."
                            floatingLabel
                        />
                    </Cell>
                    <Cell col={4}>
                        <Checkbox label="I read and i accept terms of use" />
                    </Cell>
                    <Cell col={4}>
                        <Button raised ripple>Submit</Button>
                    </Cell>
                    <Cell col={4}></Cell>
                    
                </Grid>
               
                
           </div> 
        )
    }
}

export default Contact;