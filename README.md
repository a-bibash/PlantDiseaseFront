
# Tomato Plant Disease Detection

This project is a final year project focused on detecting diseases in tomato plants using a Convolutional Neural Network (CNN) implemented in a sequential model. The web application allows users to upload images of tomato leaves, and the model predicts the type of disease present from a total of 11 possible classes.

## Table of Contents

-   Project Overview
-   Technologies Used
-   Installation
-   Usage
-   Model Details
-   Web Application Details
-   Contributing
-   License

## Project Overview

The Tomato Plant Disease Detection project is designed to assist farmers and agricultural professionals by automating the process of identifying diseases in tomato plants. The application leverages machine learning to provide quick and accurate disease classification.

## Technologies Used

-   **Machine Learning Framework**: PyTorch
-   **Web Framework**: Django
-   **Model Architecture**: Convolutional Neural Network (CNN) - Sequential Model
-   **Programming Languages**: Python
-   **Additional Libraries**: NumPy, Pandas, Matplotlib, Pillow

## Installation

To set up and run the project locally, follow these steps:

1.  **Clone the Repository**


    Copy code
    
    `git clone https://github.com/a-bibash/PlantProject.git` 
    
3.  **Navigate to the Project Directory**
    
    
    Copy code
    
    `cd tomato-disease-detection` 
    
4.  **Create a Virtual Environment**
   
    
    Copy code
    
    `python -m venv venv` 
    
5.  **Activate the Virtual Environment**
    
    -   On Windows:
    - 
        Copy code
        
        `venv\Scripts\activate` 
        
    -   On macOS/Linux:
        
        Copy code
        
        `source venv/bin/activate` 
        
6.  **Install Dependencies**
   
    Copy code
    
    `pip install -r requirements.txt` 
    
7.  **Run Database Migrations**
   
    Copy code
    
    `python manage.py migrate` 
    
8.  **Start the Django Development Server**
    
    Copy code
    
    `python manage.py runserver` 
    
    The web application will be available at `http://127.0.0.1:8000/`.
    

## Usage

1.  Open the web application in your browser.
2.  Navigate to the image upload section.
3.  Upload an image of a tomato leaf.
4.  The application will process the image and display the predicted disease type from the 11 possible classes.

## Model Details

-   **Architecture**: Sequential Convolutional Neural Network
-   **Number of Classes**: 11
-   **Training Framework**: PyTorch
-   **Dataset**: 
-*With Background dataset* : `https://www.kaggle.com/datasets/bibashadhikari/renamed` 
-*Background removed dataset* : `https://www.kaggle.com/datasets/bibashadhikari/datasetwithoutbg` 

The CNN model was trained on a dataset of tomato leaf images and evaluated for accuracy. The model predicts the type of disease based on the visual features of the leaf.

## Web Application Details

The web application is built using Django and serves as the interface for users to interact with the machine learning model. It allows users to upload images and receive predictions about the tomato leaf disease.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and include relevant tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.