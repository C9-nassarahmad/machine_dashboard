import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Table, Button, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from 'qrcode.react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Sun, Moon } from 'react-bootstrap-icons';
import './App.css';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const data = [
  {
    section: 'SO5A',
    machineNumber: 183,
    machineType: 'DURKOPP(183)',
    operation: '70 SINGLE NEEDLE EDGE CUTTER',
    failureTime: '10:23',
    operatingTime: '10:45',
    timeToRepair: '22 minutes',
    problemAction: 'Buckring Stitch / Thread Sitting',
    technician: 'Mahmoud',
  },
  {
    section: 'SO2B',
    machineNumber: 72,
    machineType: 'Ti.Ci.eSee',
    operation: '27 PRESS',
    failureTime: '14:30',
    operatingTime: '14:45',
    timeToRepair: '15 minutes',
    problemAction: 'Steam Pipe Change',
    technician: 'Nabil',
  },
  {
    section: 'SO2A',
    machineNumber: 44,
    machineType: 'DURKOPP(745)',
    operation: '21 WELT MAKING',
    failureTime: '9:30',
    operatingTime: '9:55',
    timeToRepair: '25 minutes',
    problemAction: 'Skip Stitch / Machine Program Sitting',
    technician: 'Omar',
  },
  {
    section: 'SO5A',
    machineNumber: 192,
    machineType: 'PFAFF',
    operation: '69 SINGLE NEEDLE BASTING',
    failureTime: '8:05',
    operatingTime: '8:33',
    timeToRepair: '28 minutes',
    problemAction: 'Thread Lose Problem / Machine Leg Sitting',
    technician: 'Mahmoud',
  },
  {
    section: 'SO3',
    machineNumber: 120,
    machineType: 'PFAFF',
    operation: '42 SINGLE NEEDLE BASTING',
    failureTime: '13:14',
    operatingTime: '13:25',
    timeToRepair: '11 minutes',
    problemAction: 'Skip Stitch / Needle Sitting',
    technician: 'Mahmoud',
  },
  {
    section: 'SO1',
    machineNumber: 15,
    machineType: 'DURKOPP(265)',
    operation: '24 SINGLE NEEDLE CHAINSTITCH',
    failureTime: '8:53',
    operatingTime: '9:05',
    timeToRepair: '12 minutes',
    problemAction: 'Lose Stitch Problem / Needle Sitting',
    technician: 'Mahmoud',
  },
  {
    section: 'SO2B',
    machineNumber: 87,
    machineType: 'STROBEL',
    operation: '273 FELLING',
    failureTime: '9:08',
    operatingTime: '',
    timeToRepair: '',
    problemAction: '',
    technician: '',
  },
  {
    machineNumber: 55,
    machineType: 'JACK(C5s-5)',
    operation: 'OVERLOCK',
    failureTime: '11:54',
    operatingTime: '12:05',
    timeToRepair: '11 minutes',
    problemAction: 'Skip Stitch / Lopper Change',
    technician: 'Samad',
  },
  {
    machineNumber: 28,
    machineType: 'JACK(C5)',
    operation: 'OVERLOCK',
    failureTime: '11:40',
    operatingTime: '11:52',
    timeToRepair: '12 minutes',
    problemAction: 'Skip Stitch / Thread Sitting',
    technician: 'Samad',
  },
  {
    machineNumber: 15,
    machineType: 'JACK(8558-WD)',
    operation: 'DOUBLE NEEDLE CHAINSTITCH',
    failureTime: '8:27',
    operatingTime: '8:45',
    timeToRepair: '18 minutes',
    problemAction: 'Skip Problem / Needle Change',
    technician: 'Dulail',
  },
  {
    machineNumber: 15,
    machineType: 'JACK(C5)',
    operation: 'OVERLOCK',
    failureTime: '8:27',
    operatingTime: '9:00',
    timeToRepair: '33 minutes',
    problemAction: 'Thread Cut Problem / Knife Sitting',
    technician: 'Anil',
  },
  {
    machineNumber: 6,
    machineType: 'REMOLDI',
    operation: 'OVERLOCK',
    failureTime: '8:40',
    operatingTime: '8:50',
    timeToRepair: '10 minutes',
    problemAction: 'Skip Problem / Folder Sitting',
    technician: 'Anil',
  },
  {
    machineNumber: 3,
    machineType: 'JACK(C5s)',
    operation: 'OVERLOCK',
    failureTime: '15:29',
    operatingTime: '15:39',
    timeToRepair: '10 minutes',
    problemAction: 'Skip Problem / Machine Leg Sitting',
    technician: 'Anil',
  },
  {
    machineNumber: 50,
    machineType: 'JACK(C5-6)',
    operation: 'OVERLOCK',
    failureTime: '9:49',
    operatingTime: '9:56',
    timeToRepair: '7 minutes',
    problemAction: 'Thread Broken Problem / Machine Leg Sitting',
    technician: 'Presonnell',
  },
];

