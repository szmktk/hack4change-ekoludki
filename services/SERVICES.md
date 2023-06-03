# SERVICES

Install [poetry](https://python-poetry.org/docs/#installation)

Change to backend services directory  
`cd services`

Create a virtual environment with  
`python -m venv .venv`

Activate it  
```
source .venv/bin/activate
.venv\scripts\activate  # if you happen to be on Windows
```

Install project dependencies with `poetry`
```
poetry install
```

to run `fastapi` go to `core` directory and run a development server:
```
uvicorn core.main:app --reload
```
