import json
import ssl
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from mtranslate import translate

class MyHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        #if self.headers['Host'] != 'dev.karpen.online:8000':
            #self.send_response(403)  # Forbidden
            #self.end_headers()
            #return

        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
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


server_address = ("0.0.0.0", 8000)
httpd = HTTPServer(server_address, MyHandler)

print("Starting SSL server on port 8000...")
httpd.serve_forever()