const team = [
  { name: 'Mahmoud', role: 'Technician' },
  { name: 'Nabil', role: 'Technician' },
  { name: 'Omar', role: 'Technician' },
  { name: 'Samad', role: 'Technician' },
  { name: 'Dulail', role: 'Technician' },
  { name: 'Anil', role: 'Technician' },
  { name: 'Presonnell', role: 'Technician' },
];

const downtimeData = data.map(item => {
  const downtime = item.timeToRepair ? parseInt(item.timeToRepair.split(' ')[0]) : 0;
  return {
    machineNumber: item.machineNumber,
    downtime,
  };
});

const chartData = {
  labels: downtimeData.map(item => item.machineNumber),
  datasets: [
    {
      label: 'Downtime (minutes)',
      data: downtimeData.map(item => item.downtime),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = (machineNumber) => {
    toast(`Notification for Machine #${machineNumber} triggered!`);
  };

  const handleQrCodeClick = (machineNumber) => {
    setQrCodeData(machineNumber);
    notify(machineNumber);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
          <Container>
            <Navbar.Brand href="#home">EL-ZAY Ready Wear Manufacturing Co</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/team">Team Members</Nav.Link>
                <Nav.Link as={Link} to="/machines">Machines</Nav.Link>
                <Nav.Link as={Link} to="/qr-codes">QR Codes</Nav.Link>
              </Nav>
              <div className="ml-auto d-flex align-items-center">
                <ReactToggle
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  icons={{
                    checked: <Moon />,
                    unchecked: <Sun />,
                  }}
                />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid>
          <Routes>
            <Route path="/" element={
              <Row className="mt-4">
                <Col>
                  <h1 className="text-center">Machine Operations</h1>
                  <Table className="table table-bordered" responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Machine #</th>
                        <th>Machine Type</th>
                        <th>Operation</th>
                        <th>Failure Time</th>
                        <th>Operating Time</th>
                        <th>Time To Repair</th>
                        <th>Problem / Action</th>
                        <th>Technician</th>
                        <th>QR Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.machineNumber}</td>
                          <td>{item.machineType}</td>
                          <td>{item.operation}</td>
                          <td>{item.failureTime}</td>
                          <td>{item.operatingTime}</td>
                          <td>{item.timeToRepair}</td>
                          <td>{item.problemAction}</td>
                          <td>{item.technician}</td>
                          <td>
                            <QRCode 
                              value={String(item.machineNumber)} 
                              size={50} 
                              onClick={() => handleQrCodeClick(item.machineNumber)}
                              style={{ cursor: 'pointer' }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            } />
            
            <Route path="/team" element={
              <Row className="mt-4">
                <Col>
                  <h1 className="text-center">Team Members</h1>
                  <Table className="table table-bordered" responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.map((member, index) => (
                        <tr key={index}>
                          <td>{member.name}</td>
                          <td>{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            } />

            <Route path="/machines" element={
              <Row className="mt-4">
                <Col>
                  <h1 className="text-center">Machines</h1>
                  <Table className="table table-bordered" responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Machine #</th>
                        <th>Machine Type</th>
                        <th>Operation</th>
                        <th>Failure Time</th>
                        <th>Operating Time</th>
                        <th>Time To Repair</th>
                        <th>Problem / Action</th>
                        <th>Technician</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.machineNumber}</td>
                          <td>{item.machineType}</td>
                          <td>{item.operation}</td>
                          <td>{item.failureTime}</td>
                          <td>{item.operatingTime}</td>
                          <td>{item.timeToRepair}</td>
                          <td>{item.problemAction}</td>
                          <td>{item.technician}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            } />

            <Route path="/qr-codes" element={
              <Row className="mt-4">
                <Col>
                  <h1 className="text-center">QR Codes</h1>
                  <div className="d-flex flex-wrap justify-content-center">
                    {data.map((item, index) => (
                      <div key={index} className="m-2">
                        <QRCode
                          value={String(item.machineNumber)}
                          size={100}
                          onClick={() => handleQrCodeClick(item.machineNumber)}
                          style={{ cursor: 'pointer' }}
                        />
                        <p className="text-center">Machine #{item.machineNumber}</p>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            } />
          </Routes>

          <Row className="mt-4 text-center">
            <Col>
              <h1>Calendar</h1>
              <div className="d-flex justify-content-center">
                <Calendar onChange={setDate} value={date} />
              </div>
            </Col>
          </Row>

          <Row className="mt-4 text-center">
            <Col>
              <h1>Notifications</h1>
              <Button variant="primary" onClick={() => notify(qrCodeData)}>Show Notification</Button>
              <ToastContainer />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h1 className="text-center">Downtime Chart</h1>
              <Bar data={chartData} />
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Keyboard Shortcuts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Shortcut 1: Description</p>
            <p>Shortcut 2: Description</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="text-center">
          <Button variant="info" onClick={handleShow} className="m-4">Show Keyboard Shortcuts</Button>
        </div>
      </div>
    </Router>
  );
}

export default App;
