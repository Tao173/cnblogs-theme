/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 博客基础信息抓取处理
 */

let status = {
    url: window.location.href,
    user: '',
    pageType: '',
    articleId: '',
};
// 提取url信息
let tmp = status.url.split('/');
status.user = tmp[3];
status.homeUrl = tmp.slice(0, 4).join('/');
let topics = $('#topics').length;
status.pageType = !topics
    ? 'home'
    : $('#bookListFlg').length
    ? 'books'
    : $('#linkListFlg').length
    ? 'links'
    : 'article';
if (topics) status.articleId = tmp[tmp.length - 1].split('.')[0];

export default status;
