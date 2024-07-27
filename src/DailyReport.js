// DailyReport.js
import React from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';

const dailyReportData = [
  {
    day: 1,
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
    day: 1,
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
    day: 2,
    note: 'Callibrate All Machine for new Style',
    technician: 'Reyad',
  },
  {
    day: 3,
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
    day: 4,
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
    day: 4,
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
    day: 4,
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
    day: 5,
    note: 'Callibrate All Machine for new Style',
    technician: 'Anil',
  },
  {
    day: 6,
    machineNumber: 50,
    machineType: 'JACK(C5-6)',
    operation: 'OVERLOCK',
    failureTime: '9:49',
    operatingTime: '9:56',
    timeToRepair: '7 minutes',
    problemAction: 'Thread Broken Problem / Machine Leg Sitting',
    technician: 'Presonnell',
  },
  {
    day: 7,
    note: 'Callibrate All Machine for new Style',
    technician: 'Presonnell',
  },
  // Second data set
  {
    day: 8,
    machineNumber: 20,
    machineType: 'JACK(A6)',
    operation: 'SINGLE NEEDLE',
    failureTime: '10:00',
    operatingTime: '10:15',
    timeToRepair: '15 minutes',
    problemAction: 'Needle Break / Needle Change',
    technician: 'John',
  },
  {
    day: 8,
    machineNumber: 21,
    machineType: 'JACK(A6-3)',
    operation: 'SINGLE NEEDLE',
    failureTime: '11:00',
    operatingTime: '11:20',
    timeToRepair: '20 minutes',
    problemAction: 'Thread Tension / Adjustment',
    technician: 'John',
  },
  {
    day: 9,
    note: 'Machine Maintenance Check',
    technician: 'Doe',
  },
  {
    day: 10,
    machineNumber: 25,
    machineType: 'JACK(A4)',
    operation: 'OVERLOCK',
    failureTime: '12:00',
    operatingTime: '12:25',
    timeToRepair: '25 minutes',
    problemAction: 'Motor Issue / Replacement',
    technician: 'Jane',
  },
  {
    day: 11,
    machineNumber: 22,
    machineType: 'JACK(A5)',
    operation: 'SINGLE NEEDLE',
    failureTime: '14:00',
    operatingTime: '14:35',
    timeToRepair: '35 minutes',
    problemAction: 'Thread Cut / Thread Replacement',
    technician: 'Smith',
  },
  {
    day: 12,
    machineNumber: 23,
    machineType: 'JACK(A5)',
    operation: 'SINGLE NEEDLE',
    failureTime: '15:00',
    operatingTime: '15:30',
    timeToRepair: '30 minutes',
    problemAction: 'Fabric Jam / Clear and Clean',
    technician: 'Smith',
  },
  {
    day: 13,
    note: 'Deep Cleaning of Machines',
    technician: 'Sam',
  },
  {
    day: 14,
    machineNumber: 30,
    machineType: 'JACK(A2)',
    operation: 'OVERLOCK',
    failureTime: '16:00',
    operatingTime: '16:25',
    timeToRepair: '25 minutes',
    problemAction: 'Oil Leak / Seal Replacement',
    technician: 'Sam',
  },
  {
    day: 15,
    machineNumber: 35,
    machineType: 'JACK(A3)',
    operation: 'OVERLOCK',
    failureTime: '17:00',
    operatingTime: '17:45',
    timeToRepair: '45 minutes',
    problemAction: 'Motor Overheat / Cooling',
    technician: 'Alex',
  },
  {
    day: 16,
    note: 'Routine Checkup',
    technician: 'Alex',
  },
];

const DailyReport = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Maintenance Daily Report</h1>
          <Table className="table table-bordered" responsive striped bordered hover>
            <thead>
              <tr>
                <th>Day</th>
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
              {dailyReportData.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.machineNumber || ''}</td>
                  <td>{item.machineType || ''}</td>
                  <td>{item.operation || ''}</td>
                  <td>{item.failureTime || ''}</td>
                  <td>{item.operatingTime || ''}</td>
                  <td>{item.timeToRepair || ''}</td>
                  <td>{item.problemAction || item.note || ''}</td>
                  <td>{item.technician}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DailyReport;
