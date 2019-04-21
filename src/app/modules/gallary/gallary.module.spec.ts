import { GallaryModule } from './gallary.module';

describe('GallaryModule', () => {
  let gallaryModule: GallaryModule;

  beforeEach(() => {
    gallaryModule = new GallaryModule();
  });

  it('should create an instance', () => {
    expect(gallaryModule).toBeTruthy();
  });
});
