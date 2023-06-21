import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export class EditSurgeryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

    }

    handleDateChange(date) {
        this.setState({
            selectedDate: date
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/listsurgery', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                SurgeryID: event.target.SurgeryID.value,
                Patient: event.target.Patient.value,
                SurgeryName: event.target.SurgeryName.value,
                Department: event.target.Department.value,
                Zone: event.target.Zone.value,
                Hall: event.target.Hall.value,
                Doctor: event.target.Doctor.value,
                Nurse: event.target.Nurse.value,
                // DateCreated: event.target.Role.value
                DateCreated: this.state.selectedDate

            })
        })
            .then(list => list.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }


    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title className='ms-auto modal-title' id="contained-modal-title-vcenter">
                            Edit Doctor
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto btn-exit' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="SurgeryID">
                                        {/* <Form.Label>User ID</Form.Label> */}
                                        <Form.Control type="text" name="SurgeryID" required
                                            disabled
                                            defaultValue={this.props.listsurgeryid}
                                            placeholder="Surgery ID" />
                                    </Form.Group>

                                    <Form.Group controlId="Patient">
                                        {/* <Form.Label>User ID</Form.Label> */}
                                        <Form.Control type="text" name="Patient" required

                                            defaultValue={this.props.listpatient}
                                            placeholder="Patient" />
                                    </Form.Group>

                                    <Form.Group controlId="SurgeryName">
                                        {/* <Form.Label>FullName</Form.Label> */}
                                        <Form.Control type="text" name="SurgeryName" required
                                            defaultValue={this.props.listsurgeryname}
                                            placeholder="Surgery Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Department">
                                        {/* <Form.Label>Email</Form.Label> */}
                                        <Form.Control type="text" name="Department" required
                                            defaultValue={this.props.listdepartment}
                                            placeholder="Department" />
                                    </Form.Group>


                                    <Form.Group controlId="Zone">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control type="text" name="Zone" required
                                            defaultValue={this.props.listzone}
                                            placeholder="Zone" />
                                    </Form.Group>

                                    <Form.Group controlId="Hall">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="text" name="Hall" required
                                            defaultValue={this.props.listhall}
                                            placeholder="Hall" />
                                    </Form.Group>

                                    <Form.Group controlId="Doctor">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="text" name="Doctor" required
                                            defaultValue={this.props.listdoctor}
                                            placeholder="Doctor" />
                                    </Form.Group>

                                    <Form.Group controlId="Nurse">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="text" name="Nurse" required
                                            defaultValue={this.props.listnurse}
                                            placeholder="Nurse" />
                                    </Form.Group>

                                    <Form.Group controlId="DateCreated">
                                        {/* <Form.Label>Date</Form.Label> */}
                                        <DatePicker
                                            selected={this.state.selectedDate}
                                            onChange={this.handleDateChange}
                                            dateFormat="yyyy-MM-dd"
                                            className="form-control"
                                            placeholderText="Select Date"
                                        />
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className='rounded-5 mt-3 btn-add' type="submit">
                                            Update
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                </Modal>

            </div>
        )
    }

}