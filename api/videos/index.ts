import { AzureFunction, Context, HttpRequest } from "@azure/functions"
//import xml2json from '@hendt/xml2json';
import { toJson } from 'xml2json';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const json = await parseRss()
    context.res = {
        headers: {
            'Content-Type': 'application/rss+xml'
        },
        body: `${JSON.stringify(json)}`
    };
};

async function parseRss() {
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
            await fetch(feeds[i])
                .then(response => response.text())
                .then(data => {
                    //const json = parser.toJson(data)
                    const json = toJson(data)
                    const obj = JSON.parse(json);
                    let entries = obj["feed"]["entry"]
                    entries = entries.sort(function (a, b) {
                        return a["updated"] < b["updated"];
                    });
                    results.push(entries[0]["media:group"])
                })
                .catch(err => console.log(`Error fetching feed : ${err}`))
        } catch (e) {
            console.log(`Error parsing feed : ${e}`)
        }
    }

    return results
}

export default httpTrigger;
