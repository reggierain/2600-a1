for (let i = 0; i < filmTitles.length; i++) {
    let type = "";
    if (filmDates[i] >= 2024) {
        type = "~ NEW FILM: ";
    }
    if (filmDates[i] < 2000) {
        type = "~ CLASSIC FILM: ";
    }
    console.log("### " + type + filmTitles[i] + ", " + filmDates[i] + " ###");
}
