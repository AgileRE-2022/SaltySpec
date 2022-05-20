# SaltySpec

![logo](https://cdn.discordapp.com/attachments/778081243434582019/977044423043063858/logo-name.png)
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
2. Input the description of the use case in the “Deskripsi” field.
   ![Deskripsi field](https://lh6.googleusercontent.com/9rFPBZQHHVcaI9NC0892pxjFgXbuchrrrXy752hwQucQNQwKSgoa6S8WYDQ6a3QvRlaD56F_HQgMzfUU7-pZ_Pw83JzalDnRb7QsFGut658JPhhA0w7H_HIjVEVRDI2A3UMkYz3JYl-xw2wJxA)
3. Input the pre-condition of the use case in the “Kondisi Awali” field.
   ![Kondisi Awal field](https://lh3.googleusercontent.com/AJdBzqBc-IsqA-AaU4sZB4PatK8t0Z6ZafcilAD8Vm51ya-vM7uKCREZGF3wMIJdFcYqr0ILMeDPUEGdFr1rRWYwMauM1sDsuvc-43ztD-mfWsZoIPdaZh3S9g6LTgCBYBlYYLMEwaZQBER-1Q)
4. Input the end-condition of the use case in the “Kondisi Akhir” field.
   ![Kondisi Akhir field](https://lh4.googleusercontent.com/I4MurFkzmk10oHyBzajD5fVa7b-rAiqUjTsel7MANPSFJl1lzEP3SCspIVx499gk5do9zObFapNAVsrvwmg6ezeHKXtW6FQzew0sfGP8g5ghRAZZ0wPWSZ2UPkNg630Ls8DWSyUd_K7mJn6SwQ)
5. Input the Salt GUI code in the “Salt” field (with the specified criteria).
   ![SALT GUI Syntax field](https://lh5.googleusercontent.com/W9l2HEdPCjlWiR1gCyD2LL7XsAm_0oeb9dI1pFOMgqXqHrJd4Tfi7xgumYUtdUXSOGd-aX9gWdXtUznvlmWB4E6a2IreWd0BDy9L9QOGlHOeNDVw-tfRT_xh4pZBQ1TnivGWvrqrxLDyatgoPA)
6. Make sure the Salt GUI has all of the specified requirements / criteria.
7. The completed form will generate a Use Case Specification in the form of a table.
8. The Use Case Specification table can be exported as either pdf or png file.

## Limitations
Due to our limited time constraint, this project had some limitations. These limitations are as follows:

1. The Salt GUI can only represent a single use case.
2. The Salt GUI is in the form of activity consisting of at least one main scenario.
3. The Salt GUI used must implement the usage of macro.
4. The Salt GUI Must contain Title, since it will be used as the use case title.
5. The Salt GUI Must contain !procedure _form(), since it will be used as the part that represents GUI that is being used.
6. The Salt GUI Must contain !procedure _success(), since it will be used as the part that represents the main scenario. It should contain what the desired output looks like.
7. The Salt GUI Must contain !procedure _error(), since it will be used as the part that represents an alternative scenario. It should contain what the alternative output looks like.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
