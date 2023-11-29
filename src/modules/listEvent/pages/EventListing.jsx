import React, { useState } from 'react'
import '../styles/eventListStyles.css'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const EventListing = () => {
  const redirectTo = useNavigate();
  const eventList = useSelector((state) => state.event)
  const [activeTab, setActiveTab] = useState('small'); // Initialize with the default tab
  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      {eventList.data.length > 0 ?
        (
          <>
            <div className="tab-container">
              <div
                className={`tab ${activeTab === 'small' ? 'active' : ''}`}
                onClick={() => handleTabClick('small')}
              >
                Upcomming
              </div>
              <div
                className={`tab ${activeTab === 'medium' ? 'active' : ''}`}
                onClick={() => handleTabClick('medium')}
              >
                Past
              </div>
            </div>
            <span style={{ marginLeft: "300px", fontFamily: "sans-serif", fontSize: "20px", fontWeight: "bold" }}>Events</span>
            {
              eventList.data.map((data) => (
                <>
                  <Card style={{ width: '40rem', marginTop: "40px", marginLeft: "auto", marginRight: "auto" }}>
                    <Card.Body>
                      <Card.Title>{data.event}</Card.Title>
                      <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=MB1-O5fjps0hVPd97fMIiEaisPMEn4XqVvQoJFKLRrQ=" alt="" className='rounded' width={100} height={100} style={{ float: "right" }} />
                      <Card.Subtitle className="mb-2 text-muted">Event Details</Card.Subtitle>
                      <Card.Text>
                        <div>
                          <span>Start Date:{" "}</span>
                          <span>{data.startDate?.toLocaleDateString()}</span>
                        </div>
                        <div>
                          <span>
                            End Date:{" "}
                          </span>
                          <span>{data.endDate?.toLocaleDateString()}</span>
                        </div>
                        <div>
                          <span>
                            Start Time: {"  "}
                          </span>
                          <span>{data.startTime}</span>
                        </div>
                        <div>
                          <span>
                            End Time: {"  "}
                          </span>
                          <span>{data.endTime}</span>
                        </div>

                      </Card.Text>
                    </Card.Body>
                  </Card>

                </>
              ))
            }
            <div className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
              <Button className='px-5 bg-black' onClick={() => {
                redirectTo("/");
              }}> Add More Events</Button>
            </div>
          </>
        ) :
        (<div className='d-flex flex-column justify-content-center align-items-center mt-5'>
          <span className=''>No Events Added </span>
          <Button className='px-5 bg-black mt-5' onClick={() => {
            redirectTo("/");
          }}> Add Events</Button>
        </div>)
      }
    </div>
  )
}

export default EventListing