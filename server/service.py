import json
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

# dto
from dto import FindCluster_Payload

async def clusterApartment(payload: FindCluster_Payload):
    # get dataset
    data = pd.read_csv("./Daegu_Real_Estate_data.csv")
    
    row = pd.DataFrame(payload.apartment, index=["x"])

    data = data.append(row, ignore_index=True)

    # remove not supported data
    x = data.select_dtypes(exclude=['object'])
    del x["YearBuilt"]
    del x["YrSold"]
    del x["MonthSold"]

    # convert the array object to multi dimension array
    x = np.array(x)

    # Define the model
    kmeans_model = KMeans(n_clusters=3, n_init='auto', random_state=32932)
    # Fit into our dataset fit
    kmeans_predict = kmeans_model.fit_predict(x)

    # add cluster column to dataframe to identify the row's cluster
    data['cluster'] = kmeans_predict

    # mapping cluster information
    clusterB = json.loads(data[data.cluster==0].describe().to_json(orient = 'index'))
    clusterB.update({"cluster": "B"})
    clusterA = json.loads(data[data.cluster==1].describe().to_json(orient = 'index'))
    clusterA.update({"cluster": "A"})
    clusterC = json.loads(data[data.cluster==2].describe().to_json(orient = 'index'))
    clusterC.update({"cluster": "C"})

    # mapping requested data
    apartment = json.loads(data.tail(1).to_json(orient = "records"))

    # mapping response
    return {
        "apartment": apartment[0],
        "clusters": [ clusterA, clusterB, clusterC ],
    }