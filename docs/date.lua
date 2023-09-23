local function replace_mon_with_season(date)
  local season_table = {
    Jan = "Winter", Feb = "Winter", Mar = "Spring",
    Apr = "Spring", May = "Spring", Jun = "Summer",
    Jul = "Summer", Aug = "Summer", Sep = "Autumn",
    Oct = "Autumn", Nov = "Autumn", Dec = "Spring"
  }
  local date = pandoc.utils.stringify(date)
  local mon = date:match("%%(%a+)%%")
  local season = season_table[mon]
  return date:gsub("%%" .. mon .. "%%", season)
end


function Meta(m)
  m.date = replace_mon_with_season(m.date)
  return m
