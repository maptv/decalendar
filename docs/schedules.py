# %% [markdown]
# ---
# title: Weekly and Pently Schedule Comparison
# author: Martin Laptev
# date: 2023+217
# ---

# %%
#| tags: [fig-schedules]
#| label: fig-schedules
#| fig-cap: "Marginal distributions of bill dimensions"
#| fig-subcap:
#|   - "Gentoo penguins tend to have thinner bills,"
#|   - "and Adelie penguins tend to have shorter bills."
#| fig-alt:
#|   - "Density plot of bill depth by species."
#|   - "Density plot of bill length by species."
#| layout-ncol: 2
import pandas as pd

ax = pd.DataFrame(
    {
        "Days": ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        "Evening rest": [7 / 24] * 5 + [0] * 2,
        "Work": [1 / 3] * 5 + [0] * 2,
        "Morning rest": [3 / 8] * 5 + [1] * 2,
    }
).set_index("Days").plot.bar(
    stacked=True,
    color=["blue", "crimson", "blue"],
    title="Weekly schedule",
    fontsize=15,
    legend=False,
    xlabel="Days of the week",
    ylabel="Proportion of the day",
    rot=0,
    width=.8,
)
ax.invert_yaxis()
ax.legend(['Rest', 'Work'], bbox_to_anchor=(1.2, 0.6))

for c in ax.containers:
    labels = [round(v.get_height(), 3) if v.get_height() > 0 else '' for v in c]
    labels = [str(l)[1:] for l in labels if l != 1]
    ax.bar_label(c, labels=labels, label_type='center', color="white", fontsize=15);

ax = pd.DataFrame(
    {
        "Days": ["0\n5", "1\n6", "2\n7", "3\n8", "4\n9"],
        "Evening rest": [0.3] * 3 + [0] * 2,
        "Work": [0.4] * 3 + [0] * 2,
        "Morning rest": [0.3] * 3 + [1] * 2,
    }
).set_index("Days").plot.bar(
    stacked=True,
    color=["blue", "crimson", "blue"],
    title="Dekly schedule",
    fontsize=15,
    legend=False,
    xlabel="Days of the dek",
    ylabel="Proportion of the day",
    rot=0,
    width=.8,
)
ax.invert_yaxis()
ax.legend(['Rest', 'Work'], bbox_to_anchor=(1.2, 0.6))

for c in ax.containers:
    labels = [round(v.get_height(), 1) if v.get_height() > 0 else '' for v in c]
    labels = [str(l)[1:] for l in labels if l != 1]
    ax.bar_label(c, labels=labels, label_type='center', color="white", fontsize=18);
