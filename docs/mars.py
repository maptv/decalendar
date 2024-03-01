years = 3200, 5000, 7100, 9200
modifiers = 150, 200, 300, 600
import pandas as pd
import seaborn as sns
from datetime import date, timedelta
from time import time
from math import floor
from scipy import stats
668.59453 * 10000
stats.linregress(years, modifiers)
df = pd.DataFrame(dict(years=years, modifiers=modifiers))
p = sns.lmplot(df, x="years", y="modifiers", legend=True)

ax = p.axes[0, 0]

# add 0.00000079 sols per Martian year

668.5907

def martian_modifier(year):
    return (.042*year/10).__floor__() * 10

martian_modifier(9200)

sote = (time() / 86400 + 117) / 1.02749125
sote

def sols(year, skip=110):
    return (year * 668 + year // 2 + year // 10 - year // skip)


era_days = sols(110)  # 73545
668.6*110
floor(365.24*4)
365.24*100
365*100

668 * 2

sols(2)  # 1337
1337 / 668
1336 / 668

sols(10)  # 6686
def get_yotc(dotc):
    return (dotc - dotc // 1336 - dotc // 6685 + dotc // 73544) // 668
get_yotc(1336)
get_yotc(1337)
get_yotc(6685)
get_yotc(6686)
get_yotc(73544)
get_yotc(73545)
def days2soty(days):
    cycle = days // 73545
    dotc = days - cycle * 73545
    yotc = (
        dotc - dotc // 1336 - dotc // 6685 + dotc // 73544
        ) // 668
    print(cycle, dotc, yotc)
    return int(yotc + cycle * 110), dotc - (
        668 * yotc + yotc // 2 + yotc // 10
        )

days2soty(sote)
days2soty(73545 * 40)

306 + 117
423 - 365
364 - 306
58 
date(1970, 1, 1) + timedelta(days=117)