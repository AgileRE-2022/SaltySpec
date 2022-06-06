<br>
<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/AgileRE-2022/SaltySpec/main/saltyspec/static/saltyspec/images/logo-name.png">
</p>
<br>
SaltySpec is a SALT (PlantUML)-based generator application that serves to generate Use Case Specifications from SALT GUI Wireframes Syntax. The name SaltySpec is taken from the abbreviation of the word "SALT GUI Wireframe to Use Case Specification".

## Live Demo

[SaltySpec](https://salty-spec.herokuapp.com/)

## Installation

There are a few steps needed to install SaltySpec, the steps consist of the following:

1. Make sure you have Git installed on your computer. If not, install Git from the following      link:
   https://git-scm.com/downloads
2. Clone the SaltySpec repository with the following code:
   ```
   git clone https://github.com/AgileRE-2022/SaltySpec.git
   ```
3. Open the SaltySpec folder by running this following command:
   ```
   cd SaltySpec
   ```
4. Run the following command to install the dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Run the follow command to run the application:
   ```
   python manage.py runserver
   ```
6. Access the application through http://127.0.0.1:8000 in your browser


## Usage

There are a few steps that must be done to convert the SALT GUI into Use Case Specification. Here are the following steps:

1. Input the actor of the use case in the “Aktor” field.


   ![first](https://user-images.githubusercontent.com/11147011/171878791-2b056665-7c60-4674-b45e-1f95bdb5e02a.png)

2. Input the Salt GUI code in the “Salt” field (with the specified criteria).
   
   ![second](https://user-images.githubusercontent.com/11147011/171879113-3cddecd2-b3d1-43af-8246-b9b1e82dfc8a.png)

   
3. Make sure the Salt GUI has all of the specified requirements / criteria.
   ```
   @startuml

    title ***write your use case name here***     

    !unquoted procedure SALT($x)
    "{{
    salt
    %invoke_procedure("_"+$x)
    }}" as $x
    !endprocedure

    !procedure _form()
    {+
    ***write your code (GUI) here***
    }
    !endprocedure

    !procedure _success()
    {+
    ***write your code (main scenario) here***
    }
    !endprocedure

    !procedure _error()
    {+
    ***write your code (alternative scenario) here***
    }
    !endprocedure

    (*) --> SALT(form)
    form --> SALT(success)
    form --> SALT(error)

    @enduml
    ```

4. The completed form will generate a Use Case Specification in the form of a table.
5. The Use Case Specification table can be exported as a png file.

## Limitations
Due to our limited time constraint, this project had some limitations. These limitations are as follows:

1. The Salt GUI can only **represent a single use case**.
2. The Salt GUI is in the form of activity consisting of **at least one main scenario**.
3. The Salt GUI used **must implement the usage of macro**.
4. The Salt GUI **Must contain Title**, since it will be used as the use case title.
5. The Salt GUI **Must contain !procedure _form()**, since it will be used as the part that represents GUI that is being used.
6. The Salt GUI **Must contain !procedure _success()**, since it will be used as the part that represents the main scenario. It should contain what the desired output looks like.
7. The Salt GUI **Must contain !procedure _error()**, since it will be used as the part that represents an alternative scenario. It should contain what the alternative output looks like.
8. The Salt GUI **Must not contain header attribute in the "!procedure _success()" and "!procedure _error()"**, since it will break the specification output.
9. The Salt GUI **Must contain ":" before an input field**, since it will be used as the part that represents the input field.
10. The Salt GUI **Must only have one button in each interface**, since it will be used as the part that represents the button.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
SaltySpec is distributed under [MIT License](https://github.com/AgileRE-2022/SaltySpec/blob/main/LICENSE.md)
