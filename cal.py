import datetime
import pathlib


class Calendar:
    def __init__(self, start_date: str = "1970-01-01", n_days: int = 365):
        self.dates = [
            datetime.date.fromisoformat(start_date) + datetime.timedelta(days=d)
            for d in range(n_days)
        ]
        self.weeks = list(zip(*[iter(self.dates)] * 7))
        self.__head = (
            "<!DOCTYPE html>\n<html>\n\n<head>\n\t"
            '<link rel="stylesheet" href="cal.css">\n'
            "</head>\n\n<body>\n\t<main>\n\t\t"
        )
        self.__foot = "\n\t\t</pages>\n\t</main>\n</body>\n\n</html>"

    def __str__(self):
        return f"{self.dates[0].isoformat()} to {self.dates[-1].isoformat()}"

    def __repr__(self):
        return f"Calendar(start_date={self.dates[0]}, n_days={len(self.dates)})"

    def write_times(self):
        for page, week in enumerate(self.weeks):
            html_list = []
            for i, d in enumerate(week):
                if i and d.strftime("%G") == week[i-1].strftime("%Y"):
                    date1 = d.strftime('W%V%u')
                else:
                    date1 = d.strftime('%GW%V%u')
                if d.strftime("%Y") == d.strftime("%G"):
                    date2 = d.strftime("%m%d")
                else:
                    date2 = d.strftime("%Y%m%d")
                date3 = (153 * (
                    d.month - 3 if d.month > 2 else d.month + 9
                ) + 2) // 5 + d.day - 1
                date4 = date3 - 365 - (
                    d.year % 4 == 0 and d.year % 100 != 0 or d.year % 400 == 0
                ) + (d.month > 2) # temporary hack
                html_list.append(
                    "<day class='solid wider'>\n\t\t\t"
                    f"<date>{date1}</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    f"<date>{date2}</date>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    f"<date>+{date3:03}</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    f"<date>{date4:04}</date>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t</day>\n\t\t"
                )
            pathlib.Path(
                f"{page + 1:02}_{week[0].isoformat()}_{week[-1].isoformat()}_week.html"
            ).write_text(
                self.__head
                + "".join(html_list)
                + f"<pages><current>{page + 1}</current>"
                + f"<reference>{71 + page // 5}\n\t\t\t</reference>"
                + self.__foot
                )
        return self

    def write_dates(self):
        for page, five_weeks in enumerate(list(zip(*[iter(self.dates)] * 35))):
            html_list = []
            for i, d in enumerate(five_weeks):
                if i and d.strftime("%G") == five_weeks[i-1].strftime("%Y"):
                    date1 = d.strftime('W%V-%u')
                else:
                    date1 = d.strftime('%G-W%V-%u')
                if d.strftime("%Y") == d.strftime("%G"):
                    date2 = d.strftime("%m-%d")
                else:
                    date2 = d.strftime("%Y-%m-%d")
                bottom_left = "<date>" if d.strftime("%u") != "7" else "<date class='solid'>"
                html_list.append(
                    "<day>\n\t\t\t"
                    + f"<date>{date1}</date>\n\t\t\t"
                    + "<dashed></dashed>\n\t\t\t"
                    + bottom_left
                    + f"{date2}</date>\n\t\t\t"
                    + "<solid></solid>\n\t\t"
                    + "</day>\n\t\t"
            )
            pathlib.Path(
                f"{page + 71:02}_{five_weeks[0].isoformat()}_{five_weeks[-1].isoformat()}_month.html"
            ).write_text(
                self.__head + "".join(html_list)
                + f"\n\t\t<pages>\n\t\t\t<current>{page + 71}</current>"
                + f"<reference>{(page * 5 + 1)}-{(page * 5 + 5)}\n\t\t\t</reference>"
                + self.__foot
                )
        return self

    def write_toc(self):
        html_list = []
        for i, week in enumerate(self.weeks):
            date1 = week[0].strftime("%V")
            date2 = week[0].strftime("%Y-%m-%d")
            current_page = 71 + i // 5
            toc_class = "class='solid'" if (i + 1) % 5 == 0 else ""
            last_class = "" if (i + 1) % 5 == 0 else "class='solid'"
            if i != 0:
                same_year = week[0].strftime("%Y") == self.weeks[i-1][0].strftime("%Y")
                same_month = week[0].strftime("%m") == self.weeks[i-1][0].strftime("%m")
                if same_year and same_month:
                    date2 = week[0].strftime("%d")
                elif same_year:
                    date2 = week[0].strftime("%m-%d")
                previous_page = 71 + (i-1) // 5
                if current_page == previous_page:
                    current_page = "&nbsp;"
            html_list.append(
                f"<toc {toc_class}>\n\t\t\t"
                f"<column>{i + 1}</column><column>{current_page}</column>"
                f"<column>{date1}</column>\n\t\t\t"
                f"<last>{date2}</last>\n\t\t\t"
                f"<last {last_class}></last>\n\t\t"
                "</toc>\n\t\t"
            )
        pathlib.Path(
            f"85_{self.weeks[0][0].isoformat()}_{self.weeks[-1][-1].isoformat()}_toc.html"
        ).write_text(
            self.__head + "".join(html_list)
            + "\n\t\t<pages>\n\t\t\t<current>85</current>"
            + self.__foot
            )
        return self


if __name__ == "__main__":
    cal = Calendar("2024-01-01", n_days=490)
    cal.write_times()
    cal.write_dates()
    cal.write_toc()
