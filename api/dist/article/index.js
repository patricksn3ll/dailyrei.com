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
// import { ApplicationInsights } from '@microsoft/applicationinsights-web'
// const appInsights = new ApplicationInsights({ config: {
//     instrumentationKey: 'e2ec905c-3e44-43d7-888c-9a081c86505a'
//   } });
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('HTTP trigger function processed a request.');
        let originalUrl = req.headers['x-ms-original-url'];
        console.log(`originalUrl : ${originalUrl}`);
        if (originalUrl) {
            if (originalUrl.indexOf(', http') > -1) {
                originalUrl = originalUrl.split(', http')[0];
            }
            //const requestUrl = new URL(originalUrl)
            const pathItems = originalUrl.split('/');
            let slug = pathItems[pathItems.length - 1];
            let route = pathItems[pathItems.length - 2];
            if (slug.indexOf('?') > -1) {
                slug = slug.split('?')[0];
            }
            let feedItems = null;
            let url = null;
            let returnVal = null;
            console.log(`pathItems : ${pathItems.length}`);
            console.log(`slug : ${slug}`);
            console.log(`route : ${route}`);
            if (pathItems.length == 0) {
                context.res = {
                    status: 200,
                    Headers: {
                        'Location': "/"
                    },
                };
            }
            if (route == 'article') {
                feedItems = yield getFeedItemBySlug(slug);
                if (feedItems.length > 0) {
                    url = `${process.env.WWW_ENDPOINT}/guid/${feedItems[0].guid}`;
                    if (null == feedItems || feedItems.length == 0) {
                        context.res = {
                            status: 404,
                            body: JSON.stringify(`Not Found : ${slug} in ${originalUrl}`)
                        };
                        return;
                    }
                    const feedItem = feedItems[0];
                    const options = {
                        method: 'GET',
                        url: url,
                    };
                    console.log(`url : ${url}`);
                    const axios = require('axios');
                    yield axios.request(options)
                        .then(function ({ data }) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log(`got data`);
                            let html = '';
                            html += '<meta name="twitter:card" content="summary_large_image">';
                            html += '<meta name="twitter:site" content="@dailyrei_com">';
                            html += '<meta name="twitter:creator" content="@dailyrei_com">';
                            html += '<meta name="twitter:title" content="' + feedItem.metadata_title.replaceAll('"', '').trim() + '">';
                            html += '<meta name="twitter:description" content="' + feedItem.metadata_description.replaceAll('"', '').trim() + '">';
                            html += '<meta name="twitter:image" content="' + feedItem.image.replaceAll('"', '').trim() + '">';
                            html += '<meta property="og:site_name" content="www.dailyrei.com">';
                            html += '<meta property="og:title" content="' + feedItem.metadata_title.replaceAll('"', '').trim() + '">';
                            html += '<meta property="og:type" content="article" />';
                            html += '<meta property="og:description" content="' + feedItem.metadata_description.replaceAll('"', '').trim() + '">';
                            html += '<meta property="og:image" content="' + feedItem.image.replaceAll('"', '').trim() + '">';
                            html += '<meta property="og:url" content="' + originalUrl + '">';
                            //html += '<meta property="fb:app_id" content="' + process.env.META_APP_ID + '" />';
                            returnVal = data.replace(/<\/title>/g, ' | ' + feedItem.metadata_title.replaceAll('"', '').trim() + ' xyz</title>');
                            returnVal = returnVal.replace(/<\/title>/g, '</title>' + html);
                            returnVal = returnVal.replace(/<!doctype html>/g, '');
                            console.log(`title : ${feedItem.metadata_title.replaceAll('"', '').trim()}`);
                            const hdrs = {};
                            let status = 200;
                            hdrs['Content-Type'] = 'text/html';
                            //let status = 302
                            //hdrs['Location'] = url
                            //returnVal = null
                            context.res = {
                                status: status,
                                headers: hdrs,
                                body: returnVal
                            };
                        });
                    })
                        .catch(function (error) {
                        console.log(`error : ${error}`);
                        context.res = {
                            status: 500,
                            body: JSON.stringify(`${error}`)
                            //Headers: {
                            //    'Location': "/"
                            //},
                        };
                    });
                }
            }
            else {
                context.res = {
                    status: 200,
                    Headers: {
                        'Location': "/"
                    },
                };
            }
        }
    });
};
function getFeedItemBySlug(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const endpoint = process.env.COSMOS_ENDPOINT;
            const key = process.env.COSMOS_KEY;
            const databaseId = process.env.COSMOS_DATABASE_ID;
            const containerId = process.env.COSMOS_CONTAINER_ID;
            const { CosmosClient } = require("@azure/cosmos");
            const client = new CosmosClient({ endpoint, key });
            const database = client.database(databaseId);
            const container = database.container(containerId);
            const querySpec = {
                query: `SELECT TOP 1
                        c.id,
                        c.guid,
                        c.title,
                        c.summary,
                        c.primaryLink,
                        c.metadata_title,
                        c.metadata_description,
                        c.image,
                        c.author,
                        c.publishDate,
                        c.categories,
                        c.abstract_summary,
                        c.extract_summary,
                        c.categories_generated,
                        c.entities,
                        c.key_phrases,
                        c.sentiment,
                        c.results,
                        c.slug,
                        c.flagged
                    FROM
                        c
                    WHERE c.slug = @slug`,
                parameters: [
                    {
                        name: "@slug",
                        value: slug
                    }
                ]
            };
            const { resources: items } = yield container.items
                .query(querySpec)
                .fetchAll();
            return items;
        }
        catch (error) {
            console.log(`error : ${error}`);
            return [];
        }
    });
}
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map