import json
import requests


def iterate_lines(response: requests.Response) -> str:
    generated_text = ""
    for line in response.iter_lines():
        if line:
            try:
                json_line = json.loads(line.decode('utf-8'))
                if "response" in json_line:
                    generated_text += json_line["response"]
            except:
                print("Invalid Ollama response")
                continue
    return generated_text
