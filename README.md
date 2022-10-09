# Wellness

## Requirements
1. Install Python 3 along with pip. If you're running Linux, your distribution will provide packages you can use.
2. Install NodeJS (16.17+) which comes along with npm (5.2+).



### Setting Up the Virtual Environment
1. Follow the instructions [here](http://flask.pocoo.org/docs/0.12/installation/#installation) to install the virtualenv and related tools
2. Open a terminal and run ```virtualenv venv```. This creates a virtual Python 3 environment where you can install packages specific to this app.
3. Activate the virtual environment then install pip requirements with ```pip install -r requirements_pip.txt```.

### Running the Virtual Environment
Run the following command:
```
. venv/bin/activate (OSX/Linux)
. venv/Scripts/activate (Windows)
```
### Stopping the Virtual Environment
Run ```deactivate``` to exit the virtualenv.



## Running the Local Server
You will likely need two terminal instances.

You don’t need to restart the server(s) for code changes to take effect. However, some actions like adding files may not show up, so you’ll have to restart the server(s) in these instances.

Quit the server(s) with CONTROL-C.

### Run Backend Server
1. Navigate to the root folder of the repository.
2. Run ```python manage.py runserver```.

By default, the server will run on port 8000.
http://127.0.0.1:8000/

### Run Frontend Server
1. Navigate to the root folder of the repository. Then navigate to ```/wellness_fe```.
2. Run ```npm start```.

By default, the server will run on port 3000.
http://127.0.0.1:3000/
