import { AnalyticsDashboard } from '../../pages/analyticsDashboard.page';

describe('AnalyticsDashboard', () => {
  let dashboard: AnalyticsDashboard;

  beforeEach(() => {
    const mockLocator = jest.fn();
    const mockPage: any = {
      locator: mockLocator,
    };

    // Mock the locators for each property
    mockPage.locator.mockImplementation((selector: string) => {
      return { isVisible: jest.fn().mockResolvedValue(true) }; // Mock the isVisible method
    });

    dashboard = new AnalyticsDashboard(mockPage);
  });

  it('Check if statistics panel is visible', async () => {
    const result = await dashboard.isStatisticsPanelVisible();
    expect(result).toBe(true);
  });

  it('Check if expenses panel is visible', async () => {
    const result = await dashboard.isExpensesPanelVisible();
    expect(result).toBe(true);
  });

  it('Check if total balance panel is visible', async () => {
    const result = await dashboard.isTotalBalancePanelVisible();
    expect(result).toBe(true);
  });

  it('Check if unique visitors graph is visible', async () => {
    const result = await dashboard.isUniqueVisitorsGraphVisible();
    expect(result).toBe(true);
  });
});