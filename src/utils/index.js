import dayjs from "dayjs";

const Utils = {
  formatDate: (date, format = "DD.MM.YYYY") => {
    if (!date) {
      return null;
    }

    return dayjs(date).format(format);
  },
};

export default Utils;
