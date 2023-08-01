import { AzureFunction, Context, HttpRequest } from "@azure/functions"
//import xml2json from '@hendt/xml2json';
import { toJson } from 'xml2json';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const count = parseInt(req.query.count || "5");
    const json = await parseRss(count)
    context.res = {
        headers: {
            'Content-Type': 'application/rss+xml'
        },
        body: `${JSON.stringify(json)}`
    };
};

async function parseRss(count:number) {
    const axios = require('axios');
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
    let results = []

    for (let i = 0; i < feeds.length; i++) {
        try {
            const options = {
                method: 'GET',
                url: feeds[i],
            }

            await axios.request(options)
                .then(async function ({ data }: { data: any }) {
                    const json = toJson(data)
                    const obj = JSON.parse(json);
                    let entries = obj["feed"]["entry"]
                    entries = entries.sort(function (a, b) {
                        return a["updated"] < b["updated"];
                    });
                    results.push(entries[0]["media:group"])
                }).catch(function (error: any) {
                    console.log(`Error fetching feed : ${error}`)
                });
        } catch (e) {
            results.push(`Error parsing feed : ${e}`)
        }

        if (results.length > count) {
            break
        }
    }

    return results
}

export default httpTrigger;
