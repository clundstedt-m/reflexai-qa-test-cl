import { SalesDashboard } from '../../pages/salesDashboard.page';

describe('SalesDashboard', () => {
  let dashboard: SalesDashboard;

  beforeEach(() => {
    const mockLocator = jest.fn();
    const mockPage: any = {
      locator: mockLocator,
    };

    mockPage.locator.mockImplementation((selector: string) => {
      return { isVisible: jest.fn().mockResolvedValue(true) }; // Mock the isVisible method
    });

    dashboard = new SalesDashboard(mockPage);
  });

  it('Check if main graph container is visible', async () => {
    dashboard.mainGraphContainer.isVisible = jest.fn().mockResolvedValue(true); 
    const result = await dashboard.isMainGraphContainerVisible();
    expect(result).toBe(true);
  });


  it('Check if revenue graph is visible', async () => {
    dashboard.revenueGraph.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isRevenueGraphVisible();
    expect(result).toBe(true);
  });

  it('Check if sales by category graph is visible', async () => {
    dashboard.salesByCategoryGraph.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isSalesByCategoryGraphVisible();
    expect(result).toBe(true);
  });

  it('Check if daily sales graph is visible', async () => {
    dashboard.dailySalesGraph.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isDailySalesGraphVisible();
    expect(result).toBe(true);
  });

  it('Check if total orders graph is visible', async () => {
    dashboard.totalOrdersGraph.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isTotalOrdersGraphVisible();
    expect(result).toBe(true);
  });

  it('Check if top selling product grid is visible', async () => {
    dashboard.topSellingProductGrid.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isTopSellingProductGridVisible();
    expect(result).toBe(true);
  });

  it('Check if wallet balance panel is visible', async () => {
    dashboard.walletBalancePanel.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isWalletBalancePanelVisible();
    expect(result).toBe(true);
  });

  it('Check if transactions panel is visible', async () => {
    dashboard.transactionsPanel.isVisible = jest.fn().mockResolvedValue(true);
    const result = await dashboard.isTransactionsPanelVisible();
    expect(result).toBe(true);
  });



});
