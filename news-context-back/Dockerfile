FROM python:3.9

WORKDIR /NC-Back

COPY . /NC-Back/

RUN pip install --no-cache-dir --upgrade -r /NC-Back/requirements.txt

CMD ["fastapi", "run", "main.py", "--port", "8000"]
