'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Nozbe App', function() {
  browser.get('index.html');

  it('should redirect index.html to index.html#/ready', function() {
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/ready');
      });
  });

  describe('Project Actions list', function() {
    it('should list actions for a project', function() {
      browser.get('index.html#/project/33b5112212');
      var actionList = element.all(by.repeater('action in actions'));
      expect(actionList.count()).toBeGreaterThan(1);
    });
  });

  describe('Projects List view', function() {
    beforeEach(function() {
      browser.get('index.html#/ready');
    });

    it('should display projects partial', function() {
      expect(element(by.id('heading')).getText()).toBe('Projects');
    });

    it('should filter the project list via the search box', function() {

      var projectList = element.all(by.repeater('project in projects'));
      var query = element(by.model('query'));

      expect(projectList.count()).toBe(26);

      query.sendKeys('inbox');
      expect(projectList.count()).toBe(1);

      query.clear();
      query.sendKeys('life');
      expect(projectList.count()).toBe(2);
    });

    it('should link project name to project actions', function() {
      var query = element(by.model('query'));
      query.sendKeys('inbox');
      element(by.css('.projects li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/project/33b5112212'); //http://localhost:8000/#/project/33b5112212
      });
    });
  });
});

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
