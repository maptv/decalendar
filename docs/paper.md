**Paper calendar**

**Views** 

The paper calendar has 3 views of 70 weeks, always in portrait orientation, never in landscape:

-   70-week table of contents
-   5-week mode
-   1-week mode

In the app, there’s also 1-day mode, but this is not practical for the paper calendar.

**Pages**

The paper calendar contains the following pages:

-   3 blank pages (no page numbers)
-   70 1-week mode pages
-   14 5-week mode pages
-   1 70-week table of contents page
-   2 blank page (no page numbers)

90 total pages

45 sheets of paper

The 70 weeks include 9 weeks from the previous year, 52 or 53 weeks from the current year, and 9 or 8 weeks from the next year. Each week is shown 3 times: in the table of contents and the 5-week and 1-week modes. 

The table of contents is always on page 1 and provides the page numbers for each week in the 5-week and 1-week modes.

5-week mode is for whole day and multi-day events. 1-week mode is for events with times.

**Page numbers**

For page numbers:

-   Index weeks starting at 1
-   Group weeks in groups of 5, index the groups starting at 71


1-70: 1-week mode pages
71-84: 5-week mode pages
85: 70-week table of contents page

Blank pages do have page numbers.

Page numbers are in the bottom middle of each page. The table of contents does not have headers (the headers in the example below are just for me) but shows 5-week view page numbers in the third column and has space for writing to the right of the fourth column:

```
  # | Week | Group | start_date/final_date 
  1 |  44  |  71   | 2023-10-30/11-05    
  2 |  45  |  71   |      11-06/12        
  3 |  46  |  71   |         13/19        
  4 |  47  |  71   |         20/26               
  5 |  48  |  71   |         27/12-03    
  6 |  49  |  72   |      12-04/10              
  7 |  50  |  72   |      12-11/17
  8 |  51  |  72   |      12-18/24
  9 |  52  |  72   |      12-25/31
 10 |  01  |  72   | 2024-01-01/07               
 11 |  02  |  73   |         08/14        
 12 |  03  |  73   |         15/21              
 13 |  04  |  73   |         22/28                          
 14 |  05  |  73   |         29/02-04                       
 15 |  06  |  73   |      02-05/02-11
```

**White space**

In the table of contents, use white space so that years and months do not repeat in start date as you move down the fourth column. This is similar to the approach for omitting values in the 1-week and 5-week views.

Change from 2023 calendar: Do not repeat years in the 1-week and 5-week views. For example, here is the first page of each mode:

1-week mode
```
2023-10-30
     W44-1
     303.000
         125
         250
         375
         500
         625
         750
         875
     10-31
     W44-2
     304.000
         125
         250
         375
         500
         625
         750
         875
     11-01    
     W44-3
     305.000
         125
         250
         375
         500
         625
         750
         875
     11-02    
     W44-4
     306.000
         125
         250
         375
         500
         625
         750
         875
     11-03    
     W44-5
     307.000
         125
         250
         375
         500
         625
         750
         875
     11-04    
     W44-6
     308.000
         125
         250
         375
         500
         625
         750
         875
     11-05    
     W44-7
     309.000
         125
         250
         375
         500
         625
         750
         875
```

5-week mode

```
2023-10-30
     W44-1
     10-31
     W44-2
     11-01    
     W44-3
     11-02    
     W44-4
     11-03    
     W44-5
     11-04    
     W44-6
     11-05    
     W44-7
     11-06
     W45-1
     11-07
     W45-2
     11-08    
     W45-3
     11-09    
     W45-4
     11-10    
     W45-5
     11-11    
     W45-6
     11-12    
     W45-7
     11-13
     W46-1
     11-14
     W46-2
     11-15    
     W46-3
     11-16    
     W46-4
     11-17    
     W46-5
     11-18    
     W46-6
     11-19    
     W46-7
     11-20
     W47-1
     11-21
     W47-2
     11-22    
     W47-3
     11-23    
     W47-4
     11-24    
     W47-5
     11-25    
     W47-6
     11-26    
     W47-7
     11-27
     W48-1
     11-28
     W48-2
     11-29    
     W48-3
     11-30    
     W48-4
     12-01    
     W48-5
     12-02    
     W48-6
     12-03    
     W48-7
```


In the table of contents, omit years [and months] in final_date if they match with the years [and months] in start_date. This is allowed by ISO 8601 and makes the table of contents more concise, but also makes the fourth column variable width (13-21 characters in width). Any leftover space can be used for writing (rows are filled to screen width).

I decided that the table of contents for the paper calendar should not have columns for weekdays, because this would mess up the flow of writing and not match the style of the rest of the calendar. Unlike the rest of the calendar, each week in the table of contents takes up only one row (instead of 14 in the 5-week mode and 70 in the 1-week mode).

**Row delimiters**

In the table of contents, solid lines that go across all columns separate two 5-week groups at a time. Groups are named after the page numbers they appear on (71-84). Each group of two can be viewed at the same time on each pair of pages, e.g. 71 and 72, thanks to the 3 blank pages at the beginning. In the table of contents, rows are separated by alternating dashed and solid lines that start after the date interval column. There is no meaningful difference between the dashed and solid lines within a year, just like the row delimiters that separate times in the week view, but the first row delimiter in a group pair should both be dashed, so that an alternating pattern can be maintained. This will not work if there are 53 weeks in the year, in which case a solid line can be repeated twice. The two solid lines will not be identical because the first will start after the date interval column and the second will go across all columns.

**Column delimiters**

The table of contents should only have column delimiters before and after the second column (page numbers). The rest of the calendar does not have any column delimiters.

The second column (page numbers) doesn’t make sense in the app and should only be included in the paper calendar. The  70-week mode in the app should have one column delimiter between week number and date interval and 7 more delimiters for the weekdays. The other modes do not have any column delimiters.
