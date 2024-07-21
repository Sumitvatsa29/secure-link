import joblib
import json

# Load the model
model = joblib.load('classifier/random_forest.pkl')

# Load the feature extraction steps
with open('feature_extraction.json', 'r') as f:
    feature_extraction = json.load(f)

def extract_features(url):
    return [
        len(url),
        sum([1 for char in url if not char.isalnum()])
    ]

def classify_url(url):
    features = extract_features(url)
    prediction = model.predict([features])
    return 'malicious' if prediction[0] == 1 else 'safe'

# Test the function
url = "http://example.com"
print(f'The URL "{url}" is {classify_url(url)}.')

