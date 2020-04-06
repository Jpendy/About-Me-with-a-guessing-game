
function isYes(text) {
    text = text.toLowerCase();
    if (text === 'y') {
        return true;
    }
    else if (text === 'yes') {
        return true;
    }
    else {
        return false;
    }
}


export default isYes;