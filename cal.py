import datetime
import pathlib


class DecalendarDate:
    """Convert a datetime object into a DecalendarDate object
    
    Examples:
    >>> dd = DecalendarDate(datetime.date(2000, 3, 1))
    >>> dd.year_date()
    '2000+000'
    >>> dd.year_date(False)
    '2001-365'
    >>> dd.cycle_date()
    '5+000000'
    >>> dd.cycle_date(False)
    '6-146097'
    """
    def __init__(self, date: datetime.date = datetime.date.today()):
        self.year = date.year - (date.month < 3)
        self.day_of_the_year = (153 * (
            date.month - 3 if date.month > 2 else date.month + 9
            ) + 2) // 5 + date.day - 1
        self.solar_cycle = (
            self.year if self.year >= 0 else self.year - 399
            ) // 400
        self.year_of_the_cycle = self.year - self.solar_cycle * 400
        self.day_of_the_cycle = (
            self.year_of_the_cycle * 365 + self.year_of_the_cycle // 4
            - self.year_of_the_cycle // 100 + self.day_of_the_year
        )
        self.days_left_in_cycle = 146097 - self.day_of_the_cycle
        self.day_of_the_era = self.solar_cycle * 146097 + self.day_of_the_cycle
        self.leap = (self.year + 1) % 4 == 0 and (
            (self.year + 1) % 100 != 0 or (self.year + 1) % 400 == 0
            )
        self.days_left_in_year = 365 + self.leap - self.day_of_the_year

    def year_date(self, positive: bool = True):
        return (
            f"{self.year:04}+{self.day_of_the_year:03}"
            if positive else
            f"{self.year + 1:04}-{self.days_left_in_year:03}" 
        )

    def cycle_date(self, positive: bool = True):
        if self.solar_cycle > 9:
            return (
                f"{chr(55 + self.solar_cycle)}+{self.day_of_the_year:06}"
                if positive else
                f"{chr(56 + self.solar_cycle)}-{self.days_left_in_cycle:06}" 
            )
        else:
            return (
                f"{self.solar_cycle}+{self.day_of_the_cycle:06}"
                if positive else
                f"{self.solar_cycle + 1}-{self.days_left_in_cycle:06}" 
            )

    def __str__(self):
        return f"{self.year:04}+{self.day_of_the_year:03}"

    def __repr__(self):
        return f"DecalendarDate(year={self.year}, doty={self.day_of_the_year})"

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

    def write_lists(self):
        for page, week in enumerate(self.weeks):
            html_list = []
            for d in week:
                dd = DecalendarDate(d)
                html_list.append(
                    "<day class='solid wider'>\n\t\t\t"
                    f"<date>{d.strftime('%GW%V%u')}</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    f"<date>{d.strftime("%Y%m%d")}</date>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    f"<date>{dd.year_date()}</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    f"<date>{dd.year_date(False)}</date>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    f"<date>{dd.cycle_date()}</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    f"<date>{dd.cycle_date(False)}</date>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    f"<date>{dd.day_of_the_era}</date>\n\t\t\t"
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
                + self.__foot
                )
        return self


    def write_grid(self):
        html_list = []
        after_header = """<div class="calendar-wrapper">
            <ol class="calendar">
                <li class="dotw">0</li>
                <li class="dotw">1</li>
                <li class="dotw">2</li>
                <li class="dotw">3</li>
                <li class="dotw">4</li>
                <li class="dotw">5</li>
                <li class="dotw">6</li>\n\t\t\t"""
        before_footer = "</ol>\n\t\t</div>"
        for i, date in enumerate(self.dates):
            dd = DecalendarDate(date)
            month = chr(55 + date.month) if date.month > 9 else date.month
            doty = (
                f"{date.strftime("%Y%m%d")}<br>{dd.year_date()}"
                if dd.day_of_the_year == 0
                else f"{month}{date.day:02}<br>{dd.day_of_the_year:03}"
            )
            if i == 0:
                html_list.append(
                    f"\t<li style='grid-column-start: {date.isoweekday() - 1};'"
                    f">{doty}</li>\n\t\t\t\t"
                )
            else:
                html_list.append(
                    f"<li>{doty}</li>\n\t\t\t\t"
                )
        d1 = len(html_list) // 10
        for i in range(1, 11):
            pathlib.Path(
                f"{len(self.weeks) + i}_{self.dates[0].isoformat()}_"
                f"{self.dates[-1].isoformat()}_year-grid.html"
            ).write_text(
                self.__head + after_header
                + "".join(html_list[d1 * (i - 1):d1 * i])
                + before_footer 
                + "\n\t\t<pages>\n\t\t\t<current>"
                + f"{len(self.weeks) + i}</current>"
                + self.__foot
                )
        return self


if __name__ == "__main__":
    cal = Calendar("2024-02-05", n_days=420)
    cal.write_lists()
    cal.write_grid()
