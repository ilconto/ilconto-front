const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

export function isEmailValid(email) {
    return (email == "") ? "" : (reg.test(email)) ? true : false;
}

export function secondsToDays(utcSeconds) {
    var days = Math.floor(utcSeconds / (3600 * 24))
    var hours = Math.floor(utcSeconds / 3600 - (days * 24))
    var minutes = Math.floor(utcSeconds / 60 - days * 24 * 60 - hours * 60)

    var output = ""
    if (days) {
        output += days + " d, "
    }
    if (hours) {
        output += hours + " h, "
    }
    if (minutes) {
        output += minutes + " min, "
    }
    return output.slice(0, -2) // removing the last ", "
}

export function utcTimeToRelativeSeconds(utcSeconds) {
    var now = (new Date().getTime()) / 1000;
    return now - utcSeconds
}

export function utcTimeToRelativeDays(utcSeconds) {
    return secondsToDays(utcTimeToRelativeSeconds(utcSeconds))
}