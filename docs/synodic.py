import pandas as pd

s = pd.read_csv(
    "synodic_month_raw.csv",
    names=[
        "year",
        "month",
        "dotm",
        "time",
        "synodic_days",
        "synodic_time",
        "synodic_diff",
        "degrees",
    ],
    index_col=False,
)
s = pd.concat(
    [
        s,
        s["synodic_time"]
        .str.replace("m", "")
        .str.split("h", expand=True)
        .rename({0: "hour", 1: "minute"}, axis=1),
    ],
    axis=1,
)
s["hour"] = s["hour"].astype(int)
s["minute"] = s["minute"].replace("", 0).astype(int)
s["day"] = s["hour"] / 24 + s["minute"] / 1440 + 29
s.to_csv("synodic_month_day.csv")
1 + 1 / s["day"].mean()

s.loc[s["year"] < 2500, "day"].mean()
s["day"].mean()
29.53023507695045 / 1.0338635976785888 
1 / 1.0338635976785888 
29.53023507695045 / 1.0338635976785888 - 28.5625
365.242374 / 1.0338635976785888
1/(29.53023507695045 / 1.0338635976785888 - 28.5625)
s.tail()