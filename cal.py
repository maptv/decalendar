import calendar
import datetime
import pathlib


class Calendar:
    def __init__(self, start_date: str = "1970-01-01", n_days: int = 365):
        self.dates = [
            datetime.date.fromisoformat(start_date) + datetime.timedelta(days=d)
            for d in range(n_days)
        ]
        self.year_months = sorted(list(set((d.year, d.month) for d in self.dates)))
        self.months = [
            list(calendar.Calendar().itermonthdates(*ym)) for ym in self.year_months
        ]
        self.month_dates = sorted(list(set(d for m in self.months for d in m)))
        self.weeks = list(zip(*[iter(self.month_dates)] * 7))
        self.__head = (
            "<!DOCTYPE html>\n<html>\n\n<head>\n\t"
            '<link rel="stylesheet" href="cal.css">\n'
            "</head>\n\n<body>\n\t<main>\n\t\t"
        )
        self.__foot = "\n\t\t\t</reference>\n\t\t</pages>\n\t</main>\n</body>\n\n</html>"

    def __str__(self):
        return f"{self.dates[0].isoformat()} to {self.dates[-1].isoformat()}"

    def __repr__(self):
        return f"Calendar(start_date={self.dates[0]}, n_days={len(self.dates)})"

    def write_times(self):
        for page, week in enumerate(self.weeks):
            html_list = []
            for i, d in enumerate(week):
                if i and d.strftime("%G") == week[i-1].strftime("%Y"):
                    date1 = d.strftime('W%V-%u')
                else:
                    date1 = d.strftime('%G-W%V-%u')
                if d.strftime("%Y") == d.strftime("%G"):
                    date2 = d.strftime("%m-%d")
                else:
                    date2 = d.strftime("%Y-%m-%d")
                html_list.append(
                    "<day class='underline'>\n\t\t\t"
                    f"<date>{date1}&nbsp&nbsp;</date>\n\t\t\t"
                    "<blank></blank>\n\t\t\t"
                    f"<date>{date2}&nbsp&nbsp;</date>\n\t\t\t"
                    "<blank></blank>\n\t\t\t"
                    f"<date>{d.strftime('%j')}.000</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>125</time>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>250</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>375</time>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>500</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>625</time>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>750</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>875</time>\n\t\t</day>\n\t\t"
                )
            pathlib.Path(
                f"{week[0].isoformat()}_{week[-1].isoformat()}_week.html"
            ).write_text(
                self.__head
                + "".join(html_list)
                + f"<pages><current>{page + 1}</current>"
                + f"<reference>{71 + (page + 1) // 5}"
                + self.__foot
                )
        return self

    def write_dates(self):
        for page, weeks in enumerate(list(zip(*[iter(self.month_dates)] * 35))):
            html_list = []
            for i, d in enumerate(weeks):
                if i and d.strftime("%G") == weeks[i-1].strftime("%Y"):
                    date1 = d.strftime('W%V-%u')
                else:
                    date1 = d.strftime('%G-W%V-%u')
                if d.strftime("%Y") == d.strftime("%G"):
                    date2 = d.strftime("%m-%d")
                else:
                    date2 = d.strftime("%Y-%m-%d")
                bottom_left = "<date>" if d.strftime("%u") != "7" else "<date class='underline'>"
                html_list.append(
                    "<day>\n\t\t\t"
                    + f"<date>{date1}&nbsp&nbsp;</date>\n\t\t\t"
                    + "<dashed></dashed>\n\t\t\t"
                    + bottom_left
                    + f"{date2}&nbsp&nbsp;</date>\n\t\t\t"
                    + "<solid></solid>\n\t\t"
                    + "</day>\n\t\t"
            )
            pathlib.Path(
                f"{weeks[0].isoformat()}_{weeks[-1].isoformat()}_month.html"
            ).write_text(
                self.__head + "".join(html_list)
                + f"\n\t\t<pages>\n\t\t\t<current>{page + 71}</current>"
                + f"<reference>{(page * 5 + 1)}-{(page * 5 + 5)}"
                + self.__foot
                )
        return self


if __name__ == "__main__":
    cal = Calendar("2023-10-30", n_days=490)
    cal.write_times()
    cal.write_dates()
