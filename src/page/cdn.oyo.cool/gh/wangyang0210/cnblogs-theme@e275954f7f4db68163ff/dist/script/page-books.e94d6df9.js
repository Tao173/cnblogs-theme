"use strict";
(self.webpackChunkcnblogs_theme = self.webpackChunkcnblogs_theme || []).push([[111], {
    953: function(e, t) {
        t.A = '<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="iconfont icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="iconfont icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>'
    },
    736: function(e, t, a) {
        a.a(e, (async function(e, s) {
            try {
                a.r(t),
                a.d(t, {
                    default: function() {
                        return c
                    }
                });
                var n = a(953)
                  , i = a(650)
                  , o = a(508)
                  , r = e([i, o]);
                function c() {
                    (0,
                    o.default)(),
                    ( () => {
                        if ($.__config.bookList.length) {
                            a.e(489).then(a.bind(a, 451));
                            let e = $("#cnblogs_post_body")
                              , t = "";
                            $.each($.__config.bookList, (e => {
                                let a = $.__config.bookList[e];
                                 console.log('a ===>', a);
                                a.title && (t += "<h1 class=`iconfont ${list.icon}`>" + a.title + "</h1>"),
                                t += '<div class="book-cards">',
                                $.each(a.books, (e => {
                                    let s = n.A
                                      , i = a.books[e]
                                      , o = "";
                                    console.log('i ====>', i);
                                    void 0 !== i.score && i.score > 0 ? (o += '<i class="iconfont icon-star-full"></i>'.repeat(parseInt(i.score)),
                                    i.score > parseInt(i.score) && (o += '<i class="iconfont icon-star-half"></i>'),
                                    o += '<i class="iconfont icon-icon-star"></i>'.repeat(parseInt(5 - i.score))) : o += '<i class="iconfont icon-icon-star"></i>'.repeat(5);
                                    let r = "";
                                    const c = e => {
                                        r += `<span title="${e}">原　名：${e}</span><br>`
                                    }
                                      , l = e => {
                                        r += `<span title="${e}">作　者：${e}</span><br>`
                                    }
                                      , p = e => {
                                        r += `<span title="${e}">译　者：${e}</span><br>`
                                    }
                                      , d = e => {
                                        r += `<span title="${e}">出版社：${e}</span><br>`
                                    }
                                      , b = e => {
                                        r += `<span title="${e}">出版年：${e}</span><br>`
                                    }
                                      , f = e => {
                                        r += `<span title="${e}">编　剧: ${e}</span><br>`
                                    }
                                      , v = e => {
                                        r += `<span title="${e}">主　演: ${e}</span><br>`
                                    }
                                      , g = e => {
                                        r += `<span title="${e}">类　型: ${e}</span><br>`
                                    }
                                      , u = e => {
                                        r += `<span title="${e}">制片国家/地区: ${e}</span><br>`
                                    }
                                      , m = e => {
                                        r += `<span title="${e}">语　言: ${e}</span><br>`
                                    }
                                      , h = e => {
                                        r += `<span title="${e}">上映日期: ${e}</span><br>`
                                    }
                                      , y = e => {
                                        r += `<span title="${e}">片　长: ${e}</span><br>`
                                    }
                                      , k = e => {
                                        r += `<span title="${e}">别　名: ${e}</span><br>`
                                    }
                                    ;
                                    i?.formerName && c(i.formerName),
                                    i?.author && l(i.author),
                                    i?.translator && p(i.translator),
                                    i?.press && d(i.press),
                                    i?.year && b(i.year),
                                    i?.scenarist && f(i.scenarist),
                                    i?.star && v(i.star),
                                    i?.type && g(i.type),
                                    i?.productionCountry && u(i.productionCountry),
                                    i?.language && m(i.language),
                                    i?.releaseDate && h(i.releaseDate),
                                    i?.filmLength && y(i.filmLength),
                                    i?.alias && k(i.alias);
                                    let _ = void 0 !== i.readDate ? i.readDate : ""
                                      , D = _ ? "initial;" : "none"
                                      , P = void 0 !== i.readPercentage ? i.readPercentage : ""
                                      , L = P ? "initial;" : "none";
                                    s = $.__tools.batchTempReplacement(s, [["cover", void 0 !== i.cover ? i.cover : ""], ["name", void 0 !== i.name ? i.name : ""], ["readDate", _], ["readDateStyle", D], ["readPercentage", P], ["readPercentageStyle", L], ["scoreHtml", o], ["infoHtml", r]]),
                                    t += s
                                }
                                )),
                                t += "</div>"
                            }
                            ));
                            let s = $(".articleSuffix-flg");
                            s.length ? s.before(t) : e.append(t)
                        }
                    }
                    )(),
                    (0,
                    i.A)()
                }
                [i,o] = r.then ? (await r)() : r,
                s()
            } catch (l) {
                s(l)
            }
        }
        ))
    }
}]);
