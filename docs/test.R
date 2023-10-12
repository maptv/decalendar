date2year <- function(year = 1970, month = 1) {
    year - (month < 3)
}

date2year()

doty2year <- function(year = 1969, doty = 306) {
    year + (doty > 305)
}

doty2year()

date2doty <- function(month = 1, day = 1) {
    floor((153 * (ifelse(month > 2, month - 3, month + 9)) + 2) / 5 + day - 1)
}

date2doty()

doty2date <- function(doty = 306) {
    m <- floor((5 * doty + 2) / 153)
    c(ifelse(m < 10, m + 3, m - 9), floor(doty - (153 * m + 2) / 5 + 2))
}
doty2date()

hour2zone <- function(hour = 0) {
    ifelse(hour == 0, "Z",
        ifelse(hour > 0 && hour < 10, intToUtf8(hour + 64),
            ifelse(hour > 9 && hour < 13, intToUtf8(hour + 65),
                ifelse(hour < 0 && hour > -13, intToUtf8(abs(hour) + 77), "J")
            )
        )
    )
}

hour2zone(5)

zone2hour <- function(zone = "Z") {
    ifelse(zone == "Z", 0,
        ifelse(zone > "@" && zone < "J", utf8ToInt(zone) - 64,
            ifelse(zone > "J" && zone < "N", utf8ToInt(zone) - 65,
                ifelse(zone < "Z" && zone > "M", -(utf8ToInt(zone) - 77), zone)
            )
        )
    )
}

zone2hour("I")

time2doty <- function(hours = 1, minutes = 0, seconds = 0) {
    hours / 24 + minutes / 1440 + seconds / 86400
}

paste0(
    sprintf("%04d", date2year()), "+",
    sprintf("%03d", date2doty()), ".",
    sprintf("%05d", round(time2doty() * 1e5)),
    hour2zone()
)

doty2time <- function(doty = 1 / 24) {
    hours <- doty * 24
    floorHours <- Math.floor(hours)
    minutes <- (hours - floorHours) / 60
    floorMinutes <- Math.floor(minutes)
    c(floorHours, floorMinutes, (minutes - floorMinutes) / 60)
}


paste0(
    sprintf("%04d", doty2year()), "-",
    paste(sprintf("%02d", doty2date()), collapse = "-"), "T",
    paste(sprintf("%02d", doty2date()), collapse = ":")
)

unix2doty <- function(s = 0, ms = 0) {
  days = s / 86400 + ms / 86400000 + 719468
  era = floor(ifelse(days >= 0, days, days - 146096) / 146097)
  doe = days - era * 146097
  yoe = floor((doe - doe / 1460 + doe / 36524 - doe / 146096) / 365)
  year = yoe + era * 400
  timestamp = days - floor(year * 365 + year / 4 - year / 100 + year / 400)
  doty = floor(timestamp)
  c(year, doty, timestamp - doty)
}

ydt <- unix2doty(as.numeric(Sys.time()))

paste0(sprintf("%04d", ydt[1]),
       "+",
       sprintf("%03d", ydt[2]),
       ".",
       sprintf("%05d", round(ydt[3] * 1e5)))

Sys.timezone()
