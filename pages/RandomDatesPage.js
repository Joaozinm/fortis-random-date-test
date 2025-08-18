class RandomDatesPage {
  constructor(page) {
    this.page = page;
    this.totalDatesInput = page.locator("[name='num']");
    this.startDateDayInput = page.locator("[name='start_day']");
    this.startDateMonthInput = page.locator("[name='start_month']");
    this.startDateYearInput = page.locator("[name='start_year']");
    this.endDateDayInput = page.locator("[name='end_day']");
    this.endDateMonthInput = page.locator("[name='end_month']");
    this.endDateYearInput = page.locator("[name='end_year']");
    this.getDatesButton = page.locator('input[value="Get Dates"]');
    this.resultsContainer = page.locator("//*[@id='invisible']/p[2]");
    this.summaryText = page
      .locator("p")
      .filter({ hasText: "They were picked randomly out of" });
  }
}

module.exports = { RandomDatesPage };
