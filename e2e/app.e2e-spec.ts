import { BucketlistUiPage } from './app.po';

describe('bucketlist-ui App', () => {
  let page: BucketlistUiPage;

  beforeEach(() => {
    page = new BucketlistUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
