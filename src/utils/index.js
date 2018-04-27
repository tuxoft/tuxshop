import dayjs from "dayjs";
import Pagination from "./Pagination";

const Utils = {
  formatDate: (date, format = "DD.MM.YYYY") => {
    if (!date) {
      return null;
    }

    return dayjs(date).format(format);
  },
  Pagination
};

export default Utils;
