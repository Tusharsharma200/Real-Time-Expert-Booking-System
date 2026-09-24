import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        requested_path = self.translate_path(self.path)
        if os.path.exists(requested_path) and not os.path.isdir(requested_path):
            return super().do_GET()
        if os.path.isdir(requested_path) and os.path.exists(os.path.join(requested_path, "index.html")):
            return super().do_GET()
        self.path = "/index.html"
        return super().do_GET()

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
        print(f"============================================================")
        print(f" REAL-TIME EXPERT SESSION BOOKING SYSTEM")
        print(f" Running at: http://localhost:{PORT}")
        print(f" Pages available:")
        print(f"  - Home Landing:     http://localhost:{PORT}/")
        print(f"  - Search Providers: http://localhost:{PORT}/search")
        print(f"  - Expert Profile:   http://localhost:{PORT}/hub/exp-1")
        print(f"  - User Dashboard:   http://localhost:{PORT}/dashboard")
        print(f"============================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    run_server()
