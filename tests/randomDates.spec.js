const { test, expect } = require("@playwright/test");
const { RandomDatesActions } = require("../actions/RandomDatesActions");
const { RandomDatesPage } = require("../pages/RandomDatesPage");
const { isBetween } = require("../utils/dateUtils");

test.describe("Random.org Calendar Date Generator", () => {
  let actions;
  let pageObj;

  const testData = {
    count: 4,
    startDate: { day: "5", month: "January", year: "2024" },
    endDate: { day: "25", month: "November", year: "2025" },
    expectedStartDate: "2024-01-05",
    expectedEndDate: "2025-11-25",
  };

  test.beforeEach(async ({ page }) => {
    actions = new RandomDatesActions(page);
    pageObj = new RandomDatesPage(page);
  });

  test("should generate the correct number of dates within the specified range", async ({
    page,
  }) => {
    await actions.generateDates(testData);

    // 1. Assert that the correct number of dates was generated
    await expect(pageObj.resultsContainer).toBeVisible();
    const datesText = await pageObj.resultsContainer.innerText();
    const dateArray = datesText.trim().split("\n");
    expect(dateArray.length).toBe(testData.count);

    // 2. Assert that each date is within the expected range
    for (const dateStr of dateArray) {
      const isDateInRange = isBetween(
        dateStr,
        testData.expectedStartDate,
        testData.expectedEndDate
      );

      expect(
        isDateInRange,
        `Date ${dateStr} should be between ${testData.expectedStartDate} and ${testData.expectedEndDate}`
      ).toBeTruthy();
    }

    // 3. Assert that the summary text contains the correct date range
    await expect(pageObj.summaryText).toContainText(testData.expectedStartDate);
    await expect(pageObj.summaryText).toContainText(testData.expectedEndDate);
  });
});
