class Pagination {
  constructor(total, limit) {
    this.total = total;
    this.limit = limit;
    this.pages = Math.ceil(this.total / this.limit);
    this.page = 0;
  }

  query() {
    const skip = this.page * this.limit;

    return {
      limit: this.limit,
      skip,
    };
  }

  hasNextPage() {
    return this.page + 1 < this.pages;
  }

  hasPrevPage() {
    return this.page - 1 >= 0;
  }

  nextPage() {
    const page = this.page + 1;

    if (page < this.pages) {
      this.page = page;
    }
  }

  prevPage() {
    const page = this.page - 1;

    if (page < 0) {
      this.page = 0;
    } else {
      this.page = page;
    }
  }
}

export default Pagination;
