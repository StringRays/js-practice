const getCurrentDay = (day) => {
    switch (day) {
        case 'Sunday':
            return 6;
            break;
        case 'Monday':
            return 5;
            break;
        case 'Tuesday':
            return 4;
            break;
        case 'Wednesday':
            return 3;
            break;
        case 'Thursday':
            return 2;
            break;
        case 'Friday':
            return 1;
            break;
        case 'Saturday':
            return 0;
            break;
        default:
            return 'error';
    }
}


console.log(getCurrentDay('Wednesday'))
