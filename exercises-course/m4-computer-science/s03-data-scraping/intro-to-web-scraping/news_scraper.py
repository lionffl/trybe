from bs4 import BeautifulSoup
import requests


def get_html_reader():
    url = "http://g1.globo.com"
    response = requests.get(url)
    reader = BeautifulSoup(response.text, 'lxml')
    return reader
    

def get_main_news():
    soup = get_html_reader() 
    main_news = soup.find_all('a', class_="feed-post-link")
    result = list()
    
    for news in main_news:
        news_title = news.text
        news_link = news['href']
  
        entry = {
          "title": news_title,
          "link": news_link,
        }
        
        result.append(entry)
      
    return result 

