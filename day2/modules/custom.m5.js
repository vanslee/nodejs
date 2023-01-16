module.exports.dateFormat = function dataFormat(dtStr) {
    const dt = new Date(dtStr)
    const y = padZero(dt.getFullYear());

    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());
    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padZero(n) {
    if (n > 9) return n;
    return '0' + n;
}
