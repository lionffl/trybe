from fastapi import FastAPI
from news_scraper import get_main_news

app = FastAPI()


@app.get('/api/news')
async def get_news():
    main_news = get_main_news()
    
    response = {
      "main_news": main_news
    }
    
    return response