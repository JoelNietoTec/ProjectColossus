import { ProjectColossusPage } from './app.po';

describe('project-colossus App', () => {
  let page: ProjectColossusPage;

  beforeEach(() => {
    page = new ProjectColossusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
