'''
# Webscraping in Python
<[python <[scrape <[web

<°Code snippets for web scraping using python.°>

[https://oxylabs.io/blog/python-web-scraping]

'''

'''
For larger projects but that can only scrape static sites.

$ pip install requests BeautifulSoup

'''
import threading
import requests
from bs4 import BeautifulSoup
url = "https://www.zjvieth.net"
response = requests.get(url)


class Queue:
    
    @classmethod
    def for_search_engine(cls, engine, terms: set):
        cls(


class ReqScraper:
    
    def __init__(self, queue:list=[], query=[], wait:bool=False):
        self.results = []
        self.notifs = []
        self.queue = queue_in
        self.query = query
        
        self.running = False
        
        self.thread = threading.Thread(target=self.run)
        
        if not wait:
            self.start()
        
        
    def start(self):
        if self.running:
            return
        self.running = True
        self.thread.start()


    def run(self):
         
         while (True):
         
            if not self.running:
                break
            
            if len(self.queue) == 0:
                continue
            
            self.run_query(queue[0])
            del queue[0]
            
            
    def run_query(self, url):
        response = requests.get(url)
        
        out = {}
        
        for term in self.query:
            out{term} = self.find_term(response, term)
            
        self.results.push(out) 
        self.notifs.push(out) 
        
        
    def listen(self):
        if len(self.notifs) == 0:
            return null
        out = [*self.notifs]
        self.notifs = []
        return out
        
     


'''
For smaller projects but that can alos read js populated sites.

Required installs:
$ pip install selenium pandas BeautifulSoup
'''

