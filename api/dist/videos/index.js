"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import xml2json from '@hendt/xml2json';
const xml2json_1 = require("xml2json");
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('HTTP trigger function processed a request.');
        const count = parseInt(req.query.count || "5");
        const json = yield parseRss(count);
        context.res = {
            headers: {
                'Content-Type': 'application/rss+xml'
            },
            body: `${JSON.stringify(json)}`
        };
    });
};
function parseRss(count) {
    return __awaiter(this, void 0, void 0, function* () {
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
        let results = [];
        for (let i = 0; i < feeds.length; i++) {
            try {
                const options = {
                    method: 'GET',
                    url: feeds[i],
                };
                yield axios.request(options)
                    .then(function ({ data }) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const json = (0, xml2json_1.toJson)(data);
                        const obj = JSON.parse(json);
                        let entries = obj["feed"]["entry"];
                        entries = entries.sort(function (a, b) {
                            return a["updated"] < b["updated"];
                        });
                        results.push(entries[0]["media:group"]);
                    });
                }).catch(function (error) {
                    console.log(`Error fetching feed : ${error}`);
                });
            }
            catch (e) {
                results.push(`Error parsing feed : ${e}`);
            }
            if (results.length > count) {
                break;
            }
        }
        return results;
    });
}
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map