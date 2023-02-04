// @ts-check
const { test, expect } = require('@playwright/test');



test.describe('Pull tweets', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://dictionaryv2.com/pulltweets');
    });

    test('pull tweets using handle, verify and delete 2 tweets', async ({ page }) => {



    const newhandle = page.getByPlaceholder('Twitter User handle without @');
    await newhandle.fill('testeraai');


    const pulltweets = page.getByText('Get Analysis');
    await pulltweets.click();

    const pulledhandlename = page.locator('h4.mainsubtitle');
    await expect(pulledhandlename).toHaveText('@TestEraAI (TestEra.Club)');


    const deletetweet = page.getByText('Delete Tweet');
    const deletefirsttweet = deletetweet.nth(0);
    await deletefirsttweet.click();

    await expect(page.locator('(//div[@class="card-body"])[0]')).toBeHidden();


    const deletefirst1tweet = deletetweet.nth(1);
    await deletefirst1tweet.click();

    await expect(page.locator('(//div[@class="card-body"])[0]')).toBeHidden();

   
    });
  
    test('search invalid handle', async ({ page }) => {

        const newhandle = page.getByPlaceholder('Twitter User handle without @');
        await newhandle.fill('testeraai433rerewre');
    
        const pulltweets = page.getByText('Get Analysis');
        await pulltweets.click();

        console.log(page.locator("h4.errormessage"));
        await expect(page.locator("h4.errormessage")).toHaveText('Twitter user not found');
    
        });
  

  });

test.describe('Curate tweets', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://dictionaryv2.com/curate');
    });

    test('curate on handle', async ({ page }) => {

        const secondhandle = page.locator('(//div[@class="admincard"])[3]');
        secondhandle.click();

        const pulltweets = page.getByText('Get User Tweets');
        await pulltweets.click();

        //verify handle tweets are pulled
        const pulledhandlename = page.locator('h4.mainsubtitle');
        await expect(pulledhandlename).toHaveText('@Ant_Philosophy (The Ant Philosophy)');

        //delete 1 tweet
        const deletetweet = page.getByText('Delete Tweet');
        const deletefirsttweet = deletetweet.nth(0);
        await deletefirsttweet.click();
        await expect(page.locator('(//div[@class="card-body"])[0]')).toBeHidden();
    
        //delete 2nd tweet
        const deletefirsttweet1 = deletetweet.nth(1);
        await deletefirsttweet1.click();
        await expect(page.locator('(//div[@class="card-body"])[0]')).toBeHidden();

        });
    
    test('curate on #topic', async ({ page }) => {

        const secondadmincard = page.locator('(//div[@class="admincardmain"])[2]');
        const topicinadmincard = secondadmincard.locator('//p[text()="tips"]');
        topicinadmincard.click();

        const pulltweets = page.getByText('Get Topic Tweets');
        await pulltweets.click();

        //verify topic tweets are pulled
        const pulledhandlename = page.locator('h4.mainsubtitle');
        await expect(pulledhandlename).toHaveText('@tips (tips)');

        //delete 1 tweet
        const deletetweet = page.getByText('Delete Tweet');
        const deletefirsttweet1 = deletetweet.nth(0);
        await deletefirsttweet1.click();
        await expect(page.locator('(//div[@class="card-body"])[0]')).toBeHidden();


        });

       

    test('add tag ', async ({ page }) => {

        const secondhandle = page.locator('(//div[@class="admincard"])[3]');
        secondhandle.click();

        const pulltweets = page.getByText('Get User Tweets');
        await pulltweets.click();

        //verify handle tweets are pulled
        const pulledhandlename = page.locator('h4.mainsubtitle');
        await expect(pulledhandlename).toHaveText('@Ant_Philosophy (The Ant Philosophy)');

        //add tag
        const filltag = page.locator('(//input[@placeholder="Add Tag"])[3]');
        await filltag.fill('Startupsdsfdsafds111');


        const addtag = page.locator('(//button[text()="Add Tag"])[3]');
        await addtag.click();

        const verifyiftagadded = page.locator('.errormessagesmall');
        await expect(verifyiftagadded).toHaveText('Tag Added');


        });
  });

test.describe('Query home page for Topic search from users perspective', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://dictionaryv2.com/');
    });

    test('Query home page for Topic search from users perspective', async ({ page }) => {

    await page.getByText('#philosophy').click();
    await page.getByRole('button', { name: 'Get Tweets' }).click();
    //generate AI tweet
    await page.locator('div:nth-child(4) > .card-body > .copybutton').click();
    //check if button is disabled
    await expect(page.locator('div:nth-child(4) > .card-body > .copybutton')).toBeDisabled();

    //if AI tweet is generated
    await expect(page.locator('//h6[@class="card-text"]')).toContainText('Tweet by AI');
    //try to copy AI tweet
    await page.getByRole('button', { name: 'Copy AI Tweet' }).click(); //cant asset this

    });

});

test.describe('Query home page for Handle search from users perspective', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://dictionaryv2.com/handle');
    });

    test('Query home page for Handle search from users perspective', async ({ page }) => {

    await page.getByText('@v_i_v_e_k_7').click();
    await page.getByRole('button', { name: 'Get Tweets' }).click();
    //generate AI tweet
    await page.locator('div:nth-child(4) > .card-body > .copybutton').click();
    //check if button is disabled
    await expect(page.locator('div:nth-child(4) > .card-body > .copybutton')).toBeDisabled();

    //if AI tweet is generated
    await expect(page.locator('//h6[@class="card-text"]')).toContainText('Tweet by AI');
    //try to copy AI tweet
    await page.getByRole('button', { name: 'Copy AI Tweet' }).click(); //cant asset this

    });

});