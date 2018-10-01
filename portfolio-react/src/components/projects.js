import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, Tooltip } from 'react-mdl';
class Projects extends Component{

    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if (this.state.activeTab == 0) {
            return (
                <div id="banner">
                    <Grid>
                        <Cell col={4}> 
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 1</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <Tooltip label="Share" position="left">
                                        <IconButton name="share" />
                                    </Tooltip>
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}> 
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 2</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <Tooltip label="Share" position="left">
                                        <IconButton name="share" />
                                    </Tooltip>
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}> 
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 3</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <Tooltip label="Share" position="left">
                                        <IconButton name="share" />
                                    </Tooltip>
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
            
            } else if (this.state.activeTab == 1){
                return <div id="banner">
                <Grid>
                    <Cell col={4}> 
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <Tooltip label="Share" position="left">
                                    <IconButton name="share" />
                                </Tooltip>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}> 
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <Tooltip label="Share" position="left">
                                    <IconButton name="share" />
                                </Tooltip>
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
                </div>
            } else if (this.state.activeTab == 2){
                return <div id="banner">
                <Grid>
                    <Cell col={4}> 
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <Tooltip label="Share" position="left">
                                    <IconButton name="share" />
                                </Tooltip>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}> 
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <Tooltip label="Share" position="left">
                                    <IconButton name="share" />
                                </Tooltip>
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
                </div>
            } else {
                return <div id="banner">No Content</div>
            }
    }
    render(){
        return(
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        {this.toggleCategories()}
                    </Cell>
                </Grid>
               
            </div> 
        )
    }
}

export default Projects;