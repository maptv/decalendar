import json
import pathlib

from selenium import webdriver


chrome_options = webdriver.ChromeOptions()
settings = {
       "recentDestinations": [{
            "id": "Save as PDF",
            "origin": "local",
            "account": "",
        }],
        "selectedDestinationId": "Save as PDF",
        "version": 2,
        "isHeaderFooterEnabled": False,
        "scaling": 67,
        "scalingType": 3,
        "scalingTypePdf": 3,
    }
prefs = {'printing.print_preview_sticky_settings.appState': json.dumps(settings)}
chrome_options.add_experimental_option('prefs', prefs)
chrome_options.add_argument('--kiosk-printing')
for file in pathlib.Path.cwd().glob("*.html"):
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(file.as_uri())
    driver.execute_script('window.print();')
    driver.quit()
