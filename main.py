import webapp2
import os
from google.appengine.ext.webapp import util
class MainHandler(webapp2.RequestHandler):
    def get(self):
        fob = open("index.html")
        html = fob.read()
        self.response.write(html)

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ], debug=True)
