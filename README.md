# SaltySpec

SaltySpec is a SALT (PlantUML)-based generator application that serves to generate Use Case Specifications from SALT GUI Wireframes Syntax. The name SaltySpec is taken from the abbreviation of the word "SALT GUI Wireframe to Use Case Specification".


## Installation

There are a few steps needed to install SaltySpec, the steps consist of the following:

1. SaltySpec requires Django to be installed first. In order to install Django, you can see the Documentation for Django from the link below:
   https://docs.djangoproject.com/en/4.0/
2. SaltySpec can be installed by cloning our github repository from the link below:
   https://github.com/AgileRE-2022/SaltySpec
3. Or simply download the zip file from the link below:
   https://github.com/AgileRE-2022/SaltySpec/archive/refs/heads/main.zip
4. Once you have installed Django and SaltySpec, you can run the app using the command “python manage.py runserver”.
   ```
   SaltySpec>python manage.py runserver
   ```

> There is an alternative method to install SaltySpec by simply using
> the following command in the directory.
> 
> SaltySpec>pip install -r requirements.txt


## Usage

There are a few steps that must be done to convert the SALT GUI into Use Case Specification. Here are the following steps:

1. Input the actor of the use case in the “Aktor” field.
   ![Aktor field](https://lh3.googleusercontent.com/PNqv3dUg4mXLWlOizvkXI8bCSqIiYog63oI6HDypAJPZMrbiK_BcVz1OMyy1Ce-YvJ6fAansqr-Btw40ZqYtIdIjXkcwmtaGVx30Hr6fbCXmXLLBzVrDXQQUROGGBoU1vCrbdmxjWtAlD3ymKw)
3. Input the description of the use case in the “Deskripsi” field.
4. Input the pre-condition of the use case in the “Kondisi Awali” field.
5. Input the end-condition of the use case in the “Kondisi Akhir” field.
6. Input the Salt GUI code in the “Salt” field (with the specified criteria).
7. Make sure the Salt GUI has all of the specified requirements / criteria.
8. The completed form will generate a Use Case Specification in the form of a table.
9. The Use Case Specification table can be exported as either pdf or png file.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
