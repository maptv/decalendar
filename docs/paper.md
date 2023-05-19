**Paper calendar**

**Views** 

The paper calendar has 3 views of 70 weeks, always in portrait orientation, never in landscape:

-   70-week table of contents
-   5-week mode
-   1-week mode

In the app, there’s also 1-day mode, but this is not practical for the paper calendar.

**Pages**

The paper calendar contains the following pages:

-   2 blank pages (no page numbers)
-   1 70-week table of contents page
-   14 5-week mode pages
-   70 1-week mode pages
-   3 blank page (no page numbers)

90 total pages

45 sheets of paper

The 70 weeks include 9 weeks from the previous year, 52 or 53 weeks from the current year, and 9 or 8 weeks from the next year. Each week is shown 3 times: in the table of contents and the 5-week and 1-week modes. 

The table of contents is always on page 1 and provides the page numbers for each week in the 5-week and 1-week modes.

5-week mode is for whole day and multi-day events. 1-week mode is for events with times.

**Page numbers**

For page numbers:

-   Group weeks in groups of 5, index the groups starting at 2
-   Index weeks starting at 16

1: 70-week table of contents page

2-15: 5-week mode pages

16-85: 1-week mode pages

Blank pages do have page numbers.

Page numbers are in the bottom middle of each page. The table of contents does not have headers (the headers in the example below are just for me) but shows page numbers in the second column and has space for writing in the second column (rotate smartphone screen to landscape to see the example below correctly formatted):

```
Week |  pages  | start_date/final_date
 46  |  3 & 16 | 2022-11-14/20        
 52  |  4 & 22 | 2022-12-26/2023-01-01
 19  |  9 & 41 | 2023-05-08/14        
 20  |      42 |         15/21        
 21  | 10 & 43 |         22/28        
 22  |      44 |         29/06-04     
 22  |      44 |      06-05/11        
```

**White space** 

Use white space so that years and months do not repeat in start date as you move down the third column. Also, omit page numbers that are repeated from above, but do not omit any values immediately after a solid row delimiter.

Omit years [and months] in final_date if they match with the years [and months] in start_date. This is allowed by ISO 8601 and makes the table of contents more concise, but also makes the third column variable width (13-21 characters in width). Any leftover space can be used for writing (rows are filled to screen width).

I decided that the table of contents for the paper calendar should not have columns for weekdays, because this would mess up the flow of writing and not match the style of the rest of the calendar. Unlike the rest of the calendar, each week in the table of contents takes up only one row (instead of 14 in the 5-week mode and 70 in the 1-week mode).

**Row delimiters**

Solid lines separate years (below week 52 or 53). Weeks in the same year are separated by alternating dashed and dotted lines. There is no meaningful difference between dashed and dotted lines, but the first one in a year can be dashed and the second to last one in a year can be dotted (the last one will be solid). The pages and date intervals after a solid line cannot omit repeated values from above. The lines (row delimiters) go across all columns.

**Column delimiters**

The table of contents should only have column delimiters before and after the second column (page numbers). The rest of the calendar does not have any column delimiters.

The second column (page numbers) doesn’t make sense in the app and should only be included in the paper calendar. The  70-week mode in the app should have one column delimiter between week number and date interval and 7 more delimiters for the weekdays. The other modes do not have any column delimiters.
