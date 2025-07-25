import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import os

# Load your dataset
# DATA_PATH = "/content/"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

info_tourism = pd.read_csv(os.path.join(BASE_DIR, "tourism_with_id.csv"))
tourism_rating = pd.read_csv(os.path.join(BASE_DIR, "tourism_rating.csv"))
users = pd.read_csv(os.path.join(BASE_DIR, "user.csv"))

tourism_all = np.concatenate((
    info_tourism.Place_Id.unique(),
    tourism_rating.Place_Id.unique()
))

tourism_all = np.sort(np.unique(tourism_all))
all_tourism_rate = tourism_rating
all_tourism = pd.merge(all_tourism_rate,info_tourism[["Place_Id","Place_Name","Description","City","Category"]],on='Place_Id', how='left')
all_tourism['city_category'] = all_tourism[['City','Category']].agg(' '.join,axis=1)
preparation= all_tourism.drop_duplicates("Place_Id")

place_id = preparation.Place_Id.tolist()

place_name = preparation.Place_Name.tolist()

place_category = preparation.Category.tolist()

place_desc = preparation.Description.tolist()

place_city = preparation.City.tolist()

city_category = preparation.city_category.tolist()

tourism_new = pd.DataFrame({
    "id":place_id,
    "name":place_name,
    "category":place_category,
    "description":place_desc,
    "city":place_city,
    "city_category":city_category
})

data = tourism_new

# Vectorization
cv = CountVectorizer()
cv_matrix = cv.fit_transform(data['city_category'])

# Cosine similarity matrix
cosine_sim = cosine_similarity(cv_matrix)
cosine_sim_df = pd.DataFrame(cosine_sim, index=data['name'], columns=data['name'])

# def tourism_recommendations(place_name, k=5):
#     if place_name not in cosine_sim_df.columns:
#         return []

#     index = cosine_sim_df.loc[:, place_name].to_numpy().argpartition(range(-1, -k - 1, -1))
#     closest = cosine_sim_df.columns[index[-1:-(k + 2):-1]]
#     closest = closest.drop(place_name, errors='ignore')
#     return pd.DataFrame(closest).merge(
#         data[['name', 'category', 'description', 'city']],
#         left_on=0, right_on='name'
#     ).head(k).to_dict(orient='records')

def tourism_recommendations(place_name, k=5):
    if place_name not in cosine_sim_df.columns:
        return []

    index = cosine_sim_df.loc[:, place_name].to_numpy().argpartition(range(-1, -k - 1, -1))
    closest = cosine_sim_df.columns[index[-1:-(k + 2):-1]]
    closest = closest.drop(place_name, errors='ignore')
    return pd.DataFrame(closest).merge(
        data[['name', 'category', 'description', 'city']],
        left_on=0, right_on='name'
    ).head(k).to_dict(orient='records')

