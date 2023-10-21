# %% [markdown]
# ---
# title: Weekly and Pently Schedule Comparison
# author: Martin Laptev
# date: now
# date-format: x
# filters:
#   - date.lua
# ---

# %%
import matplotlib.pyplot as plt

plt.rcParams.update(
    {
        "text.color": "black",
        "axes.facecolor": "white",
        "axes.edgecolor": "lightgray",
        "axes.labelcolor": "white",
        "legend.labelcolor": "white",
        "legend.edgecolor": "lightgray",
        "legend.facecolor": "black",
        "xtick.color": "white",
        "ytick.color": "white",
        "legend.fontsize": "x-large",
        "axes.labelsize": "x-large",
        "figure.facecolor": "black",
        "figure.edgecolor": "black",
        "savefig.facecolor": "black",
        "savefig.edgecolor": "black",
    }
)

# %%
# | tags: [fig-schedules]
# | label: fig-schedules
# | fig-cap: "Weekly and pently schedule comparison"
# | fig-cap-location: margin
# | fig-subcap:
# |   - "Proportion of the day spent working and resting every day of the week"
# |   - "Proportion of the day spent working and resting every day of the pent"
# | fig-alt:
# |   - "Bar chart showing work in red and rest in blue across 7 days"
# |   - "Bar chart showing work in red and rest in blue across 5 days"
# | layout-ncol: 2
import pandas as pd

ax = (
    pd.DataFrame(
        {
            "Days": ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
            "Evening rest": [7 / 24] * 5 + [0] * 2,
            "Work": [1 / 3] * 5 + [0] * 2,
            "Morning rest": [3 / 8] * 5 + [1] * 2,
        }
    )
    .set_index("Days")
    .plot.bar(
        stacked=True,
        color=["blue", "crimson", "blue"],
        title="Weekly schedule",
        fontsize=15,
        legend=False,
        xlabel="Days of the week",
        ylabel="Proportion of the day",
        rot=0,
        width=0.8,
    )
)
ax.invert_yaxis()
ax.legend(["Rest", "Work"], loc="upper right")
ax.patch.set_alpha(0)

for c in ax.containers:
    labels = [round(v.get_height(), 3) if v.get_height() > 0 else "" for v in c]
    labels = [str(l)[1:] for l in labels if l != 1]
    ax.bar_label(c, labels=labels, label_type="center", color="white", fontsize=15)

ax = (
    pd.DataFrame(
        {
            "Days": ["0 or 5", "1 or 6", "2 or 7", "3 or 8", "4 or 9"],
            "Evening rest": [0.3] * 3 + [0] * 2,
            "Work": [0.4] * 3 + [0] * 2,
            "Morning rest": [0.3] * 3 + [1] * 2,
        }
    )
    .set_index("Days")
    .plot.bar(
        stacked=True,
        color=["blue", "crimson", "blue"],
        title="Pently schedule",
        fontsize=15,
        legend=False,
        xlabel="Days of the dek",
        ylabel="Proportion of the day",
        rot=0,
        width=0.8,
    )
)
ax.invert_yaxis()
ax.legend(["Rest", "Work"], loc="upper right")
ax.patch.set_alpha(0)

for c in ax.containers:
    labels = [round(v.get_height(), 1) if v.get_height() > 0 else "" for v in c]
    labels = [str(l)[1:] for l in labels if l != 1]
    ax.bar_label(c, labels=labels, label_type="center", color="white", fontsize=18)
