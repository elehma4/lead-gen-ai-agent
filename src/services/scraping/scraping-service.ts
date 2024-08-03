// src/services/scraping/scraping-service.ts
import puppeteer from "puppeteer";
import cheerio from "cheerio";

export const scrapePage = async (url: string): Promise<string | null> => {
    let browser;
    try {
        console.log(`Launching browser for URL: ${url}`);
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        });
        const page = await browser.newPage();
        
        console.log(`Setting user agent for ${url}`);
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        console.log(`Setting up request interception for ${url}`);
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            if (['image', 'stylesheet', 'font'].includes(request.resourceType())) {
                request.abort();
            } else {
                request.continue();
            }
        });

        console.log(`Navigating to URL: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
        
        console.log(`Waiting for body selector on ${url}`);
        await page.waitForSelector('body', { timeout: 60000 });

        console.log(`Getting page content for ${url}`);
        const content = await page.content();
        const $ = cheerio.load(content);

        const errorMessage = $('body').text().toLowerCase();
        if (errorMessage.includes('enable javascript') || errorMessage.includes('cookies') || errorMessage.includes('error')) {
            console.log(`Skipping URL ${url} due to JavaScript or cookies requirement.`);
            return null;
        }

        const title = $('title').text();
        const description = $('meta[name="description"]').attr('content') || '';
        const headings = $('h1, h2, h3').map((_, el) => $(el).text()).get().join('\n');
        const paragraphs = $('p').map((_, el) => $(el).text()).get().join('\n');
        const links = $('a[href]').map((_, el) => $(el).attr('href')).get().join('\n');
        const lists = $('ul, ol').map((_, el) => $(el).text()).get().join('\n');
        const listItems = $('li').map((_, el) => $(el).text()).get().join('\n');
        
        const extractedContent = `
            Title: ${title}\n
            Description: ${description}\n
            Headings: ${headings}\n
            Paragraphs: ${paragraphs}\n
            Lists: ${lists}\n
            List Items: ${listItems}\n
            Links: ${links}\n
        `;

        console.log(`Successfully scraped content from ${url}`);
        return extractedContent;
    } catch (error: any) {
        console.error(`Error scraping URL ${url}:`, error.message);
        return null;
    } finally {
        if (browser) {
            console.log(`Closing browser for ${url}`);
            await browser.close();
        }
    }
};