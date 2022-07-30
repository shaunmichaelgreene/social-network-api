const formattedDate = function(createdAtVal) {
    return createdAtVal.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});
}

module.exports = formattedDate