import { AzureFunction, Context, HttpRequest } from "@azure/functions"
// import { ApplicationInsights } from '@microsoft/applicationinsights-web'

// const appInsights = new ApplicationInsights({ config: {
//     instrumentationKey: 'e2ec905c-3e44-43d7-888c-9a081c86505a'
//   } });


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    let originalUrl = req.headers['x-ms-original-url'];
    console.log(`originalUrl : ${originalUrl}`);

    if (originalUrl) {
        if (originalUrl.indexOf(', http') > -1) {
            originalUrl = originalUrl.split(', http')[0];
        }

        //const requestUrl = new URL(originalUrl)
        const pathItems = originalUrl.split('/');
        let slug = pathItems[pathItems.length-1];
        let route = pathItems[pathItems.length-2];

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
            feedItems = await getFeedItemBySlug(slug);
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
                }

                console.log(`url : ${url}`)

                const axios = require('axios');
                await axios.request(options)
                    .then(async function ({ data }: { data: any }) {
                        console.log(`got data`)

                        let html = ''
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

                        returnVal = data.replace(/<\/title>/g,  ' | ' + feedItem.metadata_title.replaceAll('"', '').trim() + ' xyz</title>');
                        returnVal = returnVal.replace(/<\/title>/g,  '</title>' + html);
                        returnVal = returnVal.replace(/<!doctype html>/g, '');

                        console.log(`title : ${feedItem.metadata_title.replaceAll('"', '').trim()}`)

                        const hdrs = {}
                        let status = 200
                        hdrs['Content-Type'] = 'text/html'

                        //let status = 302
                        //hdrs['Location'] = url
                        //returnVal = null
                        context.res = {
                            status: status,
                            headers: hdrs,
                            body: returnVal
                        }
                    })
                    .catch(function (error: any) {
                        console.log(`error : ${error}`)
                        context.res = {
                            status: 500,
                            body: JSON.stringify(`${error}`)
                            //Headers: {
                            //    'Location': "/"
                            //},
                        };
                    });
            }
        } else {

            context.res = {
                status: 200,
                Headers: {
                    'Location': "/"
                },
            };
        }
    }

};


async function getFeedItemBySlug(slug) {
    try{
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

        const { resources: items } = await container.items
            .query(querySpec)
            .fetchAll();

        return items;
    } catch (error) {
        console.log(`error : ${error}`)
        return [];
    }
}

export default httpTrigger;
