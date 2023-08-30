from flask import Flask, request
from flask_cors import CORS, cross_origin

from src.ml.predict import predict_college_stats


def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)

    @app.get('/')
    def Check():
        return {
            'status': 'Working....'
        }

    @app.post("/api/predict-campus-placements")
    @cross_origin(origins='*')
    def PredictCampusPlacements():
        try:

            campus_data_file = request.files.get('file', None)

            if campus_data_file is None:
                return {
                    'message': '[file] key not found in the form-data. Please upload excel file to fetch insights.'
                }, 400

            stats = predict_college_stats(campus_data_file)

            return {
                'status': 'file uploaded....',
                'stats': stats
            }
        except TypeError as type_error:
            return {
                'message': str(type_error)
            }, 400
        except:
            return {
                'message': 'Something went wrong.'
            }, 500

    return app
