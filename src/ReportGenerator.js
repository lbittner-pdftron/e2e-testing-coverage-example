/**
 * ReportGenerator - intentionally simple to prove a point:
 *
 * The e2e test only clicks "Generate Report" once, which calls generateReport().
 * That single call chains through every method below, so Istanbul reports
 * 100% coverage — even though none of the individual functions are actually tested.
 */
export class ReportGenerator {
  constructor(data) {
    this.data = data;
  }

  getTotal() {
    return this.data.reduce((sum, item) => sum + item.value, 0);
  }

  getAverage() {
    return this.getTotal() / this.data.length;
  }

  getHighest() {
    return Math.max(...this.data.map((item) => item.value));
  }

  getLowest() {
    return Math.min(...this.data.map((item) => item.value));
  }

  getCount() {
    return this.data.length;
  }

  generateReport() {
    return {
      total: this.getTotal(),
      average: this.getAverage(),
      highest: this.getHighest(),
      lowest: this.getLowest(),
      count: this.getCount(),
    };
  }
}
