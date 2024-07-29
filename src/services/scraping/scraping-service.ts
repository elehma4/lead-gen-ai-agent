// src/services/scraping/scraping-service.ts

import puppeteer from "puppeteer";
import cheerio from "cheerio";

export const scrapePage = async (url: string): Promise<string | null> => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set user agent to mimic a real browser
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

  try {
    // Set up request interception to handle cookies and scripts better
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (['image', 'stylesheet', 'font'].includes(request.resourceType())) {
        request.abort(); // Abort requests for images, stylesheets, and fonts to speed up the scraping
      } else {
        request.continue(); // Allow other requests
      }
    });

    // Go to the URL and wait for the network to be idle
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait for necessary selectors to ensure page content is loaded
    await page.waitForSelector('body', { timeout: 60000 });

    // Get page content
    const content = await page.content();
    const $ = cheerio.load(content);

    // Check for common error messages indicating issues with JavaScript or cookies
    const errorMessage = $('body').text().toLowerCase();
    if (errorMessage.includes('enable javascript') || errorMessage.includes('cookies') || errorMessage.includes('error')) {
      console.log(`Skipping URL ${url} due to JavaScript or cookies requirement.`);
      return null;
    }

    // Extract relevant information
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content') || '';
    const headings = $('h1, h2, h3').map((_, el) => $(el).text()).get().join('\n');
    const paragraphs = $('p').map((_, el) => $(el).text()).get().join('\n');
    const links = $('a[href]').map((_, el) => $(el).attr('href')).get().join('\n');
    const lists = $('ul, ol').map((_, el) => $(el).text()).get().join('\n');
    const listItems = $('li').map((_, el) => $(el).text()).get().join('\n');
    
    // Combine extracted data into a string
    const extractedContent = `
      Title: ${title}\n
      Description: ${description}\n
      Headings: ${headings}\n
      Paragraphs: ${paragraphs}\n
      Lists: ${lists}\n
      List Items: ${listItems}\n
      Links: ${links}\n
    `;

    return extractedContent;
  } catch (error) {
    console.error(`Error scraping URL ${url}:`, error);
    return null;
  } finally {
    await browser.close();
  }
};