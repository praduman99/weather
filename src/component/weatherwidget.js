import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Weatherwidget() {
    return (
        <div>
            <div style={{
                display: `flex`,
                justifyContent: `right`,
                fontFamily:`"Google Sans", sans-serif`
                
            }}>
                <Container fluid
                    style={{

                        border: ` solid lightgrey 1px`,
                        borderRadius: `7px`,
                        marginTop: `4em`,
                        marginRight: `2em`,
                        width: '25%',
                        paddingTop:`10px`,
                        

                    }}>
                    <Row>
                        <Container style={{color:`grey`}} >
                       <Col style={{ display: `flex`, justifyContent: `left`,}}>
                           <div style={{marginLeft:`1em`}}>Rudrapur</div>
                           <div style={{marginLeft:`1em`,marginLeft:`12em`}}><i class="material-icons" style={{fontSize:`15px`}}>my_location</i></div>
                       </Col>
                       </Container>
                       
                    </Row>
                    <hr style={{ width: `90%` ,border: ` solid lightgrey 1px`, }}/>
                    <Container>                   <Row fluid>
                        <Col style={{ padding: "15px" }} xs={2} md={2}>
                            <small >Sunny</small>
                            <div style={{ marginTop: `-1em`, fontSize: `35px` }}>
                                <p>22<sup>*</sup>c</p>
                            </div>
                            <div fluid style={{ marginLeft: '12em', marginTop: `-7em` }}>
                             <img src=" http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_light_color_96dp.png" style={{width:`100px`}}></img>
                            </div>

                        </Col>

                    </Row>

                        <Row style={{ display: `flex`, width: `500`, justifyContent: `center` }}>
                            <Col xs={5} style={{ width: `70px` }}>
                                <Card style={{ textAlign: `center` }} >
                                    <Card.Title>Today</Card.Title>
                                    <Card.Img variant="top" style={{width:`40px`}}src="http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_light_color_96dp.png" />
                                    <Card.Body>
                                        <Card.Title className="font-weight-Bold"> <p>22<sup>*</sup>c</p></Card.Title>
                                        <Card.Text style={{marginTop:`-1em`}}>

                                            <small>      
                                                 <p>22<sup>*</sup>c</p>
                                            </small>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={4} style={{ width: `70px` }}><Card style={{ textAlign: `center` }} >
                                    <Card.Title>Tue</Card.Title>
                                    <Card.Img variant="top"style={{width:`40px`}} src="http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_96dp.png" />
                                    <Card.Body>
                                        <Card.Title className="font-weight-Bold"> <p>22<sup>*</sup>c</p></Card.Title>
                                        <Card.Text style={{marginTop:`-1em`}}>

                                            <small>      
                                                 <p>22<sup>*</sup>c</p>
                                            </small>
                                        </Card.Text>

                                    </Card.Body>
                                </Card></Col>
                            <Col xs={4} style={{ width: `70px` }}><Card style={{ textAlign: `center` }} >
                                    <Card.Title>Wed</Card.Title>
                                    <Card.Img variant="top" style={{width:`40px`}}src="http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_day_light_color_96dp.png" />
                                    <Card.Body>
                                        <Card.Title className="font-weight-Bold"> <p>22<sup>*</sup>c</p></Card.Title>
                                        <Card.Text style={{marginTop:`-1em`}}>

                                            <small>      
                                                 <p>22<sup>*</sup>c</p>
                                            </small>
                                        </Card.Text>

                                    </Card.Body>
                                </Card></Col>

                            <Col xs={4} style={{ width: `70px` }}><Card style={{ textAlign: `center` }} >
                                    <Card.Title>Thu</Card.Title>
                                    <Card.Img style={{width:`40px`}} src="http://www.gstatic.com/images/icons/material/apps/weather/2x/scattered_showers_day_light_color_96dp.png" />
                                    <Card.Body>
                                        <Card.Title className="font-weight-Bold"> <p>22<sup>*</sup>c</p></Card.Title>
                                        <Card.Text style={{marginTop:`-1em`}}>

                                            <small>      
                                                 <p>22<sup>*</sup>c</p>
                                            </small>
                                        </Card.Text>

                                    </Card.Body>
                                </Card></Col>
                            <Col xs={4} style={{ width: `70px` }}><Card style={{ textAlign: `center` }} >
                                    <Card.Title>Fri</Card.Title>
                                    <Card.Img variant="top" style={{width:`40px`}}src="http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_96dp.png" />
                                    <Card.Body>
                                        <Card.Title className="font-weight-Bold"> <p>22<sup>*</sup>c</p></Card.Title>
                                        <Card.Text style={{marginTop:`-1em`}}>

                                            <small>      
                                                 <p>22<sup>*</sup>c</p>
                                            </small>
                                        </Card.Text>

                                    </Card.Body>
                                </Card></Col>

                        </Row>
                    </Container>
                    <hr style={{ width: `90%`,border: ` solid lightgrey 1px`, }} className="bg-dark" />
                    <Row style={{ display: `flex`, width: `500`, justifyContent: `center`,marginBottom:`1em` }}>
                        <Col style={{ width: `50%`, display: `flex`, justifyContent: `left`, marginLeft: `2em` }}>
                            <small>  <b>C</b> | F | K </small>
                        </Col>
                        <Col style={{fontSize:`15px`, width: `50%`, display: `flex`, justifyContent: `right`, marginRight: `2em` }}>
                             <a href="#" style={{textDecoration:`none`,color:`blue`,fontSize:`11px`}}>More on Weather.com</a>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}
