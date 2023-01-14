# Apartment Clustering

this dataset is from [kaggle](https://www.kaggle.com/datasets/gunhee/koreahousedata). we do clustering for it, so we can find the apartment group.

by the elbow method. we got the optimal number cluster. and the optimal number is 3. we will devide the apartment to 3 cluster. and find the identity of each cluster.

check the [Apartment Clustering.ipynb](https://github.com/Mcx002/apartment-clustering/blob/master/Apartment%20Clustering.ipynb) file to see how it's work.

## Server Installation

### Requirements
- python3
- pip3
- modules
    - pydantic
    - fastapi
    - pandas
    - numpy
    - scikit-learn
    - uvicorn

> Install the module with pip3 / pip install {module}

### Run the server
First you need to go to the server folder with your terminal
```
cd server
```

then type this command to run the server
```
uvicorn main:app
```

## Web Installation

### Installation

Go to the folder web
```
cd web
```

run `npm install`

### Run the web

To start the web type this command below on your terminal
```
npm start
```

## APIs

### Get Health

For checking is the API working

```
GET: /
```

### Find Cluster

To find requested apartment's cluster

```
POST: /clusters/check
Body(raw-json): {
    "apartment": {
        "SalePrice": 500000,
        "YearBuilt": 2007,
        "YrSold": 2008,
        "MonthSold": 1,
        "Size": 1273,
        "Floor": 18,
        "HallwayType": "terraced",
        "HeatingType": "individual_heating",
        "AptManageType": "management_in_trust",
        "N_Parkinglot_Ground": 7.0,
        "N_Parkinglot_Basement": 605.0,
        "TimeToBusStop": "0~5min",
        "TimeToSubway": "0-5min",
        "N_APT": 2.0,
        "N_manager": 5.0,
        "N_elevators": 5.0,
        "SubwayStation": "Banwoldang",
        "N_FacilitiesNearBy_PublicOffice": 4.0,
        "N_FacilitiesNearBy_Hospital": 1,
        "N_FacilitiesNearBy_Dpartmentstore": 2.0,
        "N_FacilitiesNearBy_Mall": 1.0,
        "N_FacilitiesNearBy_ETC": 0.0,
        "N_FacilitiesNearBy_Park": 1.0,
        "N_SchoolNearBy_Elementary": 2.0,
        "N_SchoolNearBy_Middle": 1.0,
        "N_SchoolNearBy_High": 1.0,
        "N_SchoolNearBy_University": 1.0,
        "N_FacilitiesInApt": 5,
        "N_FacilitiesNearBy_Total": 9.0,
        "N_SchoolNearBy_Total": 5.0
    }
}
```

## Contributor
- Muchlish Choeruddin <muchlishchoeruddin96@gmail.com>