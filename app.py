from flask import Flask, request, jsonify
from genetic_engineering_algorithm import generate_roadmap

app = Flask(__name__)

@app.route('/generate-roadmap', methods=['POST'])
def generate_roadmap_endpoint():
 input_data = request.get_json()
 organism = input_data['organism']
 gene = input_data['gene']
 expression_level = input_data['expressionLevel']
 roadmap = generate_roadmap(organism, gene, expression_level)
 return jsonify({'roadmap': roadmap})

if __name__ == '__main__':
 app.run(debug=True)
