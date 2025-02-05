/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: 网站图标处理
 */
export default function main() {
    const shortcutIcon = $('#favicon');
    if ($.__config.info.blogIcon && shortcutIcon.length) shortcutIcon.attr('href', $.__config.info.blogIcon);
    if ($.__config.info.blogIcon && !shortcutIcon.length) {
        let linkObject = document.createElement('link');
        linkObject.rel = 'shortcut icon';
        linkObject.href = $.__config.info.blogIcon;
        document.getElementsByTagName('head')[0].appendChild(linkObject);
    }
}
