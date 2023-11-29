import React, { useState, useRef, useEffect } from 'react'
import '../styles/addEventStyles.css'
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../../../redux/slices/eventSlice';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SlCalender } from "react-icons/sl";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { MdOutlineEventSeat } from "react-icons/md";
import { PiCalendarBlank } from "react-icons/pi";
import { MdOutlineExplore } from "react-icons/md";
import { RiTicketLine } from "react-icons/ri";
import { MdApproval } from "react-icons/md";
import { MdReduceCapacity } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FcGallery } from "react-icons/fc";
const Events = () => {
  const redireactTo = useNavigate()
  const dispatch = useDispatch()
  const totalEvents = useSelector(state => state.event)
  const [event, setEvent] = useState("");
  const [eventError, setEventError] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedFile, setSelectedFile] = useState("https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=MB1-O5fjps0hVPd97fMIiEaisPMEn4XqVvQoJFKLRrQ=");
  const inputFile = useRef(null)
  console.log("added_events", totalEvents);
  console.log("eventt", startTime)

  const eventData = {
    event,
    startDate,
    endDate,
    startTime,
    endTime
  }

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleStartTimeChange = time => {
    setStartTime(time.target.value);
  };

  const handleEndTimeChange = time => {
    setEndTime(time.target.value);
  };

  const handleClick = () => {
    inputFile.current.click();
  }

  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  console.log("selected_file", selectedFile)


  return (
    <div className='outerContainer'>
      <Container >
        <div className='d-flex gap-5 py-2 px-5'>
          <div>
            <span className='px-1 fs-5'>
              <MdOutlineEventSeat />
            </span>
            <span>Events</span>
          </div>
          <div>
            <span className='px-1 fs-5'>
              <PiCalendarBlank />
            </span>
            <span>Calendars</span>
          </div>
          <div>
            <span className='px-1 fs-5'>
              <MdOutlineExplore />
            </span>
            <span>Explore</span>
          </div>
        </div>

        <div className='innerContainer rounded py-5'>
          <div style={{ paddingLeft: "100px" }}> <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=MB1-O5fjps0hVPd97fMIiEaisPMEn4XqVvQoJFKLRrQ=" className="bg-primary rounded-circle" style={{ width: '30px', height: '30px' }} />
            <select name="cars" id="cars" className='mx-2'>
              <option value="volvo">create under</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <p className='mx-2 px-4 fw-bold'>Personal Calender</p>
          </div>
          <Row className='px-5'>
            <Col>
              <div className='px-5 mt-3'>
                <Form.Group className="custom-outline">
                  <Form.Control type="text" placeholder="Enter Event..." className='fs-3' onChange={(e) => {
                    setEvent(e.target.value);
                    setEventError("")
                  }}
                  />
                </Form.Group>
                <div className='d-flex align-items-center px-3'>
                  <div className=''>
                    <SlCalender />
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='d-flex'>
                      <span className='px-3 my-1 py-3 fw-bold '>Start:</span>
                      <span className='py-3'>
                        <DatePicker selected={startDate} onChange={handleStartDateChange} style={{ width: "96px" }} />
                      </span>
                      <span className='py-3'>
                        <input
                          type="time"
                          step="1"
                          // value={startTime}
                          placeholder="Time"
                          onChange={(e) => { handleStartTimeChange(e) }}
                        />
                      </span>
                    </div>

                    <div className='d-flex'>
                      <span className='px-3 fw-bold'>End:</span>
                      <span>
                        <DatePicker selected={endDate} onChange={(e) => { handleEndDateChange(e) }} className='ml-5' />
                      </span>
                      <span>
                        <input
                          type="time"
                          step="1"
                          placeholder="Time"
                          onChange={(e) => { handleEndTimeChange(e) }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className='px-3 py-5'>
                  <CiLocationOn className='fs-4' />
                  <span className='px-2 fw-bold'>Add Event Location</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className='px-5 position-relative'>
                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={handleChange} />
                <FcGallery className='fs-3 position-absolute bottom-0 right-0' style={{ right: "146px", cursor: "pointer" }} onClick={handleClick} />
                <img src={selectedFile} alt="" className='rounded' width={300} height={300} />
              </div>
            </Col>

          </Row>
          <Row>
            <Col style={{ marginLeft: "95px" }}>
              <div className='px-3 mt-1'>
                <span className='fw-bold'> Event Options</span>
                <div className='mt-4'>
                  <div>
                    <span className=' fs-5'>
                      <RiTicketLine />
                    </span>
                    <span className='px-2'>Tickets</span>
                    <select name="cars" id="cars" className='mx-2 '>
                      <option value="volvo">create under</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div>
                    <span className=' fs-5'>
                      <MdApproval />
                    </span>
                    <span className='px-2'>Require Approval</span>
                    <select name="cars" id="cars" className='mx-2 '>
                      <option value="volvo">create under</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div>
                    <span className='fs-5'>
                      <MdReduceCapacity />
                    </span>
                    <span className='px-2'>Capacity</span>
                    <select name="cars" id="cars" className='mx-2 '>
                      <option value="volvo">create under</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div>
                    <span className='fs-5'>
                      <CiGlobe />
                    </span>
                    <span className='px-2'>Visibility</span>
                    <select name="cars" id="cars" className='mx-2 '>
                      <option value="volvo">create under</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>

                </div>
              </div>
            </Col>
            <Col>
              <div className='mt-3 fw-bold'> Theme</div>
              <div className='d-flex py-3'>
                <div>
                  <div style={{ backgroundColor: "lightGrey", borderRadius: "3px", width: "50px", height: "50px" }} className='px-1'>
                    Title
                  </div>
                  <div>
                    <span style={{ fontSize: "15px" }}>Manual</span>
                  </div>
                </div>

                <div className='px-4'>
                  <div style={{ backgroundColor: "lightGrey", borderRadius: "3px", width: "50px", height: "50px" }} className='px-1'>
                    Title
                  </div>
                  <div>
                    <span style={{ fontSize: "15px" }}>Holiday</span>
                  </div>
                </div>
                <div className=''>
                  <div style={{ backgroundColor: "lightGrey", borderRadius: "3px", width: "50px", height: "50px" }} className='px-1'>
                    Title
                  </div>
                  <div>
                    <span style={{ fontSize: "15px" }}>Abstract</span>
                  </div>
                </div>
                <div className='px-3'>
                  <div style={{ backgroundColor: "lightGrey", borderRadius: "3px", width: "50px", height: "50px" }} className='px-1'>
                    Title
                  </div>
                  <div>
                    <span style={{ fontSize: "15px" }}>Quantum</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div style={{ marginLeft: "100px" }} className='d-flex justify-content-space-between'>
            <Button className='px-5 bg-black mt-5' onClick={() => {
              dispatch(addEvent(eventData))
            }}> Create Event</Button>

            <p className='mt-5' style={{ paddingLeft: "600px", cursor: "pointer" }}>
              <span className='bg-secondary px-3 py-3 rounded' onClick={() => { redireactTo('/eventList') }}>View all events
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Events