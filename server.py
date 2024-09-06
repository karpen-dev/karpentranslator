# main.py
# karpen works

from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import json
from mtranslate import translate

class MyHandler(SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')  # Указываем разрешённые заголовки
        self.end_headers()

    def do_GET(self):
        parsed_path = urlparse(self.path)
        query_params = parse_qs(parsed_path.query)

        res = "null"
        text_transl = None
        output_language = None

        if 'q' in query_params and query_params['q'] and 'ol' in query_params and query_params['ol']:
            text_transl = query_params['q'][0]
            output_language = query_params['ol'][0]
            
            try:
                res = translate(text_transl, output_language, 'auto')
            except Exception as e:
                print("Error:", e)
                res = "Error"
        else:
            res = "null"

        response = {
            "word": text_transl,
            "output_language": output_language,
            "target": res
        }

        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')  
        self.send_header('Access-Control-Allow-Origin', '*') 
        self.end_headers()
        self.wfile.write(bytes(json.dumps(response), 'utf-8'))

server_address = ("127.0.0.1", 8000)
httpd = HTTPServer(server_address, MyHandler)

print("Starting server on port 8000...")
httpd.serve_forever()