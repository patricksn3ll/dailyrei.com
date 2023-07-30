import moment from 'moment'

export function formatHref(item: any) {
  return `/article/${item?.slug?.replaceAll('"', '')}`
};

export function formatAuthor (item: any) {
  return item?.author?.replaceAll('"', '')
};

export function formatAuthorHref (item: any) {
  return `/author/${item?.author?.replaceAll('"', '')}`
};

export function formatCategoryHref(item: any) {
  if (item?.categories_generated && item?.categories_generated.length > 0) {
    return `/category/${item?.categories_generated[0].type?.replaceAll('"', '')}`
  }
  return ""
};

export function formatCategory(item: any) {
  if (item?.categories_generated && item?.categories_generated.length > 0) {
    return item?.categories_generated[0].type?.replaceAll('"', '')
  }
  return ""
};


export function formatTagHref(tag: any) {
  return `/tag/${tag.replaceAll('"', '')}`
};

export function formatImage(item: any) {
  if (item?.image?.replaceAll('"', '') == "") {
    return '/assets/images/place-holder.png'
  }
  return item?.image?.replaceAll('"', '')
};

export function formatBgImage(item: any) {
  if (item?.image?.replaceAll('"', '') == "") {
    return `background-image: url('/assets/images/place-holder.png');`
  }
  return `background-image: url('${item?.image?.replaceAll('"', '')}');`
};

export function formatTitle(item: any) {
  if (item?.metadata_title)  {
    return item?.metadata_title?.replaceAll('"', '')
  }
  return item?.title?.replaceAll('"', '')
};

export function formatDescription(item: any) {
  if (item?.abstract_summary && item?.abstract_summary.documents?.length > 0) {
    return item?.abstract_summary?.documents[0].summaries[0].text.replaceAll('"', '')
  }

  if (item?.metadata_description) {
    return item?.metadata_description?.replaceAll('"', '')
  }

  return item?.summary?.replaceAll('"', '')
};

export function formatPublishDate(item: any) {
  const date = item?.publishDate?.replaceAll('"', '')
  return moment(date).format('MMMM, Do YYYY');
};

export function formatTimeSince(item: any) {
  let date = new Date(item?.publishDate?.replaceAll('"', ''))
  let now = new Date()
  let seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;
  let s = (Math.floor(interval) == 1) ? "" : "s";

  if (interval > 1) {
    return formatPublishDate(item);
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return formatPublishDate(item);
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return formatPublishDate(item);
  }

  interval = seconds / 3600;
  if (interval > 1) {
    s = (Math.floor(interval) == 1) ? "" : "s";
    return Math.floor(interval) + " hour" + s;
  }

  interval = seconds / 60;
  if (interval > 1) {
    s = (Math.floor(interval) == 1) ? "" : "s";
    return Math.floor(interval) + " min" + s;
  }

  return Math.floor(seconds) + " second" + s;
};

export function formatIndex(results: any, item: any) {
  return results.indexOf(item)+1
};
