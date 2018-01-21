/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });


        /* TODO: Write a test that loops through each feed
         * Url Match Test Idea: https://stackoverflow.com/questions/35973205/expect-to-test-url-fragment-with-protractor-and-jasmine
         * HTTP/HTTPS Regex: https://stackoverflow.com/questions/4643142/regex-to-test-if-string-begins-with-http-or-https
         */
        it("has a URL defined",function(){
           allFeeds.forEach(function (feed) {
               expect(feed.url).toBeDefined();
               expect(feed.url.length).toBeGreaterThan(8); //http:// . 8 = min requirements for URL
               expect(feed.url).toMatch(/^(http|https)\:\//);
           });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("has name defined",function () {
           allFeeds.forEach(function (feed) {
               expect(feed.name).toBeDefined();
               expect(feed.name.length).toBeGreaterThan(0);
           });
        });
    });


    /* TODO: Write a new test suite named "The menu"
    * https://christosmonogios.com/2016/09/08/How-To-Test-The-HTML-Elements-And-Their-DOM-Properties-When-Using-The-Jasmine-Framework/
    * https://gist.github.com/davilious/9503539
    * */
    describe('The menu', function () {
        it("body element has 'menu-hidden' tag", function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        it("body element toogles 'menu-hidden' tag when hamburger icon is clicked", function(){
             $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function(){
        beforeEach(function (done) {
            loadFeed(0,done);
            done();
        });
        it("at least single .entry element in .feed container", function(){
            expect($('.feed').children.length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        var beforeFeed, afterFeed;
        beforeEach(function (done) {
            loadFeed(0,function(){
                beforeFeed = $('.feed').html();
                loadFeed(1,function () {
                    afterFeed = $('.feed').html();
                    done();
                });
            });
        });
        it("content changes when load feed function loads new feed", function(){
            expect(afterFeed).not.toBe(beforeFeed);
        });
    });
}());
