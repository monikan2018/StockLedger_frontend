
import moment from "moment"

 const formatDate = function (date) {
    let mmnt = moment(date);
    return mmnt.add(1,'day').format('L');
}

module.exports = formatDate
