function pickRandomActivity () {
    const dailyActivities = [
        "Clean Solar Panel",
        "Video Chat with Houston",
        "Hydrate Space Food",
        "Take Earth Picture",
        "Learn Russian"
    ] 

    let randomIndex = Math.random() * dailyActivities.length;
    let randomActivity = Math.floor(randomIndex);
    return dailyActivities[randomActivity];
}

print("Todays activity is: " + pickRandomActivity());
