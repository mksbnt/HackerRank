s = "12:01:01AM";

function timeConversion(s) {
    const am = 'AM'
    const pm = 'PM'

    if (s.includes(am)) {
        const arr = s.slice(0, s.indexOf(am)).split(':')
        arr.map(((value, index, array) => {
            console.log(value, index, array)
        }))
    } else {
        console.log('PM')
    }
}

timeConversion(s);

