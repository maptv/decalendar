import pathlib

class Calendar:
    def __init__(self, start: int = 0, stop: int = 365):
        self.start = start
        self.stop = stop
        self.range = range(start, stop)
        self.__head = (
            "<!DOCTYPE html>\n<html>\n\n<head>\n\t"
            '<link rel="stylesheet" href="pent.css">\n'
            "</head>\n\n<body>\n\t<main>\n\t\t"
        )
        self.__foot = "\n\t\t</pages>\n\t</main>\n</body>\n\n</html>"
        self.pents = list(zip(*[iter(self.range)] * 5))
        self.deks = list(zip(*[iter(self.range)] * 10))

    def __str__(self):
        return f"Day {self.start} to Day {self.stop - 1}"

    def __repr__(self):
        return f"Calendar(start={self.start}, stop={self.stop - 1})"

    def write_lists(self):
        for page, pent in enumerate(self.pents):
            html_list = []
            for d in pent:
                html_list.append(
                    "<day class='solid wider'>\n\t\t\t"
                    f"<date>{d:03}</date>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
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
                    "<time>&nbsp</time>\n\t\t\t"
                    "<solid></solid>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t\t"
                    "<dashed></dashed>\n\t\t\t"
                    "<time>&nbsp</time>\n\t\t</day>\n\t\t"
                )
            pathlib.Path(
                f"{page:02}_{pent[0]:03}_{pent[-1]:03}_week.html"
            ).write_text(
                self.__head
                + "".join(html_list)
                + f"<pages><current>{page}</current>"
                + self.__foot
                )
        return self


    def write_grid(self):
        after_header_left = """<div class="calendar-wrapper">
            <ol class="left">
                <li class='pent-label'>&nbsp</li>
                <li class='pent-label'>0</li>
                <li class='pent-label'>1</li>
                <li class='pent-label'>2</li>
                <li class='pent-label'>3</li>
                <li class='pent-label'>4</li>\n\t\t\t"""
        after_header_right = """<div class="calendar-wrapper">
            <ol class="right">
                <li class='pent-label'>5</li>
                <li class='pent-label'>6</li>
                <li class='pent-label'>7</li>
                <li class='pent-label'>8</li>
                <li class='pent-label'>9</li>
                <li class='pent-label'>&nbsp</li>\n\t\t\t"""
        before_footer = "</ol>\n\t\t</div>"
        html_list_left = []
        html_list_right = []
        for dek in self.deks:
            dek_label = f"{dek[0]:03}"[:2]
            html_list_left.append(
                f"<li class='dek-label'>{dek_label}</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                )
            html_list_right.append(
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='dek-label'>{dek_label}</li>\n\t\t\t\t"
                )
        for i in range(6):
            pathlib.Path(
                f"{i * 2 + 73}_{6 * i}-{6 * i + 6}_"
                "left_year_grid.html"
            ).write_text(
                self.__head + after_header_left
                + "".join(html_list_left[6 * i:6 * i + 6])
                + before_footer
                + "\n\t\t<pages>\n\t\t\t<current>"
                + f"{i * 2 + 73}</current>"
                + self.__foot
                )
            pathlib.Path(
                f"{i * 2 + 74}_{6 * i}-{6 * i + 6}_"
                "right_year_grid.html"
            ).write_text(
                self.__head + after_header_right
                + "".join(html_list_right[6 * i:6 * i + 6])
                + before_footer
                + "\n\t\t<pages>\n\t\t\t<current>"
                + f"{i * 2 + 74}</current>"
                + self.__foot
                )
        return self


if __name__ == "__main__":
    cal = Calendar()
    cal.write_lists()
    cal.write_grid()
