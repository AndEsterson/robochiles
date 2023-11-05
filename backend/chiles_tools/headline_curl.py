import requests
import random
from bs4 import BeautifulSoup


def get_headline():
    page = random.randrange(1, 15, 1)
    url = f'https://www.theguardian.com/profile/adrian-chiles?page={page}'
    soup = BeautifulSoup(requests.get(url).content, 'html.parser')
    headlines = soup.find_all('span', {'class': 'js-headline-text'})
    return random.choice(headlines).text

if __name__ == '__main__':
    print(get_headline())