function checkLifeSpan (hoursUsed) {
    const maxLifeSpan = 1000;
    if (typeof hoursUsed != number) { return "please enter valid number" } 
    else if (hoursUsed < 800) { return "suit in working condition." }
    else if (hoursUsed >= 800 && hoursUsed < maxLifeSpan) { return "suit needs replacement soon." }
    else if (hoursUsed >= maxLifeSpan) { return "suit is no longer safe to use."}
}