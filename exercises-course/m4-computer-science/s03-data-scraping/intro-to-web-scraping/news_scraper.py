from bs4 import BeautifulSoup
import requests


def get_html_reader():
    url = "http://g1.globo.com"
    response = requests.get(url)
    reader = BeautifulSoup(response.text, 'lxml')
    return reader
    

def get_main_news():
    soup = get_html_reader() 
    main_news_html = soup.find_all('a', class_="feed-post-link")
    main_news = list()
    
    for each_news in main_news_html:
        news_title = each_news.text
        news_link = each_news['href']
  
        news = {
          "title": news_title,
          "link": news_link,
        }
        
        main_news.append(news)
      
    return main_news 

