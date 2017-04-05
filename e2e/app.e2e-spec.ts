import { VhsRentalPage } from './app.po';

describe('vhs-rental App', function() {
  let page: VhsRentalPage;

  beforeEach(() => {
    page = new VhsRentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
