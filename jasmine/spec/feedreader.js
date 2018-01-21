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
               expect(typeof feed.name).toBe("string");
           });
        });
    });


    /* TODO: Write a new test suite named "The menu"
    * https://christosmonogios.com/2016/09/08/How-To-Test-The-HTML-Elements-And-Their-DOM-Properties-When-Using-The-Jasmine-Framework/
    * */
    describe('The menu', function () {
        //menu-hidden on load
        it("body element has 'menu-hidden' tag", function () {
            expect($('body')).className.toContain("menu-hidden");
        });
        //menu is being shown and hidden on click
        it("body element toogles 'menu-hidden' tag when hamburger icon is clicked", function(){
             $('.menu-icon-link').trigger('click');
            expect(body.className).not.toContain("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function(){
        beforeEach(function (done) {
            loadFeed(0,done);
        });
        it("at least single .entry element in .feed container", function(){
            expect($('.feed').children.length).toBeGreaterThan(0);
            done();
        });
    });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

        it("content changes when load feed function loads new feed", function(){

        });
    });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
