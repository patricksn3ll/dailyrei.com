import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Parser = require('rss-parser');

const rssBody = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:content="http://purl.org/rss/1.0/modules/content/"
                        xmlns:atom="http://www.w3.org/2005/Atom"
                        version="2.0">
                    <channel>
                        <title>NewsCluster Root Feed</title>
                        <description>NewsCluster Root Feed</description>
                        <atom:link href="${process.env.API_ENDPOINT}" rel="self"/>
                        <link>${process.env.API_ENDPOINT}</link>
                        {ITEMS_PLACE_HOLDER}
                    </channel>
                </rss>`

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const parser = new Parser();
    const feedData = []
    const feeds = [
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCVTQunGrE3p7Oq8Owao5y_Q',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCCA5VL6_GTfTY9I-V7QUcJw',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCVWDbXqQ8cupuVpotWNt2eg',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCHYeaAH3D-wzQyDiXndSfMA',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCV6KDgJskWaEckne5aPA0aQ',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCnkmQCJ4f6rRl1PXCblppvA',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCg2F6yUPM89HPnOw98FTk9Q',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCb7zrNKp8nons_t-NjXMglg',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCskgEicue6olevPp_Yu8vAw',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UC8ZYmCweKD2x-wy8PDEiFog',
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCG98giOsUxIlXV0rNUhxLew',
    ];

    for (let i = 0; i < feeds.length; i++) {

        try{
            let processedCounter = 0;

            const feed = feeds[i];
            const data = await parser.parseURL(feed);

            for (let x = 0; x < data.items.length; x++) {
                const existingItem = await getFeedItemUrl(data.items[x].link);
                const pubDate = new Date(data.items[x].pubDate);
                let startDate = new Date();
                startDate.setDate(startDate.getDate() -14);

                if (pubDate >= startDate  && existingItem === null) {
                    const categories = (data.items[x].categories?.length) ? data.items[x].categories?.map(c => `<category><![CDATA[${c}]]></category>`).join('') : '';
                    const item = `<item>
                                    <title><![CDATA[${data.items[x].title}]]></title>
                                    <description><![CDATA[${data.items[x].summary}]]></description>
                                    <link><![CDATA[${data.items[x].link}]]></link>
                                    <pubDate>${data.items[x].pubDate}</pubDate>
                                    <guid><![CDATA[${data.items[x].guid}]]></guid>
                                    <dc:creator><![CDATA[${data.items[x].creator}]]></dc:creator>
                                    ${categories}
                                </item>
                                `

                    feedData.push(item)
                    processedCounter++;
                }

                if (processedCounter > 0) {
                    break;
                }
            }
        } catch (e) {
            console.log(`Error parsing feed ${feeds[i]} : ${e}`)
        }
    }

    console.log(`Found ${feedData.length} items out of ${feeds.length} feeds`)

    const sorted = feedData.sort((a, b) => {
        return b.pubDate - a.pubDate;
    });

    const random = sorted.sort(() => Math.random() - Math.random()).slice(0, 4);

    const result = rssBody.replace('{ITEMS_PLACE_HOLDER}', random.join(''))

    context.res = {
        headers: {
            'Content-Type': 'application/rss+xml'
        },
        body: `${result}`
    };
};


async function getFeedItemUrl(itemUrl) {
    const endpoint = process.env.COSMOS_ENDPOINT;
    const key = process.env.COSMOS_KEY;
    const databaseId = process.env.COSMOS_DATABASE_ID;
    const containerId = process.env.COSMOS_CONTAINER_ID;

    const { CosmosClient } = require("@azure/cosmos");
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    const querySpec = {
        query: `SELECT
                    *
                FROM
                    c
                WHERE c.primaryLink = @itemUrl`,
        parameters: [
            {
                name: "@itemUrl",
                value: itemUrl
            }
        ]
    };

    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

    try {
        if (items.length > 0) {
            return items[0]
        }
    } catch (e) {
        console.log(`Error getting item : ${e}`)
    }

    return null;
}

export default httpTrigger;