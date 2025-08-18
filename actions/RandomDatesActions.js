const { RandomDatesPage } = require("../pages/RandomDatesPage");

class RandomDatesActions {
  constructor(page) {
    this.page = page;
    this.pageObj = new RandomDatesPage(page);
  }

  async generateDates(testData) {
    const { count, startDate, endDate } = testData;
    await this.page.goto("/calendar-dates/");
    // Select the total number of random dates
    await this.pageObj.totalDatesInput.fill(String(count));
    // Set start date and end date
    await this.pageObj.startDateDayInput.selectOption(startDate.day);
    await this.pageObj.startDateMonthInput.selectOption(startDate.month);
    await this.pageObj.startDateYearInput.selectOption(startDate.year);
    await this.pageObj.endDateDayInput.selectOption(endDate.day);
    await this.pageObj.endDateMonthInput.selectOption(endDate.month);
    await this.pageObj.endDateYearInput.selectOption(endDate.year);
    await this.pageObj.getDatesButton.click();
  }
}

module.exports = { RandomDatesActions };
