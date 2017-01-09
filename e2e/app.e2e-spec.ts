import { HelloworldAppPage } from './app.po';

describe('helloworld-app App', function() {
  let page: HelloworldAppPage;

  beforeEach(() => {
    page = new HelloworldAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
