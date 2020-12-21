import React from 'react';
import './App.css';
import {  Button,Col,Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
    <div className="App">
      <Form>
      <Form.Group>
      <Form.Label className="text-uppercase">User name</Form.Label>
  <Form.Control type="text" placeholder="Enter your name" />  
</Form.Group>

  <Form.Group controlId="formBas">
    <Form.Label className="text-uppercase">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email adress" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="text-uppercase">Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your Password" />
  </Form.Group>

<Row>
  <Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Day</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Month</Form.Label>
    <Form.Control as="select">
      <option>January</option>
      <option>Fubruary</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Year</Form.Label>
    <Form.Control as="select">
      <option>2020</option>
      <option>2019</option>
      <option>2018</option>
     
    
    </Form.Control>
  </Form.Group>
  </Col>
  </Row> 
 
  <Button variant="secondary" type="submit" size="lg" block>
    Submit
  </Button>

</Form>
    </div>
    </div>
  );
}

export default App;