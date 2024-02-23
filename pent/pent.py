import pathlib

class Calendar:
    def __init__(self):
        self.__head = (
            "<!DOCTYPE html>\n<html>\n\n<head>\n\t"
            '<link rel="stylesheet" href="pent.css">\n'
            "</head>\n\n<body>\n\t<main>\n\t\t"
        )
        self.__foot = "\n\t\t</pages>\n\t</main>\n</body>\n\n</html>"
        self.pents = list(zip(*[iter(range(0, 365))] * 5))
        self.deks = list(zip(*[iter(range(0, 360))] * 10))

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
                f"{page:02}_{pent[0]:03}_{pent[-1]:03}_pent.html"
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
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                )
            html_list_right.append(
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='dek-label'>{dek_label}</li>\n\t\t\t\t"
                )
        html_list_left.append(
            "<li class='dek-label'>36</li>\n\t\t\t\t"
            "<li class='cell'>&nbsp</li>\n\t\t\t\t"
            "<li class='cell'>&nbsp</li>\n\t\t\t\t"
            "<li class='cell'>&nbsp</li>\n\t\t\t\t"
            "<li class='cell'>&nbsp</li>\n\t\t\t\t"
            "<li class='cell'>&nbsp</li>\n\t\t\t\t"
            )
        html_list_right.append(
            "<li class='dashed'>&nbsp</li>\n\t\t\t\t"
            "<li class='noborder'>year % 4 &equals; 0 &and; (year % 100 &ne; 0 &or; year % 400 &equals; 0)</li>\n\t\t\t\t"
            "<li class='dek-label'>36</li>\n\t\t\t\t"
            )
        for dek in range(3):
            dek_label = f"{dek:02}"
            html_list_left.append(
                f"<li class='dek-label'>{dek_label}</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                )
            html_list_right.append(
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                "<li class='cell'>&nbsp</li>\n\t\t\t\t"
                f"<li class='dek-label'>{dek_label}</li>\n\t\t\t\t"
                )
        for i in range(8):
            pathlib.Path(
                f"{i * 2 + 73}_{5 * i}-{5 * i + 5}_"
                "left_year_grid.html"
            ).write_text(
                self.__head + after_header_left
                + "".join(html_list_left[5 * i:5 * i + 5])
                + before_footer
                + "\n\t\t<pages>\n\t\t\t<current>"
                + f"{i * 2 + 73}</current>"
                + self.__foot
                )
            pathlib.Path(
                f"{i * 2 + 74}_{5 * i}-{5 * i + 5}_"
                "right_year_grid.html"
            ).write_text(
                self.__head + after_header_right
                + "".join(html_list_right[5 * i:5 * i + 5])
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
