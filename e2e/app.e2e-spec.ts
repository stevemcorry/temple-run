import { TempleRunPage } from './app.po';

describe('temple-run App', function() {
  let page: TempleRunPage;

  beforeEach(() => {
    page = new TempleRunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
