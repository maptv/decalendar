from datetime import date, timedelta
from time import time

def sols(year, skip=150):
    return (year * 668 + year // 2 + year // 10 - year // skip)

sols(2)  # 1337
1337 / 668
1336 / 668

sote = (time() / 86400000 + 6065.5848348500847758) / 1.0274912517
sote
sols(10)  # 6686
sols(150)  # 100289
def get_yotc(dotc):
    return (dotc - dotc // 1336 - dotc // 6685 + dotc // 100288) // 668
get_yotc(1336)
get_yotc(1337)
get_yotc(6685)
get_yotc(6686)
get_yotc(100288)
get_yotc(100289)
def days2soty(days):
    cycle = days // 73545
    dotc = days - cycle * 73545
    yotc = (
        dotc - dotc // 1336 - dotc // 6685 + dotc // 100288
        ) // 668
    print(cycle, dotc, yotc)
    return int(yotc + cycle * 110), dotc - (
        668 * yotc + yotc // 2 + yotc // 10
        )

days2soty(sote)
days2soty(73545 * 40)

date(1970,1,1) - date(1953,5,24)
date(1953,5,24) - date(1970,1,1)