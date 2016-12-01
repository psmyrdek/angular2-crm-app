import { CrmAppPage } from './app.po';

describe('crm-app App', function() {
  let page: CrmAppPage;

  beforeEach(() => {
    page = new CrmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
