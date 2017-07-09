import webapp2

class Routing( webapp2.RequestHandler):
        def get(self):
            url = (self.request.url).lower()
            if 'campus' in url :
                self.redirect('/src/campus.html')
                
            elif 'about' in url :
                self.redirect('/src/about.html')

            elif 'contact' in url :
                self.redirect('/src/contact.html')

            else :
                self.redirect('/src/nothinghere.html')

            #self.response.out.write(template.render('src/campus.html', None))


app = webapp2.WSGIApplication([
    ('/campus', Routing),
    ('/about', Routing),
    ('/contact',Routing)
], debug=True)








