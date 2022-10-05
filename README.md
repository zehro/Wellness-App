# Wellness

## Setting Up the Virtual Environment
1. Install Python 3. If you're running Linux, your distribution will provide packages you can use.
2. Follow the instructions [here](http://flask.pocoo.org/docs/0.12/installation/#installation) to install the virtualenv and related tools
3. Clone this repository.
4. Open a terminal and navigate to this repository. Run ```virtualenv venv```. This creates a virtual Python 3 environment where you can install packages specific to this app.

## Running the Virtual Environment
5. Run the following command:
```
. venv/bin/activate (OSX/Linux)
. venv/Scripts/activate (Windows)
```

## Running the Local Server
Run ```python manage.py runserver```.

By default, the server will run on port 8000.
http://127.0.0.1:8000/

The development server automatically reloads Python code for each request as needed. You don’t need to restart the server for code changes to take effect. However, some actions like adding files don’t trigger a restart, so you’ll have to restart the server in these cases.

Quit the server with CONTROL-C.

## Stopping the Virtual Environment
Run ```deactivate``` to exit the virtualenv.
