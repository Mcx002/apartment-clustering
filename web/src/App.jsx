import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { findCluster } from './api';
import { getCluster, toWon } from './helper';

function App() {
  const [apartment, setApartment] = useState(null);
  const [clusters, setClusters] = useState([]);

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    
    const data = new FormData(event.target);
    const obj = Object.fromEntries(data.entries());
    
    const payload = {
      apartment: {
        SalePrice: parseInt(obj.SalePrice),
        YearBuilt: parseInt(obj.YearBuilt),
        YrSold: parseInt(obj.YrSold),
        MonthSold: parseInt(obj.MonthSold),
        Size: parseInt(obj.Size),
        Floor: parseInt(obj.Floor),
        HallwayType: obj.HallwayType,
        HeatingType: obj.HeatingType,
        AptManageType: obj.AptManageType,
        N_Parkinglot_Ground: parseInt(obj.N_Parkinglot_Ground),
        N_Parkinglot_Basement: parseInt(obj.N_Parkinglot_Basement),
        TimeToBusStop: obj.TimeToBusStop,
        TimeToSubway: obj.TimeToSubway,
        N_APT: parseInt(obj.N_APT),
        N_manager: parseInt(obj.N_manager),
        N_elevators: parseInt(obj.N_elevators),
        SubwayStation: obj.SubwayStation,
        N_FacilitiesNearBy_PublicOffice: parseInt(obj.N_FacilitiesNearBy_PublicOffice),
        N_FacilitiesNearBy_Hospital: parseInt(obj.N_FacilitiesNearBy_Hospital),
        N_FacilitiesNearBy_Dpartmentstore: parseInt(obj.N_FacilitiesNearBy_Dpartmentstore),
        N_FacilitiesNearBy_Mall: parseInt(obj.N_FacilitiesNearBy_Mall),
        N_FacilitiesNearBy_ETC: parseInt(obj.N_FacilitiesNearBy_ETC),
        N_FacilitiesNearBy_Park: parseInt(obj.N_FacilitiesNearBy_Park),
        N_SchoolNearBy_Elementary: parseInt(obj.N_SchoolNearBy_Elementary),
        N_SchoolNearBy_Middle: parseInt(obj.N_SchoolNearBy_Middle),
        N_SchoolNearBy_High: parseInt(obj.N_SchoolNearBy_High),
        N_SchoolNearBy_University: parseInt(obj.N_SchoolNearBy_University),
        N_FacilitiesInApt: parseInt(obj.N_FacilitiesInApt),
        N_FacilitiesNearBy_Total: parseInt(obj.N_FacilitiesNearBy_Total),
        N_SchoolNearBy_Total: parseInt(obj.N_SchoolNearBy_Total)
      },
    };

    await findCluster(payload).then(result => {
      console.log(result);
      const data = result.data;
      setApartment(data.apartment);
      setClusters(data.clusters);

      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  return (
    <div className="App">
      <div className="apartment-form">
        <h2>Find Cluster of your apartment</h2><br />
        <Form className="mb-3" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="group-input">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control required type="number" defaultValue="100000" name="SalePrice"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Year Built</Form.Label>
                <Form.Control required type="number" defaultValue="2007" name="YearBuilt"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Year Sold</Form.Label>
                <Form.Control required type="number" defaultValue="2008" name="YrSold"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Month Sold</Form.Label>
                <Form.Control required type="number" defaultValue="1" name="MonthSold"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Size</Form.Label>
                <Form.Control required type="number" defaultValue="1273" name="Size"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Floor</Form.Label>
                <Form.Control required type="number" defaultValue="18" name="Floor"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Hallway Type</Form.Label>
                <Form.Control required type="text" defaultValue="terraced" name="HallwayType"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Heating Type</Form.Label>
                <Form.Control required type="text" defaultValue="individual_heating" name="HeatingType"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>AptManage Type</Form.Label>
                <Form.Control required type="text" defaultValue="management_in_trust" name="AptManageType"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Parkinglot Ground total</Form.Label>
                <Form.Control required type="number" defaultValue="7.0" name="N_Parkinglot_Ground"/>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="group-input">
                <Form.Label>Parkinglot Basement total</Form.Label>
                <Form.Control required type="number" defaultValue="605.0" name="N_Parkinglot_Basement"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Time To Bus Stop</Form.Label>
                <Form.Control required type="text" defaultValue="0~5min" name="TimeToBusStop"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Time To Subway</Form.Label>
                <Form.Control required type="text" defaultValue="0-5min" name="TimeToSubway"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of APT</Form.Label>
                <Form.Control required type="number" defaultValue="2.0" name="N_APT"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of manager</Form.Label>
                <Form.Control required type="number" defaultValue="5.0" name="N_manager"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Elevators</Form.Label>
                <Form.Control required type="number" defaultValue="5.0" name="N_elevators"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Subway Station</Form.Label>
                <Form.Control required type="text" defaultValue="Banwoldang" name="SubwayStation"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By (PublicOffice)</Form.Label>
                <Form.Control required type="number" defaultValue="4.0" name="HeatingType"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By (Hospital)</Form.Label>
                <Form.Control required type="number" defaultValue="1" name="N_FacilitiesNearBy_Hospital"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By (Department Store)</Form.Label>
                <Form.Control required type="number" defaultValue="2.0" name="N_FacilitiesNearBy_Dpartmentstore"/>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By (Mall)</Form.Label>
                <Form.Control required type="number" defaultValue="1.0" name="N_FacilitiesNearBy_Mall"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By (ETC)</Form.Label>
                <Form.Control required type="number" defaultValue="0.0" name="N_FacilitiesNearBy_ETC"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By (Park)</Form.Label>
                <Form.Control required type="number" defaultValue="1.0" name="YrSold"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of School Near By (Elementary)</Form.Label>
                <Form.Control required type="number" defaultValue="2.0" name="N_SchoolNearBy_Elementary"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of School Near By (Middle)</Form.Label>
                <Form.Control required type="number" defaultValue="1.0" name="N_SchoolNearBy_Middle"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of School Near By (High)</Form.Label>
                <Form.Control required type="number" defaultValue="1.0" name="N_SchoolNearBy_High"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of School Near By (University)</Form.Label>
                <Form.Control required type="number" defaultValue="1.0" name="N_SchoolNearBy_University"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities In Apt</Form.Label>
                <Form.Control required type="number" defaultValue="5" name="N_FacilitiesInApt"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number of Facilities Near By Total</Form.Label>
                <Form.Control required type="number" defaultValue="9.0" name="N_FacilitiesNearBy_Total"/>
              </Form.Group>
              <Form.Group className="group-input">
                <Form.Label>Number School Near By Total</Form.Label>
                <Form.Control required type="number" defaultValue="5.0" name="N_SchoolNearBy_Total"/>
              </Form.Group>
            </div>
          </div>
          <input type="submit" defaultValue="Find Cluster"/>
        </Form>
      </div>
      { apartment != null ? <div className="apartment-result">
        <h1>Your apartment is in the cluster {getCluster(apartment.cluster)}</h1>
        <div className="container">
          <div className="row">
            {clusters.map((cluster, i) => (
              <div className="col-md-4" key={i}>
                <h3>{cluster.cluster}</h3>
                <div className="d-flex flex-column text-left">
                  <div className="text-left">Avg. Sale Price: ₩{toWon(Math.round(cluster.mean.SalePrice))}</div>
                  <div className="text-left">Avg. Size: {Math.round(cluster.mean.Size)}<sup>2</sup></div>
                  <div className="text-left">Avg. Facilities: {Math.round(cluster.mean.N_FacilitiesInApt)}</div>
                  <div className="text-left">Avg. Floor: {Math.round(cluster.mean.Floor)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> : ""}
      <footer></footer>
    </div>
  );
}

export default App;
