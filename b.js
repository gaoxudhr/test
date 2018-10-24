
function sw( pin) {
    var high = 0;
    var low = 0;
    var group = pin[0];
    if (pin.length == 2) {
        var index = pin[1];
    } else if (pin.length == 3) {
        var index = pin[1] + pin[2];
    } else {
        console.log("GPIO PIN INPUT ERROE");
        return 0;
    }
    switch (group) {
        case 'A':
            high = 0;
            break;
        case 'a':
            high = 0;
            break;
        case 'B':
            high = 1;
            break;
        case 'b':
            high = 1;
            break;
        case 'C':
            high = 2;
            break;
        case 'c':
            high = 2;
            break;
        case 'D':
            high = 3;
            break;
        case 'd':
            high = 3;
            break;
        case 'E':
            high = 4;
            break;
        case 'e':
            high = 4;
            break;
        case 'F':
            high = 5;
            break;
        case 'f':
            high = 5;
            break;
        case 'G':
            high = 6;
            break;
        case 'g':
            high = 6;
            break;
        default:
            console.log("GPIO PIN INPUT ERROE");
            return 0;
    }
    low = Number.parseInt(index);
    console.log(Buffer.from([high << 4 | low]));
}

