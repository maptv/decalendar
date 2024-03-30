from datetime import date, timedelta
from time import time

def sols(year, cycle=1400):
    return (year * 669 - year // 2 + year // 10 - year // 100 + year // cycle)
sols(800) / 800

sols(1000, 1000) / 1000
sote = (time() / 86400 + 6065.5848348500847758) / 1.0274912517
sote

def days2soty(days):
    cycle = days // 668591
    dotc = days - cycle * 668591
    yotc = (
        dotc + dotc // 1337 - dotc // 6685 + dotc // 66859 - dotc // 668590
        ) // 669
    print(cycle, dotc, yotc)
    return int(yotc + cycle * 1000), dotc - (
        669 * yotc - yotc // 2 + yotc // 10 - yotc // 100
        )

days2soty(sote)
sols(1)  # 669
days2soty(668)
days2soty(669)
sols(2)  # 1337
days2soty(1336)
days2soty(1337)
sols(3)  # 2006
days2soty(2005)
days2soty(2006)
sols(4)  # 2674
days2soty(2673)
days2soty(2674)
sols(10)  # 6686
days2soty(6685)
days2soty(6686)
sols(11)  # 7355
days2soty(7354)
days2soty(7355)
sols(100)  # 66859
days2soty(66858)
days2soty(66859)
sols(1400)  # 668591
days2soty(668590)
days2soty(668591)
date(1970,1,1) - date(1953,5,24)
date(1953,5,24) - date(1970,1,1)

1400 / 2 + 140 - 14 + 1
1400 - 827
(573*668 + 827 * 669) / 668591