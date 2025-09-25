( () => {
    var t, i = {
        993: (t, i, n) => {
            var s = {
                "./edit-alignment.svg": 2466,
                "./edit-back.svg": 5208,
                "./edit-color.svg": 3617,
                "./edit-font.svg": 7939,
                "./edit-position.svg": 6596,
                "./edit-rotate.svg": 6506,
                "./edit-shadow.svg": 2564,
                "./edit-size.svg": 8076,
                "./edit-spacing.svg": 1409,
                "./edit-stroke.svg": 1566,
                "./edit-text-size.svg": 5549,
                "./edit-text.svg": 4779,
                "./edit-warp.svg": 1296
            };
            function e(t) {
                var i = r(t);
                return n(i)
            }
            function r(t) {
                if (!n.o(s, t)) {
                    var i = new Error("Cannot find module '" + t + "'");
                    throw i.code = "MODULE_NOT_FOUND",
                    i
                }
                return s[t]
            }
            e.keys = function() {
                return Object.keys(s)
            }
            ,
            e.resolve = r,
            t.exports = e,
            e.id = 993
        }
        ,
        9979: (t, i, n) => {
            var s = {
                "./warp-arc-lower.svg": 1864,
                "./warp-arc-upper.svg": 8473,
                "./warp-arch.svg": 2072,
                "./warp-bulge-lower.svg": 4604,
                "./warp-bulge-upper.svg": 1158,
                "./warp-bulge.svg": 7430,
                "./warp-chevron.svg": 7874,
                "./warp-chisel-edge.svg": 5739,
                "./warp-curve.svg": 5538,
                "./warp-diamond.svg": 8934,
                "./warp-flag.svg": 8742,
                "./warp-none.svg": 3403,
                "./warp-pinch.svg": 6688,
                "./warp-pointed-edge.svg": 6858,
                "./warp-rise.svg": 1651,
                "./warp-shear.svg": 5412,
                "./warp-squeeze.svg": 5300,
                "./warp-wedge-bottom.svg": 9088,
                "./warp-wedge-top.svg": 2424,
                "./warp-wedge.svg": 7900
            };
            function e(t) {
                var i = r(t);
                return n(i)
            }
            function r(t) {
                if (!n.o(s, t)) {
                    var i = new Error("Cannot find module '" + t + "'");
                    throw i.code = "MODULE_NOT_FOUND",
                    i
                }
                return s[t]
            }
            e.keys = function() {
                return Object.keys(s)
            }
            ,
            e.resolve = r,
            t.exports = e,
            e.id = 9979
        }
        ,
        6611: () => {}
        ,
        1156: (t, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.API = i.WarpType = void 0,
            function(t) {
                t.None = "none",
                t.Curve = "curve",
                t.ArchLower = "arch-lower",
                t.Arch = "arch",
                t.Squeeze = "squeeze",
                t.ArcLower = "arc-lower",
                t.ArcUpper = "arc-upper",
                t.Bulge = "bulge",
                t.BulgeUpper = "bulge-upper",
                t.BulgeLower = "bulge-lower",
                t.Shear = "shear",
                t.Chevron = "chevron",
                t.ChiselEdge = "chisel-edge",
                t.Diamond = "diamond",
                t.PointedEdge = "pointed-edge",
                t.Rise = "rise",
                t.Flag = "flag",
                t.Wedge = "wedge",
                t.WedgeTop = "wedge-top",
                t.WedgeBottom = "wedge-bottom"
            }(i.WarpType || (i.WarpType = {}));
            var n = function() {
                function t() {}
                return t.fatalError = function() {
                    t.onerror && t.onerror()
                }
                ,
                t.incLoadCount = function() {
                    0 == t.t && t.onloading && t.onloading(!0),
                    ++t.t
                }
                ,
                t.decLoadCount = function() {
                    --t.t,
                    t.t < 0 && (console.log("API._loadCount mismatch."),
                    t.t = 0),
                    0 == t.t && t.onloading && t.onloading(!1)
                }
                ,
                t.priceRequest = function(i, n) {
                    t.postJson("getquote", i, (function(i) {
                        n(t.parseJson(i))
                    }
                    ))
                }
                ,
                t.addToCart = function(i, n, s) {
                    t.postJson("addtocart", {
                        designId: i,
                        quantities: n
                    }, (function(t) {
                        s()
                    }
                    ))
                }
                ,
                t.compareDecorationsUrl = function() {
                    return "/help/compare-decoration-methods?mode=pop"
                }
                ,
                t.sizeChartUrl = function(t) {
                    return "/products/sizechart/" + t
                }
                ,
                t.myImages = function(i) {
                    t.get("myimages", null, (function(t) {
                        i(t)
                    }
                    ))
                }
                ,
                t.loginCheck = function(i) {
                    t.get("isloggedin", null, (function(t) {
                        i(t.result)
                    }
                    ))
                }
                ,
                t.logon = function(i, n, s) {
                    t.post("logon", {
                        Email: i,
                        Password: n
                    }, (function(t) {
                        s(t)
                    }
                    ))
                }
                ,
                t.create = function(i, n, s, e) {
                    t.post("create", {
                        Newsletter: s.toString(),
                        Password: n,
                        Email: i
                    }, (function(t) {
                        e(t)
                    }
                    ))
                }
                ,
                t.designs = function(i) {
                    t.get("designs", null, (function(t) {
                        i(t)
                    }
                    ))
                }
                ,
                t.designExists = function(i, n) {
                    t.postForm("designexists", {
                        name: i
                    }, (function(i) {
                        n(t.parseJson(i))
                    }
                    ))
                }
                ,
                t.design = function(i, n, s) {
                    t.get("design", i.toString(), (function(t) {
                        n(t)
                    }
                    ), s)
                }
                ,
                t.template = function(i, n, s, e, r, o) {
                    var h = t.BRAIN_URL + "template/" + i.toString() + "?productId=" + n + "&colorCode=" + s + "&decorationMethod=" + e;
                    t.getRaw(h, (function(i) {
                        r(t.parseJson(i))
                    }
                    ), o)
                }
                ,
                t.tempdesign = function(i, n, s, e) {
                    var r = t.BRAIN_URL + "tempdesign/" + i + "?token=" + n;
                    t.getRaw(r, (function(i) {
                        s(t.parseJson(i))
                    }
                    ), e)
                }
                ,
                t.saveDesign = function(i, n) {
                    t.postJson("save", i, (function(i) {
                        n(t.parseJson(i))
                    }
                    ))
                }
                ,
                t.shareDesign = function(i, n) {
                    t.postJson("share", {
                        design: i
                    }, (function(i) {
                        n(t.parseJson(i))
                    }
                    ))
                }
                ,
                t.sendDesign = function(i, n) {
                    t.postJson("sendemail", i, (function(i) {
                        n(t.parseJson(i))
                    }
                    ))
                }
                ,
                t.clipartThumbUrl = function(i) {
                    return t.DATA_URL + "clipart/jpg/" + i.toLowerCase() + ".jpg"
                }
                ,
                t.clipartPreviewUrl = function(i) {
                    return t.DATA_URL + "clipart/jpg_preview/" + i.toLowerCase() + ".jpg"
                }
                ,
                t.ziggyImageUrl = function(i) {
                    return t.DATA_URL + "clipart/ziggy/" + i.toLowerCase() + ".ziggy"
                }
                ,
                t.clipart = function(i, n) {
                    t.get("clipart", i, (function(t) {
                        n(t)
                    }
                    ))
                }
                ,
                t.clipartList = function(i, n) {
                    t.get("clipartlist", i, (function(t) {
                        n(t)
                    }
                    ))
                }
                ,
                t.clipartSearch = function(i, n) {
                    t.post("clipartsearch", {
                        keyword: i
                    }, (function(t) {
                        n(t)
                    }
                    ))
                }
                ,
                t.templateCategories = function(i) {
                    t.get("templates", null, (function(t) {
                        i(t)
                    }
                    ))
                }
                ,
                t.templateSearch = function(i, n) {
                    i ? t.get("templates", i, (function(t) {
                        n(t)
                    }
                    )) : n([])
                }
                ,
                t.templateCategoryIcon = function(t) {
                    return "/assets/images/templates/cat/" + (t = t.toLowerCase().replace(/ /g, "-").replace(/\//g, "-")) + ".png"
                }
                ,
                t.fonts = function(i, n) {
                    t.get("fonts", i.toString(), (function(t) {
                        n(t)
                    }
                    ))
                }
                ,
                t.ziggyFontUrl = function(i) {
                    return i = i.toLowerCase().replace(/ /g, "-"),
                    t.DATA_URL + "fonts/ziggy2/" + i + ".ziggy"
                }
                ,
                t.fontPreviewUrl = function(i) {
                    return i = i.toLowerCase().replace(/ /g, "-"),
                    t.DATA_URL + "fonts/previews/png/" + i + ".png"
                }
                ,
                t.fontClassName = function(t) {
                    return "font-" + t.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-_]/gi, "")
                }
                ,
                t.getFontPreview = function(i, n, s) {
                    var e = n ? "svg-sm" : "svg";
                    i = i.toLowerCase().replace(/ /g, "-");
                    var r = t.DATA_URL + "fonts/previews/" + e + "/" + i + ".svg";
                    this.getRaw(r, s)
                }
                ,
                t.fontCategoryPreview = function(i) {
                    return i = i.toLowerCase().replace(/ |\//g, "-"),
                    t.DATA_URL + "fonts/categories/" + i + ".png"
                }
                ,
                t.product = function(i, n, s) {
                    t.get("product", i, (function(t) {
                        n(t)
                    }
                    ), s)
                }
                ,
                t.productUrl = function(i, n, s) {
                    return t.DATA_URL + "products/float/870x960/" + i.toLowerCase() + "_" + n + "_" + s.toLowerCase() + ".jpg"
                }
                ,
                t.findProductPrintMethod = function(i, n) {
                    if (!i)
                        throw "Product can not be null.";
                    if (!n)
                        return i.defaultDecorationMethod;
                    switch (n.toUpperCase()) {
                    case "SCREENPRINT":
                    case "S":
                        if (i.canScreenPrint)
                            return t.DECORATION_SCREENPRINT;
                        break;
                    case "DIGITALPRINT":
                    case "D":
                        if (i.canDigitalPrint)
                            return t.DECORATION_DIGITALPRINT;
                        break;
                    case "EMBROIDER":
                    case "E":
                        if (i.canEmbroider)
                            return t.DECORATION_EMBROIDER
                    }
                    return i.defaultDecorationMethod
                }
                ,
                t.findProductColorOrDefault = function(i, n) {
                    if (!i)
                        throw "Product can not be null.";
                    n || (n = "");
                    var s = t.findProductColor(i, n);
                    if (s || (s = t.findProductColor(i, i.defaultColorId)),
                    !s)
                        throw "Product color was not found.";
                    return s
                }
                ,
                t.findProductColor = function(t, i) {
                    if (!i)
                        return null;
                    for (var n = t.productColors, s = 0; s < n.length; ++s)
                        if (n[s].colorId == i.toUpperCase())
                            return n[s];
                    return null
                }
                ,
                t.parseJson = function(i) {
                    try {
                        return JSON.parse(i)
                    } catch (i) {
                        return t.fatalError(),
                        null
                    }
                }
                ,
                t.post = function(i, n, s) {
                    t.postForm(i, n, (function(i) {
                        s(t.parseJson(i))
                    }
                    ))
                }
                ,
                t.postForm = function(i, n, s) {
                    t.postRaw(i + "?format=json", "application/x-www-form-urlencoded", t.urlEncode(n), s)
                }
                ,
                t.postJson = function(i, n, s) {
                    t.postRaw(i + "?format=json", "application/json", JSON.stringify(n), s)
                }
                ,
                t.postRaw = function(i, n, s, e) {
                    var r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        4 == r.readyState && (t.decLoadCount(),
                        200 == r.status ? e(r.responseText) : t.fatalError())
                    }
                    ,
                    t.incLoadCount();
                    try {
                        r.open("POST", t.BRAIN_URL + i),
                        r.setRequestHeader("Content-type", n),
                        r.send(s)
                    } catch (i) {
                        t.fatalError()
                    }
                }
                ,
                t.get = function(i, n, s, e) {
                    t.getText(i, n, (function(i) {
                        s(t.parseJson(i))
                    }
                    ), e)
                }
                ,
                t.getText = function(i, n, s, e) {
                    var r = t.BRAIN_URL + i;
                    n && (r += "/" + encodeURIComponent(n)),
                    r += "?format=json",
                    t.getRaw(r, (function(t) {
                        s(t)
                    }
                    ), e)
                }
                ,
                t.getRaw = function(i, n, s) {
                    var e = new XMLHttpRequest;
                    e.onreadystatechange = function() {
                        4 == e.readyState && (t.decLoadCount(),
                        200 == e.status ? n(e.responseText) : s ? s() : t.fatalError())
                    }
                    ,
                    t.incLoadCount();
                    try {
                        e.open("GET", i),
                        e.send()
                    } catch (i) {
                        t.fatalError()
                    }
                }
                ,
                t.urlEncode = function(t) {
                    var i;
                    for (var n in t)
                        i ? i += "&" : i = "",
                        i += n + "=" + t[n];
                    return i
                }
                ,
                t.urlDecode = function(t) {
                    var i = {}
                      , n = t.split("&");
                    for (var s in n) {
                        var e = n[s].split("=")
                          , r = decodeURIComponent(e[0])
                          , o = decodeURIComponent(e[1]);
                        i[r] = o
                    }
                    return i
                }
                ,
                t.DECORATION_SCREENPRINT = "ScreenPrint",
                t.DECORATION_DIGITALPRINT = "DigitalPrint",
                t.DECORATION_EMBROIDER = "Embroider",
                t.DATA_URL = "/content/",
                t.BRAIN_URL = "/studio/brain/",
                t.t = 0,
                t
            }();
            i.API = n
        }
        ,
        9017: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.AddImagePane = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(8709)
              , o = n(2561)
              , h = n(2497)
              , u = n(6059)
              , c = n(2582)
              , a = function(t) {
                function i(i) {
                    var n = t.call(this, "AddImagePane", i) || this;
                    return n.i = i,
                    n.h = n.$(".container"),
                    (0,
                    h.onClick)(n.$(".clipart"), (function() {
                        n.u()
                    }
                    )),
                    (0,
                    h.onClick)(n.$(".upload"), (function() {
                        n.v()
                    }
                    )),
                    (0,
                    h.onClick)(n.$(".myimages"), (function() {
                        n.i.requireLogin((function() {
                            n.l()
                        }
                        ), (function() {}
                        ))
                    }
                    )),
                    n.p = n.$(".clipArtCatalog"),
                    n.k = n.$(".myImages"),
                    (0,
                    h.onClick)(n.p, (function() {
                        n.u()
                    }
                    )),
                    (0,
                    h.onClick)(n.$(".uploadImage"), (function() {
                        n.v()
                    }
                    )),
                    (0,
                    h.onClick)(n.k, (function() {
                        n.i.requireLogin((function() {
                            n.l()
                        }
                        ), (function() {}
                        ))
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.u = function() {
                    this.M(new f(this.i)),
                    this.p.classList.add("selected"),
                    this.k.classList.remove("selected")
                }
                ,
                i.prototype.v = function() {
                    var t = this;
                    new g((function(i, n, s, e) {
                        var r = t.i.productView()
                          , h = new o.ImageEntity(r);
                        h.initFromUpload(i, n, s).then((function() {
                            r.addEntity(h),
                            r.select(h),
                            r.onEndUpdateState()
                        }
                        ))
                    }
                    )).show()
                }
                ,
                i.prototype.l = function() {
                    this.M(new m(this.i)),
                    this.p.classList.remove("selected"),
                    this.k.classList.add("selected")
                }
                ,
                i.prototype.M = function(t) {
                    this.elem().classList.add("showMain"),
                    this.h.innerHTML = "",
                    this.h.appendChild(t.elem())
                }
                ,
                i
            }(r.CloseablePane);
            i.AddImagePane = a;
            var f = function(t) {
                function i(i) {
                    var n = t.call(this, "ClipArtCatalog") || this;
                    n.i = i,
                    n.h = n.$(".container");
                    var s = n.$(".searchField")
                      , e = n.$(".searchForm")
                      , r = n.$(".searchButton");
                    return (0,
                    h.onSubmit)(e, r, (function() {
                        n.I(null, s.value),
                        s.blur()
                    }
                    )),
                    n._(),
                    n
                }
                return s.__extends(i, t),
                i.prototype._ = function() {
                    var t = this;
                    this.M(new d((function(i) {
                        t.P(i)
                    }
                    ),(function(i) {
                        t.I(null, i)
                    }
                    )))
                }
                ,
                i.prototype.P = function(t) {
                    var i = this;
                    t ? this.M(new l(t,(function(n) {
                        i.I(t, n)
                    }
                    ),(function() {
                        i._()
                    }
                    ))) : this._()
                }
                ,
                i.prototype.I = function(t, i) {
                    var n = this;
                    this.M(new w(t,i,(function(t) {
                        var i = n.i.productView()
                          , s = new o.ClipartEntity(i);
                        s.createFromClipart(t).then((function() {
                            i.addEntity(s),
                            i.select(s),
                            i.onEndUpdateState()
                        }
                        ), (function(t) {
                            c.Studio.trackError(t)
                        }
                        ))
                    }
                    ),(function(t) {
                        n.P(t)
                    }
                    )))
                }
                ,
                i.prototype.M = function(t) {
                    this.h.innerHTML = "",
                    this.h.appendChild(t.elem())
                }
                ,
                i
            }(u.TemplateView)
              , v = [{
                id: "Design Elements",
                text: "Design Elements",
                keyword: null
            }, {
                id: "Shapes and Symbols",
                text: "Shapes / Symbols",
                keyword: null
            }, {
                id: "Cool and Trendy",
                text: "Cool & Trendy",
                keyword: null
            }, {
                id: "Emojis",
                text: "Emojis",
                keyword: "emojis"
            }, {
                id: "Animals",
                text: "Animals",
                keyword: null
            }, {
                id: "Sports and Recreation",
                text: "Sports",
                keyword: null
            }, {
                id: "Mascots",
                text: "Mascots",
                keyword: null
            }, {
                id: "Events",
                text: "Events",
                keyword: null
            }, {
                id: "Vacation",
                text: "Vacation",
                keyword: null
            }, {
                id: "Nature-Geography",
                text: "Nature / Geography",
                keyword: null
            }, {
                id: "People and Places",
                text: "People & Places",
                keyword: null
            }, {
                id: "Religion",
                text: "Religion",
                keyword: null
            }, {
                id: "Occupations",
                text: "Occupations",
                keyword: null
            }, {
                id: "Food and Drink",
                text: "Food & Drink",
                keyword: null
            }, {
                id: "Government",
                text: "Politics / Government",
                keyword: null
            }, {
                id: "Greek",
                text: "Fraternities & Sororities",
                keyword: null
            }, {
                id: "Music",
                text: "Music & Entertainment",
                keyword: null
            }, {
                id: "Transportation",
                text: "Transportation",
                keyword: null
            }, {
                id: "Holidays",
                text: "Holidays",
                keyword: null
            }, {
                id: "Technology",
                text: "Technology",
                keyword: null
            }, {
                id: "Popular",
                text: "Popular",
                keyword: "popular"
            }]
              , d = function(t) {
                function i(i, n) {
                    var s = t.call(this, "BrowseByCategory") || this;
                    return s.B = s.$(".scroller"),
                    v.forEach((function(t) {
                        s.addButton(t, i, n)
                    }
                    )),
                    s
                }
                return s.__extends(i, t),
                i.prototype.addButton = function(t, i, n) {
                    var s = t.id.toLowerCase().replace(/ /g, "-");
                    t.keyword ? this.addButtonRaw(t.text, s, (function() {
                        n(t.keyword)
                    }
                    )) : this.addButtonRaw(t.text, s, (function() {
                        i(t.id)
                    }
                    ))
                }
                ,
                i.prototype.addButtonRaw = function(t, i, n) {
                    var s = (0,
                    h.makeAnchor)(t, "categoryButton " + i, n);
                    this.B.appendChild(s)
                }
                ,
                i
            }(u.TemplateView)
              , l = function(t) {
                function i(i, n, s) {
                    var r = t.call(this, "CategoryList") || this;
                    return r.C = r.$(".breadcrumbs"),
                    r.addBreadcrumb("Clip Art", (function() {
                        s()
                    }
                    )),
                    r.addBreadcrumb(i.replace(/-/g, " ")),
                    r.B = r.$(".scroller"),
                    r.S = document.createElement("div"),
                    r.S.className = "items",
                    r.B.appendChild(r.S),
                    e.API.clipartList(i, (function(t) {
                        t.forEach((function(t) {
                            r.addItem(t, n)
                        }
                        ))
                    }
                    )),
                    r
                }
                return s.__extends(i, t),
                i.prototype.addBreadcrumb = function(t, i) {
                    var n = document.createElement("li");
                    if (i) {
                        var s = (0,
                        h.makeAnchor)(t, "", (function() {
                            i()
                        }
                        ));
                        n.appendChild(s)
                    } else
                        n.textContent = t;
                    this.C.appendChild(n)
                }
                ,
                i.prototype.addItem = function(t, i) {
                    var n = (0,
                    h.makeAnchor)(t.name, "item", (function() {
                        i(t.keyword)
                    }
                    ));
                    this.S.appendChild(n)
                }
                ,
                i
            }(u.TemplateView)
              , w = function(t) {
                function i(i, n, s, r) {
                    var o = t.call(this, "ClipartList") || this;
                    return o.B = o.$(".scroller"),
                    o.C = o.$(".breadcrumbs"),
                    o.addBreadcrumb("Clip Art", (function() {
                        r()
                    }
                    )),
                    i && o.addBreadcrumb(i.replace(/-/g, " "), (function() {
                        r(i)
                    }
                    )),
                    o.addBreadcrumb(n),
                    e.API.clipartSearch(n, (function(t) {
                        0 != t.length ? t.forEach((function(t) {
                            o.addItem(t, s)
                        }
                        )) : o.N()
                    }
                    )),
                    o
                }
                return s.__extends(i, t),
                i.prototype.addBreadcrumb = function(t, i) {
                    var n = document.createElement("li");
                    if (i) {
                        var s = (0,
                        h.makeAnchor)(t, "", (function() {
                            i()
                        }
                        ));
                        n.appendChild(s)
                    } else
                        n.textContent = t;
                    this.C.appendChild(n)
                }
                ,
                i.prototype.addItem = function(t, i) {
                    var n = (0,
                    h.makeAnchor)("", "item", (function() {
                        i(t)
                    }
                    ))
                      , s = document.createElement("img");
                    s.setAttribute("loading", "lazy"),
                    s.src = e.API.clipartPreviewUrl(t.fileName),
                    n.appendChild(s),
                    this.B.appendChild(n)
                }
                ,
                i.prototype.N = function() {
                    var t = document.createElement("div");
                    t.className = "no-results",
                    t.textContent = "No results found.",
                    this.B.appendChild(t)
                }
                ,
                i
            }(u.TemplateView)
              , g = function(t) {
                function i(i) {
                    var n = t.call(this, "UploadDialog") || this;
                    return n.T = i,
                    n.L = n.$(".frame"),
                    n
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    var i = this;
                    t.prototype.show.call(this),
                    window.finishUploadAndAddImage = function(t, n, s, e) {
                        i.T(t, n, s, e),
                        i.hide()
                    }
                    ,
                    this.L.src = "/uploadimage"
                }
                ,
                i.prototype.hide = function() {
                    t.prototype.hide.call(this),
                    delete window.finishUploadAndAddImage
                }
                ,
                i
            }(u.Dialog)
              , m = function(t) {
                function i(i) {
                    var n = t.call(this, "MyImages") || this;
                    return n.i = i,
                    n.h = n.$(".container"),
                    e.API.myImages((function(t) {
                        if (n.h.innerHTML = "",
                        0 != t.length)
                            for (var i = 0; i < t.length; ++i)
                                n.A(t[i]);
                        else
                            n.D()
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.A = function(t) {
                    var i = this
                      , n = document.createElement("img");
                    n.className = "item",
                    n.src = t.previewUrl,
                    (0,
                    h.onClick)(n, (function() {
                        var n = i.i.productView()
                          , s = new o.ImageEntity(n);
                        s.initFromMyImage(t).then((function() {
                            n.addEntity(s),
                            n.select(s),
                            n.onEndUpdateState()
                        }
                        ))
                    }
                    )),
                    this.h.appendChild(n)
                }
                ,
                i.prototype.D = function() {
                    var t = document.createElement("div");
                    t.textContent = "You don't have any saved images.",
                    this.h.appendChild(t)
                }
                ,
                i
            }(u.TemplateView)
        }
        ,
        2369: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.AddTextPane = void 0;
            var s = n(655)
              , e = n(8709)
              , r = n(2582)
              , o = n(9109)
              , h = n(2497)
              , u = function(t) {
                function i(i) {
                    var n = t.call(this, "AddTextPane", i) || this;
                    return n.i = i,
                    n.H = n.$(".text"),
                    (0,
                    h.limitCharacterCount)(n.H, 210),
                    (0,
                    h.onClick)(n.$(".addText"), (function() {
                        var t = n.H.value.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"');
                        if (t = t.replace(/[^\x00-\xFE]/g, ""),
                        0 != (t = (0,
                        h.trimAllWhitespaceMultiline)(t)).length) {
                            var s = i.productView()
                              , e = new o.TextEntity(s);
                            e.createNew(t, r.studioConfig.DEFAULT_FONT).then((function() {
                                s.addEntity(e),
                                s.select(e),
                                s.onEndUpdateState()
                            }
                            ), (function(t) {
                                console.log(t)
                            }
                            ))
                        } else
                            n.V()
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this),
                    this.H.value = "",
                    this.R(),
                    (0,
                    h.focusAndOpenKeyboard)(this.H)
                }
                ,
                i.prototype.V = function() {
                    this.H.classList.add("input-validation-error")
                }
                ,
                i.prototype.R = function() {
                    this.H.classList.remove("input-validation-error")
                }
                ,
                i
            }(e.CloseablePane);
            i.AddTextPane = u
        }
        ,
        4094: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.RadioGroupView = i.SelectView = i.CheckboxInputView = i.ScaledNumberInputView = i.NumberInputView = i.TextAreaView = i.InputPropertyView = i.Binding = i.DialogPropertyView = i.PropertyView = i.Observable = void 0;
            var s = n(655)
              , e = function() {
                function t() {
                    this.F = []
                }
                return t.prototype.listen = function(t) {
                    this.F.push(t)
                }
                ,
                t.prototype.unlisten = function(t) {
                    for (var i = 0; i < this.F.length; ++i)
                        if (this.F[i] == t)
                            return void this.F.splice(i, 1)
                }
                ,
                t.prototype.get = function(t) {
                    return this[t]()
                }
                ,
                t.prototype.set = function(t, i) {
                    this["set_" + t](i)
                }
                ,
                t.prototype.fire = function(t, i) {
                    return this.G(t, i, !1)
                }
                ,
                t.prototype.forceFire = function(t, i) {
                    this.G(t, i, !0)
                }
                ,
                t.prototype.G = function(t, i, n) {
                    if (!n && i == this.get(t))
                        return !1;
                    for (var s = 0; s < this.F.length; ++s)
                        this.F[s](t, i);
                    return !0
                }
                ,
                t
            }();
            i.Observable = e;
            var r = function() {
                function t() {}
                return t.prototype.onchange = function(t) {
                    this.W = t
                }
                ,
                t.prototype.fireChange = function(t) {
                    if (this.W) {
                        var i = this.get();
                        this.W(i, t)
                    }
                }
                ,
                t
            }();
            i.PropertyView = r;
            var o = function(t) {
                function i() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return s.__extends(i, t),
                i
            }(r);
            i.DialogPropertyView = o;
            var h = function() {
                function t(t) {
                    var i = this;
                    this.i = t,
                    this.U = {},
                    this.q = {},
                    this.Y = function(t, n) {
                        var s = i.U[t];
                        if (s)
                            for (var e = 0; e < s.length; ++e)
                                s[e].set(n)
                    }
                }
                return t.prototype.bind = function(t, i) {
                    var n = this;
                    t in this.U || (this.U[t] = []),
                    this.U[t].push(i),
                    i.onchange((function(i, s) {
                        n.q[t] = {
                            value: i,
                            endChange: s
                        },
                        n.X()
                    }
                    ))
                }
                ,
                t.prototype.setTarget = function(t) {
                    this.J && this.J.unlisten(this.Y),
                    this.J = t,
                    this.J && (t.listen(this.Y),
                    this.Z())
                }
                ,
                t.prototype.X = function() {
                    var t = this;
                    this.K || (this.K = !0,
                    setTimeout((function() {
                        for (var i in t.q)
                            t.J.set(i, t.q[i].value),
                            !0 === t.q[i].endChange && t.i.onEndUpdateState();
                        t.K = !1,
                        t.q = {}
                    }
                    ), 0))
                }
                ,
                t.prototype.Z = function() {
                    for (var t in this.U) {
                        var i = this.U[t];
                        for (var n in i)
                            i[n].set(this.J.get(t))
                    }
                }
                ,
                t
            }();
            i.Binding = h;
            var u = function(t) {
                function i(i) {
                    var n = t.call(this) || this;
                    return n.tt = i,
                    n
                }
                return s.__extends(i, t),
                i.prototype.el = function() {
                    return this.tt
                }
                ,
                i
            }(r);
            i.InputPropertyView = u;
            var c = function(t) {
                function i(i) {
                    var n = t.call(this) || this;
                    return n.H = i,
                    n.H.onkeyup = n.H.onpaste = n.H.onchange = function() {
                        n.fireChange(!0)
                    }
                    ,
                    n
                }
                return s.__extends(i, t),
                i.prototype.get = function() {
                    return this.H.value
                }
                ,
                i.prototype.set = function(t) {
                    this.H.value = "" + t
                }
                ,
                i
            }(r);
            i.TextAreaView = c;
            var a = function(t) {
                function i(i, n, s, e, r, o, h, u, c) {
                    void 0 === n && (n = Number.MIN_VALUE),
                    void 0 === s && (s = Number.MAX_VALUE),
                    void 0 === e && (e = 1),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 0),
                    void 0 === h && (h = []),
                    void 0 === u && (u = 0),
                    void 0 === c && (c = !1);
                    var a = t.call(this, i) || this;
                    return a.it = i,
                    a.nt = n,
                    a.st = s,
                    a.et = r,
                    a.rt = o,
                    a.ot = h,
                    a.ht = u,
                    i.min = "".concat(n),
                    i.max = "" + s,
                    i.step = "any",
                    i.pattern = "[0-9]*",
                    a.it.type && "range" === a.it.type.toLowerCase() ? (a.it.oninput = function() {
                        a.ut(),
                        a.fireChange()
                    }
                    ,
                    a.it.onmousedown = function() {
                        a.ct = a.get()
                    }
                    ,
                    a.it.ontouchend = function() {
                        a.ft()
                    }
                    ,
                    a.it.onmouseup = function() {
                        a.ft()
                    }
                    ,
                    c && (a.vt = document.createElement("div"),
                    a.vt.className = "ticks",
                    a.it.after(a.vt))) : a.it.onchange = function() {
                        a.fireChange(!0)
                    }
                    ,
                    a
                }
                return s.__extends(i, t),
                i.prototype.get = function() {
                    var t = this.dt(parseFloat(this.it.value));
                    return this.it.value = "" + t,
                    this.lt(t)
                }
                ,
                i.prototype.setMin = function(t) {
                    this.nt = t,
                    this.it.min = "" + t
                }
                ,
                i.prototype.setMax = function(t) {
                    this.st = t,
                    this.it.max = "" + t
                }
                ,
                i.prototype.set = function(t) {
                    "number" == typeof t && (t = this.dt(this.wt(t)),
                    this.it.value = "" + t)
                }
                ,
                i.prototype.setTicks = function(t) {
                    if (this.vt) {
                        this.vt.innerHTML = "";
                        for (var i = 0; i < t.length; ++i)
                            this.gt(t[i][0], t[i][1])
                    }
                }
                ,
                i.prototype.gt = function(t, i) {
                    var n = document.createElement("span");
                    n.className = "tick",
                    n.style.left = t + "%",
                    n.innerHTML = i,
                    this.vt.append(n)
                }
                ,
                i.prototype.ft = function() {
                    var t = this.get();
                    this.ct !== t && (this.fireChange(!0),
                    this.ct = t)
                }
                ,
                i.prototype.ut = function() {
                    if (this.ot && 0 !== this.ot.length) {
                        var t = this.get()
                          , i = this.ot.reduce((function(i, n) {
                            return Math.abs(n - t) < Math.abs(i - t) ? n : i
                        }
                        ));
                        Math.abs(i - t) < this.ht && this.set(i)
                    }
                }
                ,
                i.prototype.dt = function(t) {
                    isNaN(t) && (t = this.rt),
                    t > this.st && (t = this.st),
                    t < this.nt && (t = this.nt);
                    var i = Math.pow(10, this.et);
                    return t = Math.round(t * i) / i
                }
                ,
                i.prototype.wt = function(t) {
                    return t
                }
                ,
                i.prototype.lt = function(t) {
                    return t
                }
                ,
                i
            }(u);
            i.NumberInputView = a;
            var f = function(t) {
                function i(i, n, s, e, r, o, h, u, c, a) {
                    void 0 === n && (n = Number.MIN_VALUE),
                    void 0 === s && (s = Number.MAX_VALUE),
                    void 0 === e && (e = 1),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 0),
                    void 0 === h && (h = 1),
                    void 0 === u && (u = []),
                    void 0 === c && (c = 0),
                    void 0 === a && (a = !1);
                    var f = t.call(this, i, n / h, s / h, e / h, r, o, u, c, a) || this;
                    return f.bt = h,
                    f
                }
                return s.__extends(i, t),
                i.prototype.setMin = function(i) {
                    t.prototype.setMin.call(this, i / this.bt)
                }
                ,
                i.prototype.setMax = function(i) {
                    t.prototype.setMax.call(this, i / this.bt)
                }
                ,
                i.prototype.wt = function(t) {
                    return t / this.bt
                }
                ,
                i.prototype.lt = function(t) {
                    return t * this.bt
                }
                ,
                i
            }(a);
            i.ScaledNumberInputView = f;
            var v = function(t) {
                function i(i) {
                    var n = t.call(this) || this;
                    return n.it = i,
                    n.it.onchange = function() {
                        n.fireChange()
                    }
                    ,
                    n
                }
                return s.__extends(i, t),
                i.prototype.get = function() {
                    return this.it.checked
                }
                ,
                i.prototype.set = function(t) {
                    this.it.checked = !!t
                }
                ,
                i
            }(r);
            i.CheckboxInputView = v;
            var d = function(t) {
                function i(i, n) {
                    var s = t.call(this) || this;
                    for (var e in s.xt = i,
                    s.kt = n,
                    n) {
                        var r = document.createElement("option");
                        r.value = e,
                        r.textContent = n[e],
                        i.appendChild(r)
                    }
                    return s.xt.onchange = function() {
                        s.fireChange()
                    }
                    ,
                    s
                }
                return s.__extends(i, t),
                i.prototype.onchange = function(t) {
                    var i = this;
                    this.xt.onchange = function() {
                        t(i.xt.value)
                    }
                }
                ,
                i.prototype.get = function() {
                    return this.xt.value
                }
                ,
                i.prototype.set = function(t) {
                    var i = t;
                    if (!(i in this.kt))
                        throw "Invalid select value";
                    this.xt.value = i
                }
                ,
                i
            }(r);
            i.SelectView = d;
            var l = function(t) {
                function i(i) {
                    var n = t.call(this) || this;
                    for (var s in n.kt = i,
                    i)
                        i[s].onchange = function(t) {
                            n.fireChange(!0)
                        }
                        ;
                    return n
                }
                return s.__extends(i, t),
                i.prototype.get = function() {
                    for (var t in this.kt)
                        if (this.kt[t].checked)
                            return t
                }
                ,
                i.prototype.set = function(t) {
                    var i = t;
                    if (!(i in this.kt))
                        throw "Invalid select value";
                    this.kt[i].checked = !0
                }
                ,
                i
            }(r);
            i.RadioGroupView = l
        }
        ,
        4881: (t, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Browser = void 0;
            var n = function() {
                function t() {}
                return t.history = function() {
                    var t = navigator.userAgent;
                    return !!t && ((-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol) && (window.history && "pushState"in window.history))
                }
                ,
                t.localstorage = function() {
                    var t = "uberprints";
                    try {
                        return localStorage.setItem(t, t),
                        localStorage.removeItem(t),
                        !0
                    } catch (t) {
                        return !1
                    }
                }
                ,
                t
            }();
            i.Browser = n
        }
        ,
        6696: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Clipboard = void 0;
            var s = n(9131)
              , e = n(2561)
              , r = n(9109)
              , o = function() {
                function t(t) {
                    this.yt = t,
                    this.Mt = [],
                    this.It = 0
                }
                return t.prototype.copyToClipboard = function(t) {
                    this.Mt = t
                }
                ,
                t.prototype.clearClipboard = function() {
                    this.Mt = null
                }
                ,
                t.prototype.isClipboardEmpty = function() {
                    return !(this.Mt && this.Mt.length > 0)
                }
                ,
                t.prototype._t = function() {
                    this.yt.undoRedo().enable(),
                    this.yt.onEndUpdateState()
                }
                ,
                t.prototype.zt = function() {
                    --this.It,
                    this.It < 0 && (console.log("_entityLoadCount mismatch."),
                    this.It = 0),
                    0 === this.It && this._t && this._t()
                }
                ,
                t.prototype.pasteFromClipboard = function(t, i) {
                    var n = this;
                    if (this.Mt && 0 !== this.Mt.length) {
                        this.yt.undoRedo().disable(),
                        this.It = this.Mt.length,
                        this.Mt.sort((function(t, i) {
                            return t.depth - i.depth
                        }
                        ));
                        for (var o, h = [], u = 0; u < this.Mt.length; u++) {
                            var c;
                            if (this.Mt[u].imageType) {
                                var a = this.Mt[u];
                                switch (a.imageType) {
                                case "upload":
                                    (c = new e.ImageEntity(this.yt)).load(a).then((function() {
                                        n.zt()
                                    }
                                    ), (function(t) {
                                        console.log(t),
                                        n.zt()
                                    }
                                    )),
                                    this.yt.addEntity(c);
                                    break;
                                case "clipart":
                                    (c = new e.ClipartEntity(this.yt)).load(a).then((function() {
                                        n.zt()
                                    }
                                    ), (function(t) {
                                        console.log(t),
                                        n.zt()
                                    }
                                    )),
                                    this.yt.addEntity(c)
                                }
                            } else {
                                var f = this.Mt[u];
                                (c = new r.TextEntity(this.yt)).load(f).then((function() {
                                    n.zt()
                                }
                                ), (function(t) {
                                    console.log(t),
                                    n.zt()
                                }
                                )),
                                this.yt.addEntity(c)
                            }
                            c && h.push(c)
                        }
                        o = new s.EntityGroup(this.yt,h);
                        var v = this.yt.curProductLocation().printLocations[0]
                          , d = o.bbox()
                          , l = d.right - d.left
                          , w = d.bottom - d.top;
                        t = Math.max(0, Math.min(t, v.width - l)),
                        i = Math.max(0, Math.min(i, v.height - w)),
                        o.set_x(t),
                        o.set_y(i),
                        h.length > 1 ? this.yt.select(o) : this.yt.select(h[0])
                    }
                }
                ,
                t
            }();
            i.Clipboard = o
        }
        ,
        8709: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.CloseablePane = void 0;
            var s = n(655)
              , e = n(6059)
              , r = n(2497)
              , o = function(t) {
                function i(i, n, s) {
                    void 0 === s && (s = !0);
                    var e = t.call(this, i) || this;
                    return e.Pt = s,
                    e.Bt = n,
                    e.Pt && null == e.Ct && (e.Ct = n.productView().elem()),
                    (0,
                    r.onClick)(e.$(".close-icon"), (function() {
                        n.showPane("continue")
                    }
                    )),
                    e
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    var t = this;
                    this.Pt && (this.Ot = document.createElement("div"),
                    this.Ot.className = "PaneGlass",
                    this.Ct.appendChild(this.Ot),
                    (0,
                    r.onClick)(this.Ot, (function() {
                        t.Bt.showPane("continue")
                    }
                    ))),
                    setTimeout((function() {
                        t.elem().classList.add("show")
                    }
                    ), 0)
                }
                ,
                i.prototype.hide = function() {
                    this.Pt && this.Ot && (this.Ct.removeChild(this.Ot),
                    this.Ot = null),
                    this.elem().classList.remove("show")
                }
                ,
                i
            }(e.TemplateView);
            i.CloseablePane = o
        }
        ,
        8418: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ShadowInkView = i.StrokeInkView = i.InksView = i.InkView = i.ProductColorPicker = i.standardInkRgb = i.getStandardInk = i.STANDARD_INKS = void 0;
            var s = n(655)
              , e = n(4094)
              , r = n(6059)
              , o = n(9109)
              , h = n(2497);
            function u(t) {
                for (var n = 0; n < i.STANDARD_INKS.length; n++)
                    if (i.STANDARD_INKS[n].inkId == t)
                        return i.STANDARD_INKS[n];
                return null
            }
            function c(t) {
                if (0 === t)
                    return !0;
                var i = u(t);
                return !!i && (0,
                h.getBrightness)((0,
                h.hexToRgb)(i.rgb)) > .5
            }
            function a(t, i, n) {
                var s = (0,
                h.makeAnchor)("", "colorBox", n);
                return f(s, t, i),
                s
            }
            function f(t, i, n) {
                var s = i.split(";");
                n && t.setAttribute("title", n),
                t.classList.remove("none"),
                "" == i ? (t.innerHTML = "",
                t.classList.add("maskInk")) : "none" == i ? (t.innerHTML = "",
                t.style.backgroundColor = "",
                t.classList.remove("maskInk"),
                t.classList.add("none")) : s.length > 2 ? (t.innerHTML = '<div class="w33" style="background-color:#' + s[0] + '"></div><div class="w34" style="background-color:#' + s[1] + '"></div><div class="w33" style="background-color:#' + s[2] + '"></div>',
                t.classList.remove("maskInk")) : s.length > 1 ? (t.innerHTML = '<div style="background-color:#' + s[0] + '"></div><div style="background-color:#' + s[1] + '"></div>',
                t.classList.remove("maskInk")) : (t.innerHTML = "",
                t.style.backgroundColor = "#" + s[0],
                t.classList.remove("maskInk"))
            }
            i.STANDARD_INKS = [{
                rgb: "",
                inkId: 0,
                name: "Shirt Color"
            }, {
                rgb: "ffffff",
                inkId: 4,
                name: "White"
            }, {
                rgb: "000000",
                inkId: 1,
                name: "Black"
            }, {
                rgb: "747678",
                inkId: 2,
                name: "Dark Gray"
            }, {
                rgb: "9aa8b1",
                inkId: 43,
                name: "Blue Gray"
            }, {
                rgb: "a5acaf",
                inkId: 3,
                name: "Light Gray"
            }, {
                rgb: "ececec",
                inkId: 44,
                name: "Ash"
            }, {
                rgb: "5d0b16",
                inkId: 5,
                name: "Maroon"
            }, {
                rgb: "910000",
                inkId: 6,
                name: "Cardinal"
            }, {
                rgb: "d52b1e",
                inkId: 7,
                name: "Red"
            }, {
                rgb: "fa8265",
                inkId: 35,
                name: "Coral"
            }, {
                rgb: "ff7a18",
                inkId: 8,
                name: "Orange"
            }, {
                rgb: "e05921",
                inkId: 48,
                name: "Tomato"
            }, {
                rgb: "ff8f36",
                inkId: 49,
                name: "Tangerine"
            }, {
                rgb: "ffb25d",
                inkId: 9,
                name: "Light Orange"
            }, {
                rgb: "fdcc94",
                inkId: 50,
                name: "Apricot"
            }, {
                rgb: "eabb00",
                inkId: 10,
                name: "Athletic Gold"
            }, {
                rgb: "f0bf64",
                inkId: 36,
                name: "Sunshine"
            }, {
                rgb: "ffde00",
                inkId: 11,
                name: "Yellow"
            }, {
                rgb: "ffffcc",
                inkId: 12,
                name: "Pale Yellow"
            }, {
                rgb: "b7bb71",
                inkId: 37,
                name: "Moss"
            }, {
                rgb: "1e3826",
                inkId: 13,
                name: "Forest Green"
            }, {
                rgb: "467a46",
                inkId: 51,
                name: "Artichoke"
            }, {
                rgb: "6a7029",
                inkId: 14,
                name: "Pine"
            }, {
                rgb: "92a678",
                inkId: 52,
                name: "Sage"
            }, {
                rgb: "009b3a",
                inkId: 15,
                name: "Kelly Green"
            }, {
                rgb: "c8e59a",
                inkId: 16,
                name: "Light Green"
            }, {
                rgb: "c9dd03",
                inkId: 17,
                name: "Lime"
            }, {
                rgb: "00796c",
                inkId: 18,
                name: "Lagoon"
            }, {
                rgb: "00a097",
                inkId: 19,
                name: "Teal"
            }, {
                rgb: "91d1c0",
                inkId: 53,
                name: "Oasis"
            }, {
                rgb: "002244",
                inkId: 20,
                name: "Navy Blue"
            }, {
                rgb: "3a5584",
                inkId: 54,
                name: "Aegean"
            }, {
                rgb: "002c77",
                inkId: 21,
                name: "Deep Blue"
            }, {
                rgb: "0039a6",
                inkId: 22,
                name: "Royal Blue"
            }, {
                rgb: "535e94",
                inkId: 38,
                name: "Denim"
            }, {
                rgb: "0073cf",
                inkId: 23,
                name: "Bright Blue"
            }, {
                rgb: "00a1de",
                inkId: 24,
                name: "Winter Blue"
            }, {
                rgb: "98c6ea",
                inkId: 25,
                name: "Light Blue"
            }, {
                rgb: "c9dbf0",
                inkId: 55,
                name: "Pale Blue"
            }, {
                rgb: "cdeee7",
                inkId: 39,
                name: "Light Aqua"
            }, {
                rgb: "4d2b67",
                inkId: 56,
                name: "Deep Purple"
            }, {
                rgb: "522398",
                inkId: 26,
                name: "Purple"
            }, {
                rgb: "644f92",
                inkId: 57,
                name: "Pomp"
            }, {
                rgb: "8975a8",
                inkId: 58,
                name: "Iris"
            }, {
                rgb: "ad80d0",
                inkId: 27,
                name: "Light Purple"
            }, {
                rgb: "ddc0ed",
                inkId: 59,
                name: "Lilac"
            }, {
                rgb: "ae6a7f",
                inkId: 40,
                name: "Raspberry"
            }, {
                rgb: "ec6f7d",
                inkId: 41,
                name: "Watermelon"
            }, {
                rgb: "d71f85",
                inkId: 28,
                name: "Magenta"
            }, {
                rgb: "eaa2c3",
                inkId: 29,
                name: "Pink"
            }, {
                rgb: "f2c9d9",
                inkId: 30,
                name: "Light Pink"
            }, {
                rgb: "f4dee0",
                inkId: 47,
                name: "Pale Pink"
            }, {
                rgb: "4c3019",
                inkId: 31,
                name: "Dark Brown"
            }, {
                rgb: "7d6552",
                inkId: 45,
                name: "Taupe"
            }, {
                rgb: "825c26",
                inkId: 32,
                name: "Light Brown"
            }, {
                rgb: "ccaf76",
                inkId: 33,
                name: "Tan"
            }, {
                rgb: "a7957a",
                inkId: 46,
                name: "Khaki"
            }, {
                rgb: "dbd0b8",
                inkId: 42,
                name: "Beige"
            }, {
                rgb: "f1c4a2",
                inkId: 34,
                name: "Bisque"
            }],
            i.getStandardInk = u,
            i.standardInkRgb = function(t, i) {
                var n = u(i);
                return n && "" != n.rgb ? n.rgb : t.productColor().rgb.split(";")[0]
            }
            ;
            var v = function() {
                function t(t, i) {
                    this.St = t,
                    this.jt = i,
                    t.className = "ProductColorPicker"
                }
                return t.prototype.setColors = function(t) {
                    this.Nt = t,
                    this.St.innerHTML = "";
                    for (var i = 0; i < t.length; ++i)
                        this.addColor(t[i])
                }
                ,
                t.prototype.addColor = function(t) {
                    var i = this;
                    if (!t.isDiscontinued) {
                        var n = a(t.rgb, t.colorName, (function() {
                            i.selectColor(t)
                        }
                        ));
                        this.St.appendChild(n)
                    }
                }
                ,
                t.prototype.selectColor = function(t) {
                    this.jt(t)
                }
                ,
                t
            }();
            i.ProductColorPicker = v;
            var d = function(t) {
                function i(i, n, s, e, r) {
                    var o = t.call(this) || this;
                    return o.St = i,
                    o.Tt = e,
                    o.Et = r,
                    i.classList.add("colorBox"),
                    null == o.Lt && (o.Lt = new g(n,s,(function(t) {
                        o.At !== t && (o.set(t),
                        o.fireChange(!0))
                    }
                    ),o.Et)),
                    (0,
                    h.onClick)(i, (function() {
                        o.Tt && o.Tt(),
                        o.show()
                    }
                    )),
                    o
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    this.Lt.show(),
                    this.Lt.select(this.At)
                }
                ,
                i.prototype.hide = function() {
                    this.Lt.hide()
                }
                ,
                i.prototype.get = function() {
                    return this.At
                }
                ,
                i.prototype.set = function(t) {
                    this.At = t;
                    var i = u(this.At);
                    i && f(this.St, i.rgb, i.name)
                }
                ,
                i
            }(e.DialogPropertyView);
            i.InkView = d;
            var l = function(t) {
                function i(i, n, s, e) {
                    var r = t.call(this) || this;
                    return r.St = i,
                    r.i = n,
                    r.h = s,
                    r.Et = e,
                    r
                }
                return s.__extends(i, t),
                i.prototype.onchange = function(t) {
                    this.W = t
                }
                ,
                i.prototype.get = function() {
                    return this.Dt
                }
                ,
                i.prototype.set = function(t) {
                    var i = t.map((function(t) {
                        return s.__assign({}, t)
                    }
                    ));
                    this.Dt = i,
                    this.Ht()
                }
                ,
                i.prototype.tryCreateDialog = function() {
                    var t = this;
                    this.Lt && this.Lt.hide(),
                    this.Lt = new m(this.i,this.Dt,this.h,(function(i) {
                        var n = t.Dt.length === i.length && t.Dt.every((function(t) {
                            return i.some((function(i) {
                                return i.inkId === t.inkId && i.colorIndex === t.colorIndex
                            }
                            ))
                        }
                        ));
                        t.set(i),
                        t.fireChange(!n)
                    }
                    ),this.Et)
                }
                ,
                i.prototype.Ht = function() {
                    this.St.innerHTML = "";
                    for (var t = 0; t < this.Dt.length; ++t)
                        this.Vt(t, this.Dt[t]);
                    "" == this.St.innerHTML && (this.St.innerHTML = "<div>Match to artwork file. (" + this.Dt.length + (1 == this.Dt.length ? " color)" : " colors)"))
                }
                ,
                i.prototype.Vt = function(t, i) {
                    var n = this
                      , s = u(i.inkId);
                    if (s) {
                        var e = a(s.rgb, s.name, (function() {
                            n.tryCreateDialog(),
                            n.Lt.show(),
                            n.Lt.selectIndex(t)
                        }
                        ));
                        this.St.appendChild(e)
                    }
                }
                ,
                i.prototype.show = function() {
                    this.Lt && this.Lt.show()
                }
                ,
                i.prototype.hide = function() {
                    this.Lt && this.Lt.hide()
                }
                ,
                i
            }(e.DialogPropertyView);
            i.InksView = l;
            var w = function(t) {
                function i(i, n, s, e, r) {
                    var o = t.call(this, i, s) || this;
                    return o.i = n,
                    o.Rt = r,
                    o.Ft = new p((function(t) {
                        e(t),
                        setTimeout((function() {
                            o.Gt(),
                            o.i.updateDescription()
                        }
                        ), 0)
                    }
                    )),
                    o.$(".selectorContainer").appendChild(o.Ft.elem()),
                    (0,
                    h.onClick)(o.$(".dlgCloseButton"), (function() {
                        o.hide(),
                        o.Rt && o.Rt()
                    }
                    )),
                    o
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this),
                    this.Gt()
                }
                ,
                i.prototype.Gt = function() {
                    this.Ft.setCurrentInks(this.i.gatherCurrentInks())
                }
                ,
                i
            }(r.Dialog)
              , g = function(t) {
                function i(i, n, s, e) {
                    var r = t.call(this, "InkPickerDialog", i, n, s, e) || this;
                    return (0,
                    h.onClick)(r.$(".continueButton"), (function() {
                        r.hide()
                    }
                    )),
                    r
                }
                return s.__extends(i, t),
                i.prototype.select = function(t) {
                    this.Ft.select(t, !1)
                }
                ,
                i
            }(w)
              , m = function(t) {
                function i(i, n, e, r, o) {
                    var h = t.call(this, "InksPickerDialog", i, e, (function(t) {
                        h.jt(t)
                    }
                    ), o) || this;
                    h.W = r,
                    h.Wt = 0,
                    h.Ut = [],
                    h.Dt = n.map((function(t) {
                        return s.__assign({}, t)
                    }
                    )),
                    h.qt = h.$(".colorsContainer");
                    for (var u = 0; u < n.length; ++u)
                        h.Yt(u, n[u]);
                    return h
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this),
                    this.selectIndex(0, !1)
                }
                ,
                i.prototype.selectIndex = function(t, i) {
                    void 0 === i && (i = !0),
                    this.Ut[this.Wt].classList.remove("selected"),
                    this.Ut[this.Wt].classList.remove("selected-alt"),
                    this.Wt = t,
                    this.Ft.select(this.Dt[this.Wt].inkId, i),
                    this.Ut[this.Wt].classList.add("selected");
                    for (var n = 0; n < this.Dt.length; n++)
                        this.$(".select-group").classList.remove("ink" + n);
                    this.$(".select-group").classList.add("ink" + this.Wt)
                }
                ,
                i.prototype.Yt = function(t, i) {
                    var n = this
                      , s = (0,
                    h.makeAnchor)("", "colorBox", (function() {
                        n.selectIndex(t)
                    }
                    ));
                    s.className = "item",
                    this.qt.appendChild(s);
                    var e = document.createElement("span");
                    e.className = "colorBox",
                    e.onclick = function(t) {
                        t.preventDefault()
                    }
                    ;
                    var r = u(i.inkId);
                    f(e, r.rgb, r.name),
                    s.appendChild(e),
                    this.Ut[t] = s
                }
                ,
                i.prototype.jt = function(t) {
                    this.Dt[this.Wt].inkId = t;
                    var i = this.Ut[this.Wt].firstChild
                      , n = u(t);
                    f(i, n.rgb, n.name),
                    this.W(this.Dt)
                }
                ,
                i
            }(w)
              , p = function(t) {
                function n(i) {
                    var n = t.call(this, "InkSelector") || this;
                    return n.jt = i,
                    n.$t = [],
                    n.Xt = [],
                    n.Jt = -1,
                    n.Zt = n.$(".currentInks"),
                    n.Kt = n.$(".inks"),
                    n.Qt(),
                    n
                }
                return s.__extends(n, t),
                n.prototype.setCurrentInks = function(t) {
                    this.Zt.innerHTML = "",
                    this.Xt = [];
                    for (var i = 0; i < this.$t.length; i++)
                        this.$t[i].innerHTML = "",
                        this.$t[i].classList.remove("current", "current-alt");
                    for (i = 0; i < t.length; ++i)
                        if (!(t[i] >= 100)) {
                            this.Xt[t[i]] = this.Vt(t[i], this.Zt);
                            var n = c(t[i]) ? "current-alt" : "current";
                            this.$t[t[i]].classList.add(n)
                        }
                    this.ti(this.Jt, this.Xt, !0)
                }
                ,
                n.prototype.select = function(t, i) {
                    void 0 === i && (i = !0),
                    this.ti(this.Jt, this.$t, !1),
                    this.ti(this.Jt, this.Xt, !1),
                    this.Jt = t,
                    this.updateSelectedInk(i),
                    this.jt(t)
                }
                ,
                n.prototype.updateSelectedInk = function(t) {
                    void 0 === t && (t = !0),
                    this.ti(this.Jt, this.$t, !0),
                    this.ti(this.Jt, this.Xt, !0),
                    (0,
                    h.centerInScroller)(this.$t[this.Jt], this.Kt, t)
                }
                ,
                n.prototype.ti = function(t, i, n) {
                    if (!(t < 0) && t in i) {
                        var s = i[t].classList
                          , e = c(t) ? "selected-alt" : "selected";
                        n ? s.add(e) : s.remove("selected", "selected-alt")
                    }
                }
                ,
                n.prototype.Qt = function() {
                    for (var t = 0; t < i.STANDARD_INKS.length; ++t) {
                        var n = i.STANDARD_INKS[t].inkId;
                        this.$t[n] = this.Vt(n, this.Kt)
                    }
                }
                ,
                n.prototype.Vt = function(t, i) {
                    var n = this
                      , s = u(t)
                      , e = a(s.rgb, s.name, (function() {
                        n.select(t)
                    }
                    ));
                    return i.appendChild(e),
                    e
                }
                ,
                n
            }(r.TemplateView)
              , b = function(t) {
                function i(i, n, s, e, r) {
                    var o = t.call(this) || this;
                    return o.St = i,
                    o.i = n,
                    o.h = s,
                    o.Tt = e,
                    o.Et = r,
                    o
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    this.Lt && (this.Lt.show(),
                    this.Lt.select(this.ii.strokeInkId))
                }
                ,
                i.prototype.hide = function() {
                    this.Lt && this.Lt.hide()
                }
                ,
                i.prototype.get = function() {
                    return this.ii
                }
                ,
                i.prototype.set = function(t) {
                    this.ii = s.__assign({}, t),
                    this.Ht()
                }
                ,
                i.prototype.tryCreateDialog = function() {
                    var t = this;
                    this.Lt && this.Lt.hide(),
                    this.Lt = new x(this.i,this.ii,this.h,(function(i, n) {
                        t.set(i),
                        t.fireChange(n),
                        setTimeout((function() {
                            t.i.updateDescription()
                        }
                        ), 0)
                    }
                    ),this.Et)
                }
                ,
                i.prototype.Ht = function() {
                    var t = this;
                    this.St.classList.add("colorBox");
                    var i = "none"
                      , n = "none";
                    if (this.ii.strokeWeight > 0) {
                        var s = u(this.ii.strokeInkId);
                        i = s.rgb,
                        n = s.name
                    }
                    f(this.St, i, n),
                    (0,
                    h.onClick)(this.St, (function() {
                        t.tryCreateDialog(),
                        t.Tt && t.Tt(),
                        t.show()
                    }
                    ))
                }
                ,
                i
            }(e.DialogPropertyView);
            i.StrokeInkView = b;
            var x = function(t) {
                function i(i, n, r, u, c) {
                    var a = t.call(this, "StrokeInkPickerDialog", i, r, (function(t) {
                        a.jt(t)
                    }
                    ), c) || this;
                    return a.ctx = i,
                    a.W = u,
                    a.ii = s.__assign({}, n),
                    a.ni = new e.NumberInputView(a.$(".strokeWeightInput"),0,o.MAX_RELATIVE_STROKE_WEIGHT,.1,1,0),
                    a.si = new e.NumberInputView(a.$(".innerStrokeWeightInput"),0,o.MAX_RELATIVE_STROKE_WEIGHT,.1,1,0),
                    a.ei(),
                    a.ni.onchange((function(t, i) {
                        a.ii.strokeWeight = t,
                        a.W(a.ii, i)
                    }
                    )),
                    a.si.onchange((function(t, i) {
                        a.ii.innerStrokeWeight = t,
                        a.W(a.ii, i)
                    }
                    )),
                    (0,
                    h.onClick)(a.$(".deleteButton"), (function() {
                        var t = a.ii.strokeWeight > 0;
                        a.ii.strokeWeight = 0,
                        a.ii.innerStrokeWeight = 0,
                        a.W(a.ii, t),
                        a.hide(),
                        c && c()
                    }
                    )),
                    a
                }
                return s.__extends(i, t),
                i.prototype.jt = function(t) {
                    this.ii.strokeInkId === t && this.ii.strokeWeight > 0 || (this.ii.strokeInkId = t,
                    0 == this.ii.strokeWeight && (this.ii.strokeWeight = o.DEFAULT_STROKE_WEIGHT,
                    this.ei()),
                    this.W(this.ii, !0))
                }
                ,
                i.prototype.ei = function() {
                    this.ni.set(this.ii.strokeWeight),
                    this.si.set(this.ii.innerStrokeWeight)
                }
                ,
                i.prototype.select = function(t) {
                    this.ii.strokeWeight > 0 && this.Ft.select(t, !1)
                }
                ,
                i
            }(w)
              , k = function(t) {
                function i(i, n, s, e, r) {
                    var o = t.call(this) || this;
                    return o.St = i,
                    o.i = n,
                    o.h = s,
                    o.Tt = e,
                    o.Et = r,
                    o
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    this.Lt && (this.Lt.show(),
                    this.Lt.select(this.ri.shadowInkId))
                }
                ,
                i.prototype.hide = function() {
                    this.Lt && this.Lt.hide()
                }
                ,
                i.prototype.get = function() {
                    return this.ri
                }
                ,
                i.prototype.set = function(t) {
                    this.ri = s.__assign({}, t),
                    this.Ht()
                }
                ,
                i.prototype.tryCreateDialog = function() {
                    var t = this;
                    this.Lt && this.Lt.hide(),
                    this.Lt = new y(this.i,this.ri,this.h,(function(i, n) {
                        t.set(i),
                        t.fireChange(n),
                        setTimeout((function() {
                            t.i.updateDescription()
                        }
                        ), 0)
                    }
                    ),this.Et)
                }
                ,
                i.prototype.Ht = function() {
                    var t = this;
                    this.St.classList.add("colorBox");
                    var i = "none"
                      , n = "none";
                    if (this.ri.shadowDistance > 0) {
                        var s = u(this.ri.shadowInkId);
                        i = s.rgb,
                        n = s.name
                    }
                    f(this.St, i, n),
                    (0,
                    h.onClick)(this.St, (function() {
                        t.tryCreateDialog(),
                        t.Tt && t.Tt(),
                        t.Lt.show(),
                        t.Lt.select(t.ri.shadowInkId)
                    }
                    ))
                }
                ,
                i
            }(e.DialogPropertyView);
            i.ShadowInkView = k;
            var y = function(t) {
                function i(i, n, r, u, c) {
                    var a = t.call(this, "ShadowInkPickerDialog", i, r, (function(t) {
                        a.jt(t)
                    }
                    ), c) || this;
                    return a.ctx = i,
                    a.W = u,
                    a.ri = s.__assign({}, n),
                    a.oi = new e.NumberInputView(a.$(".shadowDistanceInput"),0,o.MAX_RELATIVE_SHADOW_DISTANCE,.1,1,0),
                    a.hi = new e.NumberInputView(a.$(".shadowAngleInput"),0,360,1,1,0),
                    a.ei(),
                    a.oi.onchange((function(t, i) {
                        a.ri.shadowDistance = t,
                        a.W(a.ri, i)
                    }
                    )),
                    a.hi.onchange((function(t, i) {
                        a.ri.shadowAngle = t,
                        a.W(a.ri, i)
                    }
                    )),
                    (0,
                    h.onClick)(a.$(".deleteButton"), (function() {
                        var t = 0 !== a.ri.shadowDistance;
                        a.ri.shadowDistance = 0,
                        a.ri.shadowAngle = o.DEFAULT_SHADOW_ANGLE,
                        a.W(a.ri, t),
                        a.hide(),
                        c && c()
                    }
                    )),
                    a
                }
                return s.__extends(i, t),
                i.prototype.jt = function(t) {
                    this.ri.shadowInkId === t && this.ri.shadowDistance > 0 || (this.ri.shadowInkId = t,
                    0 == this.ri.shadowDistance && (this.ri.shadowDistance = o.DEFAULT_SHADOW_DISTANCE,
                    this.ri.shadowAngle = o.DEFAULT_SHADOW_ANGLE,
                    this.ei()),
                    this.W(this.ri, !0))
                }
                ,
                i.prototype.ei = function() {
                    this.oi.set(this.ri.shadowDistance),
                    this.hi.set(this.ri.shadowAngle)
                }
                ,
                i.prototype.select = function(t) {
                    this.ri.shadowDistance > 0 && this.Ft.select(t, !1)
                }
                ,
                i
            }(w)
        }
        ,
        8922: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ContextMenu = void 0;
            var s = n(655)
              , e = n(9131)
              , r = n(2497)
              , o = function(t) {
                function i(i) {
                    var n = t.call(this, "ContextMenu") || this;
                    return n.Bt = i,
                    n.ui = document.createElement("ul"),
                    n.elem().appendChild(n.ui),
                    n
                }
                return s.__extends(i, t),
                i.prototype.init = function() {
                    for (var t = this; this.ui.lastChild; )
                        this.ui.removeChild(this.ui.lastChild);
                    this.Bt.productView().selected() ? (this.ci("Copy", "copy", (function() {
                        t.copyToClipboard(),
                        t.hide()
                    }
                    )),
                    this.ci("Cut", "cut", (function() {
                        t.copyToClipboard(!0),
                        t.hide()
                    }
                    )),
                    this.ci("Paste", "paste")) : (this.ci("Copy", "copy"),
                    this.ci("Cut", "cut"),
                    this.Bt.clipboard().isClipboardEmpty() ? this.ci("Paste", "paste") : this.ci("Paste", "paste", (function() {
                        t.Bt.clipboard().pasteFromClipboard(t.ai, t.fi),
                        t.hide()
                    }
                    )))
                }
                ,
                i.prototype.showMenu = function(i, n, s, e) {
                    this.ai = null != s ? s : 0,
                    this.fi = null != e ? e : 0,
                    t.prototype.show.call(this),
                    this.init(),
                    this.elem().style.left = i + "px",
                    this.elem().style.top = n + "px",
                    this.Ot.className += " DialogTransparent",
                    this.elem().oncontextmenu = function(t) {
                        return t.preventDefault(),
                        !1
                    }
                    ,
                    this.Ot.oncontextmenu = function(t) {
                        return t.preventDefault(),
                        !1
                    }
                }
                ,
                i.prototype.copyToClipboard = function(t) {
                    void 0 === t && (t = !1);
                    var i = this.Bt.productView().selected()
                      , n = [];
                    if (i) {
                        if (i instanceof e.EntityGroup) {
                            for (var s = 0; s < i.ents().length; s++) {
                                var r = i.ents()[s].save();
                                n.push(r)
                            }
                            t && i.remove()
                        } else
                            n = [i.save()],
                            t && this.Bt.productView().removeEntity(i);
                        this.Bt.clipboard().copyToClipboard(n)
                    }
                }
                ,
                i.prototype.ci = function(t, i, n) {
                    var s = document.createElement("li")
                      , e = (0,
                    r.makeAnchor)(t, i, n);
                    n || (s.className = "disabled"),
                    s.appendChild(e),
                    this.ui.appendChild(s)
                }
                ,
                i
            }(n(6059).Dialog);
            i.ContextMenu = o
        }
        ,
        8478: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ContinueDialog = void 0;
            var s = n(655)
              , e = n(6059)
              , r = n(2497)
              , o = function(t) {
                function i(i, n) {
                    var s = t.call(this, "ContinueDialog") || this;
                    return s.vi = i,
                    s.di = n,
                    (0,
                    r.onClick)(s.$(".continue"), (function() {
                        s.hide(),
                        s.vi()
                    }
                    )),
                    (0,
                    r.onClick)(s.$(".startnew"), (function() {
                        s.hide(),
                        s.di()
                    }
                    )),
                    s
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this)
                }
                ,
                i.prototype.hide = function() {
                    t.prototype.hide.call(this)
                }
                ,
                i
            }(e.Dialog);
            i.ContinueDialog = o
        }
        ,
        6594: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ContinuePane = void 0;
            var s = n(655)
              , e = n(8709)
              , r = n(2497)
              , o = function(t) {
                function i(i) {
                    var n = t.call(this, "ContinuePane", i, !1) || this;
                    return (0,
                    r.onClick)(n.$(".image"), (function() {
                        i.showPane("addImage")
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".text"), (function() {
                        i.showPane("addText")
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".product"), (function() {
                        i.showPane("editProduct")
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i
            }(e.CloseablePane);
            i.ContinuePane = o
        }
        ,
        8997: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.DragSelectBox = i.DragHandle = void 0;
            var s = n(655)
              , e = n(4094)
              , r = n(9131)
              , o = n(6693)
              , h = n(2497)
              , u = s.__importStar(n(6516))
              , c = function(t) {
                function i(i) {
                    var n = t.call(this) || this;
                    return n.li = i,
                    n
                }
                return s.__extends(i, t),
                i.prototype.value = function() {
                    return this.wi
                }
                ,
                i.prototype.get = function() {
                    return this.wi
                }
                ,
                i.prototype.set = function(t) {
                    this.wi != t && (this.wi = t,
                    this.li(t),
                    this.fireChange())
                }
                ,
                i
            }(e.PropertyView)
              , a = function() {
                function t(t, i, n) {
                    var s = this;
                    this.gi = t,
                    this.mi = 0,
                    this.pi = new e.Binding(this.gi);
                    var r = function(t) {
                        s.bi()
                    };
                    this.xi = new c(r),
                    this.ki = new c(r),
                    this.yi = new c(r),
                    this.Mi = new c(r),
                    this.Ii = new c(r),
                    this._i = new c(r),
                    this.zi = new c(r),
                    this.Pi = new c(r),
                    this.pi.bind("width", this.yi),
                    this.pi.bind("height", this.Mi),
                    this.pi.bind("x", this.xi),
                    this.pi.bind("y", this.ki),
                    this.pi.bind("rotation", this.Ii),
                    this.pi.bind("leftOffset", this._i),
                    this.pi.bind("rightOffset", this.zi),
                    this.pi.bind("topOffset", this.Pi),
                    this.Bi = new u.Group({
                        draggable: !0
                    }),
                    this.Ci = new u.Rect({
                        stroke: "#009ddc",
                        strokeWidth: o.HANDLE_BORDER_WIDTH
                    }),
                    this.Ci.setListening(!1),
                    this.bt = this.Oi("/assets/images/studio/scale-handle.png"),
                    this.Si = this.Oi("/assets/images/studio/rotate-handle.png"),
                    this.ji = this.Oi("/assets/images/studio/delete-handle.png"),
                    this.ji.setDraggable(!1);
                    var h = !1;
                    this.ji.on(o.CLICKY_EVENTS, (function() {
                        s.Ni && (h = !0,
                        setTimeout((function() {
                            s.Ni && !h && (s.groupMode() ? s.gi.removeEntityGroup(s.Ni) : s.gi.removeEntity(s.Ni))
                        }
                        ), 200))
                    }
                    )),
                    this.ji.on(o.END_CLICKY_EVENTS, (function() {
                        h = !1
                    }
                    )),
                    this.Bi.add(this.Ci),
                    this.Bi.add(this.bt),
                    this.Bi.add(this.Si),
                    this.Bi.add(this.ji),
                    this.Bi.setDragBoundFunc(this.Ti(i, this.Ei)),
                    this.bt.setDragBoundFunc(this.Ti(this.Bi, this.Li)),
                    this.Si.setDragBoundFunc(this.Ti(i, this.Ai)),
                    this.Bi.on("dragstart", (function(t) {
                        s.Di = !0
                    }
                    )),
                    this.Bi.on("dragend mouseup touchend", (function(t) {
                        s.Di && (s.Di = !1,
                        s.Hi()),
                        s.gi.hideEdges()
                    }
                    )),
                    this.bt.on("dragstart", (function() {
                        s.Ni && (s.Vi = s.Ni.width(),
                        s.Ri = s.Ni.height(),
                        s.Fi = !0)
                    }
                    )),
                    this.bt.on("dragend mouseup touchend", (function() {
                        s.Fi && (s.Fi = !1,
                        s.Hi())
                    }
                    )),
                    this.node().setVisible(!1),
                    i.add(this.Bi),
                    "undefined" != typeof Hammer && (this.Gi = new Hammer.Manager(n,{
                        touchAction: "none",
                        recognizers: [[Hammer.Pinch, {
                            enable: !0
                        }], [Hammer.Rotate, {
                            enable: !0,
                            threshold: 15
                        }, ["pinch"]]]
                    })),
                    document.addEventListener("keydown", (function(t) {
                        if (s.Ni) {
                            if (document.activeElement && document.activeElement.type) {
                                var i = document.activeElement.type.toLowerCase();
                                if ("number" === i || "text" === i || "textarea" === i)
                                    return
                            }
                            var n = (t = t || window.event).shiftKey ? 5 * o.NUDGE_DISTANCE : o.NUDGE_DISTANCE;
                            switch (t.which || t.keyCode) {
                            case 37:
                                s.Wi(s.x() - n, s.y()),
                                s.Hi();
                                break;
                            case 38:
                                s.Wi(s.x(), s.y() - n),
                                s.Hi();
                                break;
                            case 39:
                                s.Wi(s.x() + n, s.y()),
                                s.Hi();
                                break;
                            case 40:
                                s.Wi(s.x(), s.y() + n),
                                s.Hi();
                                break;
                            default:
                                return
                            }
                            t.preventDefault()
                        }
                    }
                    ), !1)
                }
                return t.prototype.attachTo = function(t) {
                    var i = this;
                    if (this.Ni = t,
                    !t)
                        return this.node().setVisible(!1),
                        void (this.Gi && this.Gi.off("rotatestart rotatemove pinchstart pinchmove pinchend"));
                    this.Gi && this.Gi.on("pinchstart pinchmove pinchend", (function(t) {
                        i.Ui(t)
                    }
                    )),
                    this.node().setVisible(!0),
                    this.pi.setTarget(t),
                    this.xi.set(t.x()),
                    this.ki.set(t.y()),
                    this.yi.set(t.width()),
                    this.Mi.set(t.height()),
                    this.Ii.set(t.rotation()),
                    this._i.set(t.leftOffset()),
                    this.zi.set(t.rightOffset()),
                    this.Pi.set(t.topOffset())
                }
                ,
                t.prototype.ent = function() {
                    return this.Ni
                }
                ,
                t.prototype.node = function() {
                    return this.Bi
                }
                ,
                t.prototype.adjustScale = function() {
                    var t = 1 / this.Bi.getParent().getAbsoluteTransform().getMatrix()[0]
                      , i = t * o.HANDLE_BORDER_WIDTH;
                    this.Ci.setStrokeWidth(i);
                    var n = t * o.HANDLE_SIZE;
                    this.ji.setSize(n, n),
                    this.ji.setOffset(n, n),
                    this.Si.setSize(n, n),
                    this.Si.setOffset(0, n),
                    this.bt.setSize(n, n),
                    this.bt.setOffset(0, 0)
                }
                ,
                t.prototype.setListening = function(t) {
                    this.Ci.setListening(t)
                }
                ,
                t.prototype.contains = function(t) {
                    return this.ent()instanceof r.EntityGroup ? this.ent().contains(t) : this.ent() === t
                }
                ,
                t.prototype.x = function() {
                    return this.xi.value()
                }
                ,
                t.prototype.y = function() {
                    return this.ki.value()
                }
                ,
                t.prototype.width = function() {
                    return this.yi.value()
                }
                ,
                t.prototype.height = function() {
                    return this.Mi.value()
                }
                ,
                t.prototype.rotation = function() {
                    return this.Ii.value()
                }
                ,
                t.prototype.leftOffset = function() {
                    return this._i.value()
                }
                ,
                t.prototype.rightOffset = function() {
                    return this.zi.value()
                }
                ,
                t.prototype.topOffset = function() {
                    return this.Pi.value()
                }
                ,
                t.prototype.entGroup = function() {
                    return this.ent()instanceof r.EntityGroup ? this.ent() : null
                }
                ,
                t.prototype.onRotate = function(t) {
                    "rotatestart" == t.type && (this.node().stopDrag(),
                    this.mi = this.rotation());
                    var i = this.mi + t.rotation;
                    i = this.constrainRotation(i),
                    this.qi(i)
                }
                ,
                t.prototype.Ui = function(t) {
                    if ("pinchstart" == t.type) {
                        if (this.node().stopDrag(),
                        !this.Ni)
                            return;
                        this.Vi = this.Ni.width(),
                        this.Ri = this.Ni.height()
                    } else
                        "pinchend" === t.type && this.Hi();
                    this.Yi(this.Vi * t.scale, this.Ri * t.scale)
                }
                ,
                t.prototype.Ei = function(t, i) {
                    return this.Ni ? (this.Di && (this.gi.showGuideRect(),
                    this.Ni.snap() && this.gi.constrainDrag(t, this.Ni)),
                    this.Wi(t.x, t.y),
                    t) : t
                }
                ,
                t.prototype.Li = function(t, i) {
                    if (this.Fi) {
                        this.gi.showGuideRect();
                        var n = this.rightOffset()
                          , s = this.Ni.constrainSize(t.x + n, t.y, !0)[0] / this.Vi;
                        this.Yi(this.Vi * s, this.Ri * s)
                    }
                    return {
                        x: this.width() - this.rightOffset(),
                        y: this.height()
                    }
                }
                ,
                t.prototype.Ai = function(t, i) {
                    this.gi.showGuideRect();
                    var n = this.leftOffset()
                      , s = this.rightOffset()
                      , e = this.topOffset()
                      , r = this.width()
                      , o = this.height() - e
                      , u = (0,
                    h.copyTransform)(this.Bi.getTransform());
                    u.translate(r / 2, e + o / 2);
                    var c = u.getTranslation()
                      , a = (r - n - s) / 2
                      , f = -o / 2
                      , v = t.x - c.x
                      , d = t.y - c.y
                      , l = Math.atan2(a * d - f * v, a * v + f * d);
                    return l = this.constrainRotation(l),
                    this.qi((0,
                    h.radToDeg)(l)),
                    t.x = r - s,
                    t.y = e,
                    (u = (0,
                    h.copyTransform)(this.Bi.getTransform())).translate(t.x, t.y),
                    u.getTranslation()
                }
                ,
                t.prototype.qi = function(t) {
                    this.ent().set_centeredRotation(t)
                }
                ,
                t.prototype.$i = function(t) {
                    var i = this.width()
                      , n = this.height() + this.topOffset()
                      , s = (0,
                    h.copyTransform)(this.Bi.getTransform());
                    s.translate(i / 2, n / 2);
                    var e = s.getTranslation()
                      , r = this.Bi.getRotation()
                      , o = (0,
                    h.degToRad)(t);
                    o = this.constrainRotation(o);
                    var c = [this.x() - e.x, this.y() - e.y]
                      , a = new u.Transform
                      , f = new u.Transform;
                    a.rotate(r),
                    a.invert(),
                    f.rotate(o);
                    var v = (0,
                    h.multMatVec)(a, c);
                    c = (0,
                    h.multMatVec)(f, v),
                    this.Wi(e.x + c[0], e.y + c[1]),
                    this.Xi(o),
                    this.groupMode() && this.Ni.ents().forEach((function(t) {
                        var i = [t.x() - e.x, t.y() - e.y]
                          , n = (0,
                        h.multMatVec)(a, i);
                        i = (0,
                        h.multMatVec)(f, n);
                        var s = (0,
                        h.degToRad)(t.rotation()) + o - r;
                        t.set_rotation((0,
                        h.radToDeg)(s)),
                        t.set_x(e.x + i[0]),
                        t.set_y(e.y + i[1])
                    }
                    ))
                }
                ,
                t.prototype.groupMode = function() {
                    return this.ent()instanceof r.EntityGroup
                }
                ,
                t.prototype.Yi = function(t, i) {
                    if (this.Ni) {
                        var n = this.Ni.constrainSize(t, i, !0)
                          , s = this.topOffset()
                          , e = this.width()
                          , r = this.height() + s
                          , o = s * (i / this.height())
                          , h = this.Bi.getRotation()
                          , c = new u.Transform;
                        c.translate(this.x(), this.y()),
                        c.rotate(h),
                        c.translate(e / 2, r / 2),
                        c.translate(-n[0] / 2, -(n[1] + o) / 2);
                        var a = c.getTranslation();
                        this.Wi(a.x, a.y),
                        this.Ji(n[0], n[1])
                    }
                }
                ,
                t.prototype.constrainRotation = function(t) {
                    var i = 8 * t / h.TAU
                      , n = Math.round(i);
                    return Math.abs(i - n) < o.ROTATION_SNAP && (i = n),
                    i * h.TAU / 8
                }
                ,
                t.prototype.Ti = function(t, i) {
                    var n = this;
                    return function(s, e) {
                        var r = (0,
                        h.copyTransform)(t.getAbsoluteTransform());
                        r.invert(),
                        r.translate(s.x, s.y);
                        var o = r.getTranslation();
                        o.x -= t.getOffsetX(),
                        o.y -= t.getOffsetY(),
                        o = i.call(n, o, e);
                        var u = (0,
                        h.copyTransform)(t.getAbsoluteTransform());
                        return o.x += t.getOffsetX(),
                        o.y += t.getOffsetY(),
                        u.translate(o.x, o.y),
                        u.getTranslation()
                    }
                }
                ,
                t.prototype.Zi = function(t, i) {
                    var n = this.Bi.getTransform()
                      , s = (0,
                    h.multMatVec)(n, [t, i]);
                    this.Wi(s[0], s[1])
                }
                ,
                t.prototype.Wi = function(t, i) {
                    this.xi.set(t),
                    this.ki.set(i)
                }
                ,
                t.prototype.Ji = function(t, i) {
                    this.yi.set(t),
                    this.Mi.set(i)
                }
                ,
                t.prototype.Xi = function(t) {
                    this.Ii.set((0,
                    h.radToDeg)(t))
                }
                ,
                t.prototype.bi = function() {
                    var t = this.width()
                      , i = this.height()
                      , n = this.leftOffset()
                      , s = this.rightOffset()
                      , e = this.topOffset();
                    this.Ci.setX(n),
                    this.Ci.setY(e),
                    this.Ci.setSize(t - n - s, i - e),
                    this.ji.setPosition(n, e),
                    this.Si.setPosition(t - s, e),
                    this.bt.setPosition(t - s, i);
                    var r = this.x()
                      , o = this.y();
                    this.Bi.setPosition(r, o),
                    this.Bi.setRotation((0,
                    h.degToRad)(this.Ii.value()))
                }
                ,
                t.prototype.Oi = function(t) {
                    var i = this
                      , n = document.createElement("img");
                    return n.src = t,
                    n.onload = function() {
                        i.Bi.getStage().draw()
                    }
                    ,
                    new u.Image({
                        image: n,
                        draggable: !0,
                        drawHitFunc: f,
                        width: 64,
                        height: 64
                    })
                }
                ,
                t.prototype.Hi = function() {
                    this.gi.onEndUpdateState()
                }
                ,
                t
            }();
            function f(t) {
                var i = this
                  , n = i.getWidth()
                  , s = i.getHeight()
                  , e = 1.4;
                t.beginPath(),
                t.rect(-n * (e - 1) / 2, -s * (e - 1) / 2, n * e, s * e),
                t.closePath(),
                t.fillStrokeShape(i)
            }
            i.DragHandle = a;
            var v = function() {
                function t(t, i) {
                    var n = this;
                    this.gi = t,
                    this.Ki = i,
                    this.gi.bg().on(o.CLICKY_EVENTS, (function(t) {
                        t.preventDefault(),
                        n.Qi = !0
                    }
                    )),
                    o.END_CLICKY_EVENTS.split(" ").forEach((function(t) {
                        document.addEventListener(t, (function() {
                            n.tn()
                        }
                        ))
                    }
                    ));
                    var s = !1;
                    this.Ki.getStage().on("mousemove touchmove", (function(t) {
                        if (n.Qi && !s) {
                            s = !0;
                            var i = n.Ki.getStage().getPointerPosition()
                              , e = (0,
                            h.copyTransform)(n.Ki.getAbsoluteTransform());
                            e.invert(),
                            e.translate(i.x, i.y);
                            var r = e.getTranslation()
                              , o = r.x
                              , c = r.y;
                            if (n.nn) {
                                o > n.sn && (o = n.sn),
                                c > n.en && (c = n.en);
                                var a = Math.abs(Math.abs(r.y) - Math.abs(n.en))
                                  , f = Math.abs(Math.abs(r.x) - Math.abs(n.sn));
                                n.nn.setHeight(a),
                                n.nn.setWidth(f),
                                n.nn.setX(o),
                                n.nn.setY(c),
                                n.gi.draw()
                            } else
                                n.sn = o,
                                n.en = c,
                                n.nn = new u.Rect({
                                    x: o,
                                    y: c,
                                    width: 0,
                                    height: 0,
                                    fill: "#009ddc",
                                    opacity: .5
                                }),
                                n.Ki.add(n.nn);
                            setTimeout((function() {
                                s = !1
                            }
                            ), 0)
                        }
                    }
                    ))
                }
                return t.prototype.tn = function() {
                    if (this.Qi = !1,
                    this.nn) {
                        var t = this.nn.getPosition()
                          , i = this.gi.curProductLocation().printLocations[0]
                          , n = i.xStartCoord / i.scaleRatio
                          , s = i.yStartCoord / i.scaleRatio;
                        t.x -= n,
                        t.y -= s;
                        var e = {
                            x: t.x,
                            y: t.y,
                            width: this.nn.getWidth(),
                            height: this.nn.getHeight()
                        };
                        this.nn.destroy(),
                        this.nn = null,
                        this.gi.selectInRect(e)
                    }
                }
                ,
                t
            }();
            i.DragSelectBox = v
        }
        ,
        7144: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EditEntityPane = void 0;
            var s, e, r, o = n(655), h = n(4094), u = n(8418), c = n(8145), a = n(6109), f = n(2497), v = n(6059), d = (s = n(993),
            e = s.keys(),
            r = e.map(s),
            e.reduce((function(t, i, n) {
                return t[i = i.substring(i.indexOf("edit-") + 5, i.lastIndexOf(".svg"))] = r[n],
                t
            }
            ), {})), l = function(t) {
                function i(i, n) {
                    var s = t.call(this, n) || this;
                    return s.i = i,
                    s.rn = [],
                    s.pi = new h.Binding(s.i.productView()),
                    s.pi.bind("centeredRotation", new h.NumberInputView(s.$(".rotInput"),-360,360,1,0,0,[-270, -180, -90, 0, 90, 180, 270],5)),
                    s.pi.bind("centeredRotation", new h.NumberInputView(s.$(".rotBox"),-360,360,1,0)),
                    (0,
                    f.onClick)(s.$(".bringForward"), (function() {
                        s.Ni.bringForward(),
                        s.i.productView().onEndUpdateState()
                    }
                    )),
                    (0,
                    f.onClick)(s.$(".sendBackward"), (function() {
                        s.Ni.sendBackward(),
                        s.i.productView().onEndUpdateState()
                    }
                    )),
                    (0,
                    f.onClick)(s.$(".alignCenter"), (function() {
                        s.Ni.alignCenter(),
                        s.i.productView().onEndUpdateState()
                    }
                    )),
                    s.hn = s.$(".edit-tools"),
                    s.un("back", "Back").onclick = function(t) {
                        s.i.productView().select(null)
                    }
                    ,
                    s.Ot = s.$(".EditPaneGlass"),
                    (0,
                    f.onClick)(s.Ot, (function() {
                        s.closePortraitSections(),
                        s.hideDialogViews()
                    }
                    )),
                    s
                }
                return o.__extends(i, t),
                i.prototype.entity = function() {
                    return this.Ni
                }
                ,
                i.prototype.setEntity = function(t) {
                    this.Ni = t,
                    this.pi.setTarget(t)
                }
                ,
                i.prototype.cn = function(t) {
                    var i = this.$("a." + t);
                    i && i.classList.add("disabled")
                }
                ,
                i.prototype.an = function(t) {
                    var i = this.$("a." + t);
                    i && i.classList.remove("disabled")
                }
                ,
                i.prototype.un = function(t, i) {
                    var n = this.$("a." + t)
                      , s = document.createElement("div");
                    s.className = "icon",
                    s.onclick = function(t) {
                        t.preventDefault()
                    }
                    ,
                    n.append(s),
                    n.append(document.createTextNode(i));
                    var e = d[t];
                    return e ? s.innerHTML = e : console.warn("Icon missing for edit-".concat(t, ".")),
                    n
                }
                ,
                i.prototype.fn = function(t, i, n) {
                    var s = this
                      , e = this.un(t, i)
                      , r = this.$(".section." + t);
                    (0,
                    f.onClick)(e, (function() {
                        if (s.vn && s.vn === e && s.vn.classList.contains("active"))
                            return s.hideDialogViews(),
                            s.closePortraitSections(),
                            s.vn = null,
                            void (s.dn = null);
                        e.classList.contains("disabled") || (s.hideDialogViews(),
                        s.closePortraitSections(),
                        s.vn = e,
                        s.dn = r,
                        n && n instanceof c.FontPickerView || n && n instanceof u.InkView ? n.show() : n && n instanceof u.StrokeInkView || n && n instanceof u.ShadowInkView || n && n instanceof u.InksView ? (n.tryCreateDialog(),
                        n.show()) : n && n instanceof a.WarpPickerView ? n.show() : s.dn.classList.add("active"),
                        s.vn.classList.add("active"),
                        s.vn.parentElement.classList.add("selected"),
                        s.hn.classList.add("active"),
                        s.Ot.classList.add("show"),
                        (0,
                        f.centerInScroller)(e, s.hn))
                    }
                    ))
                }
                ,
                i.prototype.show = function() {}
                ,
                i.prototype.hide = function() {
                    var t = this.i.productView();
                    t.selected() == this.Ni && t.select(null)
                }
                ,
                i.prototype.context = function() {
                    return this.i
                }
                ,
                i.prototype.closeDialogs = function() {
                    this.closePortraitSections(),
                    this.hideDialogViews(),
                    this.ln()
                }
                ,
                i.prototype.closePortraitSections = function() {
                    this.vn && (this.vn.classList.remove("active"),
                    this.vn.parentElement.classList.remove("selected")),
                    this.dn && this.dn.classList.remove("active"),
                    this.hn.classList.remove("active"),
                    this.Ot.classList.remove("show")
                }
                ,
                i.prototype.ln = function() {
                    this.elem().classList.add("hide-pane")
                }
                ,
                i.prototype.hideDialogViews = function() {
                    for (var t = 0; t < this.rn.length; t++)
                        this.rn[t].hide()
                }
                ,
                i
            }(v.TemplateView);
            i.EditEntityPane = l
        }
        ,
        185: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EditGroupPane = void 0;
            var s = n(655)
              , e = n(4094)
              , r = n(7144)
              , o = n(9131)
              , h = n(6693)
              , u = n(2497)
              , c = function(t) {
                function i(i) {
                    var n = t.call(this, i, "EditGroupPane") || this;
                    return n.pi.bind("centeredRotation", new e.NumberInputView(n.$(".rotInput"),-360,360,1,0)),
                    n.pi.bind("centeredRotation", new e.NumberInputView(n.$(".rotBox"),-360,360,1,0)),
                    n.pi.bind("width", n.wn = new e.NumberInputView(n.$(".widthInput"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("width", n.gn = new e.NumberInputView(n.$(".widthBox"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("height", n.mn = new e.NumberInputView(n.$(".heightInput"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("height", n.pn = new e.NumberInputView(n.$(".heightBox"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    (0,
                    u.onClick)(n.$(".alignCenter"), (function() {
                        n.entityGroup().alignCenter(),
                        n.i.productView().onEndUpdateState()
                    }
                    )),
                    (0,
                    u.onClick)(n.$(".leftAlignEnts"), (function() {
                        n.entityGroup().leftAlignEnts(),
                        n.i.productView().onEndUpdateState()
                    }
                    )),
                    (0,
                    u.onClick)(n.$(".centerAlignEnts"), (function() {
                        n.entityGroup().centerAlignEnts(),
                        n.i.productView().onEndUpdateState()
                    }
                    )),
                    (0,
                    u.onClick)(n.$(".rightAlignEnts"), (function() {
                        n.entityGroup().rightAlignEnts(),
                        n.i.productView().onEndUpdateState()
                    }
                    )),
                    n.fn("alignment", "Alignment"),
                    n.fn("size", "Size"),
                    n.fn("rotate", "Rotate"),
                    n
                }
                return s.__extends(i, t),
                i.prototype.entityGroup = function() {
                    if (!this.bn)
                        throw Error("_entGroup is null.");
                    return this.bn
                }
                ,
                i.prototype.setEntityGroup = function(t) {
                    this.bn = t,
                    this.pi.setTarget(t),
                    this.xn()
                }
                ,
                i.prototype.show = function() {}
                ,
                i.prototype.hide = function() {
                    var t = this.i.productView()
                      , i = t.selected();
                    i instanceof o.EntityGroup && i === this.bn && t.select(null),
                    this.pi.setTarget(null),
                    this.bn = null
                }
                ,
                i.prototype.context = function() {
                    return this.i
                }
                ,
                i.prototype.xn = function() {
                    var t = this.entityGroup().sizeBounds();
                    this.wn.setMin(t.minWidth),
                    this.wn.setMax(t.maxWidth),
                    this.gn.setMin(t.minWidth),
                    this.gn.setMax(t.maxWidth),
                    this.mn.setMin(t.minHeight),
                    this.mn.setMax(t.maxHeight),
                    this.pn.setMin(t.minHeight),
                    this.pn.setMax(t.maxHeight)
                }
                ,
                i
            }(r.EditEntityPane);
            i.EditGroupPane = c
        }
        ,
        560: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EditImagePane = void 0;
            var s = n(655)
              , e = n(4094)
              , r = n(8418)
              , o = n(7144)
              , h = n(6693)
              , u = n(2561)
              , c = function(t) {
                function i(i) {
                    var n = t.call(this, i, "EditImagePane") || this
                      , s = new r.InksView(n.$(".inksContainer"),i,n.$(".ink-dialog-container"),(function() {
                        n.closePortraitSections()
                    }
                    ));
                    return n.pi.bind("width", n.wn = new e.NumberInputView(n.$(".widthInput"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("width", n.gn = new e.NumberInputView(n.$(".widthBox"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("height", n.mn = new e.NumberInputView(n.$(".heightInput"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("height", n.pn = new e.NumberInputView(n.$(".heightBox"),h.MIN_SIZE,Number.MAX_VALUE,.2,2)),
                    n.pi.bind("inks", s),
                    n.pi.bind("constrain", new e.CheckboxInputView(n.$(".constrain"))),
                    n.pi.bind("constrain", {
                        onchange: function(t) {},
                        set: function(t) {
                            n.xn(n.entity(), t)
                        }
                    }),
                    n.fn("position", "Layer"),
                    n.fn("color", "Color", s),
                    n.fn("size", "Size"),
                    n.fn("rotate", "Rotate"),
                    n.rn.push(s),
                    n
                }
                return s.__extends(i, t),
                i.prototype.setEntity = function(i) {
                    this.xn(i, i.constrain()),
                    t.prototype.setEntity.call(this, i),
                    i && i instanceof u.ImageEntity && i.matchToArtwork() ? this.cn("color") : this.an("color")
                }
                ,
                i.prototype.hide = function() {
                    for (var i = 0; i < this.rn.length; i++)
                        this.rn[i].hide();
                    this.vn && (this.vn.classList.remove("active"),
                    this.vn.parentElement.classList.remove("selected")),
                    t.prototype.hide.call(this)
                }
                ,
                i.prototype.xn = function(t, i) {
                    var n = t.sizeBounds();
                    this.wn.setMin(n.minWidth),
                    this.wn.setMax(n.maxWidth),
                    this.gn.setMin(n.minWidth),
                    this.gn.setMax(n.maxWidth),
                    this.mn.setMin(n.minHeight),
                    this.mn.setMax(n.maxHeight),
                    this.pn.setMin(n.minHeight),
                    this.pn.setMax(n.maxHeight)
                }
                ,
                i
            }(o.EditEntityPane);
            i.EditImagePane = c
        }
        ,
        6904: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EditProductPane = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(8709)
              , o = n(8418)
              , h = n(2497)
              , u = n(6059)
              , c = function(t) {
                function i(i) {
                    var n = t.call(this, "EditProductPane", i) || this;
                    return n.i = i,
                    n.kn = n.$(".productName"),
                    n.yn = n.$(".mfgName"),
                    n.Mn = n.$(".sizes"),
                    n.In = n.$(".fabric"),
                    n._n = n.$(".description"),
                    n.zn = new o.ProductColorPicker(n.$(".digitalInks"),(function(t) {
                        n.Pn(t, e.API.DECORATION_DIGITALPRINT)
                    }
                    )),
                    n.Bn = new o.ProductColorPicker(n.$(".screenInks"),(function(t) {
                        n.Pn(t, e.API.DECORATION_SCREENPRINT)
                    }
                    )),
                    n.Cn = new o.ProductColorPicker(n.$(".embroideryInks"),(function(t) {
                        n.Pn(t, e.API.DECORATION_EMBROIDER)
                    }
                    )),
                    n.On = n.$(".digitalInkContainer"),
                    n.Sn = n.$(".screenInkContainer"),
                    n.jn = n.$(".embroideryInkContainer"),
                    (0,
                    h.onClick)(n.$(".findProduct"), (function() {
                        n.Nn()
                    }
                    )),
                    n.Tn = n.$(".sizeChartLink"),
                    (0,
                    h.onClick)(n.Tn, (function() {
                        window.open(e.API.sizeChartUrl(n.i.product().productId), "sizeChart", "status=no,toolbar=no,resizable=yes,scrollbars=no,left=530,top=322,directories=no,menubar=no,width=620,height=380")
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this),
                    this.En()
                }
                ,
                i.prototype.En = function() {
                    var t = this.i.product();
                    this.kn.textContent = t.name,
                    this.yn.textContent = t.manufacturerName,
                    this.Mn.textContent = this.Ln(t),
                    this.In.textContent = t.fabric,
                    this._n.textContent = t.description,
                    this.Tn.style.visibility = t.hasSizeChart ? "visible" : "hidden",
                    this.zn.setColors(t.digitalPrintColors),
                    this.Bn.setColors(t.screenPrintColors),
                    this.Cn.setColors(t.embroideryColors),
                    this.On.style.display = t.digitalPrintColors.length > 0 ? "block" : "none",
                    this.Sn.style.display = t.screenPrintColors.length > 0 ? "block" : "none",
                    this.jn.style.display = t.embroideryColors.length > 0 ? "block" : "none"
                }
                ,
                i.prototype.An = function(t, i) {
                    this.i.setProductColor(t, i)
                }
                ,
                i.prototype.Pn = function(t, i) {
                    var n = this.i.productColor().colorId;
                    this.An(t, i),
                    n !== t.colorId && this.i.productView().onEndUpdateState(),
                    this.i.isMobileView() && this.i.showPane("continue")
                }
                ,
                i.prototype.Ln = function(t) {
                    var i = t.sizeArray.split(",");
                    return 1 == i.length ? i[0] : i[0] + " - " + i[i.length - 1]
                }
                ,
                i.prototype.Nn = function() {
                    var t = this;
                    new a((function(i, n, s) {
                        t.i.setProduct(i).then((function() {
                            t.En(),
                            t.An(e.API.findProductColor(t.i.product(), n), s),
                            t.i.productView().onEndUpdateState(),
                            t.i.showPane("continue")
                        }
                        ))
                    }
                    )).show()
                }
                ,
                i
            }(r.CloseablePane);
            i.EditProductPane = c;
            var a = function(t) {
                function i(i) {
                    var n = t.call(this, "ProductDialog") || this;
                    return n.Dn = i,
                    n.L = n.$(".frame"),
                    n
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    var i = this;
                    t.prototype.show.call(this),
                    this.L.onload = function(t) {
                        var n = i.L.contentWindow.initializeForStudio;
                        n && n((function(t, n, s) {
                            i.Dn(t, n, s),
                            i.hide()
                        }
                        ))
                    }
                    ,
                    this.L.src = "/catalog/shortsleeve-t-shirts?d=m"
                }
                ,
                i
            }(u.Dialog)
        }
        ,
        5804: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EditTextPane = void 0;
            var s = n(655)
              , e = n(4094)
              , r = n(8418)
              , o = n(7144)
              , h = n(8145)
              , u = n(6109)
              , c = n(9109)
              , a = n(6109)
              , f = function(t) {
                function i(i) {
                    var n = t.call(this, i, "EditTextPane") || this
                      , s = n.$(".ink-dialog-container")
                      , o = new h.FontPickerView(n.$(".fontPreviewImg"),i,n.$(".font-dialog-container"),(function() {
                        n.onShowDialog()
                    }
                    ),(function() {
                        n.onCloseDialog()
                    }
                    ))
                      , f = new r.InkView(n.$(".colorAnchor"),i,s,(function() {
                        n.hideDialogViews()
                    }
                    ),(function() {
                        n.closePortraitSections()
                    }
                    ))
                      , v = new r.StrokeInkView(n.$(".strokeColorAnchor"),i,s,(function() {
                        n.hideDialogViews()
                    }
                    ),(function() {
                        n.closePortraitSections()
                    }
                    ))
                      , d = new r.ShadowInkView(n.$(".shadowColorAnchor"),i,s,(function() {
                        n.hideDialogViews()
                    }
                    ),(function() {
                        n.closePortraitSections()
                    }
                    ))
                      , l = new u.WarpPickerView(n.$(".warp-preview"),i,n.elem(),(function() {
                        n.onShowDialog()
                    }
                    ),(function() {
                        n.onCloseDialog()
                    }
                    ));
                    n.pi.bind("text", new e.TextAreaView(n.$(".editor"))),
                    n.pi.bind("size", new e.NumberInputView(n.$(".sizeInput"),c.MIN_TEXT_SIZE,c.MAX_TEXT_SIZE,.1,3,1)),
                    n.pi.bind("size", new e.NumberInputView(n.$(".sizeBox"),c.MIN_TEXT_SIZE,c.MAX_TEXT_SIZE,.1,3,1)),
                    n.pi.bind("tracking", new e.ScaledNumberInputView(n.$(".trackingInput"),-300,1e3,10,0,0,10)),
                    n.pi.bind("tracking", new e.ScaledNumberInputView(n.$(".trackingBox"),-300,1e3,10,0,0,10)),
                    n.pi.bind("lineHeight", new e.NumberInputView(n.$(".leadingInput"),.5,3,.1,2,1.22)),
                    n.pi.bind("lineHeight", new e.NumberInputView(n.$(".leadingBox"),.5,3,.1,2,1.22)),
                    n.pi.bind("horizontalScale", new e.ScaledNumberInputView(n.$(".horizontalScaleInput"),c.MIN_TEXT_XSCALE,c.MAX_TEXT_XSCALE,.01,0,1,.01,[1],.05)),
                    n.pi.bind("horizontalScale", new e.ScaledNumberInputView(n.$(".horizontalScaleBox"),c.MIN_TEXT_XSCALE,c.MAX_TEXT_XSCALE,.01,0,1,.01));
                    var w = n.$(".justifyLeft")
                      , g = n.$(".justifyCenter")
                      , m = n.$(".justifyRight");
                    n.pi.bind("justification", new e.RadioGroupView({
                        left: w,
                        center: g,
                        right: m
                    }));
                    var p = n.$(".justify-left")
                      , b = n.$(".justify-center")
                      , x = n.$(".justify-right");
                    n.pi.bind("justification", new e.RadioGroupView({
                        left: p,
                        center: b,
                        right: x
                    }));
                    var k = new e.ScaledNumberInputView(n.$(".warpValInput"),-1,1,.1,0,0,.01,[0],.03,!0)
                      , y = new e.ScaledNumberInputView(n.$(".warpValBox"),-1,1,.1,0,0,.01);
                    return n.pi.bind("warpVal", k),
                    n.pi.bind("warpVal", y),
                    n.pi.bind("warpType", {
                        onchange: function(t) {},
                        set: function(t) {
                            if ("none" === t)
                                k.el().disabled = !0,
                                y.el().disabled = !0;
                            else {
                                k.el().disabled = !1,
                                y.el().disabled = !1;
                                var i = (0,
                                a.warpMin)(t);
                                y.setMin(i),
                                k.setMin(i),
                                l.dlg().slider().setMin(i),
                                0 === i ? l.dlg().slider().setTicks([["0", "0"], ["100", "Max"]]) : l.dlg().slider().setTicks([["0", "Min"], ["50", "0"], ["100", "Max"]])
                            }
                        }
                    }),
                    n.pi.bind("warpVal", {
                        onchange: function(t) {},
                        set: function(t) {
                            "curve" === n.entity().warpType() && 0 !== t ? (n.entity().set_justification("center"),
                            w.disabled = p.disabled = !0,
                            m.disabled = x.disabled = !0) : (w.disabled = p.disabled = !1,
                            m.disabled = x.disabled = !1)
                        }
                    }),
                    n.pi.bind("font", o),
                    n.pi.bind("color", f),
                    n.pi.bind("stroke", v),
                    n.pi.bind("shadow", d),
                    n.pi.bind("warp", l),
                    n.fn("position", "Layer"),
                    n.fn("text", "Text"),
                    n.fn("font", "Font", o),
                    n.fn("color", "Color", f),
                    n.fn("text-size", "Size"),
                    n.fn("stroke", "Outline", v),
                    n.fn("shadow", "Shadow", d),
                    n.fn("warp", "Shape", l),
                    n.fn("rotate", "Rotate"),
                    n.fn("spacing", "Spacing"),
                    n.rn.push(o),
                    n.rn.push(f),
                    n.rn.push(v),
                    n.rn.push(d),
                    n.rn.push(l),
                    n
                }
                return s.__extends(i, t),
                i.prototype.hide = function() {
                    for (var i = 0; i < this.rn.length; i++)
                        this.rn[i].hide();
                    this.vn && (this.vn.classList.remove("active"),
                    this.vn.parentElement.classList.remove("selected")),
                    t.prototype.hide.call(this)
                }
                ,
                i.prototype.onShowDialog = function() {
                    this.hideDialogViews(),
                    this.elem().classList.add("dialog-open")
                }
                ,
                i.prototype.onCloseDialog = function() {
                    this.closePortraitSections(),
                    this.elem().classList.remove("dialog-open")
                }
                ,
                i.prototype.entity = function() {
                    return t.prototype.entity.call(this)
                }
                ,
                i
            }(o.EditEntityPane);
            i.EditTextPane = f
        }
        ,
        1986: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.rectHitFunc = i.Entity = void 0;
            var s = n(655)
              , e = n(4094)
              , r = n(6693)
              , o = n(2497)
              , h = s.__importStar(n(6516))
              , u = function(t) {
                function i(i) {
                    var n = t.call(this) || this;
                    return n.view = i,
                    n.xi = 0,
                    n.ki = 0,
                    n.Hn = 1,
                    n.Vn = 1,
                    n.Rn = 0,
                    n._i = 0,
                    n.zi = 0,
                    n.Pi = 0,
                    n.ut = !0,
                    n.Fn = !0,
                    n.Gn = 0,
                    n
                }
                return s.__extends(i, t),
                i.prototype.init = function(t) {
                    var i = this;
                    this.Wn = t,
                    this.Wn.on(r.CLICKY_EVENTS, (function(t) {
                        i.view.onEntityClicked(i, t)
                    }
                    )),
                    this.Wn.on(r.END_CLICKY_EVENTS, (function(t) {
                        2 === t.button && (t.preventDefault(),
                        i.view.onEntityRightClicked(i, t))
                    }
                    ))
                }
                ,
                i.prototype.load = function(t) {
                    this.set_rotation(t.rotation)
                }
                ,
                i.prototype.save = function() {
                    return {
                        depth: this.node().getZIndex(),
                        rotation: this.Rn
                    }
                }
                ,
                i.prototype.node = function() {
                    return this.Wn
                }
                ,
                i.prototype.x = function() {
                    return this.xi
                }
                ,
                i.prototype.y = function() {
                    return this.ki
                }
                ,
                i.prototype.width = function() {
                    return this.Hn
                }
                ,
                i.prototype.height = function() {
                    return this.Vn
                }
                ,
                i.prototype.rotation = function() {
                    return this.Rn
                }
                ,
                i.prototype.centeredRotation = function() {
                    return this.Rn
                }
                ,
                i.prototype.leftOffset = function() {
                    return this._i
                }
                ,
                i.prototype.rightOffset = function() {
                    return this.zi
                }
                ,
                i.prototype.topOffset = function() {
                    return this.Pi
                }
                ,
                i.prototype.constrain = function() {
                    return this.Fn
                }
                ,
                i.prototype.snap = function() {
                    return this.ut
                }
                ,
                i.prototype.setArtboardIndex = function(t) {
                    this.Gn = t
                }
                ,
                i.prototype.artboardIndex = function() {
                    return this.Gn
                }
                ,
                i.prototype.set_x = function(t) {
                    this.fire("x", t) && (this.xi = t,
                    this.node().setX(this.x()),
                    this.view.draw())
                }
                ,
                i.prototype.set_y = function(t) {
                    this.fire("y", t) && (this.ki = t,
                    this.node().setY(this.y()),
                    this.view.draw())
                }
                ,
                i.prototype.set_width = function(t) {
                    var i = this.constrainSize(t, this.Vn, !0);
                    this.fire("width", i[0]) && (this.Hn = i[0],
                    this.fire("height", i[1]),
                    this.Vn = i[1],
                    this.node().setSize(this.Hn, this.Vn),
                    this.view.draw())
                }
                ,
                i.prototype.set_height = function(t) {
                    var i = this.constrainSize(this.Hn, t, !1);
                    this.fire("height", i[1]) && (this.Vn = i[1],
                    this.fire("width", i[0]),
                    this.Hn = i[0],
                    this.node().setSize(this.Hn, this.Vn),
                    this.view.draw())
                }
                ,
                i.prototype.set_rotation = function(t) {
                    this.fire("rotation", t) && (this.fire("centeredRotation", t),
                    this.Rn = t,
                    this.node().setRotation((0,
                    o.degToRad)(t)),
                    this.view.draw())
                }
                ,
                i.prototype.set_centeredRotation = function(t) {
                    if (this.fire("rotation", t)) {
                        this.fire("centeredRotation", t);
                        var i = (0,
                        o.degToRad)(this.Rn)
                          , n = (0,
                        o.degToRad)(t)
                          , s = this.width()
                          , e = this.height() + this.topOffset()
                          , r = new h.Transform;
                        r.translate(this.x(), this.y()),
                        r.rotate(i),
                        r.translate(s / 2, e / 2);
                        var u = r.getTranslation()
                          , c = [this.x() - u.x, this.y() - u.y]
                          , a = new h.Transform
                          , f = new h.Transform;
                        a.rotate(i),
                        a.invert(),
                        f.rotate(n);
                        var v = (0,
                        o.multMatVec)(a, c);
                        c = (0,
                        o.multMatVec)(f, v),
                        this.set_rotation(t),
                        this.set_x(u.x + c[0]),
                        this.set_y(u.y + c[1])
                    }
                }
                ,
                i.prototype.set_snap = function(t) {
                    this.fire("snap", t) && (this.ut = t)
                }
                ,
                i.prototype.set_constrain = function(t) {
                    this.fire("constrain", t) && (this.Fn = t)
                }
                ,
                i.prototype.set_leftOffset = function(t) {
                    this.fire("leftOffset", t) && (this._i = t)
                }
                ,
                i.prototype.set_rightOffset = function(t) {
                    this.fire("rightOffset", t) && (this.zi = t)
                }
                ,
                i.prototype.set_topOffset = function(t) {
                    this.fire("topOffset", t) && (this.Pi = t)
                }
                ,
                i.prototype.alignLeft = function() {
                    var t = this.bbox();
                    this.set_x(this.x() - t.left)
                }
                ,
                i.prototype.alignCenter = function() {
                    var t = this.view.curProductLocation().printLocations[0].width
                      , i = this.bbox();
                    this.set_x(this.x() + (t / 2 - i.horzCenter))
                }
                ,
                i.prototype.alignRight = function() {
                    var t = this.view.curProductLocation().printLocations[0].width
                      , i = this.bbox();
                    this.set_x(this.x() + (t - i.right))
                }
                ,
                i.prototype.alignIdealPosition = function() {
                    var t = this.view.curProductLocation().printLocations[0].width
                      , i = this.view.curProductLocation().printLocations[0].height
                      , n = this.bbox()
                      , s = Math.max(Math.min(i - n.bottom, 2), 0);
                    this.set_x(this.x() + (t / 2 - n.horzCenter)),
                    this.set_y(s)
                }
                ,
                i.prototype.bringToFront = function() {
                    this.node().moveToTop(),
                    this.view.draw()
                }
                ,
                i.prototype.bringForward = function() {
                    this.node().moveUp(),
                    this.view.draw()
                }
                ,
                i.prototype.sendBackward = function() {
                    this.node().moveDown(),
                    this.view.draw()
                }
                ,
                i.prototype.sendToBack = function() {
                    this.node().moveToBottom(),
                    this.view.draw()
                }
                ,
                i.prototype.constrainSize = function(t, i, n) {
                    var s = this.sizeBounds();
                    if (t < s.minWidth && (t = s.minWidth),
                    i < s.minHeight && (i = s.minHeight),
                    t > s.maxWidth && (t = s.maxWidth),
                    i > s.maxHeight && (i = s.maxHeight),
                    this.Fn) {
                        var e = this.width() / this.height();
                        t / i != e && (n ? i = t / e : t = i * e)
                    }
                    return [t, i]
                }
                ,
                i.prototype.sizeBounds = function() {
                    var t = this.view.getProductLocation(this.Gn).printLocations[0];
                    if (this.Fn) {
                        var i = this.width() / this.height();
                        return i > 1 ? {
                            minWidth: r.MIN_SIZE * i,
                            minHeight: r.MIN_SIZE,
                            maxWidth: t.width,
                            maxHeight: t.width / i
                        } : {
                            minWidth: r.MIN_SIZE,
                            minHeight: r.MIN_SIZE / i,
                            maxWidth: t.height * i,
                            maxHeight: t.height
                        }
                    }
                    return {
                        minWidth: r.MIN_SIZE,
                        minHeight: r.MIN_SIZE,
                        maxWidth: t.width,
                        maxHeight: t.height
                    }
                }
                ,
                i.prototype.inks = function() {
                    return []
                }
                ,
                i.prototype.setSizeRaw = function(t, i) {
                    var n = this.constrain();
                    this.set_constrain(!1),
                    this.set_width(t),
                    this.set_height(i),
                    this.set_constrain(n)
                }
                ,
                i.prototype.bbox = function() {
                    return this.pos_bbox(this.x(), this.y())
                }
                ,
                i.prototype.pos_bbox = function(t, i) {
                    for (var n = this.leftOffset(), s = this.rightOffset(), e = this.topOffset(), r = this.width(), h = this.height(), u = [{
                        x: n,
                        y: e
                    }, {
                        x: r - s,
                        y: e
                    }, {
                        x: r - s,
                        y: h
                    }, {
                        x: n,
                        y: h
                    }], c = (0,
                    o.degToRad)(this.rotation()), a = Math.sin(c), f = Math.cos(c), v = n, d = n, l = e, w = e, g = 0; g < u.length; ++g) {
                        var m = u[g]
                          , p = f * m.x - a * m.y
                          , b = a * m.x + f * m.y;
                        p < v && (v = p),
                        b < l && (l = b),
                        p > d && (d = p),
                        b > w && (w = b)
                    }
                    return {
                        left: t + v,
                        right: t + d,
                        horzCenter: t + (v + d) / 2,
                        top: i + l,
                        bottom: i + w,
                        vertCenter: i + (l + w) / 2
                    }
                }
                ,
                i.prototype.guideRect = function(t) {
                    if (!this.Un) {
                        var i = this.leftOffset()
                          , n = this.rightOffset()
                          , s = this.topOffset();
                        this.Un = new h.Rect({
                            x: this.x(),
                            y: this.y(),
                            offsetX: -i,
                            offsetY: -s,
                            width: this.width() - i - n,
                            height: this.height() - s,
                            rotation: this.node().getRotation(),
                            stroke: "#009ddc"
                        })
                    }
                    return this.Un.setStrokeWidth(t),
                    this.Un
                }
                ,
                i.prototype.removeGuideRect = function() {
                    this.Un && (this.Un.destroy(),
                    this.Un = null)
                }
                ,
                i.prototype.fire = function(i, n) {
                    var s = t.prototype.fire.call(this, i, n);
                    return s && this.view.notifyChange(),
                    s
                }
                ,
                i.prototype.forceFire = function(i, n) {
                    t.prototype.forceFire.call(this, i, n),
                    this.view.notifyChange()
                }
                ,
                i.prototype.onDeselected = function() {
                    var t = this.view.curProductLocation().printLocations[0]
                      , i = this.bbox();
                    (i.left > t.width || i.top > t.height || i.right < 0 || i.bottom < 0) && this.view.removeEntity(this)
                }
                ,
                i.prototype.scaleChanged = function() {}
                ,
                i.prototype.productColorChanged = function() {}
                ,
                i
            }(e.Observable);
            i.Entity = u,
            i.rectHitFunc = function(t) {
                var i = this;
                t.beginPath(),
                t.rect(0, 0, i.getWidth(), i.getHeight()),
                t.closePath(),
                t.fillStrokeShape(i)
            }
        }
        ,
        9131: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EntityGroup = void 0;
            var s = n(655)
              , e = n(1986)
              , r = n(6693)
              , o = n(9109)
              , h = n(2497)
              , u = s.__importStar(n(6516))
              , c = function(t) {
                function i(i, n) {
                    var s = t.call(this, i) || this;
                    s.qn = n,
                    s.Fn = !0;
                    var e = s.bbox();
                    return s.xi = e.left,
                    s.ki = e.top,
                    s.Hn = e.right - e.left,
                    s.Vn = e.bottom - e.top,
                    s.Rn = 0,
                    s.Yn = s.$n(),
                    s
                }
                return s.__extends(i, t),
                i.prototype.node = function() {
                    return null
                }
                ,
                i.prototype.snap = function() {
                    return !1
                }
                ,
                i.prototype.ents = function() {
                    return this.qn
                }
                ,
                i.prototype.rotation = function() {
                    return this.Rn
                }
                ,
                i.prototype.bbox = function() {
                    if (!this.qn)
                        return {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            horzCenter: 0,
                            vertCenter: 0
                        };
                    for (var t = Number.MAX_VALUE, i = Number.MIN_VALUE, n = Number.MAX_VALUE, s = Number.MIN_VALUE, e = 0; e < this.qn.length; e++) {
                        var r = this.qn[e].bbox();
                        t = Math.min(r.top, t),
                        i = Math.max(r.bottom, i),
                        n = Math.min(r.left, n),
                        s = Math.max(r.right, s)
                    }
                    return {
                        left: n,
                        top: t,
                        right: s,
                        bottom: i,
                        horzCenter: n + (s - n) / 2,
                        vertCenter: t + (i - t)
                    }
                }
                ,
                i.prototype.alignCenter = function() {
                    var t = this.view.curProductLocation().printLocations[0].width
                      , i = this.bbox()
                      , n = this.x() + (t / 2 - i.horzCenter);
                    this.xi;
                    this.set_x(n)
                }
                ,
                i.prototype.centerAlignEnts = function() {
                    var t = this.bbox();
                    this.qn.forEach((function(i) {
                        var n = i.bbox()
                          , s = i.x() + (t.horzCenter - n.horzCenter);
                        i.set_x(s)
                    }
                    ))
                }
                ,
                i.prototype.leftAlignEnts = function() {
                    var t = this.x();
                    this.qn.forEach((function(i) {
                        var n = i.bbox()
                          , s = i.x() + (t - n.left);
                        i.set_x(s)
                    }
                    ))
                }
                ,
                i.prototype.rightAlignEnts = function() {
                    var t = this.bbox();
                    this.qn.forEach((function(i) {
                        var n = i.bbox()
                          , s = i.x() + (t.right - n.right);
                        i.set_x(s)
                    }
                    ))
                }
                ,
                i.prototype.contains = function(t) {
                    if (!this.qn)
                        return !1;
                    for (var i = 0; i < this.qn.length; i++)
                        if (this.qn[i] === t)
                            return !0;
                    return !1
                }
                ,
                i.prototype.constrainSize = function(t, i, n) {
                    var s = this.sizeBounds();
                    if (t < s.minWidth && (t = s.minWidth),
                    i < s.minHeight && (i = s.minHeight),
                    t > s.maxWidth && (t = s.maxWidth),
                    i > s.maxHeight && (i = s.maxHeight),
                    this.Fn) {
                        var e = this.width() / this.height();
                        t / i != e && (n ? i = t / e : t = i * e)
                    }
                    return [t, i]
                }
                ,
                i.prototype.sizeBounds = function() {
                    return this.Yn
                }
                ,
                i.prototype.onDeselected = function() {
                    this.qn && this.qn.forEach((function(t) {
                        t.onDeselected()
                    }
                    ))
                }
                ,
                i.prototype.remove = function() {
                    var t = this;
                    this.qn && this.qn.forEach((function(i) {
                        t.view.removeEntity(i)
                    }
                    ))
                }
                ,
                i.prototype.set_x = function(t, i) {
                    if (void 0 === i && (i = !0),
                    this.qn) {
                        var n = this.x();
                        if (this.fire("x", t)) {
                            this.xi = t;
                            var s = t - n;
                            if (i)
                                for (var e = 0; e < this.qn.length; e++) {
                                    var r = this.qn[e].x();
                                    this.qn[e].set_x(r + s)
                                }
                            this.view.draw()
                        }
                    }
                }
                ,
                i.prototype.set_y = function(t, i) {
                    if (void 0 === i && (i = !0),
                    this.qn) {
                        var n = this.y();
                        if (this.fire("y", t)) {
                            this.ki = t;
                            var s = t - n;
                            if (i)
                                for (var e = 0; e < this.qn.length; e++) {
                                    var r = this.qn[e].y();
                                    this.qn[e].set_y(r + s)
                                }
                            this.view.draw()
                        }
                    }
                }
                ,
                i.prototype.set_width = function(t) {
                    if (this.qn) {
                        var i = this.constrainSize(t, this.Vn, !0);
                        if (this.fire("width", i[0]) && 0 !== i[0] && 0 !== this.Hn) {
                            var n = i[0] / this.Hn;
                            this.Hn = i[0],
                            this.fire("height", i[1]),
                            this.Vn = i[1];
                            for (var s = 0; s < this.qn.length; s++) {
                                var e = this.qn[s].x()
                                  , r = e - this.xi
                                  , o = this.qn[s].y()
                                  , h = o - this.ki;
                                this.qn[s].set_width(this.qn[s].width() * n),
                                this.qn[s].set_x(e + r * (n - 1)),
                                this.qn[s].set_y(o + h * (n - 1))
                            }
                            this.view.draw()
                        }
                    }
                }
                ,
                i.prototype.set_height = function(t) {
                    if (this.qn) {
                        var i = this.constrainSize(this.Hn, t, !1);
                        if (this.fire("height", i[1])) {
                            var n = i[1] / this.Vn;
                            this.Vn = i[1],
                            this.fire("width", i[0]),
                            this.Hn = i[0];
                            for (var s = 0; s < this.qn.length; s++) {
                                var e = this.qn[s].x()
                                  , r = e - this.xi
                                  , o = this.qn[s].y()
                                  , h = o - this.ki;
                                this.qn[s].set_width(this.qn[s].width() * n),
                                this.qn[s].set_x(e + r * (n - 1)),
                                this.qn[s].set_y(o + h * (n - 1))
                            }
                        }
                    }
                }
                ,
                i.prototype.set_rotation = function(t) {
                    this.qn && this.fire("rotation", t) && (this.fire("centeredRotation", t),
                    this.Rn = t)
                }
                ,
                i.prototype.set_centeredRotation = function(t) {
                    if (this.qn) {
                        var i = (0,
                        h.degToRad)(t);
                        if (this.fire("rotation", t)) {
                            this.fire("centeredRotation", i);
                            var n = this.width()
                              , s = this.height() + this.topOffset()
                              , e = (0,
                            h.degToRad)(this.rotation())
                              , r = i - e
                              , o = new u.Transform;
                            o.translate(this.x(), this.y()),
                            o.rotate(e);
                            var c = (0,
                            h.multMatVec)(o, [n / 2, s / 2])
                              , a = c[0]
                              , f = c[1]
                              , v = [this.x() - a, this.y() - f]
                              , d = new u.Transform
                              , l = new u.Transform;
                            d.rotate(e),
                            d.invert(),
                            l.rotate(i);
                            var w = (0,
                            h.multMatVec)(d, v);
                            v = (0,
                            h.multMatVec)(l, w),
                            this.set_rotation(t),
                            this.set_x(a + v[0], !1),
                            this.set_y(f + v[1], !1),
                            this.ents().forEach((function(t) {
                                var i = [t.x() - a, t.y() - f]
                                  , n = (0,
                                h.multMatVec)(d, i);
                                i = (0,
                                h.multMatVec)(l, n);
                                var s = (0,
                                h.degToRad)(t.rotation()) + r;
                                t.set_rotation((0,
                                h.radToDeg)(s)),
                                t.set_x(a + i[0]),
                                t.set_y(f + i[1])
                            }
                            ))
                        }
                    }
                }
                ,
                i.prototype.set_topOffset = function(t) {}
                ,
                i.prototype.$n = function() {
                    var t = this.view.curProductLocation().printLocations[0]
                      , i = 0
                      , n = t.height;
                    if (this.ents().forEach((function(s) {
                        var e = 0
                          , h = 0;
                        s instanceof o.TextEntity ? (e = o.MIN_TEXT_SIZE / s.size(),
                        h = o.MAX_TEXT_SIZE / s.size()) : (e = r.MIN_SIZE / s.height(),
                        h = t.height / s.height(),
                        i = Math.max(i, e),
                        n = Math.min(n, h),
                        e = r.MIN_SIZE / s.width(),
                        h = t.width / s.width()),
                        i = Math.max(i, e),
                        n = Math.min(n, h)
                    }
                    )),
                    this.Fn) {
                        this.width(),
                        this.height(),
                        t.width,
                        t.height;
                        return {
                            minWidth: this.width() * i,
                            minHeight: this.height() * i,
                            maxWidth: this.width() * n,
                            maxHeight: this.height() * n
                        }
                    }
                    return {
                        minWidth: r.MIN_SIZE,
                        minHeight: r.MIN_SIZE,
                        maxWidth: t.width,
                        maxHeight: t.height
                    }
                }
                ,
                i
            }(e.Entity);
            i.EntityGroup = c
        }
        ,
        9001: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ErrorDialog = void 0;
            var s = n(655)
              , e = n(6059)
              , r = n(2497)
              , o = function(t) {
                function i(i, n) {
                    var s = t.call(this, "ErrorDialog") || this;
                    return (0,
                    r.onClick)(s.$(".btn-close"), (function() {
                        s.hide()
                    }
                    )),
                    n && (s.$(".title").textContent = n),
                    i && (s.$(".msg").textContent = i),
                    s
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this)
                }
                ,
                i.prototype.hide = function() {
                    t.prototype.hide.call(this)
                }
                ,
                i
            }(e.Dialog);
            i.ErrorDialog = o
        }
        ,
        8145: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.FontPickerDialog = i.FontPickerView = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(4094)
              , o = n(2582)
              , h = n(2497)
              , u = n(6059)
              , c = [{
                id: 10,
                name: "Popular"
            }, {
                id: 11,
                name: "Sans Serif"
            }, {
                id: 12,
                name: "Serif"
            }, {
                id: 13,
                name: "Basic"
            }, {
                id: 14,
                name: "Heavy"
            }, {
                id: 9,
                name: "Handwriting"
            }, {
                id: 15,
                name: "Script"
            }, {
                id: 16,
                name: "Youthful"
            }, {
                id: 17,
                name: "Fun"
            }, {
                id: 18,
                name: "Casual"
            }, {
                id: 7,
                name: "Distressed"
            }, {
                id: 19,
                name: "Elegant"
            }, {
                id: 20,
                name: "Brush"
            }, {
                id: 21,
                name: "Retro"
            }, {
                id: 22,
                name: "Decorative"
            }, {
                id: 23,
                name: "Cultural"
            }, {
                id: 24,
                name: "Novelty"
            }, {
                id: 3,
                name: "Greek"
            }, {
                id: 25,
                name: "Embroidery"
            }]
              , a = function(t) {
                function i(i, n, s, e, r) {
                    var o = t.call(this) || this;
                    return o.St = i,
                    o.i = n,
                    o.Tt = e,
                    o.Xn = r,
                    void 0 === o.Lt && (o.Lt = new f(s,o.i,(function(t) {
                        o.set(t),
                        o.fireChange()
                    }
                    ),o.Xn)),
                    (0,
                    h.onClick)(i.parentElement.parentElement, (function() {
                        o.Tt && o.Tt(),
                        o.Lt.show()
                    }
                    )),
                    o
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    this.Lt.show(),
                    this.Lt.setSelectedFont(this.Jn),
                    this.Lt.updateView(!1)
                }
                ,
                i.prototype.hide = function() {
                    this.Lt.hide(),
                    this.Xn && this.Xn()
                }
                ,
                i.prototype.set = function(t) {
                    this.Jn = "" + t,
                    this.St.src = e.API.fontPreviewUrl(this.Jn),
                    this.Lt.setSelectedFont(this.Jn),
                    this.Lt.updateView(!0)
                }
                ,
                i.prototype.get = function() {
                    return this.Jn
                }
                ,
                i
            }(r.DialogPropertyView);
            i.FontPickerView = a;
            var f = function(t) {
                function i(i, n, s, e) {
                    var r = t.call(this, "FontPickerDialog", i) || this;
                    return r.i = n,
                    r.Zn = s,
                    r.Kn = e,
                    r.Qn = r.$(".dlg-header-title"),
                    r.ts = r.$(".categoryList"),
                    r.ns = r.$(".fontList"),
                    (0,
                    h.onClick)(r.$(".dlg-close-btn"), (function() {
                        r.hide()
                    }
                    )),
                    (0,
                    h.onClick)(r.$(".browse-categories"), (function() {
                        r.ss()
                    }
                    )),
                    r.es(),
                    r.ss(),
                    r
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    this.rs || (this.os(10),
                    this.rs = !0),
                    t.prototype.show.call(this)
                }
                ,
                i.prototype.hide = function() {
                    t.prototype.hide.call(this),
                    this.Kn && this.Kn()
                }
                ,
                i.prototype.setSelectedFont = function(t) {
                    this.Jn = t
                }
                ,
                i.prototype.updateView = function(t) {
                    var i = this.ns.querySelectorAll(".font");
                    i.forEach((function(t) {
                        t.classList.remove("selected")
                    }
                    ));
                    var n = e.API.fontClassName(this.Jn)
                      , s = this.ns.querySelectorAll("." + n);
                    s && s.length > 0 && (s[0].classList.add("selected"),
                    (0,
                    h.centerInScroller)(s[0], this.ns, t)),
                    (i = this.ts.querySelectorAll(".category")).forEach((function(t) {
                        t.classList.remove("selected")
                    }
                    ));
                    var r = this.ts.querySelectorAll(".category-" + o.studioConfig.DEFAULT_FONT_CATEGORY);
                    r && r.length > 0 && (r[0].classList.add("selected"),
                    (0,
                    h.centerInScroller)(r[0], this.ts, t))
                }
                ,
                i.prototype.es = function() {
                    for (var t = 0; t < c.length; ++t)
                        this.hs(c[t].id, c[t].name)
                }
                ,
                i.prototype.hs = function(t, i) {
                    var n = this
                      , s = (0,
                    h.makeAnchor)(i, "category category-" + t, (function() {
                        n.us(t),
                        (0,
                        h.centerInScroller)(s, n.ts, !0)
                    }
                    ));
                    s.style.backgroundImage = "url(" + e.API.fontCategoryPreview(i) + ")",
                    this.ts.appendChild(s)
                }
                ,
                i.prototype.os = function(t) {
                    var i = this;
                    o.studioConfig.DEFAULT_FONT_CATEGORY = t,
                    this.ns.innerHTML = "",
                    e.API.fonts(t, (function(t) {
                        i.cs(t),
                        i.updateView(!1)
                    }
                    ))
                }
                ,
                i.prototype.us = function(t) {
                    this.os(t),
                    this.elem().classList.add("show-category");
                    for (var i = document.createElement("span"), n = 0; n < c.length; n++)
                        if (c[n].id === t) {
                            i.innerHTML = c[n].name;
                            break
                        }
                    this.Qn.innerHTML = "",
                    this.Qn.appendChild(i)
                }
                ,
                i.prototype.cs = function(t) {
                    this.ns.innerHTML = "";
                    for (var i = 0; i < t.length; ++i)
                        this.fs(t[i])
                }
                ,
                i.prototype.fs = function(t) {
                    var i = this
                      , n = e.API.fontClassName(t.fontName)
                      , s = (0,
                    h.makeAnchor)("", "font " + n, (function() {
                        i.vs(t.fontName)
                    }
                    ))
                      , r = document.createElement("div");
                    r.className = "preview",
                    s.appendChild(r),
                    e.API.getFontPreview(t.fontName, this.i.isMobileView(), (function(t) {
                        var i = (new DOMParser).parseFromString(t, "image/svg+xml");
                        if (i) {
                            var n = i.documentElement
                              , s = n.getAttribute("width")
                              , e = n.getAttribute("height");
                            s && e && (n.removeAttribute("width"),
                            n.removeAttribute("height"),
                            n.setAttribute("viewBox", "0 0 " + s + " " + e)),
                            r.appendChild(n),
                            r.onclick = function(t) {
                                t.preventDefault()
                            }
                        }
                    }
                    ));
                    var o = document.createElement("div");
                    o.className = "name",
                    o.innerHTML = t.displayName,
                    o.onclick = function(t) {
                        t.preventDefault()
                    }
                    ,
                    s.appendChild(o),
                    this.ns.appendChild(s)
                }
                ,
                i.prototype.vs = function(t) {
                    o.studioConfig.DEFAULT_FONT = t,
                    this.Zn(t)
                }
                ,
                i.prototype.ss = function() {
                    this.elem().classList.remove("show-category"),
                    this.Qn.innerHTML = "";
                    var t = document.createElement("span");
                    t.innerHTML = "Choose a Category",
                    this.Qn.appendChild(t)
                }
                ,
                i
            }(u.Dialog);
            i.FontPickerDialog = f
        }
        ,
        2561: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ClipartEntity = i.ImageEntity = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(8418)
              , o = n(1986)
              , h = n(2497)
              , u = n(4137)
              , c = s.__importStar(n(6516))
              , a = function(t) {
                function i(i) {
                    return t.call(this, i) || this
                }
                return s.__extends(i, t),
                i.prototype.initFromUpload = function(t, i, n) {
                    var s = this;
                    this.ds = t,
                    this.ls = i,
                    this.Dt = [];
                    for (var e = 0; e < n.length; ++e)
                        this.Dt[e] = {
                            inkId: n[e],
                            colorIndex: e + 1
                        };
                    return new Promise((function(i, n) {
                        s.ws((function(t, n) {
                            s.gs(t, n),
                            s.alignIdealPosition(),
                            i(!0)
                        }
                        ), (function() {
                            n("Error loading file ".concat(t, "."))
                        }
                        ))
                    }
                    ))
                }
                ,
                i.prototype.initFromMyImage = function(t) {
                    var i = this;
                    this.ds = t.fileName,
                    this.ls = t.filePath,
                    this.Dt = [];
                    for (var n = 0; n < t.myImageInks.length; ++n)
                        this.Dt[n] = {
                            inkId: t.myImageInks[n].inkId,
                            colorIndex: n + 1
                        };
                    return new Promise((function(t, n) {
                        i.ws((function(n, s) {
                            i.gs(n, s),
                            i.alignIdealPosition(),
                            t(!0)
                        }
                        ), (function() {
                            n("Error loading file ".concat(i.ds, "."))
                        }
                        ))
                    }
                    ))
                }
                ,
                i.prototype.load = function(i) {
                    var n = this;
                    return new Promise((function(s, e) {
                        n.ds = i.fileName,
                        n.ls = i.workingFilePath,
                        n.Dt = [];
                        for (var r = 0; r < i.imageInks.length; ++r)
                            n.Dt.push({
                                inkId: i.imageInks[r].inkId,
                                colorIndex: i.imageInks[r].colorIndex
                            });
                        var o = n.ls.replace(/^\/?([^\/]+(?:\/[^\/]+)*)\/?$/, "/$1/") + n.ds + ".temp.png"
                          , h = n.ps((function(t, i) {
                            s(!0)
                        }
                        ), (function() {
                            e("Error loading url ".concat(o))
                        }
                        ));
                        n.set_x(i.xCoordInch),
                        n.set_y(i.yCoordInch),
                        n.setSizeRaw(i.width, i.height),
                        h.src = o,
                        t.prototype.load.call(n, i)
                    }
                    ))
                }
                ,
                i.prototype.save = function() {
                    return {
                        imageType: "upload",
                        fileName: this.ds,
                        workingFilePath: this.ls,
                        xCoordInch: this.x(),
                        yCoordInch: this.y(),
                        width: this.width(),
                        height: this.height(),
                        rotation: this.rotation(),
                        depth: this.node().getZIndex(),
                        imageInks: this.Dt
                    }
                }
                ,
                i.prototype.inks = function() {
                    return this.Dt
                }
                ,
                i.prototype.set_inks = function(t) {
                    this.Dt = t
                }
                ,
                i.prototype.set_filePath = function(t) {
                    this.ls = t
                }
                ,
                i.prototype.matchToArtwork = function() {
                    for (var t = 0; t < this.Dt.length; ++t) {
                        if ((0,
                        r.getStandardInk)(this.Dt[t].inkId))
                            return !1
                    }
                    return !0
                }
                ,
                i.prototype.ps = function(t, i) {
                    var n = this
                      , s = document.createElement("img");
                    return s.onload = function() {
                        n.view.draw(),
                        t && t(s.width, s.height)
                    }
                    ,
                    i && (s.onerror = function() {
                        i()
                    }
                    ),
                    this.init(this.bs = new c.Image({
                        image: s
                    })),
                    s
                }
                ,
                i.prototype.ws = function(t, i) {
                    var n = this.ps(t, i)
                      , s = this.ls.replace(/^\/?([^\/]+(?:\/[^\/]+)*)\/?$/, "/$1/");
                    n.src = s + this.ds + ".temp.png"
                }
                ,
                i.prototype.gs = function(t, i) {
                    var n = t / i
                      , s = this.view.curProductLocation().printLocations[0]
                      , e = Math.min(Math.max(s.defaultArtWidth, 3), s.width)
                      , r = Math.min(Math.max(s.defaultArtHeight, 3), s.height);
                    n > 1 && e / n < s.height ? this.setSizeRaw(e, e / n) : this.setSizeRaw(r * n, r)
                }
                ,
                i
            }(o.Entity);
            i.ImageEntity = a;
            var f = function(t) {
                function i(i) {
                    var n = t.call(this, i) || this;
                    return n.xs = -1,
                    n.ks = -1,
                    n.ys = Number.MAX_VALUE,
                    n.Ms = Number.MAX_VALUE,
                    n.init(n.Bi = new c.Group),
                    n
                }
                return s.__extends(i, t),
                i.prototype.createFromClipart = function(t) {
                    var i = this;
                    if (t.isMonochrome)
                        this.Dt = [this.view.ctx.defaultInk()];
                    else {
                        this.Dt = [];
                        for (var n = 0; n < t.clipArtInks.length; n++)
                            this.Dt.push({
                                inkId: t.clipArtInks[n].inkId,
                                colorIndex: t.clipArtInks[n].colorIndex
                            })
                    }
                    return this.ds = t.fileName,
                    new Promise((function(n, s) {
                        i.view.ctx.loadClipart(t.fileName, (function(t) {
                            i.Is(t);
                            var s = i._s.width / i._s.height
                              , e = i.view.curProductLocation().printLocations[0]
                              , r = Math.min(Math.max(e.defaultArtWidth, 3), e.width)
                              , o = Math.min(Math.max(e.defaultArtHeight, 3), e.height);
                            s > 1 && r / s < e.height ? i.setSizeRaw(r, r / s) : i.setSizeRaw(o * s, o),
                            i.alignIdealPosition(),
                            n(!0)
                        }
                        ), (function() {
                            i.view.removeEntity(i),
                            s("Error loading ".concat(t.fileName, "."))
                        }
                        ))
                    }
                    ))
                }
                ,
                i.prototype.load = function(i) {
                    var n = this;
                    return new Promise((function(s, e) {
                        t.prototype.load.call(n, i),
                        n.set_x(i.xCoordInch),
                        n.set_y(i.yCoordInch),
                        n.ds = i.fileName,
                        n.Dt = [];
                        for (var r = 0; r < i.imageInks.length; ++r)
                            n.Dt.push({
                                inkId: i.imageInks[r].inkId,
                                colorIndex: i.imageInks[r].colorIndex
                            });
                        n.setSizeRaw(i.width, i.height),
                        n.view.ctx.loadClipart(i.fileName, (function(t) {
                            n.Is(t),
                            n.view.draw(),
                            s(!0)
                        }
                        ), (function() {
                            e("Error loading ".concat(i.fileName, "."))
                        }
                        ))
                    }
                    ))
                }
                ,
                i.prototype.save = function() {
                    for (var t = {
                        imageType: "clipart",
                        fileName: this.ds,
                        xCoordInch: this.x(),
                        yCoordInch: this.y(),
                        width: this.width(),
                        height: this.height(),
                        rotation: this.rotation(),
                        depth: this.node().getZIndex(),
                        workingFilePath: "",
                        imageInks: []
                    }, i = 0; i < this.Dt.length; ++i)
                        t.imageInks.push({
                            inkId: this.Dt[i].inkId,
                            colorIndex: this.Dt[i].colorIndex
                        });
                    return t
                }
                ,
                i.prototype.set_width = function(i) {
                    t.prototype.set_width.call(this, i),
                    this.scaleChanged()
                }
                ,
                i.prototype.set_height = function(i) {
                    t.prototype.set_height.call(this, i),
                    this.scaleChanged()
                }
                ,
                i.prototype.inks = function() {
                    return this.Dt
                }
                ,
                i.prototype.set_inks = function(t) {
                    this.forceFire("inks", t),
                    this.Dt = t.slice(0),
                    this.zs(),
                    this.view.draw()
                }
                ,
                i.prototype.Ps = function(t, i, n) {
                    var s = this;
                    e.API.getRaw(t, (function(t) {
                        s.Is(t),
                        i && i()
                    }
                    ), (function() {
                        s.view.removeEntity(s),
                        n && n()
                    }
                    ))
                }
                ,
                i.prototype.Is = function(t) {
                    this._s = new u.ZiggyImage(t),
                    this.Bs = [];
                    for (var i = 0; i < this._s.layers.length; ++i) {
                        var n = this._s.layers[i];
                        this.Cs() ? this.Bs[i] = 1 : this.Bs[i] = n.idx
                    }
                    this.zs()
                }
                ,
                i.prototype.scaleChanged = function() {
                    if (-1 != this.xs) {
                        var t = this.view.pixelScale()
                          , i = this.width() * t
                          , n = this.height() * t;
                        (i > this.xs || n > this.ks || i < this.ys || n < this.Ms) && this.zs(),
                        this.Bi.setScaleX(this.width() / this.xs),
                        this.Bi.setScaleY(this.height() / this.ks)
                    } else
                        this.zs()
                }
                ,
                i.prototype.productColorChanged = function() {
                    this.zs()
                }
                ,
                i.prototype.zs = function() {
                    if (this._s) {
                        var t = this.view.pixelScale()
                          , i = this.width() * t
                          , n = this.height() * t;
                        this.xs = (0,
                        h.nearestPowerOf2)(i),
                        this.ks = (0,
                        h.nearestPowerOf2)(n),
                        this.ys = (0,
                        h.previousPowerOf2)(i),
                        this.Ms = (0,
                        h.previousPowerOf2)(n),
                        this.Bi.setScaleX(this.width() / this.xs),
                        this.Bi.setScaleY(this.height() / this.ks);
                        for (var s = [], e = 0; e < this._s.layers.length; ++e) {
                            var o = this.Os(this.Bs[e]);
                            if (o) {
                                var u = (0,
                                r.standardInkRgb)(this.view.ctx, o.inkId);
                                u && s.push(u)
                            }
                        }
                        var a = this._s.toImage(this.xs, this.ks, s);
                        this.bs = new c.Image({
                            image: a
                        }),
                        this.Bi.destroyChildren(),
                        this.Bi.add(this.bs)
                    }
                }
                ,
                i.prototype.Os = function(t) {
                    for (var i in this.Dt)
                        if (t == this.Dt[i].colorIndex)
                            return this.Dt[i];
                    return null
                }
                ,
                i.prototype.Cs = function() {
                    return this.inks().length <= 1
                }
                ,
                i
            }(o.Entity);
            i.ClipartEntity = f
        }
        ,
        5565: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.IntroPane = void 0;
            var s = n(655)
              , e = n(8709)
              , r = n(4471)
              , o = n(2497)
              , h = function(t) {
                function i(i) {
                    var n = t.call(this, "IntroPane", i, !1) || this;
                    return (0,
                    o.onClick)(n.$(".image"), (function() {
                        i.showPane("addImage")
                    }
                    )),
                    (0,
                    o.onClick)(n.$(".text"), (function() {
                        i.showPane("addText")
                    }
                    )),
                    (0,
                    o.onClick)(n.$(".product"), (function() {
                        i.showPane("editProduct")
                    }
                    )),
                    (0,
                    o.onClick)(n.$(".templates"), (function() {
                        new r.TemplatesDialog(i).show()
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i
            }(e.CloseablePane);
            i.IntroPane = h
        }
        ,
        2147: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.LoginDialog = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(2497)
              , o = n(6059)
              , h = 5
              , u = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            var c = function(t) {
                function i(i, n) {
                    var s = t.call(this, "LoginDialog") || this;
                    return s.Ss = i,
                    s.js = n,
                    s.Ns = s.$(".msg"),
                    s.Ts = new a(s),
                    s.Es = new f(s),
                    s.Ls = s.$(".container"),
                    s.Ls.innerHTML = "",
                    s.Ls.appendChild(s.Ts.elem()),
                    s.Ls.appendChild(s.Es.elem()),
                    s
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    var i = this;
                    this.As = -1,
                    window.finishExternalLogin = function(t) {
                        t > 0 ? i.succeed(t) : i.showError("External login failed.")
                    }
                    ,
                    t.prototype.show.call(this),
                    this.showMsg("You must be logged in to do that.")
                }
                ,
                i.prototype.hide = function() {
                    -1 == this.As ? this.js() : this.Ss(this.As),
                    delete window.finishExternalLogin,
                    t.prototype.hide.call(this)
                }
                ,
                i.prototype.showMsg = function(t) {
                    this.Ns.classList.remove("error"),
                    this.Ns.innerHTML = t,
                    this.Ns.style.visibility = "visible"
                }
                ,
                i.prototype.showError = function(t) {
                    this.Ns.classList.add("error"),
                    this.Ns.innerHTML = "<span>" + t + "</span>",
                    this.Ns.style.visibility = "visible"
                }
                ,
                i.prototype.hideMsg = function() {
                    this.Ns.innerHTML = "",
                    this.Ns.style.visibility = "hidden"
                }
                ,
                i.prototype.succeed = function(t) {
                    this.As = t,
                    t > 0 && window.Northbeam && window.Northbeam.identifyCustomerId && window.Northbeam.identifyCustomerId("custom", t.toString()),
                    this.hide()
                }
                ,
                i
            }(o.Dialog);
            i.LoginDialog = c;
            var a = function(t) {
                function i(i) {
                    var n = t.call(this, "LoginView") || this;
                    n.Lt = i,
                    n.Ds = n.$(".form"),
                    n.Hs = n.$(".email"),
                    n.Vs = n.$(".password"),
                    n.Rs = n.$(".toggle-pw"),
                    (0,
                    r.onClick)(n.Rs, (function() {
                        "password" === n.Vs.type ? n.Fs() : n.Gs()
                    }
                    ));
                    var s = n.$(".loginButton");
                    return (0,
                    r.onSubmit)(n.Ds, s, (function() {
                        n.Ws()
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".btnEmailSignIn"), (function() {
                        n.elem().classList.remove("hide-email-login"),
                        n.elem().classList.add("show-email-login")
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".btn-back"), (function() {
                        n.elem().classList.remove("show-email-login"),
                        n.elem().classList.add("hide-email-login")
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".btn-google-login"), (function() {
                        n.Us = window.open("/account/startgooglelogin?dest=finishexternallogin", "_blank")
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".btn-facebook-login"), (function() {
                        n.qs = window.open("/account/startfacebooklogin?dest=finishexternallogin", "_blank")
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.focus = function() {
                    this.Hs.focus()
                }
                ,
                i.prototype.Ws = function() {
                    var t = this;
                    this.Gs(),
                    e.API.logon(this.Hs.value, this.Vs.value, (function(i) {
                        1 == i.result ? t.Lt.succeed(i.aid) : t.Lt.showError("Login failed. Please verify your email address and try re-typing your password.")
                    }
                    ))
                }
                ,
                i.prototype.Fs = function() {
                    this.Vs.type = "text",
                    this.Rs.innerHTML = "Hide",
                    this.Rs.className = "toggle-pw hide-pw"
                }
                ,
                i.prototype.Gs = function() {
                    this.Vs.type = "password",
                    this.Rs.innerHTML = "Show",
                    this.Rs.className = "toggle-pw"
                }
                ,
                i
            }(o.TemplateView)
              , f = function(t) {
                function i(i) {
                    var n = t.call(this, "RegisterView") || this;
                    n.Lt = i,
                    n.Ys = n.$(".fail"),
                    n.$s = n.$(".passwordFail"),
                    n.Ds = n.$(".form"),
                    n.Hs = n.$(".email"),
                    n.Xs = n.$(".password1"),
                    n.Rs = n.$(".toggle-pw"),
                    (0,
                    r.onClick)(n.Rs, (function() {
                        "password" === n.Xs.type ? n.Fs() : n.Gs()
                    }
                    ));
                    var s = n.$(".registerButton");
                    return (0,
                    r.onSubmit)(n.Ds, s, (function() {
                        n.register()
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.focus = function() {
                    this.Hs.focus()
                }
                ,
                i.prototype.register = function() {
                    var t = this;
                    this.dt() && (this.Gs(),
                    e.API.create(this.Hs.value, this.Xs.value, !0, (function(i) {
                        1 == i.result ? t.Lt.succeed(i.aid) : (t.Lt.showError("Oops! There was problem creating your account."),
                        t.Ys.textContent = i.message,
                        t.Ys.style.display = "inline-block")
                    }
                    )))
                }
                ,
                i.prototype.Fs = function() {
                    this.Xs.type = "text",
                    this.Rs.innerHTML = "Hide",
                    this.Rs.className = "toggle-pw hide-pw"
                }
                ,
                i.prototype.Gs = function() {
                    this.Xs.type = "password",
                    this.Rs.innerHTML = "Show",
                    this.Rs.className = "toggle-pw"
                }
                ,
                i.prototype.dt = function() {
                    var t, i, n = !0;
                    t = this.Hs,
                    i = u.test(t.value.trim()),
                    t.className = i ? "" : "input-validation-error",
                    i || (n = !1);
                    var s = function(t) {
                        var i = t.value.trim().length < h;
                        return t.className = i ? "input-validation-error" : "",
                        !i
                    }(this.Xs);
                    return s || (n = !1),
                    n ? (this.Ys.textContent = "",
                    this.Ys.style.display = "none") : this.Lt.showError("Please correct the fields in red."),
                    s ? (this.$s.textContent = "",
                    this.$s.style.display = "none") : (this.$s.textContent = "Your password must be at least " + h + " characters long.",
                    this.$s.style.display = "block"),
                    n
                }
                ,
                i
            }(o.TemplateView)
        }
        ,
        1368: (t, i, n) => {
            "use strict";
            n(6388).TrackJS.install({
                token: "e713b5929b88489f9c3f823883f84302",
                application: "studio-prod",
                onError: function(t) {
                    return t.network = t.network.filter((function(t) {
                        return -1 === t.url.indexOf("clarity.ms") && -1 === t.url.indexOf("www.google-analytics.com")
                    }
                    )),
                    !0
                }
            }),
            n(3412);
            var s = n(2582)
              , e = n(2497)
              , r = new (function() {
                function t() {
                    (0,
                    e.nastyDisableRubberBandHack)(),
                    (0,
                    e.stopAllAnchorsFromNavigating)(),
                    (0,
                    e.iOSScrollFix)(),
                    this.studio = new s.Studio;
                    var t = document.getElementById("content");
                    t ? t.appendChild(this.studio.elem()) : document.body.appendChild(this.studio.elem())
                }
                return t.prototype.init = function(t) {
                    this.studio.init(t)
                }
                ,
                t
            }());
            window.initStudio = function(t) {
                r.init(t)
            }
        }
        ,
        3867: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.MenuBar = void 0;
            var s = n(655)
              , e = n(6059)
              , r = n(2582)
              , o = n(2497)
              , h = function(t) {
                function i() {
                    var i = t.call(this, "MenuBar") || this;
                    for (var n in i.Js = {},
                    r.PANES) {
                        var s = "." + n;
                        r.PANES.hasOwnProperty(n) && i.hasChild(s) && i.Zs(n, i.$(s))
                    }
                    return (0,
                    o.onClick)(i.$(".buyLink"), (function() {
                        i.onBuy()
                    }
                    )),
                    i
                }
                return s.__extends(i, t),
                i.prototype.setSelected = function(t) {
                    if (this.elem().classList.remove("active"),
                    this.Ks && this.Ks.parentElement.classList.remove("selected"),
                    t) {
                        var i = this.Js[t];
                        i && (this.Ks = i,
                        this.Ks.parentElement.classList.add("selected"),
                        this.elem().classList.add("active"))
                    }
                }
                ,
                i.prototype.Zs = function(t, i) {
                    var n = this;
                    this.Js[t] = i,
                    (0,
                    o.onClick)(i, (function() {
                        n.onNav(t)
                    }
                    ))
                }
                ,
                i
            }(e.TemplateView);
            i.MenuBar = h
        }
        ,
        8123: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.PriceDialog = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(2497)
              , o = function(t) {
                function i(i) {
                    var n = t.call(this, "PriceDialog") || this;
                    n.i = i,
                    n.Qs = {},
                    n.te = n.$(".screen"),
                    n.te.onclick = function(t) {
                        n.ie(e.API.DECORATION_SCREENPRINT)
                    }
                    ,
                    n.ne = n.$(".digital"),
                    n.ne.onclick = function(t) {
                        n.ie(e.API.DECORATION_DIGITALPRINT)
                    }
                    ,
                    n.se = n.$(".embroider"),
                    n.se.onclick = function(t) {
                        n.ie(e.API.DECORATION_EMBROIDER)
                    }
                    ,
                    n.ee = n.$(".designName"),
                    n.re = n.$(".sizes");
                    for (var s = n.i.productColor().sizeArray.split(","), o = !1, h = 0; h < s.length; h++) {
                        var u = s[h];
                        if (o && !n.oe(u)) {
                            var c = document.createElement("br");
                            n.re.appendChild(c)
                        }
                        var a = "_" + u.replace(/[^a-z0-9]/gi, "")
                          , f = n.he(a, u);
                        n.re.appendChild(f),
                        n.Qs[u] = n.$("." + a),
                        o = n.oe(u)
                    }
                    return n.ue = n.$(".orderForm"),
                    n.ue.onsubmit = function(t) {
                        n.ce(),
                        t.preventDefault(),
                        document.activeElement.blur && document.activeElement.blur()
                    }
                    ,
                    n.ae = n.$(".cartForm"),
                    n.ae.onsubmit = function(t) {
                        n.fe(),
                        t.preventDefault()
                    }
                    ,
                    n.ve = n.$(".qtyError"),
                    n.de = n.$(".priceResult"),
                    n.le = n.$(".notesText"),
                    (0,
                    r.limitCharacterCount)(n.le, 999),
                    n.le.onchange = function(t) {
                        i.setDesignNotes(n.le.value)
                    }
                    ,
                    n.we = n.$(".notesToggle"),
                    n.we.onclick = function(t) {
                        n.we.classList.toggle("opened"),
                        n.le.classList.toggle("opened")
                    }
                    ,
                    n.ge = n.$(".priceTips"),
                    n.me = n.$(".priceTipsList"),
                    n.pe = n.$(".errors"),
                    n.be = n.$(".warnMessage"),
                    (0,
                    r.onClick)(n.$(".compareLink"), (function() {
                        n.xe()
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".edit"), (function() {
                        n.ke()
                    }
                    )),
                    (0,
                    r.onClick)(n.$(".dlgCloseButton"), (function() {
                        n.ke()
                    }
                    )),
                    n
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this),
                    this.ye(),
                    this.ke(),
                    this.ee.value = this.i.name(),
                    this.le.value = this.i.designNotes();
                    var i = this.i.product()
                      , n = this.i.productColor()
                      , s = i.canDigitalPrint && !n.canDigitalPrint
                      , e = this.i.decorationMethod();
                    this.Me(this.se, i.canEmbroider, e, !1),
                    this.Me(this.ne, i.canDigitalPrint, e, s),
                    this.Me(this.te, i.canScreenPrint, e, !1);
                    var r = this.i.productView();
                    r.selected() && r.select(null)
                }
                ,
                i.prototype.he = function(t, i) {
                    var n = document.createElement("label");
                    n.className = "quantity";
                    var s = document.createElement("span");
                    s.className = "label",
                    s.textContent = i,
                    n.appendChild(s);
                    var e = document.createElement("input");
                    return e.className = t,
                    e.type = "number",
                    e.placeholder = "0",
                    n.appendChild(e),
                    n
                }
                ,
                i.prototype.Me = function(t, i, n, s) {
                    t.parentElement.style.display = i ? "" : "none",
                    t.disabled = s,
                    s ? t.parentElement.classList.add("disabled") : t.parentElement.classList.remove("disabled"),
                    t.value == n && (t.checked = !0)
                }
                ,
                i.prototype.ie = function(t) {
                    this.i.setDecorationMethod(t),
                    this.i.updateDescription()
                }
                ,
                i.prototype.setName = function(t) {
                    this.ee.value = t
                }
                ,
                i.prototype.Ie = function() {
                    this.ae.classList.add("visible"),
                    this.ue.classList.add("hidden"),
                    this.i.designNotes().length > 0 && this._e(),
                    this.ze()
                }
                ,
                i.prototype.ke = function() {
                    this.ae.classList.remove("visible"),
                    this.ue.classList.remove("hidden")
                }
                ,
                i.prototype.Pe = function() {
                    this.ve.classList.add("visible")
                }
                ,
                i.prototype.ye = function() {
                    this.ve.classList.remove("visible")
                }
                ,
                i.prototype.Be = function() {
                    this.ge.classList.add("visible")
                }
                ,
                i.prototype.Ce = function() {
                    this.me.innerHTML = "",
                    this.ge.classList.remove("visible")
                }
                ,
                i.prototype.xe = function() {
                    window.open(e.API.compareDecorationsUrl(), "compareDecorations", "status=no,toolbar=no,resizable=yes,scrollbars=no,left=530,top=322,directories=no,menubar=no,width=620,height=380")
                }
                ,
                i.prototype.ce = function() {
                    var t, i = this, n = this.i.product(), s = this.i.productView();
                    t = this.te.checked ? this.te.value : this.se.checked ? this.se.value : this.ne.value;
                    var r = {
                        productId: n.productId,
                        productColorCode: this.i.productColor().colorId,
                        decorationMethod: t,
                        locations: [{
                            colorCount: s.gatherInksForSide(0).length
                        }, {
                            colorCount: s.gatherInksForSide(1).length
                        }],
                        quantities: []
                    }
                      , o = 0;
                    for (var h in this.Qs) {
                        var u = parseInt(this.Qs[h].value);
                        isNaN(u) && (u = 0),
                        o += u,
                        r.quantities.push({
                            size: h,
                            quantity: u
                        })
                    }
                    if (this.Oe = r.quantities,
                    0 == o)
                        return this.Pe(),
                        void this.ke();
                    this.ye(),
                    this.pe.classList.remove("visible"),
                    e.API.priceRequest(r, (function(t) {
                        if (t.errorMessages && t.errorMessages.length > 0) {
                            for (var n = 0; n < t.errorMessages.length; n++)
                                "Please select the number of colors in your artwork." === t.errorMessages[n] && (t.errorMessages[n] = "Please add an image or text object to your design.");
                            return i.pe.innerHTML = t.errorMessages.join("<br>"),
                            void i.pe.classList.add("visible")
                        }
                        i.Se(o, t),
                        i.Ie()
                    }
                    ))
                }
                ,
                i.prototype.Se = function(t, i) {
                    var n = "";
                    if (n += t + " pieces at $" + i.requestedQuote.unitPrice.toFixed(2) + " each ",
                    n += "($" + i.requestedQuote.unitPriceTotal.toFixed(2) + " total)",
                    this.de.textContent = n,
                    this.Ce(),
                    i.alternativeMethodQuote && (this.je("Switch to " + this.Ne(i.alternativeMethodQuote.printMethod) + " and pay only $" + i.alternativeMethodQuote.unitPrice.toFixed(2) + " each", ""),
                    this.Be()),
                    i.suggestedQuotes && i.suggestedQuotes.length > 0) {
                        i.alternativeMethodQuote && this.je("OR", "nobullet");
                        for (var s = 0; s < i.suggestedQuotes.length; s++) {
                            var e = i.suggestedQuotes[s];
                            this.je("Order " + e.quantityAmount + " pieces and pay $" + e.unitPrice.toFixed(2) + " each", "")
                        }
                        this.Be()
                    }
                }
                ,
                i.prototype.je = function(t, i) {
                    var n = document.createElement("li");
                    n.textContent = t,
                    n.className = i,
                    this.me.appendChild(n)
                }
                ,
                i.prototype.Ne = function(t) {
                    switch (t) {
                    case e.API.DECORATION_DIGITALPRINT:
                        return "Digital Print";
                    case e.API.DECORATION_SCREENPRINT:
                        return "Screen Print";
                    case e.API.DECORATION_EMBROIDER:
                        return "Embroidery"
                    }
                    return t
                }
                ,
                i.prototype._e = function() {
                    this.we.classList.add("opened"),
                    this.le.classList.add("opened")
                }
                ,
                i.prototype.fe = function() {
                    var t = this
                      , i = this.ee.value;
                    0 != i.trim().length ? this.i.requireLogin((function() {
                        t.Te(i)
                    }
                    ), (function() {}
                    )) : this.ee.classList.add("input-validation-error")
                }
                ,
                i.prototype.Te = function(t) {
                    var i = this;
                    this.i.product().isDiscontinued ? this.Ee("This item has been discontinued. Please switch to a different product before continuing.") : this.i.productColor().isDiscontinued ? this.Ee("This product is no longer available in " + this.i.productColor().colorName + ". Please choose a different color before saving your design.") : this.i.saveDesign(t, (function(t, n, s, r, o) {
                        t ? e.API.addToCart(n, i.Oe, (function() {
                            location.assign("/cart")
                        }
                        )) : r ? i.Le(o) : i.Ee(s)
                    }
                    ))
                }
                ,
                i.prototype.oe = function(t) {
                    return t.length > 1 && "Y" == t.substring(0, 1)
                }
                ,
                i.prototype.Ee = function(t) {
                    this.be.textContent = t,
                    this.be.style.display = "block"
                }
                ,
                i.prototype.ze = function() {
                    this.be.textContent = "",
                    this.be.style.display = "none"
                }
                ,
                i.prototype.Le = function(t) {
                    this.be.classList.add("error");
                    var i = document.createTextNode("You are trying to overwrite a design from a previous order. Please choose a new name or place a re-order from your ")
                      , n = document.createElement("a");
                    n.href = t,
                    n.textContent = "My Account";
                    var s = document.createTextNode(".");
                    this.be.appendChild(i),
                    this.be.appendChild(n),
                    this.be.appendChild(s),
                    this.be.style.display = "block"
                }
                ,
                i
            }(n(6059).Dialog);
            i.PriceDialog = o
        }
        ,
        6693: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ProductView = i.END_CLICKY_EVENTS = i.CLICKY_EVENTS = i.NUDGE_DISTANCE = i.DRAG_HANDLE_SIZE = i.HANDLE_SIZE = i.HANDLE_BORDER_WIDTH = i.GUIDE_WIDTH = i.MIN_SIZE = i.ROTATION_SNAP = i.SNAP = void 0;
            var s = n(655)
              , e = n(1986)
              , r = n(6059)
              , o = n(3383)
              , h = n(2497)
              , u = n(1156)
              , c = n(2561)
              , a = n(2561)
              , f = n(9109)
              , v = n(8997)
              , d = n(8997)
              , l = n(9131)
              , w = n(4471)
              , g = n(2753)
              , m = n(2582)
              , p = s.__importStar(n(6516));
            i.SNAP = .1,
            i.ROTATION_SNAP = .1,
            i.MIN_SIZE = .1,
            i.GUIDE_WIDTH = 1,
            i.HANDLE_BORDER_WIDTH = 2,
            i.HANDLE_SIZE = 24,
            i.DRAG_HANDLE_SIZE = 16,
            i.NUDGE_DISTANCE = .1,
            i.CLICKY_EVENTS = "mousedown touchstart",
            i.END_CLICKY_EVENTS = "mouseup touchend touchcancel";
            var b = p.Group.prototype.drawScene;
            p.Group.prototype.drawScene = function(t) {
                if (!("_hackyClipRect"in this))
                    return b.call(this, t);
                var i = this._hackyClipRect
                  , n = this.getLayer().canvas.context;
                return n.save(),
                n._applyAncestorTransforms(this),
                n.beginPath(),
                n.rect(i[0], i[1], i[2], i[3]),
                n.clip(),
                n.reset(),
                b.call(this, t),
                n.restore(),
                this
            }
            ;
            var x = function(t) {
                function n(n) {
                    var s = t.call(this, "ProductView") || this;
                    s.ctx = n,
                    s.Ae = !1,
                    s.De = 0,
                    s.He = [{
                        entities: [],
                        group: new p.Group
                    }, {
                        entities: [],
                        group: new p.Group
                    }],
                    s.Ve = new e.Entity(s),
                    s.It = 0,
                    (0,
                    h.onClick)(s.$(".rotateButton"), (function() {
                        s.Re(),
                        s.onReset()
                    }
                    )),
                    (0,
                    h.onClick)(s.$(".zoomButton"), (function() {
                        s.Fe()
                    }
                    )),
                    (0,
                    h.onClick)(s.$(".clearButton"), (function() {
                        confirm("Are you sure you want to clear your design?") && s.clear()
                    }
                    )),
                    (0,
                    h.onClick)(s.$(".templatesButton"), (function() {
                        new w.TemplatesDialog(s.ctx).show()
                    }
                    )),
                    s.Ge = s.$(".shareButton"),
                    s.Ge.onclick = function(t) {
                        s.Ge.classList.toggle("active"),
                        t.preventDefault()
                    }
                    ,
                    s.We = new o.ShareContext(s),
                    s.Ue = new g.UndoRedoState(s.ctx,(function(t) {
                        s.Ue.disable(),
                        s.load(t, (function() {
                            s.ctx.showPane("continue"),
                            s.Ue.enable()
                        }
                        ))
                    }
                    )),
                    s.$(".undo-container").appendChild(s.Ue.elem()),
                    (0,
                    h.onClick)(s.$(".email"), (function() {
                        s.select(null),
                        s.We.share(s.ctx.serializeDesign(), "email")
                    }
                    )),
                    (0,
                    h.onClick)(s.$(".twitter"), (function() {
                        s.select(null),
                        s.We.share(s.ctx.serializeDesign(), "twitter")
                    }
                    )),
                    (0,
                    h.onClick)(s.$(".facebook"), (function() {
                        s.select(null),
                        s.We.share(s.ctx.serializeDesign(), "facebook")
                    }
                    )),
                    (0,
                    h.onClick)(s.$(".pinterest"), (function() {
                        s.select(null),
                        s.We.share(s.ctx.serializeDesign(), "pinterest")
                    }
                    )),
                    s.qe = new p.Stage({
                        container: s.$(".container")
                    }),
                    s.qe.getContainer().oncontextmenu = function(t) {
                        return t.preventDefault(),
                        !1
                    }
                    ,
                    s.Ye = new p.Layer,
                    s.qe.add(s.Ye),
                    s.$e = new p.Group,
                    s.Ye.add(s.$e),
                    s.Xe = document.createElement("img"),
                    s.Xe.onload = function(t) {
                        s.$e.add(s.Je),
                        s.Je.moveToBottom(),
                        s.draw()
                    }
                    ,
                    s.Je = new p.Image({
                        image: s.Xe
                    });
                    var r = !1;
                    return s.Je.on(i.CLICKY_EVENTS, (function(t) {
                        t.preventDefault(),
                        r = !0,
                        document.activeElement.blur(),
                        setTimeout((function() {
                            r || s.select(null)
                        }
                        ), 200)
                    }
                    )),
                    s.Je.on(i.END_CLICKY_EVENTS, (function(t) {
                        if (t.preventDefault(),
                        r = !1,
                        2 === t.button) {
                            s.select(null);
                            var i = s.qe.getPointerPosition()
                              , n = (0,
                            h.copyTransform)(s.He[s.De].group.getAbsoluteTransform());
                            n.invert(),
                            n.translate(i.x, i.y);
                            var e = n.getTranslation();
                            s.ctx.contextMenu().showMenu(t.clientX, t.clientY, e.x, e.y)
                        }
                    }
                    )),
                    s.Ze = new d.DragSelectBox(s,s.$e),
                    s.Ke = new p.Group,
                    s.$e.add(s.Ke),
                    s.Qe = new v.DragHandle(s,s.Ke,s.qe.getContainer()),
                    s.tr = new p.Group({}),
                    s.tr.add(s.Un = new p.Rect({
                        stroke: "#009ddc"
                    })),
                    s.tr.add(s.ir = new p.Rect({
                        stroke: "#009ddc"
                    })),
                    s.tr.add(s.nr = new p.Rect({
                        stroke: "#009ddc"
                    })),
                    s.tr.add(s.sr = new p.Line({
                        points: [{
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 100
                        }],
                        stroke: "#009ddc",
                        dashArray: [.1, .1]
                    })),
                    s.tr.add(s.er = new p.Line({
                        points: [{
                            x: 0,
                            y: 0
                        }, {
                            x: 100,
                            y: 0
                        }],
                        stroke: "#009ddc",
                        dashArray: [.1, .1]
                    })),
                    s.Un.hide(),
                    s.ir.hide(),
                    s.nr.hide(),
                    s.sr.hide(),
                    s.er.hide(),
                    s.$e.add(s.tr),
                    s.Ve.init(new p.Group),
                    s.Ve.set_constrain(!1),
                    s.rr(),
                    s.draw(),
                    s
                }
                return s.__extends(n, t),
                n.prototype.handle = function() {
                    return this.Qe
                }
                ,
                n.prototype.bg = function() {
                    return this.Je
                }
                ,
                n.prototype.undoRedo = function() {
                    return this.Ue
                }
                ,
                n.prototype.setProduct = function(t) {
                    this.hr && this.ur(this.hr, t),
                    this.hr = t,
                    1 == t.productLocations.length ? this.$(".rotateButton").classList.add("disabled") : this.$(".rotateButton").classList.remove("disabled"),
                    this.cr(0),
                    this.notifyChange()
                }
                ,
                n.prototype.selectInRect = function(t) {
                    for (var i = this.He[this.De], n = t.x + t.width, s = t.y + t.height, e = [], r = 0; r < i.entities.length; ++r) {
                        var o = i.entities[r].bbox();
                        o.left < n && o.top < s && o.right > t.x && o.bottom > t.y && e.push(i.entities[r])
                    }
                    switch (e.length) {
                    case 0:
                        this.select(null);
                        break;
                    case 1:
                        this.select(e[0]);
                        break;
                    default:
                        this.selectGroup(e)
                    }
                }
                ,
                n.prototype.select = function(t) {
                    var i = this.selected();
                    i && (this.Qe.attachTo(null),
                    i.onDeselected()),
                    this.Qe.attachTo(t),
                    this.draw(),
                    this.onSelect && this.onSelect(t)
                }
                ,
                n.prototype.selectGroup = function(t) {
                    var i = new l.EntityGroup(this,t);
                    this.select(i)
                }
                ,
                n.prototype.selected = function() {
                    return this.Qe.ent()
                }
                ,
                n.prototype.clear = function() {
                    this.select(null),
                    this.He[0].group.destroyChildren(),
                    this.He[0].entities = [],
                    this.He[1].group.destroyChildren(),
                    this.He[1].entities = []
                }
                ,
                n.prototype.addEntity = function(t) {
                    this.addEntityToSide(t, this.De)
                }
                ,
                n.prototype.addEntityToSide = function(t, i) {
                    if (!this.hr)
                        throw "Attempt to add an entity to a design with no associated product.";
                    t.setArtboardIndex(i);
                    var n = this.He[i];
                    n.entities.push(t),
                    n.group.add(t.node()),
                    this.draw(),
                    this.notifyChange()
                }
                ,
                n.prototype.removeEntity = function(t) {
                    t == this.selected() && this.Qe.attachTo(null),
                    this.onRemove(t);
                    for (var i = this.He[this.De], n = 0; n < i.entities.length; ++n)
                        if (i.entities[n] == t)
                            return i.entities.splice(n, 1),
                            t.node().destroy(),
                            this.draw(),
                            this.notifyChange(),
                            void this.onEndUpdateState();
                    throw new Error("Attempted to remove non-existent entity.")
                }
                ,
                n.prototype.removeEntityGroup = function(t) {
                    t == this.selected() && this.Qe.attachTo(null),
                    this.onRemove(t);
                    for (var i = this.He[this.De], n = !1, s = 0; s < i.entities.length; ++s)
                        for (var e = 0; e < t.ents().length; ++e) {
                            var r = t.ents()[e];
                            i.entities[s] == r && (i.entities.splice(s, 1),
                            r.node().destroy(),
                            this.draw(),
                            n = !0)
                        }
                    if (n)
                        return this.notifyChange(),
                        void this.onEndUpdateState();
                    throw "Attempted to remove non-existent entities."
                }
                ,
                n.prototype.notifyChange = function() {
                    this.ctx.updateDescription(),
                    this.We.onProductChange()
                }
                ,
                n.prototype.onEndUpdateState = function() {
                    this.Ue.onDesignChange()
                }
                ,
                n.prototype.entitiesOnSide = function(t) {
                    return this.He[t].entities.length
                }
                ,
                n.prototype.zt = function() {
                    --this.It,
                    this.It < 0 && (console.log("_entityLoadCount mismatch."),
                    this.It = 0),
                    0 === this.It && this.ar && this.ar()
                }
                ,
                n.prototype.load = function(t, i) {
                    var n = this
                      , s = this.De;
                    this.clear(),
                    this.It = 0,
                    t.artboards.forEach((function(t) {
                        return n.It += t.images.length + t.texts.length
                    }
                    )),
                    this.ar = i || null;
                    var e = this.It;
                    this.ctx.setProduct(t.productId).then((function() {
                        var r = u.API.findProductColor(n.ctx.product(), t.productColorCode);
                        if (!r)
                            throw "Could not find product color.";
                        n.ctx.setProductColor(r, t.decorationMethod);
                        for (var o = 0; o < t.artboards.length; ++o) {
                            var h = t.artboards[o]
                              , v = h.images;
                            for (var d in (v = v.concat(h.texts)).sort((function(t, i) {
                                return t.depth - i.depth
                            }
                            )),
                            v) {
                                var l = v[d];
                                if (l.imageType) {
                                    var w = l;
                                    switch (w.imageType) {
                                    case "upload":
                                        var g = w
                                          , p = new c.ImageEntity(n);
                                        p.setArtboardIndex(o),
                                        p.load(g).then((function() {
                                            n.zt()
                                        }
                                        ), (function(t) {
                                            m.Studio.trackError(t),
                                            n.zt()
                                        }
                                        )),
                                        n.addEntityToSide(p, o);
                                        break;
                                    case "clipart":
                                        var b = w
                                          , x = new a.ClipartEntity(n);
                                        x.setArtboardIndex(o),
                                        x.load(b).then((function() {
                                            n.zt()
                                        }
                                        ), (function(t) {
                                            m.Studio.trackError(t),
                                            n.zt()
                                        }
                                        )),
                                        n.addEntityToSide(x, o)
                                    }
                                } else {
                                    var k = l
                                      , y = new f.TextEntity(n);
                                    y.setArtboardIndex(o),
                                    y.load(k).then((function() {
                                        n.zt()
                                    }
                                    ), (function(t) {
                                        m.Studio.trackError(t),
                                        n.zt()
                                    }
                                    )),
                                    n.addEntityToSide(y, o)
                                }
                            }
                            n.hr.productLocations.length > 1 ? n.cr(s) : n.cr(0)
                        }
                        0 === e && i && i()
                    }
                    ))
                }
                ,
                n.prototype.showDefaultSide = function() {
                    if (this.hr.productLocations.length > 1 && this.He.length > 1) {
                        var t = this.entitiesOnSide(0)
                          , i = this.entitiesOnSide(1);
                        0 === t && i > 0 ? 0 === this.De && this.Re() : 1 === this.De && this.Re()
                    }
                }
                ,
                n.prototype.save = function() {
                    for (var t = {
                        name: "",
                        designNotes: "",
                        productId: this.hr.productId,
                        decorationMethod: "",
                        productColorCode: "",
                        artboards: []
                    }, i = 0; i < this.hr.productLocations.length; i++) {
                        for (var n = {
                            locationNumber: i + 1,
                            images: [],
                            texts: []
                        }, s = this.He[i], e = 0; e < s.entities.length; ++e) {
                            var r = s.entities[e];
                            if (r instanceof f.TextEntity) {
                                var o = r.save();
                                n.texts.push(o)
                            } else if (r instanceof c.ImageEntity) {
                                var h = r.save();
                                n.images.push(h)
                            } else {
                                if (!(r instanceof a.ClipartEntity))
                                    throw "Unexpected entity type.";
                                var u = r.save();
                                n.images.push(u)
                            }
                        }
                        t.artboards.push(n)
                    }
                    return t
                }
                ,
                n.prototype.setUploadedImagesFilePath = function(t) {
                    for (var i = 0; i < this.He.length; i++)
                        for (var n = this.He[i], s = 0; s < n.entities.length; ++s) {
                            var e = n.entities[s];
                            e instanceof c.ImageEntity && e.set_filePath(t)
                        }
                }
                ,
                n.prototype.gatherCurrentInks = function() {
                    return this.vr(0, this.He.length - 1)
                }
                ,
                n.prototype.gatherInksForSide = function(t) {
                    return this.vr(t, t)
                }
                ,
                n.prototype.gatherInksForCurrentSide = function() {
                    return this.vr(this.De, this.De)
                }
                ,
                n.prototype.vr = function(t, i) {
                    for (var n = [], s = t; s <= i; ++s)
                        if (!(this.hr && this.hr.productLocations && s >= this.hr.productLocations.length))
                            for (var e = this.He[s], r = 0; r < e.entities.length; ++r)
                                e.entities[r].inks().forEach((function(t) {
                                    t.inkId > 0 && (n[t.inkId] = !0)
                                }
                                ));
                    var o = [];
                    return n.forEach((function(t, i) {
                        o.push(i)
                    }
                    )),
                    o
                }
                ,
                n.prototype.curProductLocation = function() {
                    return this.getProductLocation(this.De)
                }
                ,
                n.prototype.getProductLocation = function(t) {
                    return this.hr.productLocations[t]
                }
                ,
                n.prototype.showGuideRect = function() {
                    if (!this.Un.isVisible()) {
                        this.curProductLocation().printLocations[0].hideOuterGrid || this.Un.show();
                        var t = this.curProductLocation().printLocations[0];
                        t.printSublocations[0] && this.ir.show(),
                        t.printSublocations[1] && this.nr.show()
                    }
                }
                ,
                n.prototype.constrainDrag = function(t, n) {
                    var s = null
                      , e = null
                      , r = i.SNAP
                      , o = i.SNAP
                      , h = -1
                      , u = -1;
                    function c(t, i, n) {
                        var e = i - n;
                        Math.abs(e) < Math.abs(r) && (r = e,
                        h = i,
                        s = t)
                    }
                    function a(t, i, n) {
                        var s = i - n;
                        Math.abs(s) < Math.abs(o) && (o = s,
                        u = i,
                        e = t)
                    }
                    var f = n.pos_bbox(t.x, t.y)
                      , v = this.He[this.De].entities;
                    v = v.concat(this.Ve);
                    for (var d = 0; d < v.length; ++d) {
                        if ((w = v[d]) != n) {
                            var l = w.bbox();
                            c(w, l.left, f.left),
                            c(w, l.left, f.right),
                            c(w, l.right, f.left),
                            c(w, l.right, f.right),
                            c(w, l.horzCenter, f.horzCenter),
                            a(w, l.top, f.top),
                            a(w, l.top, f.bottom),
                            a(w, l.bottom, f.top),
                            a(w, l.bottom, f.bottom),
                            a(w, l.vertCenter, f.vertCenter)
                        }
                    }
                    -1 == h ? this.sr.hide() : (this.sr.setX(h),
                    this.sr.show(),
                    t.x += r),
                    -1 == u ? this.er.hide() : (this.er.setY(u),
                    this.er.show(),
                    t.y += o);
                    for (d = 0; d < v.length; ++d) {
                        var w;
                        if ((w = v[d]) == s || w == e) {
                            var g = v[d].guideRect(this.dr);
                            g.getParent() || this.tr.add(g)
                        } else
                            v[d].removeGuideRect()
                    }
                    this.draw()
                }
                ,
                n.prototype.hideEdges = function() {
                    var t = this.He[this.De].entities;
                    t = t.concat(this.Ve);
                    for (var i = 0; i < t.length; ++i)
                        t[i].removeGuideRect();
                    this.Un.hide(),
                    this.ir.hide(),
                    this.nr.hide(),
                    this.sr.hide(),
                    this.er.hide(),
                    this.draw()
                }
                ,
                n.prototype.draw = function() {
                    var t = this;
                    this.lr || (this.lr = !0,
                    setTimeout((function() {
                        try {
                            t.qe.draw()
                        } catch (t) {} finally {
                            t.lr = !1
                        }
                    }
                    ), 0))
                }
                ,
                n.prototype.onEntityClicked = function(t, i) {
                    this.Qe.contains(t) || this.select(t),
                    2 !== i.button && this.Qe.node().startDrag()
                }
                ,
                n.prototype.onEntityRightClicked = function(t, i) {
                    this.Qe.contains(t) && this.ctx.contextMenu().showMenu(i.clientX, i.clientY)
                }
                ,
                n.prototype.Re = function() {
                    this.cr(this.De ? 0 : 1)
                }
                ,
                n.prototype.Fe = function() {
                    this.Ae = !this.Ae,
                    this.wr()
                }
                ,
                n.prototype.setZoom = function(t) {
                    this.Ae = t
                }
                ,
                n.prototype.cr = function(t) {
                    t >= this.hr.productLocations.length || (this.select(null),
                    this.He[this.De].group.remove(),
                    this.De = t,
                    this.$e.add(this.He[this.De].group),
                    this.Ke.moveToTop(),
                    this.updateBackground(),
                    this.wr(),
                    this.$(".rotateButton").innerText = 0 == this.De ? "view back" : "view front")
                }
                ,
                n.prototype.updateBackground = function() {
                    this.Xe.src = u.API.productUrl(this.hr.productId, this.curProductLocation().productLocationNumber, this.ctx.productColor().colorId);
                    for (var t = this.He[this.De], i = 0; i < t.entities.length; ++i)
                        t.entities[i].productColorChanged()
                }
                ,
                n.prototype.pixelScale = function() {
                    return this.$e.getAbsoluteTransform().getMatrix()[0]
                }
                ,
                n.prototype.rr = function() {
                    var t = this
                      , i = function() {
                        var i = t.$(".container").getBoundingClientRect()
                          , n = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
                          , s = i.top + n
                          , e = i.width
                          , r = window
                          , o = document
                          , h = o.documentElement
                          , u = o.getElementsByTagName("body")[0]
                          , c = (r.innerHeight || h.clientHeight || u.clientHeight) - s
                          , a = getComputedStyle(t.ctx.elem()).getPropertyValue("min-height")
                          , f = parseInt(a);
                        f && (c = Math.max(c, f)),
                        t.ctx.elem().style.height = c + "px";
                        var v = c
                          , d = 435 * v / 480;
                        d = Math.max(d, e),
                        t.qe.setWidth(d),
                        t.qe.setHeight(v);
                        var l = d / 435
                          , w = v / 480;
                        l < w ? w = l : l = w,
                        t.qe.setScale(l, w);
                        var g = (d - 435 * l) / 2
                          , m = (v - 480 * w) / 2;
                        d > e && (g = -((d - e) / 2));
                        t.qe.setPosition(g, m),
                        t.wr()
                    };
                    window.addEventListener("resize", (function(t) {
                        i()
                    }
                    )),
                    setTimeout((function() {
                        i()
                    }
                    ), 0)
                }
                ,
                n.prototype.gr = function() {
                    var t = 1 / this.tr.getAbsoluteTransform().getMatrix()[0];
                    this.dr = t * i.GUIDE_WIDTH,
                    this.Un.setStrokeWidth(this.dr),
                    this.ir.setStrokeWidth(this.dr),
                    this.nr.setStrokeWidth(this.dr),
                    this.sr.setStrokeWidth(this.dr),
                    this.er.setStrokeWidth(this.dr)
                }
                ,
                n.prototype.wr = function() {
                    if (this.hr) {
                        var t = this.curProductLocation().printLocations[0]
                          , i = t.scaleRatio;
                        this.Ye.setScale(i, i),
                        this.Je.setScale(.5 / i, .5 / i);
                        var n, s, e, r = t.xStartCoord / i, o = t.yStartCoord / i, h = this.He[this.De].group;
                        if (h.setPosition(r, o),
                        this.Ae) {
                            var u = this.qe.getScaleX()
                              , c = t.width * i * u
                              , a = t.height * i * u
                              , f = this.$(".container")
                              , v = f.clientWidth
                              , d = f.clientHeight
                              , l = v / c
                              , w = d / a
                              , g = l < w ? l : w;
                            g *= .85,
                            this.$e.setScale(g, g);
                            var m = this.qe.getPosition()
                              , p = this.pixelScale()
                              , b = m.x / p
                              , x = m.y / p
                              , k = d / p
                              , y = (v / p - t.width) / 2
                              , M = (k - t.height) / 2;
                            this.$e.setOffset(r + b - y, o + x - M)
                        } else
                            this.$e.setScale(1, 1),
                            this.$e.setOffset(0, 0);
                        this.Ke.setPosition(r, o),
                        this.tr.setPosition(r, o),
                        this.Un.setSize(t.width, t.height),
                        t.printSublocations[0] && (s = (n = t.printSublocations[0]).xStartCoord / i - r,
                        e = n.yStartCoord / i - o,
                        this.ir.setPosition(s, e),
                        this.ir.setSize(n.width, n.height)),
                        t.printSublocations[1] && (s = (n = t.printSublocations[1]).xStartCoord / i - r,
                        e = n.yStartCoord / i - o,
                        this.nr.setPosition(s, e),
                        this.nr.setSize(n.width, n.height)),
                        this.Ve.set_width(t.width),
                        this.Ve.set_height(t.height),
                        this.Qe.adjustScale(),
                        this.gr();
                        var I = [-this.dr, -this.dr, t.width + 2 * this.dr, t.height + 2 * this.dr];
                        if (this.tr._hackyClipRect = I,
                        h._hackyClipRect = I,
                        this.Ae)
                            for (var _ = this.He[this.De], z = 0; z < _.entities.length; ++z)
                                _.entities[z].scaleChanged();
                        this.draw()
                    }
                }
                ,
                n.prototype.ur = function(t, i) {
                    for (var n = 0; n < this.He.length; ++n) {
                        var s = this.He[n];
                        if (n >= i.productLocations.length || n >= t.productLocations.length)
                            return;
                        for (var e = t.productLocations[n].printLocations[0], r = i.productLocations[n].printLocations[0], o = r.width / e.width, h = r.height / e.height, u = o < h ? o : h, c = e.width * u, a = (r.width - c) / 2, f = 0; f < s.entities.length; ++f) {
                            var v = s.entities[f]
                              , d = v.width()
                              , l = v.height();
                            v.set_x(v.x() * u + a),
                            v.set_y(v.y() * u),
                            v.set_width(d * u),
                            v.set_height(l * u)
                        }
                    }
                }
                ,
                n.prototype.hideShareOptions = function() {
                    this.Ge.classList.remove("active")
                }
                ,
                n
            }(r.TemplateView);
            i.ProductView = x
        }
        ,
        3283: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.SaveDesignPane = void 0;
            var s = n(655)
              , e = n(8709)
              , r = n(2497)
              , o = n(1156)
              , h = n(6059)
              , u = function(t) {
                function i(i) {
                    var n = t.call(this, "SaveDesignPane", i) || this;
                    n.i = i,
                    n.B = n.$(".scroller"),
                    n.mr = n.$(".designNameInput"),
                    n.le = n.$(".notesText"),
                    (0,
                    r.limitCharacterCount)(n.le, 999),
                    n.le.onchange = function(t) {
                        i.setDesignNotes(n.le.value)
                    }
                    ,
                    n.we = n.$(".notesToggle"),
                    n.we.onclick = function(t) {
                        n.we.classList.toggle("opened"),
                        n.le.classList.toggle("opened")
                    }
                    ,
                    n.pr = n.$(".message"),
                    n.br = document.createElement("span"),
                    n.pr.appendChild(n.br);
                    var s = n.$(".form")
                      , e = n.$(".saveButton");
                    return (0,
                    r.onSubmit)(s, e, (function() {
                        i.setDesignNotes(n.le.value),
                        n.mr.blur();
                        var t = n.mr.value;
                        0 != t.trim().length ? (n.mr.classList.remove("input-validation-error"),
                        n.kr(),
                        n.R(),
                        i.product().isDiscontinued ? n.V("This item has been discontinued. Please switch to a different product before continuing.") : i.productColor().isDiscontinued ? n.V("This product is no longer available in " + i.productColor().colorName + ". Please choose a different color before saving your design.") : i.saveDesign(t, (function(t, s, e, r, o, h) {
                            t ? (h && i.setUploadedImagesFilePath(h),
                            n.yr(),
                            n.Mr()) : r ? n.Le(o) : n.V(e)
                        }
                        ))) : n.mr.classList.add("input-validation-error")
                    }
                    )),
                    n.Ir = n.$(".buttons .load"),
                    n._r = n.$(".buttons .save"),
                    n.zr = n.$(".loadPane"),
                    n.Pr = n.$(".savePane"),
                    (0,
                    r.onClick)(n.Ir, (function() {
                        n.Br()
                    }
                    )),
                    (0,
                    r.onClick)(n._r, (function() {
                        n.Cr()
                    }
                    )),
                    n.Cr(),
                    n
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    var i = this;
                    this.i.requireLogin((function() {
                        i.Mr()
                    }
                    ), (function() {
                        i.i.showPane("continue")
                    }
                    )),
                    t.prototype.show.call(this),
                    this.mr.value = this.i.name(),
                    this.le.value = this.i.designNotes(),
                    this.kr(),
                    this.R()
                }
                ,
                i.prototype.Br = function() {
                    this.Ir.parentElement.classList.add("selected"),
                    this.zr.classList.add("active"),
                    this._r.parentElement.classList.remove("selected"),
                    this.Pr.classList.remove("active")
                }
                ,
                i.prototype.Cr = function() {
                    this.Ir.parentElement.classList.remove("selected"),
                    this.zr.classList.remove("active"),
                    this._r.parentElement.classList.add("selected"),
                    this.Pr.classList.add("active"),
                    this.i.designNotes().length > 0 && this._e(),
                    this.kr(),
                    this.R()
                }
                ,
                i.prototype.V = function(t) {
                    this.pr.classList.add("alert-error"),
                    this.Or(t)
                }
                ,
                i.prototype.R = function() {
                    this.pr.classList.remove("alert-error"),
                    this.Sr()
                }
                ,
                i.prototype.yr = function() {
                    this.pr.classList.add("alert-success"),
                    this.Or("Your design has been saved.")
                }
                ,
                i.prototype.kr = function() {
                    this.pr.classList.remove("alert-success"),
                    this.Sr()
                }
                ,
                i.prototype.Or = function(t) {
                    this.br.textContent = t,
                    this.pr.style.display = "block"
                }
                ,
                i.prototype.Sr = function() {
                    this.pr.style.display = "none"
                }
                ,
                i.prototype._e = function() {
                    this.we.classList.add("opened"),
                    this.le.classList.add("opened")
                }
                ,
                i.prototype.Mr = function() {
                    var t = this;
                    this.B.innerHTML = "",
                    o.API.designs((function(i) {
                        if (i && 0 == i.length)
                            t.jr();
                        else
                            for (var n in i)
                                t.A(i[n])
                    }
                    ))
                }
                ,
                i.prototype.A = function(t) {
                    var i = new c(t,this.i);
                    this.B.appendChild(i.elem())
                }
                ,
                i.prototype.jr = function() {
                    var t = document.createElement("div");
                    t.textContent = "You don't have any saved designs.",
                    this.B.appendChild(t)
                }
                ,
                i.prototype.Le = function(t) {
                    this.br.innerHTML = "",
                    this.pr.classList.add("alert-error");
                    var i = document.createTextNode("You are trying to overwrite a design from a previous order. Please choose a new name or place a re-order from ")
                      , n = document.createElement("a");
                    n.href = t,
                    n.textContent = "My Account";
                    var s = document.createTextNode(".");
                    this.br.appendChild(i),
                    this.br.appendChild(n),
                    this.br.appendChild(s),
                    this.pr.style.display = "block"
                }
                ,
                i
            }(e.CloseablePane);
            i.SaveDesignPane = u;
            var c = function(t) {
                function i(i, n) {
                    var s = t.call(this, "DesignItem") || this;
                    return s.$(".thumbnail").src = i.designThumbUrl,
                    s.$(".name").textContent = i.name,
                    s.$(".method").textContent = i.printMethod,
                    s.$(".summary").textContent = i.decorationSummary,
                    (0,
                    r.onClick)(s.elem(), (function() {
                        n.loadDesign(i.designId)
                    }
                    )),
                    s
                }
                return s.__extends(i, t),
                i
            }(h.TemplateView)
        }
        ,
        2582: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Studio = i.PANES = i.studioConfig = i.DEFAULT_PRODUCTID = void 0;
            var s = n(655)
              , e = n(2497)
              , r = n(1156)
              , o = n(4881)
              , h = n(4137)
              , u = n(6693)
              , c = n(9017)
              , a = n(2369)
              , f = n(6059)
              , v = n(9131)
              , d = n(9109)
              , l = n(6696)
              , w = n(8922)
              , g = n(6594)
              , m = n(7144)
              , p = n(5565)
              , b = n(6904)
              , x = n(3283)
              , k = n(5804)
              , y = n(560)
              , M = n(185)
              , I = n(3867)
              , _ = n(2147)
              , z = n(8478)
              , P = n(8123)
              , B = n(9001);
            i.DEFAULT_PRODUCTID = "GIG500",
            i.studioConfig = {
                DEFAULT_FONT: "LeagueSpartan",
                DEFAULT_FONT_CATEGORY: 0
            },
            i.PANES = {
                default: function(t) {
                    return new p.IntroPane(t)
                },
                continue: function(t) {
                    return new g.ContinuePane(t)
                },
                editProduct: function(t) {
                    return new b.EditProductPane(t)
                },
                addImage: function(t) {
                    return new c.AddImagePane(t)
                },
                addText: function(t) {
                    return new a.AddTextPane(t)
                },
                saveDesign: function(t) {
                    return new x.SaveDesignPane(t)
                },
                editText: function(t) {
                    return new k.EditTextPane(t)
                },
                editImage: function(t) {
                    return new y.EditImagePane(t)
                },
                editGroup: function(t) {
                    return new M.EditGroupPane(t)
                }
            };
            var C = function(t) {
                function n() {
                    var i = t.call(this, "Studio") || this;
                    return i.Nr = {},
                    i.Tr = "",
                    i.Er = "",
                    i.Lr = !0,
                    i.Ar = {},
                    r.API.onerror = function() {
                        i.Dr()
                    }
                    ,
                    r.API.onloading = function(t) {
                        i.Hr(t)
                    }
                    ,
                    i.Vr = i.$(".ids-spinner"),
                    i.Rr = i.$(".panes"),
                    i.Fr = i.$(".productDesc"),
                    i.Gr = i.$(".decorationDesc"),
                    i.Wr = new I.MenuBar,
                    i.$(".menu").appendChild(i.Wr.elem()),
                    i.Wr.onNav = function(t) {
                        (i.Ur instanceof y.EditImagePane || i.Ur instanceof k.EditTextPane) && i.showPane(null),
                        i.showPane(t)
                    }
                    ,
                    i.Wr.onBuy = function() {
                        i.showPriceDialog()
                    }
                    ,
                    i.yt = new u.ProductView(i),
                    i.$(".product").appendChild(i.yt.elem()),
                    i.yt.onSelect = function(t) {
                        i.Ur && i.Ur instanceof m.EditEntityPane && i.Ur.closeDialogs(),
                        t ? t instanceof v.EntityGroup ? (i.showPane("editGroup"),
                        i.Ur.setEntityGroup(t)) : t instanceof d.TextEntity ? (i.showPane("editText"),
                        i.Ur.setEntity(t)) : (i.showPane("editImage"),
                        i.Ur.setEntity(t)) : i.Ur && i.Ur instanceof M.EditGroupPane && !i.isMobileView() && i.showPane(i.qr)
                    }
                    ,
                    i.yt.onRemove = function(t) {
                        i.Ur && i.showPane("continue")
                    }
                    ,
                    i.yt.onReset = function() {
                        i.showPane("continue")
                    }
                    ,
                    i.Yr = new l.Clipboard(i.yt),
                    i.$r = new w.ContextMenu(i),
                    i.showPane("default"),
                    i.Xr(),
                    setTimeout((function() {
                        window.onunload = function(t) {
                            i.Jr()
                        }
                    }
                    ), 5e3),
                    i
                }
                return s.__extends(n, t),
                n.prototype.Xr = function() {
                    var t, i, n, s, e, r = {}, o = window.location.pathname.split("/");
                    o.length > 1 && "studio" === o[1] && (o.length > 2 && (r.productId = o[2],
                    r.fromCatalog = !0),
                    o.length > 3 && (r.colorId = o[3]));
                    var h = window.location.search
                      , u = new URLSearchParams(h);
                    r.printMethod = null !== (t = u.get("dec")) && void 0 !== t ? t : void 0,
                    r.designId = parseInt(null !== (i = u.get("designid")) && void 0 !== i ? i : ""),
                    r.templateId = parseInt(null !== (n = u.get("tid")) && void 0 !== n ? n : ""),
                    r.tempDesignId = parseInt(null !== (s = u.get("tdid")) && void 0 !== s ? s : ""),
                    r.token = null !== (e = u.get("tdtok")) && void 0 !== e ? e : void 0,
                    r.keepProduct = "true" === u.get("keepproduct"),
                    this.init(r)
                }
                ,
                n.prototype.init = function(t) {
                    return s.__awaiter(this, void 0, void 0, (function() {
                        var n, e, h, u, c, a = this;
                        return s.__generator(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                if (this.dontRefreshOnError(),
                                t.productId || (t.productId = i.DEFAULT_PRODUCTID),
                                n = !1,
                                !(t.designId && t.designId > 0))
                                    return [3, 5];
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]),
                                [4, this.loadDesign(t.designId)];
                            case 2:
                                return n = s.sent(),
                                o.Browser.history() && o.Browser.localstorage() && window.history.pushState({}, "", "/studio"),
                                [3, 4];
                            case 3:
                                return s.sent(),
                                [3, 4];
                            case 4:
                                return [3, 19];
                            case 5:
                                if (!t.templateId)
                                    return [3, 10];
                                s.label = 6;
                            case 6:
                                return s.trys.push([6, 8, , 9]),
                                [4, this.loadTemplate(t.templateId, !1)];
                            case 7:
                                return n = s.sent(),
                                o.Browser.history() && o.Browser.localstorage() && window.history.pushState({}, "", "/studio"),
                                [3, 9];
                            case 8:
                                return e = s.sent(),
                                console.log(e),
                                [3, 9];
                            case 9:
                                return [3, 19];
                            case 10:
                                if (!t.tempDesignId || !t.token)
                                    return [3, 15];
                                s.label = 11;
                            case 11:
                                return s.trys.push([11, 13, , 14]),
                                [4, this.loadTempDesign(t.tempDesignId, t.token)];
                            case 12:
                                return n = s.sent(),
                                o.Browser.history() && o.Browser.localstorage() && window.history.pushState({}, "", "/studio"),
                                [3, 14];
                            case 13:
                                return h = s.sent(),
                                console.log(h),
                                [3, 14];
                            case 14:
                                return [3, 19];
                            case 15:
                                if (!t.fromCatalog)
                                    return [3, 19];
                                s.label = 16;
                            case 16:
                                return s.trys.push([16, 18, , 19]),
                                [4, this.setProduct(t.productId).then((function() {
                                    var i = r.API.findProductColorOrDefault(a.product(), t.colorId);
                                    a.setProductColor(i, r.API.findProductPrintMethod(a.product(), t.printMethod)),
                                    n = !0
                                }
                                ))];
                            case 17:
                                return s.sent(),
                                o.Browser.history() && o.Browser.localstorage() && window.history.replaceState({}, "", "/studio?keepproduct=true"),
                                [3, 19];
                            case 18:
                                return u = s.sent(),
                                console.log(u),
                                [3, 19];
                            case 19:
                                return n ? [2] : o.Browser.history() && o.Browser.localstorage() ? (this.tryReconstituteState(t.keepProduct, t.productId, t.colorId, t.printMethod),
                                window.history.replaceState({}, "", "/studio" + (t.keepProduct ? "?keepproduct=true" : "")),
                                [3, 23]) : [3, 20];
                            case 20:
                                return s.trys.push([20, 22, , 23]),
                                [4, this.setProduct(t.productId).then((function() {
                                    var i = r.API.findProductColorOrDefault(a.product(), t.colorId);
                                    a.setProductColor(i, r.API.findProductPrintMethod(a.product(), t.printMethod)),
                                    n = !0,
                                    a.productView().undoRedo().reset()
                                }
                                ))];
                            case 21:
                                return s.sent(),
                                [3, 23];
                            case 22:
                                return c = s.sent(),
                                console.log(c),
                                [3, 23];
                            case 23:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.requireLogin = function(t, i) {
                    r.API.loginCheck((function(n) {
                        n ? t() : new _.LoginDialog(t,i).show()
                    }
                    ))
                }
                ,
                n.prototype.loadDesign = function(t) {
                    return s.__awaiter(this, void 0, Promise, (function() {
                        var i = this;
                        return s.__generator(this, (function(n) {
                            return [2, new Promise((function(n, s) {
                                r.API.design(t, (function(t) {
                                    i.deserializeDesign(t),
                                    i.showPane("continue"),
                                    n(!0)
                                }
                                ), (function() {
                                    new B.ErrorDialog("Something went wrong trying to retrieve your design.\nPlease contact us for help.").show(),
                                    s("Error attempting to load design id ".concat(t, "."))
                                }
                                ))
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.saveDesign = function(t, i) {
                    var n = this;
                    r.API.designExists(t, (function(s) {
                        if (s.isLocked)
                            i(!1, 0, "", !0, s.designUrl);
                        else if (!s.designExists || window.confirm("You have previously saved a design with this same name.\n\nAre you sure you wish to overwrite this design?")) {
                            n.Tr = t;
                            var e = n.serializeDesign();
                            r.API.saveDesign(e, (function(t) {
                                i(t.status, t.designId, t.message, !1, "", t.path),
                                n.yt.undoRedo().reset()
                            }
                            ))
                        }
                    }
                    ))
                }
                ,
                n.prototype.loadTempDesign = function(t, i) {
                    return s.__awaiter(this, void 0, Promise, (function() {
                        var n = this;
                        return s.__generator(this, (function(s) {
                            return [2, new Promise((function(s, e) {
                                r.API.tempdesign(t, i, (function(t) {
                                    n.deserializeDesign(t),
                                    n.showPane("default"),
                                    s(!0)
                                }
                                ), (function() {
                                    new B.ErrorDialog("Something went wrong trying to retrieve your design.\nPlease contact us for help.").show(),
                                    e("Error loading temp design ".concat(t, " with token ").concat(i, "."))
                                }
                                ))
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.loadFont = function(t, i, n) {
                    var s = this;
                    t in this.Ar ? i(this.Ar[t]) : r.API.getRaw(r.API.ziggyFontUrl(t), (function(n) {
                        var e = new h.ZiggyFont(t,n);
                        s.Ar[t] = e,
                        i(e)
                    }
                    ), (function() {
                        n && n()
                    }
                    ))
                }
                ,
                n.prototype.loadClipart = function(t, i, n) {
                    r.API.getRaw(r.API.ziggyImageUrl(t), (function(t) {
                        i(t)
                    }
                    ), (function() {
                        n && n()
                    }
                    ))
                }
                ,
                n.prototype.loadTemplate = function(t, i) {
                    return s.__awaiter(this, void 0, Promise, (function() {
                        var n = this;
                        return s.__generator(this, (function(s) {
                            return [2, new Promise((function(s, e) {
                                var o = ""
                                  , h = ""
                                  , u = "";
                                i && (o = n.hr.productId,
                                h = n.Zr.colorId,
                                u = n.Kr),
                                r.API.template(t, o, h, u, (function(t) {
                                    n.deserializeDesign(t),
                                    n.showPane("default"),
                                    s(!0)
                                }
                                ), (function() {
                                    e("Error loading template ".concat(t, "."))
                                }
                                ))
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.showPane = function(t) {
                    var i = this.Qr(t);
                    if (i instanceof M.EditGroupPane || (this.qr = t),
                    null != i && i.elem().classList.remove("hide-pane"),
                    i != this.Ur) {
                        if (this.Ur) {
                            var n = this.Ur;
                            this.Ur = null,
                            n.hide(),
                            this.Rr.removeChild(n.elem())
                        }
                        this.Wr.setSelected(t),
                        this.Ur = i,
                        null != this.Ur && (this.Rr.appendChild(this.Ur.elem()),
                        this.Ur.show())
                    }
                }
                ,
                n.prototype.productView = function() {
                    return this.yt
                }
                ,
                n.prototype.name = function() {
                    return this.Tr
                }
                ,
                n.prototype.designNotes = function() {
                    return this.Er
                }
                ,
                n.prototype.setDesignNotes = function(t) {
                    this.Er = t
                }
                ,
                n.prototype.product = function() {
                    return this.hr
                }
                ,
                n.prototype.contextMenu = function() {
                    return this.$r
                }
                ,
                n.prototype.clipboard = function() {
                    return this.Yr
                }
                ,
                n.prototype.gatherCurrentInks = function() {
                    return this.yt.gatherCurrentInks()
                }
                ,
                n.prototype.defaultInk = function() {
                    return (0,
                    e.getBrightness)((0,
                    e.hexToRgb)(this.productColor().rgb.split(";")[0])) < .4 ? {
                        inkId: 4,
                        colorIndex: 1
                    } : {
                        inkId: 1,
                        colorIndex: 1
                    }
                }
                ,
                n.prototype.productColor = function() {
                    return this.Zr
                }
                ,
                n.prototype.decorationMethod = function() {
                    return this.Kr
                }
                ,
                n.prototype.setDecorationMethod = function(t) {
                    if (t) {
                        switch (t.toLowerCase()) {
                        case "s":
                            t = "ScreenPrint";
                            break;
                        case "d":
                            t = "DigitalPrint";
                            break;
                        case "e":
                            t = "Embroider"
                        }
                        this.Kr = t
                    }
                }
                ,
                n.prototype.setUploadedImagesFilePath = function(t) {
                    this.yt.setUploadedImagesFilePath(t)
                }
                ,
                n.prototype.setProduct = function(t) {
                    return s.__awaiter(this, void 0, Promise, (function() {
                        var i = this;
                        return s.__generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return this.hr && t == this.hr.productId ? (this.io(this.hr),
                                [4, Promise.resolve(!0)]) : [3, 2];
                            case 1:
                            case 3:
                                return [2, n.sent()];
                            case 2:
                                return [4, new Promise((function(n, s) {
                                    r.API.product(t, (function(t) {
                                        i.hr = t;
                                        var s = r.API.findProductColor(i.hr, i.hr.defaultColorId);
                                        if (!s)
                                            throw "Could not find production color";
                                        i.Zr = s,
                                        i.Kr = t.defaultDecorationMethod,
                                        i.updateDescription(),
                                        i.io(t),
                                        n(!0)
                                    }
                                    ), (function() {
                                        s("Error loading product ".concat(t, "."))
                                    }
                                    ))
                                }
                                ))]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.io = function(t) {
                    this.yt.setProduct(t),
                    this.yt.updateBackground()
                }
                ,
                n.prototype.setProductColor = function(t, i) {
                    this.Zr = t,
                    this.setDecorationMethod(i),
                    this.updateDescription(),
                    this.yt.updateBackground(),
                    this.yt.notifyChange()
                }
                ,
                n.prototype.Qr = function(t) {
                    return t ? (this.Nr[t] || (this.Nr[t] = i.PANES[t](this)),
                    this.Nr[t]) : null
                }
                ,
                n.prototype.updateDescription = function() {
                    if (this.hr) {
                        this.Fr.textContent = this.hr.manufacturerName + " " + this.hr.name,
                        this.productColor() && (this.Fr.textContent += ", " + this.productColor().colorName);
                        var t = ""
                          , i = !1;
                        switch (this.decorationMethod()) {
                        case r.API.DECORATION_DIGITALPRINT:
                            t = "Digital Print: ",
                            i = !1;
                            break;
                        case r.API.DECORATION_SCREENPRINT:
                            t = "Screen Print: ",
                            i = !0;
                            break;
                        case r.API.DECORATION_EMBROIDER:
                            t = "Embroidery: ",
                            i = !1
                        }
                        t += this.hr.productLocations[0].locationName + ": ",
                        t += i ? this.yt.gatherInksForSide(0).length + " colors" : this.productView().entitiesOnSide(0) > 0 ? "yes" : "no",
                        this.hr.productLocations.length > 1 && (t += ", " + this.hr.productLocations[1].locationName + ": ",
                        t += i ? this.productView().gatherInksForSide(1).length + " colors" : this.productView().entitiesOnSide(1) > 0 ? "yes" : "no"),
                        this.Gr.textContent = t
                    }
                }
                ,
                n.prototype.showPriceDialog = function() {
                    var t = new P.PriceDialog(this);
                    t.setName(this.Tr),
                    t.show()
                }
                ,
                n.trackError = function(t) {
                    try {
                        console.log(t),
                        ga && ga("send", {
                            hitType: "event",
                            eventCategory: "StudioError",
                            eventAction: t.message,
                            eventLabel: "studio"
                        })
                    } catch (t) {}
                }
                ,
                n.prototype.isMobileView = function() {
                    return this.elem().clientWidth === this.productView().elem().clientWidth
                }
                ,
                n.prototype.dontRefreshOnError = function() {
                    this.Lr = !1
                }
                ,
                n.prototype.Dr = function() {
                    alert("There was an error reaching the server. Restarting the studio."),
                    this.Lr && location.reload()
                }
                ,
                n.prototype.Jr = function() {
                    localStorage["swan-song"] = JSON.stringify(this.serializeDesign())
                }
                ,
                n.prototype.no = function(t) {
                    for (var i = 0, n = 0; n < t.artboards.length; n++)
                        i += t.artboards[n].images.length + t.artboards[n].texts.length;
                    return i
                }
                ,
                n.prototype.tryReconstituteState = function(t, i, n, s) {
                    var e = this;
                    this.so(t, i, n, s) || this.setProduct(i).then((function() {
                        var t = r.API.findProductColorOrDefault(e.product(), n)
                          , i = r.API.findProductPrintMethod(e.product(), s);
                        e.setProductColor(t, i),
                        e.yt.undoRedo().reset()
                    }
                    ))
                }
                ,
                n.prototype.so = function(t, i, n, s) {
                    var e = this;
                    if ("swan-song"in localStorage)
                        try {
                            var o = localStorage["swan-song"];
                            delete localStorage["swan-song"];
                            var h = JSON.parse(o);
                            return t && (i = h.productId,
                            n = h.productColorCode,
                            s = h.decorationMethod),
                            this.setProduct(i).then((function() {
                                var t = r.API.findProductColorOrDefault(e.product(), n)
                                  , i = r.API.findProductPrintMethod(e.product(), s);
                                e.setProductColor(t, i),
                                e.productView().undoRedo().reset()
                            }
                            )),
                            this.no(h) > 0 && new z.ContinueDialog((function() {
                                e.deserializeDesign(h)
                            }
                            ),(function() {}
                            )).show(),
                            !0
                        } catch (t) {}
                    return !1
                }
                ,
                n.prototype.serializeDesign = function() {
                    var t = this.yt.save();
                    return t.name = this.Tr,
                    t.designNotes = this.Er,
                    t.decorationMethod = this.Kr,
                    t.productColorCode = this.Zr.colorId,
                    t
                }
                ,
                n.prototype.deserializeDesign = function(t) {
                    var i = this;
                    this.Tr = t.name,
                    this.Er = t.designNotes,
                    this.yt.undoRedo().disable(),
                    this.yt.load(t, (function() {
                        i.yt.showDefaultSide(),
                        i.yt.undoRedo().reset()
                    }
                    ))
                }
                ,
                n.prototype.Hr = function(t) {
                    this.Vr.style.display = t ? "block" : ""
                }
                ,
                n
            }(f.TemplateView);
            i.Studio = C
        }
        ,
        4471: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.TemplatesDialog = void 0;
            var s = n(655)
              , e = n(6059)
              , r = n(1156)
              , o = n(2497)
              , h = function(t) {
                function i(i) {
                    var n = t.call(this, "TemplatesDialog") || this;
                    return n.i = i,
                    n.B = n.$(".scroller"),
                    n.C = n.$(".breadcrumbs"),
                    n.eo(),
                    n
                }
                return s.__extends(i, t),
                i.prototype.eo = function() {
                    var t = this;
                    r.API.templateCategories((function(i) {
                        t.ro(i)
                    }
                    ))
                }
                ,
                i.prototype.ro = function(t, i) {
                    var n = this;
                    this.B.innerHTML = "",
                    t.forEach((function(t) {
                        t.parent = i,
                        n.oo(t)
                    }
                    )),
                    this.B.scrollTop = 0,
                    this.ho(i)
                }
                ,
                i.prototype.oo = function(t) {
                    var i = this
                      , n = (0,
                    o.makeAnchor)("", "item", (function() {
                        t.subcategories && t.subcategories.length > 0 ? i.ro(t.subcategories, t) : i.uo(t)
                    }
                    ))
                      , s = document.createElement("img");
                    s.src = r.API.templateCategoryIcon(t.name),
                    n.appendChild(s);
                    var e = document.createElement("h2");
                    e.textContent = t.name,
                    n.appendChild(e),
                    this.B.appendChild(n)
                }
                ,
                i.prototype.uo = function(t) {
                    var i = this;
                    r.API.templateSearch(t.keyword, (function(n) {
                        i.B.innerHTML = "",
                        n.forEach((function(t) {
                            i.co(t)
                        }
                        )),
                        i.B.scrollTop = 0,
                        i.ho(t)
                    }
                    ))
                }
                ,
                i.prototype.co = function(t) {
                    var i = this
                      , n = (0,
                    o.makeAnchor)("", "template", (function() {
                        i.i.loadTemplate(t.templateId, !0),
                        i.hide()
                    }
                    ))
                      , s = document.createElement("img");
                    s.src = t.defaultImageZoomUrl,
                    n.appendChild(s),
                    this.B.appendChild(n)
                }
                ,
                i.prototype.ho = function(t) {
                    var i = this;
                    if (this.C.innerHTML = "",
                    this.ao("All Categories", (function() {
                        i.eo()
                    }
                    )),
                    t) {
                        for (var n = t.parent, s = function() {
                            var t = n;
                            e.ao(t.name, (function() {
                                i.ro(t.subcategories, t)
                            }
                            )),
                            n = n.parent
                        }, e = this; n; )
                            s();
                        this.ao(t.name)
                    }
                }
                ,
                i.prototype.ao = function(t, i) {
                    var n = document.createElement("li");
                    if (i) {
                        var s = (0,
                        o.makeAnchor)(t, "", (function() {
                            i()
                        }
                        ));
                        n.appendChild(s)
                    } else
                        n.textContent = t;
                    this.C.appendChild(n)
                }
                ,
                i
            }(e.Dialog);
            i.TemplatesDialog = h
        }
        ,
        9109: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.TextEntity = i.DEFAULT_SHADOW_ANGLE = i.DEFAULT_SHADOW_DISTANCE = i.MAX_RELATIVE_SHADOW_DISTANCE = i.DEFAULT_STROKE_WEIGHT = i.MAX_RELATIVE_STROKE_WEIGHT = i.MAX_TEXT_XSCALE = i.MIN_TEXT_XSCALE = i.MAX_CHARACTERS = i.MAX_TEXT_SIZE = i.MIN_TEXT_SIZE = void 0;
            var s = n(655)
              , e = n(1156)
              , r = n(1986)
              , o = n(4137)
              , h = n(2497)
              , u = n(8418)
              , c = n(4259)
              , a = s.__importStar(n(6516));
            i.MIN_TEXT_SIZE = .3,
            i.MAX_TEXT_SIZE = 8.24,
            i.MAX_CHARACTERS = 210,
            i.MIN_TEXT_XSCALE = .3,
            i.MAX_TEXT_XSCALE = 3,
            i.MAX_RELATIVE_STROKE_WEIGHT = 8.5,
            i.DEFAULT_STROKE_WEIGHT = 4,
            i.MAX_RELATIVE_SHADOW_DISTANCE = 15,
            i.DEFAULT_SHADOW_DISTANCE = 6,
            i.DEFAULT_SHADOW_ANGLE = 135;
            var f = function(t) {
                function n(i) {
                    var n = t.call(this, i) || this;
                    return n.fo = "",
                    n.vo = "",
                    n.do = 1,
                    n.lo = 0,
                    n.wo = 0,
                    n.mo = e.WarpType.Curve,
                    n.po = 0,
                    n.bo = "center",
                    n.xo = 1.22,
                    n.ko = 1,
                    n.yo = 1,
                    n.Mo = 0,
                    n.Io = 0,
                    n._o = 0,
                    n.zo = 1,
                    n.Po = 0,
                    n.Bo = 135,
                    n.Co = 1,
                    n.Oo = !0,
                    n.So = 0,
                    n.jo = 1,
                    n.No = -1,
                    n.To = Number.MAX_VALUE,
                    n.init(n.Bi = new a.Group),
                    n.set_constrain(!1),
                    n
                }
                return s.__extends(n, t),
                n.prototype.createNew = function(t, i) {
                    var n = this;
                    return this.vo = i,
                    this.set_text(t),
                    this.set_color(this.view.ctx.defaultInk().inkId),
                    new Promise((function(t, s) {
                        n.view.ctx.loadFont(n.vo, (function(i) {
                            n.Jn = i,
                            n.Eo(),
                            n.alignIdealPosition(),
                            t()
                        }
                        ), (function() {
                            s(new Error("Error retrieving font ".concat(i, ".")))
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.load = function(i) {
                    var n = this;
                    return new Promise((function(s, r) {
                        t.prototype.load.call(n, i),
                        n.view.ctx.loadFont(i.fontName, (function(r) {
                            n.Jn = r,
                            n.fo = i.string,
                            n.vo = i.fontName,
                            n.do = i.fontHeight,
                            n.lo = i.fontTracking,
                            n.wo = i.fontArc,
                            n.mo = i.warpType ? i.warpType : e.WarpType.Curve,
                            n.po = 0 !== i.warpVal ? i.warpVal / n.warpMax() : 0,
                            i.warpType || 0 === i.fontArc || (n.mo = e.WarpType.Curve,
                            n.po = i.fontArc / n.warpMax()),
                            n.bo = i.justify,
                            n.xo = i.lineHeight,
                            n.ko = i.textInks[0].inkId,
                            n.Mo = 100 * i.strokeWeight / i.fontHeight,
                            n.yo = i.strokeInkId,
                            n._o = 100 * i.innerStrokeWeight / i.fontHeight,
                            n.Io = i.innerStrokeInkId,
                            n.zo = i.shadowInkId,
                            n.Po = 100 * i.shadowDistance / i.fontHeight,
                            n.Bo = i.shadowAngle,
                            n.Co = i.horizontalScale,
                            n.Oo = i.kerning,
                            n.Lo(),
                            t.prototype.set_width.call(n, n.Ao);
                            var o = n.Do();
                            n.set_x(i.focalPointXInch - o[0]),
                            n.set_y(i.focalPointYInch - o[1]),
                            n.Eo(),
                            s()
                        }
                        ), (function() {
                            r(new Error("Error retrieving font ".concat(i.fontName, ".")))
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.save = function() {
                    var t = this.Do();
                    return {
                        focalPointXInch: this.x() + t[0],
                        focalPointYInch: this.y() + t[1],
                        fontName: this.font(),
                        fontArc: this.arc(),
                        fontHeight: this.size(),
                        fontTracking: this.tracking(),
                        rotation: this.rotation(),
                        string: this.text(),
                        justify: this.bo,
                        textInks: [{
                            colorIndex: 1,
                            inkId: this.ko
                        }],
                        depth: this.node().getZIndex(),
                        lineHeight: this.lineHeight(),
                        strokeWeight: this.strokeWeight(),
                        strokeInkId: this.strokeInkId(),
                        innerStrokeWeight: this.innerStrokeWeight(),
                        innerStrokeInkId: this.innerStrokeInkId(),
                        shadowDistance: this.shadowDistance(),
                        shadowAngle: this.shadowAngle(),
                        shadowInkId: this.shadowInkId(),
                        horizontalScale: this.horizontalScale(),
                        kerning: this.kerning(),
                        warpType: this.warpType(),
                        warpVal: this.warpVal() * this.warpMax()
                    }
                }
                ,
                n.prototype.Do = function() {
                    var t = (0,
                    h.degToRad)(this.rotation());
                    return [Math.cos(t) * this.width() / 2, Math.sin(t) * this.width() / 2]
                }
                ,
                n.prototype.text = function() {
                    return this.fo
                }
                ,
                n.prototype.font = function() {
                    return this.vo
                }
                ,
                n.prototype.size = function() {
                    return this.do
                }
                ,
                n.prototype.kerning = function() {
                    return this.Oo
                }
                ,
                n.prototype.tracking = function() {
                    return this.lo
                }
                ,
                n.prototype.arc = function() {
                    return this.mo === e.WarpType.Curve ? this.po * this.warpMax() : 0
                }
                ,
                n.prototype.warpType = function() {
                    return this.mo
                }
                ,
                n.prototype.warpVal = function() {
                    return this.po
                }
                ,
                n.prototype.warp = function() {
                    return {
                        type: this.mo,
                        val: this.po
                    }
                }
                ,
                n.prototype.justification = function() {
                    return this.bo
                }
                ,
                n.prototype.lineHeight = function() {
                    return this.xo
                }
                ,
                n.prototype.color = function() {
                    return this.ko
                }
                ,
                n.prototype.strokeWeight = function() {
                    return this.Mo / 100 * this.do
                }
                ,
                n.prototype.strokeInkId = function() {
                    return this.yo
                }
                ,
                n.prototype.innerStrokeWeight = function() {
                    return this._o / 100 * this.do
                }
                ,
                n.prototype.innerStrokeInkId = function() {
                    return this.Io
                }
                ,
                n.prototype.shadowInkId = function() {
                    return this.zo
                }
                ,
                n.prototype.shadowDistance = function() {
                    return this.Po / 100 * this.do
                }
                ,
                n.prototype.shadowAngle = function() {
                    return this.Bo
                }
                ,
                n.prototype.horizontalScale = function() {
                    return this.Co
                }
                ,
                n.prototype.stroke = function() {
                    return {
                        strokeInkId: this.yo,
                        strokeWeight: this.Mo,
                        innerStrokeInkId: this.Io,
                        innerStrokeWeight: this._o
                    }
                }
                ,
                n.prototype.shadow = function() {
                    return {
                        shadowInkId: this.zo,
                        shadowDistance: this.Po,
                        shadowAngle: this.Bo
                    }
                }
                ,
                n.prototype.inks = function() {
                    var t = [{
                        colorIndex: 1,
                        inkId: this.ko
                    }];
                    return this.Ho() && t.push({
                        colorIndex: 2,
                        inkId: this.yo
                    }),
                    this.Vo() && t.push({
                        colorIndex: 3,
                        inkId: this.zo
                    }),
                    t
                }
                ,
                n.prototype.set_text = function(t) {
                    (t = this.Ro(t)) && t.length > i.MAX_CHARACTERS && (t = t.substring(0, i.MAX_CHARACTERS),
                    this.forceFire("text", t)),
                    this.fire("text", t) && (this.fo = t,
                    this.Eo())
                }
                ,
                n.prototype.Ro = function(t) {
                    return t && (t = (t = t.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"')).replace(/[^\x00-\xFE]/g, "")),
                    t
                }
                ,
                n.prototype.set_font = function(t) {
                    var i = this;
                    this.fire("font", t) && (this.vo = t,
                    this.view.ctx.loadFont(this.vo, (function(t) {
                        i.Jn = t;
                        var n = i.width()
                          , s = i.height()
                          , e = i.y();
                        n && (i.set_width(n),
                        i.set_y(e + (s - i.height()) / 2)),
                        i.Eo(),
                        i.view.onEndUpdateState()
                    }
                    )))
                }
                ,
                n.prototype.set_size = function(t) {
                    this.set_centeredSize(t)
                }
                ,
                n.prototype.set_centeredSize = function(t) {
                    if (this.fire("size", t)) {
                        var i = this.width()
                          , n = this.height() + this.topOffset();
                        this.do = t,
                        this.Eo();
                        var s = (this.width() - i) / 2
                          , e = (this.height() + this.topOffset() - n) / 2;
                        this.set_x(this.xi - s),
                        this.set_y(this.ki - e)
                    }
                }
                ,
                n.prototype.set_tracking = function(t) {
                    this.set_centeredTracking(t)
                }
                ,
                n.prototype.set_centeredTracking = function(t) {
                    if (this.fire("tracking", t)) {
                        var i = this.width()
                          , n = this.height() + this.topOffset();
                        this.lo = t,
                        this.Eo();
                        var s = (this.width() - i) / 2
                          , e = (this.height() + this.topOffset() - n) / 2;
                        this.set_x(this.xi - s),
                        this.set_y(this.ki - e)
                    }
                }
                ,
                n.prototype.set_arc = function(t) {
                    this.fire("arc", t) && (this.wo = t,
                    this.Eo())
                }
                ,
                n.prototype.set_warp = function(t) {
                    var i = this.fire("warpType", t.type);
                    i && (this.mo = t.type);
                    var n = this.fire("warpVal", t.val);
                    n && (this.po = t.val),
                    (i || n) && (this.forceFire("warp", t),
                    this.Eo())
                }
                ,
                n.prototype.set_warpType = function(t) {
                    this.set_warp({
                        type: t,
                        val: this.po
                    })
                }
                ,
                n.prototype.set_warpVal = function(t) {
                    this.set_warp({
                        type: this.mo,
                        val: t
                    })
                }
                ,
                n.prototype.set_justification = function(t) {
                    this.fire("justification", t) && (this.bo = t,
                    this.Eo())
                }
                ,
                n.prototype.set_lineHeight = function(t) {
                    this.fire("lineHeight", t) && (this.xo = t,
                    this.Eo())
                }
                ,
                n.prototype.set_color = function(t) {
                    this.fire("color", t) && (this.ko = t,
                    this.Eo())
                }
                ,
                n.prototype.set_stroke = function(t) {
                    this.fire("stroke", t) && (this.yo = t.strokeInkId,
                    this.Mo = t.strokeWeight,
                    this.Io = t.innerStrokeInkId,
                    this._o = t.innerStrokeWeight,
                    this.Eo())
                }
                ,
                n.prototype.set_shadow = function(t) {
                    this.fire("shadow", t) && (this.zo = t.shadowInkId,
                    this.Po = t.shadowDistance,
                    this.Bo = t.shadowAngle,
                    this.Eo())
                }
                ,
                n.prototype.set_horizontalScale = function(t) {
                    this.set_centeredHorizontalScale(t)
                }
                ,
                n.prototype.set_centeredHorizontalScale = function(t) {
                    if (this.fire("horizontalScale", t)) {
                        var i = this.width()
                          , n = this.height() + this.topOffset();
                        this.Co = t,
                        this.Eo();
                        var s = (this.width() - i) / 2
                          , e = (this.height() + this.topOffset() - n) / 2;
                        this.set_x(this.xi - s),
                        this.set_y(this.ki - e)
                    }
                }
                ,
                n.prototype.set_width = function(t) {
                    if (t > 0 && this.Jn) {
                        var i = this.Jn.sizeForWidth(this.Fo[this.So], this.Oo, this.lo, this.Co, t);
                        this.fire("size", i),
                        this.do = i,
                        this.scaleChanged()
                    }
                }
                ,
                n.prototype.set_height = function(t) {}
                ,
                n.prototype.constrainSize = function(t, n, s) {
                    if (s) {
                        var e = this.Jn.sizeForWidth(this.Fo[this.So], this.Oo, this.lo, this.Co, t);
                        e < i.MIN_TEXT_SIZE && (e = i.MIN_TEXT_SIZE),
                        e > i.MAX_TEXT_SIZE && (e = i.MAX_TEXT_SIZE),
                        n = (t = this.Go(e)) / this.jo
                    }
                    return [t, n]
                }
                ,
                n.prototype.onDeselected = function() {
                    t.prototype.onDeselected.call(this),
                    0 != this.width() ? 0 == (0,
                    h.trimAllWhitespace)(this.text()).length && this.view.removeEntity(this) : this.view.removeEntity(this)
                }
                ,
                n.prototype.productColorChanged = function() {
                    this.Eo()
                }
                ,
                n.prototype.ascender = function() {
                    return this.Jn.ascent(this.Jn.emHeight())
                }
                ,
                n.prototype.Ho = function() {
                    return this.Mo > 0
                }
                ,
                n.prototype.Wo = function() {
                    return this._o > 0
                }
                ,
                n.prototype.Vo = function() {
                    return this.Po > 0
                }
                ,
                n.prototype.Uo = function() {
                    return this.mo && this.mo !== e.WarpType.None && 0 !== this.po
                }
                ,
                n.prototype.Go = function(t) {
                    for (var i = 0, n = 0; n < this.Fo.length; ++n) {
                        var s = this.Jn.measureText(this.Fo[n], this.Oo, this.lo, this.Co, t);
                        s > i && (i = s)
                    }
                    return i
                }
                ,
                n.prototype.scaleChanged = function() {
                    if (-1 !== this.No) {
                        var t = this.view.pixelScale()
                          , i = this.size() * t
                          , n = !1;
                        (i > this.No || i < this.To) && (n = !0),
                        this.Eo(n);
                        var s = this.Jn.emHeight()
                          , e = this.do / s;
                        this.Bi.setScale(e, e)
                    } else
                        this.Eo()
                }
                ,
                n.prototype.Lo = function() {
                    this.Fo = this.fo.split("\n"),
                    this.qo = [],
                    this.Ao = 0;
                    for (var t = 0; t < this.Fo.length; ++t)
                        this.qo[t] = this.Jn.measureText(this.Fo[t], this.Oo, this.lo, this.Co, this.do),
                        this.qo[t] > this.Ao && (this.Ao = this.qo[t],
                        this.So = t)
                }
                ,
                n.prototype.Eo = function(i) {
                    if (void 0 === i && (i = !0),
                    this.Jn) {
                        this.Lo();
                        var n = []
                          , s = this.Jn.ascent(this.do)
                          , r = this.Jn.descent(this.do)
                          , u = this.Go(this.do) / 2
                          , f = this.lo * this.do * this.Co / 1e3
                          , v = this.do * this.lineHeight()
                          , d = this.size() / this.Jn.emHeight()
                          , l = 0
                          , w = 0
                          , g = 0;
                        switch (this.bo) {
                        case "left":
                            w = -this.Ao / 2;
                            break;
                        case "right":
                            g = this.Ao / 2
                        }
                        var m = this.arc();
                        if (m > 0)
                            l = 180 * (p = this.qo[this.Fo.length - 1]) / m / (h.TAU / 2),
                            l += v * (this.Fo.length - 1);
                        else if (m < 0) {
                            var p;
                            0 === (p = this.qo[0]) && (p = 1),
                            l = 180 * p / m / (h.TAU / 2)
                        }
                        for (var b = 0, x = 0, k = 0, y = 0, M = 0, I = 0; I < this.Fo.length; I++) {
                            var _ = this.Fo[I]
                              , z = this.qo[I];
                            switch (this.bo) {
                            case "left":
                                k = w;
                                break;
                            case "right":
                                k = g - z;
                                break;
                            default:
                                k = -z / 2
                            }
                            for (var P = 0; P < _.length; ++P) {
                                var B = _.charCodeAt(P);
                                if (this.Jn.hasGlyph(B)) {
                                    var C = this.Jn.glyphWidth(B, this.do, this.Co);
                                    0 == m ? (b = k,
                                    x = I * v) : (M = (k + C / 2) / l,
                                    b = (y = l + (s + r) / 2) * Math.sin(M) - C / 2 * Math.cos(M),
                                    x = v * I + (y * (1 - Math.cos(M)) - C / 2 * Math.sin(M))),
                                    n.push({
                                        code: B,
                                        x: (u + b) / d,
                                        y: x / d,
                                        rotation: M
                                    }),
                                    k += C + f,
                                    this.kerning() && P < _.length - 1 && (k += this.Jn.getKerningValue(B, _.charCodeAt(P + 1), this.do) * this.Co)
                                }
                            }
                            l -= v
                        }
                        var O = new o.ZiggyPath;
                        for (I = 0; I < n.length; I++) {
                            var S = n[I];
                            this.Yo(O, S.code, S.x, S.y, S.rotation, this.Co)
                        }
                        var j = !1;
                        if (this.Uo() && this.warpType() !== e.WarpType.Curve) {
                            var N = this.$o(this.mo, this.po, O.bounds);
                            N && (O = c.Transforms.Xo(O, N)),
                            j = !0
                        }
                        var T = this.Jo(O);
                        if (i) {
                            this.Zo(O, n, j);
                            var E = new a.Rect({
                                x: T.xMin,
                                y: T.yMin,
                                width: T.xMax - T.xMin,
                                height: T.yMax - T.yMin,
                                fill: "white",
                                opacity: 0
                            });
                            this.Bi.add(E)
                        }
                        t.prototype.set_width.call(this, this.Ao),
                        t.prototype.set_height.call(this, T.yMax * d),
                        this.set_leftOffset(T.xMin * d),
                        this.set_rightOffset(this.Ao - T.xMax * d),
                        this.set_topOffset(T.yMin * d),
                        this.jo = this.width() / this.height(),
                        this.view.draw()
                    }
                }
                ,
                n.prototype.Yo = function(t, i, n, s, e, r) {
                    void 0 === r && (r = 1);
                    var o = this.Jn.getCharPath(i)
                      , h = c.Transforms.Ko(r, 1)
                      , u = c.Transforms.Qo(n, s)
                      , a = c.Transforms.th(n, s, e)
                      , f = c.Transforms.ih(h, u, a);
                    c.Transforms.nh(o, f),
                    t.addPath(o)
                }
                ,
                n.prototype.Zo = function(t, i, n) {
                    this.Bi.destroyChildren();
                    var s = new a.Group;
                    this.Bi.add(s);
                    var e = new a.Group;
                    this.Bi.add(e);
                    var r = new a.Group;
                    this.Bi.add(r);
                    var o = new a.Group;
                    this.Bi.add(o);
                    var u = this.Jn.emHeight()
                      , f = this.do / u;
                    if (this.sh(o, t, i, n, 0, 0, this.ko),
                    this.Ho() && (this.Wo() && this.sh(r, t, i, n, 0, 0, this.Io, this._o, this.Io),
                    this.sh(e, t, i, n, 0, 0, this.yo, this.Mo + this._o, this.yo)),
                    this.Vo()) {
                        var v = (0,
                        h.degToRad)(this.Bo)
                          , d = this.Po / 100 * u
                          , l = -d * Math.cos(v)
                          , w = d * Math.sin(v);
                        c.Transforms.nh(t, c.Transforms.Qo(l, w)),
                        this.sh(s, t, i, n, l, w, this.zo, this.Mo + this._o)
                    }
                    this.Bi.setScale(f, f)
                }
                ,
                n.prototype.sh = function(t, i, n, s, e, r, o, c, a) {
                    void 0 === c && (c = 0),
                    void 0 === a && (a = -1);
                    var f = this.view.pixelScale();
                    this.No = (0,
                    h.nearestPowerOf2)(this.size() * f),
                    this.To = (0,
                    h.previousPowerOf2)(this.size() * f);
                    var v = (0,
                    u.standardInkRgb)(this.view.ctx, o)
                      , d = -1 === a ? v : (0,
                    u.standardInkRgb)(this.view.ctx, a)
                      , l = this.eh(c);
                    if (s) {
                        var w = this.Jn.drawPath(i, this.No, v, l, d).image;
                        return w.setListening(!1),
                        void t.add(w)
                    }
                    for (var g = 0; g < n.length; ++g) {
                        var m = n[g];
                        this.rh(t, m.x + e, m.y + r, m.rotation, m.code, v, d, l)
                    }
                }
                ,
                n.prototype.rh = function(t, i, n, s, e, r, o, u) {
                    void 0 === o && (o = ""),
                    void 0 === u && (u = 0);
                    var c = this.view.pixelScale()
                      , a = (0,
                    h.nearestPowerOf2)(this.size() * c)
                      , f = this.Jn.toImage(e, r, a, this.Co, o, u);
                    f.setX(i),
                    f.setY(n),
                    f.setRotation(s),
                    f.setListening(!1),
                    t.add(f)
                }
                ,
                n.prototype.Jo = function(t) {
                    var i = this.Jn.emHeight()
                      , n = (0,
                    h.degToRad)(this.Bo)
                      , s = this.Po / 100 * i
                      , e = -s * Math.cos(n)
                      , r = s * Math.sin(n)
                      , o = this.eh(this._o + this.Mo)
                      , u = t.bounds
                      , c = {
                        xMin: u.xMin - o,
                        xMax: u.xMax + o,
                        yMin: u.yMin - o,
                        yMax: u.yMax + o
                    }
                      , a = {
                        xMin: c.xMin + e,
                        xMax: c.xMax + e,
                        yMin: c.yMin + r,
                        yMax: c.yMax + r
                    }
                      , f = (0,
                    h.unionBBoxes)(c, a);
                    if (!f)
                        throw "Bounding box is null.";
                    return f
                }
                ,
                n.prototype.eh = function(t) {
                    return t / 100 * this.Jn.emHeight()
                }
                ,
                n.prototype.warpMax = function() {
                    switch (this.mo) {
                    case e.WarpType.None:
                        return 0;
                    case e.WarpType.Curve:
                        return 360;
                    case e.WarpType.Flag:
                        return .5;
                    case e.WarpType.Rise:
                        return 1;
                    case e.WarpType.Arch:
                    case e.WarpType.Squeeze:
                    case e.WarpType.ArcLower:
                    case e.WarpType.ArcUpper:
                        return .75 * Math.PI;
                    case e.WarpType.Bulge:
                    case e.WarpType.BulgeLower:
                    case e.WarpType.BulgeUpper:
                        return Math.PI;
                    case e.WarpType.Wedge:
                        return .5;
                    case e.WarpType.WedgeTop:
                    case e.WarpType.WedgeBottom:
                    case e.WarpType.Shear:
                        return .4;
                    case e.WarpType.ChiselEdge:
                    case e.WarpType.PointedEdge:
                    case e.WarpType.Chevron:
                    case e.WarpType.Diamond:
                        return .6;
                    default:
                        return 1
                    }
                }
                ,
                n.prototype.$o = function(t, i, n) {
                    var s = n.xMin
                      , r = n.yMin
                      , o = n.yMax
                      , h = n.xMax - s
                      , u = n.yMax - r
                      , a = i * this.warpMax()
                      , f = a < 0 ? r : o;
                    switch (t) {
                    case e.WarpType.ArcLower:
                    case e.WarpType.ArcUpper:
                        return c.Transforms.oh(s, r, h, u, -Math.abs(a), f);
                    case e.WarpType.BulgeLower:
                    case e.WarpType.BulgeUpper:
                        return c.Transforms.hh(s, r, h, u, a);
                    case e.WarpType.Squeeze:
                        return c.Transforms.oh(s, r, h, u, -a, (o + r) / 2, 2);
                    case e.WarpType.Bulge:
                        return c.Transforms.oh(s, r, h, u, a, (o + r) / 2, 2);
                    case e.WarpType.Arch:
                        return c.Transforms.uh(s, r, h, u, a);
                    case e.WarpType.Shear:
                        return c.Transforms.ah(s, a);
                    case e.WarpType.Chevron:
                        return c.Transforms.fh(s, r, h, u, a);
                    case e.WarpType.ChiselEdge:
                        return c.Transforms.dh(s, h, u, -Math.abs(a), f);
                    case e.WarpType.PointedEdge:
                        return c.Transforms.lh(s, h, u, Math.abs(a), f);
                    case e.WarpType.Diamond:
                        return c.Transforms.lh(s, h, u, Math.abs(a), (o + r) / 2, 2);
                    case e.WarpType.Wedge:
                        return c.Transforms.wh(s, r, h, u, a, u / 2);
                    case e.WarpType.WedgeTop:
                        return c.Transforms.wh(s, r, h, u, a, u);
                    case e.WarpType.WedgeBottom:
                        return c.Transforms.wh(s, r, h, u, a, 0);
                    case e.WarpType.Rise:
                        return c.Transforms.gh(s, r, h, u, a * this.Jn.emHeight());
                    case e.WarpType.Flag:
                        return c.Transforms.gh(s, r, h, u, a * this.Jn.emHeight(), 2 * Math.PI, Math.PI / 2)
                    }
                    return null
                }
                ,
                n
            }(r.Entity);
            i.TextEntity = f
        }
        ,
        4259: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Transforms = void 0;
            var s = n(2497)
              , e = n(4137)
              , r = function() {
                function t() {}
                return t.oh = function(t, i, n, s, e, r, o) {
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 1);
                    var h = .5 * n / Math.sin(e / 2)
                      , u = h * Math.cos(e / 2)
                      , c = h - u;
                    return function(i, a, f, v) {
                        var d = i + f - t
                          , l = Math.asin((n / 2 - d) / h)
                          , w = h * Math.cos(l) - u;
                        return e < 0 && (w += Math.abs(c)),
                        [i, a + (a + v - r) * (o * (w / s)), f, v]
                    }
                }
                ,
                t.hh = function(t, i, n, s, e, r) {
                    void 0 === r && (r = 1);
                    var o = Math.abs(e)
                      , h = e < 0 ? i : i + s;
                    return this.oh(t, i, n, s, o, h, r)
                }
                ,
                t.uh = function(t, i, n, s, e) {
                    var r = .5 * n / Math.sin(e / 2)
                      , o = r * Math.cos(e / 2);
                    return function(i, s, e, h) {
                        var u = i + e - t
                          , c = Math.asin((n / 2 - u) / r);
                        return [i, s - (r * Math.cos(c) - o), e, h]
                    }
                }
                ,
                t.gh = function(t, i, n, s, e, r, o) {
                    return void 0 === r && (r = Math.PI),
                    void 0 === o && (o = 0),
                    function(i, s, h, u) {
                        var c = (i + h - t) / n * r;
                        return [i, s + e * Math.cos(c + o), h, u]
                    }
                }
                ,
                t.mh = function(t, i, n, s, e, r, o, h) {
                    return void 0 === o && (o = Math.PI),
                    void 0 === h && (h = 0),
                    function(u, c, a, f) {
                        var v = (u + a - t) / n * o;
                        return [u, c + e * Math.cos(v + h) * ((c - i - r) / s), a, f]
                    }
                }
                ,
                t.ah = function(t, i) {
                    return function(n, s, e, r) {
                        return [n, s - (n + e - t) * i, e, r]
                    }
                }
                ,
                t.wh = function(t, i, n, s, e, r) {
                    var o = e * n;
                    return function(n, h, u, c) {
                        var a = (n + u - t) * e;
                        return e < 0 && (a -= o),
                        [n, h + (h + c - i - r) / s * a, u, c]
                    }
                }
                ,
                t.fh = function(t, i, n, s, e) {
                    return function(i, s, r, o) {
                        var h = i + r - t;
                        return [i, s - Math.min(h, n - h) * e]
                    }
                }
                ,
                t.lh = function(t, i, n, s, e, r) {
                    return void 0 === r && (r = 1),
                    function(o, h, u, c) {
                        var a = o + u - t
                          , f = Math.min(a, i - a);
                        return [o, h + (h + c - e) * (r * (f * s) / n), u, c]
                    }
                }
                ,
                t.dh = function(t, i, n, s, e) {
                    var r = .5 * s * i;
                    return function(o, h, u, c) {
                        var a = o + u - t
                          , f = Math.min(a, i - a);
                        return [o, h + (h + c - e) * ((f * s - r) / n), u, c]
                    }
                }
                ,
                t.Ko = function(t, i) {
                    return function(n, s, e, r) {
                        return [n * t, s * i, e, r]
                    }
                }
                ,
                t.ih = function() {
                    for (var t = [], i = 0; i < arguments.length; i++)
                        t[i] = arguments[i];
                    return function(i, n, s, e) {
                        return t.reduce((function(t, i) {
                            return i.apply(void 0, t)
                        }
                        ), [i, n, s, e])
                    }
                }
                ,
                t.th = function(t, i, n) {
                    var s = Math.cos(n)
                      , e = Math.sin(n);
                    return function(n, r, o, h) {
                        return [s * (o + n - t) - e * (h + r - i) + t, s * (h + r - i) + e * (o + n - t) + i, o, h]
                    }
                }
                ,
                t.Qo = function(t, i) {
                    return function(n, s, e, r) {
                        return [n + t, s + i, e, r]
                    }
                }
                ,
                t.Xo = function(t, i) {
                    for (var n, s = 0, r = t.data, o = new e.ZiggyPath, h = o.bounds, u = 0, c = 0; s < r.length; ) {
                        var a = r[s++];
                        switch (a) {
                        case 0:
                            u = r[s++],
                            c = r[s++],
                            n = this.ph(u, c, h, i),
                            o.data.push(a, n[0], n[1]);
                            break;
                        case 1:
                            var f = r[s++]
                              , v = r[s++]
                              , d = (u + f) / 2
                              , l = (c + v) / 2;
                            n = this.ph(f, v, h, i);
                            var w = this.ph(d, l, h, i);
                            o.data.push(2, w[0], w[1], n[0], n[1]),
                            u = f,
                            c = v;
                            break;
                        case 2:
                            o.data.push(a),
                            n = this.ph(r[s++], r[s++], h, i),
                            o.data.push(n[0], n[1]),
                            u = r[s++],
                            c = r[s++],
                            n = this.ph(u, c, h, i),
                            o.data.push(n[0], n[1]);
                            break;
                        case 3:
                            o.data.push(a),
                            n = this.ph(r[s++], r[s++], h, i),
                            o.data.push(n[0], n[1]),
                            n = this.ph(r[s++], r[s++], h, i),
                            o.data.push(n[0], n[1]),
                            u = r[s++],
                            c = r[s++],
                            n = this.ph(u, c, h, i),
                            o.data.push(n[0], n[1])
                        }
                    }
                    return o
                }
                ,
                t.nh = function(t, i) {
                    if (i) {
                        var n = 0
                          , e = t.data;
                        t.bounds = s.defaultBBox();
                        for (var r = t.bounds; n < e.length; ) {
                            switch (e[n++]) {
                            case 0:
                            case 1:
                                this.bh(e, r, n, i),
                                n += 2;
                                break;
                            case 2:
                                this.bh(e, r, n, i),
                                n += 2,
                                this.bh(e, r, n, i),
                                n += 2;
                                break;
                            case 3:
                                this.bh(e, r, n, i),
                                n += 2,
                                this.bh(e, r, n, i),
                                n += 2,
                                this.bh(e, r, n, i),
                                n += 2
                            }
                        }
                    }
                }
                ,
                t.ph = function(t, i, n, s) {
                    var e = s(t, i, 0, 0);
                    return this.xh(n, e),
                    e
                }
                ,
                t.bh = function(t, i, n, s) {
                    var e = s(t[n], t[n + 1], 0, 0);
                    t[n] = e[0],
                    t[n + 1] = e[1],
                    this.xh(i, e)
                }
                ,
                t.xh = function(t, i) {
                    var n = i[0]
                      , s = i[1];
                    n < t.xMin && (t.xMin = n),
                    n > t.xMax && (t.xMax = n),
                    s < t.yMin && (t.yMin = s),
                    s > t.yMax && (t.yMax = s)
                }
                ,
                t
            }();
            i.Transforms = r
        }
        ,
        2753: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.UndoRedoState = void 0;
            var s = n(655)
              , e = n(2497)
              , r = function(t) {
                function i(i, n) {
                    var s = t.call(this, "UndoRedo") || this;
                    return s.i = i,
                    s.kh = n,
                    s.yh = [],
                    s.Mh = 0,
                    s.MAX_STATES = 20,
                    s.Ih = s.$(".undoButton"),
                    s._h = s.$(".redoButton"),
                    (0,
                    e.onClick)(s.Ih, (function() {
                        s.undo()
                    }
                    )),
                    (0,
                    e.onClick)(s._h, (function() {
                        s.redo()
                    }
                    )),
                    s.yh = [],
                    s.Mh = 0,
                    document.addEventListener("keydown", (function(t) {
                        (t = t || window.event).ctrlKey && 90 === t.keyCode ? s.undo() : t.ctrlKey && 89 === t.keyCode && s.redo()
                    }
                    )),
                    s.enable(),
                    s.zh(),
                    s
                }
                return s.__extends(i, t),
                i.prototype.reset = function() {
                    this.yh = [],
                    this.Mh = 0,
                    this.enable(),
                    this.onDesignChange()
                }
                ,
                i.prototype.enable = function() {
                    this.Ph = !0
                }
                ,
                i.prototype.disable = function() {
                    this.Ph = !1
                }
                ,
                i.prototype.onDesignChange = function() {
                    var t = this.i.serializeDesign();
                    this.saveState(t)
                }
                ,
                i.prototype.saveState = function(t) {
                    this.Ph && (this.Bh() && (this.yh = this.yh.slice(0, this.Mh + 1)),
                    this.yh.length > this.MAX_STATES && this.yh.splice(0, 1),
                    this.yh.push(t),
                    this.Mh = this.yh.length - 1,
                    this.zh())
                }
                ,
                i.prototype.undo = function() {
                    if (this.Ch()) {
                        var t = this.yh[--this.Mh];
                        this.Oh(t)
                    }
                }
                ,
                i.prototype.redo = function() {
                    if (this.Bh()) {
                        var t = this.yh[++this.Mh];
                        this.Oh(t)
                    }
                }
                ,
                i.prototype.Oh = function(t) {
                    this.kh(t),
                    this.zh()
                }
                ,
                i.prototype.zh = function() {
                    this.Ch() ? this.Ih.classList.remove("disabled") : this.Ih.classList.add("disabled"),
                    this.Bh() ? this._h.classList.remove("disabled") : this._h.classList.add("disabled")
                }
                ,
                i.prototype.Ch = function() {
                    return this.Mh > 0
                }
                ,
                i.prototype.Bh = function() {
                    return this.Mh < this.yh.length - 1
                }
                ,
                i
            }(n(6059).TemplateView);
            i.UndoRedoState = r
        }
        ,
        2497: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.focusAndOpenKeyboard = i.historyApi = i.getBrightness = i.hexToRgb = i.openWindow = i.defaultBBox = i.unionBBoxes = i.scrollToTop = i.limitCharacterCount = i.iOSScrollFix = i.trimAllWhitespaceMultiline = i.trimAllWhitespace = i.previousPowerOf2 = i.nearestPowerOf2 = i.stopAllAnchorsFromNavigating = i.nastyDisableRubberBandHack = i.centerInScroller = i.hasHorizontalScroll = i.scrollableParent = i.copyTransform = i.multMatVec = i.radToDeg = i.degToRad = i.stripExtension = i.makeAnchor = i.onSubmit = i.onMouseUp = i.onClick = i.TAU = void 0;
            var s = n(655).__importStar(n(6516));
            function e(t, i) {
                t.ontouchstart = function(t) {
                    r(t.target) || (i(),
                    t.preventDefault())
                }
                ,
                t.onmousedown = function(t) {
                    i(),
                    t.preventDefault()
                }
            }
            function r(t) {
                for (var i = t; i; ) {
                    var n = getComputedStyle(i);
                    if ("auto" == n.overflowX || "scroll" == n.overflowX || "auto" == n.overflowY || "scroll" == n.overflowY)
                        return i;
                    i = i.parentElement
                }
                return null
            }
            function o(t) {
                var i = getComputedStyle(t);
                return "auto" == i.overflowX || "scroll" == i.overflowX
            }
            function h() {
                window.scrollTo(0, 0)
            }
            i.TAU = 2 * Math.PI,
            i.onClick = e,
            i.onMouseUp = function(t, i) {
                t.ontouchend = function(t) {
                    i(),
                    t.preventDefault()
                }
                ,
                t.onmouseup = function(t) {
                    i(),
                    t.preventDefault()
                }
            }
            ,
            i.onSubmit = function(t, i, n) {
                e(i, n),
                t.onsubmit = function(t) {
                    n(),
                    t.preventDefault()
                }
            }
            ,
            i.makeAnchor = function(t, i, n) {
                var s = document.createElement("a");
                return s.href = "#",
                s.textContent = t,
                s.className = i,
                n && e(s, n),
                s
            }
            ,
            i.stripExtension = function(t) {
                var i = t.lastIndexOf(".");
                return -1 == i ? t : t.substring(0, i)
            }
            ,
            i.degToRad = function(t) {
                return t * i.TAU / 360
            }
            ,
            i.radToDeg = function(t) {
                return 360 * t / i.TAU
            }
            ,
            i.multMatVec = function(t, i) {
                var n = t.getMatrix()
                  , s = t.getTranslation();
                return [n[0] * i[0] + n[2] * i[1] + s.x, n[1] * i[0] + n[3] * i[1] + s.y]
            }
            ,
            i.copyTransform = function(t) {
                var i = new s.Transform
                  , n = t.getMatrix()
                  , e = i.getMatrix();
                return e[0] = n[0],
                e[1] = n[1],
                e[2] = n[2],
                e[3] = n[3],
                e[4] = n[4],
                e[5] = n[5],
                i
            }
            ,
            i.scrollableParent = r,
            i.hasHorizontalScroll = o,
            i.centerInScroller = function(t, i, n) {
                if (void 0 === n && (n = !0),
                o(i)) {
                    var s = t.offsetLeft - i.offsetLeft + t.clientWidth / 2
                      , e = n ? "smooth" : "auto";
                    i.scrollTo({
                        left: s - i.offsetWidth / 2,
                        behavior: e
                    })
                }
            }
            ,
            i.nastyDisableRubberBandHack = function() {
                var t = 0;
                document.body.addEventListener("touchstart", (function(i) {
                    t = i.touches[0].clientY
                }
                )),
                document.body.addEventListener("touchmove", (function(i) {
                    var n = i.target;
                    if ("input" != n.tagName.toLowerCase() || "range" != n.type.toLowerCase()) {
                        var s = r(n);
                        if (s) {
                            if (o(s))
                                return;
                            var e = t - i.touches[0].clientY
                              , h = getComputedStyle(s)
                              , u = parseInt(h["border-top-width"]) + parseInt(h["border-bottom-width"])
                              , c = 0 == s.scrollTop
                              , a = s.scrollTop + s.offsetHeight - u == s.scrollHeight;
                            (e < 0 && c || e > 0 && a) && i.preventDefault()
                        } else
                            i.preventDefault()
                    }
                }
                ), {
                    passive: !1,
                    capture: !0
                })
            }
            ,
            i.stopAllAnchorsFromNavigating = function() {
                document.body.addEventListener("click", (function(t) {
                    "A" == t.target.tagName && t.target.href == window.location.href + "#" && t.preventDefault()
                }
                ), !0)
            }
            ,
            i.nearestPowerOf2 = function(t) {
                return t = Math.floor(t) - 1,
                t |= t >>> 1,
                t |= t >>> 2,
                t |= t >>> 4,
                t |= t >>> 8,
                (t |= t >>> 16) + 1
            }
            ,
            i.previousPowerOf2 = function(t) {
                return t |= t >>> 1,
                t |= t >>> 2,
                t |= t >>> 4,
                t |= t >>> 8,
                (t |= t >>> 16) - (t >>> 1)
            }
            ,
            i.trimAllWhitespace = function(t) {
                return t ? t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : ""
            }
            ,
            i.trimAllWhitespaceMultiline = function(t) {
                return t ? t.split("\n").map((function(t) {
                    return t.trim()
                }
                )).join("\n").trim() : ""
            }
            ,
            i.iOSScrollFix = function() {
                "onorientationchange"in window && window.addEventListener("orientationchange", h, !1)
            }
            ,
            i.limitCharacterCount = function(t, i) {
                t.onkeyup = function(n) {
                    var s = t.value;
                    s.length > i && (t.value = s.substring(0, i))
                }
            }
            ,
            i.scrollToTop = h,
            i.unionBBoxes = function(t, i) {
                if (!t && !i)
                    throw "bboxes cannot both be null.";
                return t ? i ? {
                    xMin: Math.min(t.xMin, i.xMin),
                    yMin: Math.min(t.yMin, i.yMin),
                    xMax: Math.max(t.xMax, i.xMax),
                    yMax: Math.max(t.yMax, i.yMax)
                } : t : i
            }
            ,
            i.defaultBBox = function() {
                return {
                    xMin: Number.MAX_VALUE,
                    xMax: Number.MIN_VALUE,
                    yMin: Number.MAX_VALUE,
                    yMax: Number.MIN_VALUE
                }
            }
            ,
            i.openWindow = function(t) {
                var i = null == t.position ? (window.screen.availHeight - t.size.height) / 2 : t.position.y
                  , n = null == t.position ? (window.screen.availWidth - t.size.width) / 2 : t.position.x
                  , s = 1 == t.statusbar ? "yes" : "no"
                  , e = 1 == t.scrollbars ? "yes" : "no";
                return window.open(t.url, t.title, "status=" + s + ",toolbar=no,resizable=yes,scrollbars=" + e + ",left=" + n + ",top=" + i + ",directories=no,menubar=no,width=" + t.size.width + ",height=" + t.size.height)
            }
            ,
            i.hexToRgb = function(t) {
                var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return i ? {
                    r: parseInt(i[1], 16),
                    g: parseInt(i[2], 16),
                    b: parseInt(i[3], 16)
                } : {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }
            ,
            i.getBrightness = function(t) {
                return (.299 * t.r + .587 * t.g + .114 * t.b) / 256
            }
            ,
            i.historyApi = function() {
                return "undefined" != typeof Modernizr && Modernizr.history
            }
            ,
            i.focusAndOpenKeyboard = function(t) {
                if (t && t.parentElement) {
                    var i = document.createElement("input");
                    i.style.height = "0",
                    i.style.width = "0",
                    i.style.opacity = "0",
                    i.style.margin = "0",
                    i.style.padding = "0",
                    i.style.border = "0",
                    i.style.overflow = "hidden";
                    var n = t.parentElement;
                    n.appendChild(i),
                    i.focus(),
                    setTimeout((function() {
                        t.focus(),
                        n.removeChild(i)
                    }
                    ), 400)
                }
            }
        }
        ,
        6059: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Dialog = i.TemplateView = void 0;
            var s = n(655)
              , e = n(2497);
            var r = function() {
                function t(t) {
                    var i = document.getElementById("idsTemplates").content.getElementById(function(t) {
                        return "|" + t
                    }(t));
                    if (!i)
                        throw 'No template with id "|' + t + '" found';
                    this.St = i.cloneNode(!0),
                    this.St.removeAttribute("id")
                }
                return t.prototype.elem = function() {
                    return this.St
                }
                ,
                t.prototype.$ = function(t) {
                    var i = this.elem().querySelectorAll(t);
                    if (1 != i.length)
                        throw "Found " + i.length + " elements for selector " + t + " (expected 1)";
                    return i[0]
                }
                ,
                t.prototype.hasChild = function(t) {
                    return 1 == this.elem().querySelectorAll(t).length
                }
                ,
                t
            }();
            i.TemplateView = r;
            var o = function(t) {
                function i(i, n) {
                    void 0 === n && (n = null);
                    var s = t.call(this, i) || this;
                    return s.h = n,
                    s.Pt = !1,
                    s.Sh = !1,
                    s.hasChild(".close-icon") && (0,
                    e.onClick)(s.$(".close-icon"), (function() {
                        s.hide()
                    }
                    )),
                    null == s.h && (s.h = document.body,
                    s.Pt = !0),
                    s
                }
                return s.__extends(i, t),
                i.prototype.show = function() {
                    var t = this;
                    this.Pt && (this.Ot = document.createElement("div"),
                    this.Ot.className = "DialogGlass",
                    this.h.appendChild(this.Ot),
                    this.hasChild(".dialog-box") && (this.$(".dialog-box").onmousedown = function(i) {
                        t.Sh = !0
                    }
                    ,
                    this.elem().onmousedown = function(i) {
                        t.Sh ? t.Sh = !1 : t.hide()
                    }
                    ),
                    (0,
                    e.onClick)(this.Ot, (function() {
                        t.hide()
                    }
                    ))),
                    this.h.appendChild(this.elem())
                }
                ,
                i.prototype.hide = function() {
                    this.h.contains(this.elem()) && this.h.removeChild(this.elem()),
                    this.Pt && this.h.removeChild(this.Ot)
                }
                ,
                i
            }(r);
            i.Dialog = o
        }
        ,
        6109: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.WarpPickerDialog = i.WarpPickerView = i.isWarpValid = i.warpMin = void 0;
            var s, e, r, o = n(655), h = n(1156), u = n(4094), c = n(6059), a = n(2497), f = n(4094), v = (s = n(9979),
            e = s.keys(),
            r = e.map(s),
            e.reduce((function(t, i, n) {
                return t[i = i.substring(i.indexOf("warp-") + 5, i.lastIndexOf(".svg"))] = r[n],
                t
            }
            ), {})), d = [{
                id: h.WarpType.None,
                name: "None",
                default: 0
            }, {
                id: h.WarpType.Curve,
                name: "Curve",
                default: .2
            }, {
                id: h.WarpType.Arch,
                name: "Arch",
                default: .4
            }, {
                id: h.WarpType.Squeeze,
                name: "Squeeze",
                default: .3
            }, {
                id: h.WarpType.ArcLower,
                name: "Arc Lower",
                default: -.5
            }, {
                id: h.WarpType.ArcUpper,
                name: "Arc Upper",
                default: .5
            }, {
                id: h.WarpType.BulgeUpper,
                name: "Bulge Upper",
                default: .5
            }, {
                id: h.WarpType.BulgeLower,
                name: "Bulge Lower",
                default: -.5
            }, {
                id: h.WarpType.Bulge,
                name: "Bulge",
                default: .5
            }, {
                id: h.WarpType.Diamond,
                name: "Diamond",
                default: .5
            }, {
                id: h.WarpType.Shear,
                name: "Shear",
                default: .5
            }, {
                id: h.WarpType.Chevron,
                name: "Chevron",
                default: .5
            }, {
                id: h.WarpType.ChiselEdge,
                name: "Chisel",
                default: -.5
            }, {
                id: h.WarpType.PointedEdge,
                name: "Pointed",
                default: .5
            }, {
                id: h.WarpType.Rise,
                name: "Rise",
                default: .4
            }, {
                id: h.WarpType.Flag,
                name: "Flag",
                default: .5
            }, {
                id: h.WarpType.Wedge,
                name: "Wedge",
                default: .5
            }, {
                id: h.WarpType.WedgeTop,
                name: "Wedge Top",
                default: .4
            }, {
                id: h.WarpType.WedgeBottom,
                name: "Wedge Bottom",
                default: .4
            }];
            function l(t) {
                switch (t) {
                case h.WarpType.Bulge:
                case h.WarpType.Squeeze:
                case h.WarpType.Diamond:
                    return 0;
                default:
                    return -1
                }
            }
            i.warpMin = l,
            i.isWarpValid = function(t) {
                return Object.values(h.WarpType).includes(t)
            }
            ;
            var w = function(t) {
                function i(i, n, s, e, r) {
                    var o = t.call(this) || this;
                    return o.St = i,
                    o.i = n,
                    o.Tt = e,
                    o.Xn = r,
                    void 0 === o.Lt && (o.Lt = new g(s,(function(t, i, n) {
                        o.jh = {
                            type: t,
                            val: i
                        },
                        o.fireChange(n)
                    }
                    ),o.Xn)),
                    (0,
                    a.onClick)(i.parentElement, (function() {
                        o.Tt && o.Tt(),
                        o.show()
                    }
                    )),
                    o
                }
                return o.__extends(i, t),
                i.prototype.dlg = function() {
                    return this.Lt
                }
                ,
                i.prototype.show = function() {
                    this.Lt.show(),
                    this.Lt.setVals(this.jh.type, this.jh.val),
                    this.Lt.updateView(!1)
                }
                ,
                i.prototype.hide = function() {
                    this.Lt.hide(),
                    this.Xn && this.Xn()
                }
                ,
                i.prototype.set = function(t) {
                    this.jh = t,
                    this.St.textContent = "",
                    this.St.innerHTML = v[t.type],
                    this.Lt.setVals(t.type, t.val),
                    this.Lt.updateView(!0)
                }
                ,
                i.prototype.get = function() {
                    return this.jh
                }
                ,
                i
            }(u.DialogPropertyView);
            i.WarpPickerView = w;
            var g = function(t) {
                function i(i, n, s) {
                    var e = t.call(this, "WarpPickerDialog", i) || this;
                    e.Zn = n,
                    e.Kn = s,
                    e.ts = e.$(".warp-list"),
                    e.Nh = e.$(".warp-val"),
                    (0,
                    a.onClick)(e.$(".dlg-close-btn"), (function() {
                        e.hide()
                    }
                    )),
                    e.Th = new f.ScaledNumberInputView(e.$(".warpValInput"),l(e.mo),1,.1,0,0,.01,[0],.03,!0),
                    e.Th.onchange((function(t, i) {
                        e.Zn(e.mo, t, i)
                    }
                    ));
                    for (var r = 0; r < d.length; ++r)
                        e.Eh(d[r].id, d[r].name, d[r].default, v[d[r].id]);
                    return e
                }
                return o.__extends(i, t),
                i.prototype.show = function() {
                    t.prototype.show.call(this)
                }
                ,
                i.prototype.hide = function() {
                    t.prototype.hide.call(this),
                    this.Kn && this.Kn()
                }
                ,
                i.prototype.slider = function() {
                    return this.Th
                }
                ,
                i.prototype.setVals = function(t, i) {
                    this.mo = t,
                    this.Th.set(i)
                }
                ,
                i.prototype.updateView = function(t) {
                    this.ts.querySelectorAll(".warp").forEach((function(t) {
                        t.classList.remove("selected")
                    }
                    ));
                    var i = this.ts.querySelectorAll("." + this.mo);
                    i && i.length > 0 && (i[0].classList.add("selected"),
                    (0,
                    a.centerInScroller)(i[0], this.ts, t)),
                    this.mo === h.WarpType.None ? (this.Nh.classList.add("disabled"),
                    this.Th.el().disabled = !0) : (this.Nh.classList.remove("disabled"),
                    this.Th.el().disabled = !1)
                }
                ,
                i.prototype.Eh = function(t, i, n, s) {
                    var e = this
                      , r = document.createElement("a");
                    r.href = "#",
                    r.className = "warp " + t,
                    (0,
                    a.onClick)(r, (function() {
                        e.Lh(t, i, n)
                    }
                    ));
                    var o = document.createElement("div");
                    o.className = "icon",
                    o.onclick = function(t) {
                        t.preventDefault()
                    }
                    ,
                    r.appendChild(o),
                    s ? o.innerHTML = s : console.warn("Icon missing for warp ".concat(t, "."));
                    var h = document.createTextNode(i);
                    r.appendChild(h),
                    this.ts.appendChild(r)
                }
                ,
                i.prototype.Lh = function(t, i, n) {
                    t !== this.mo && this.Zn(t, n, !0)
                }
                ,
                i
            }(c.Dialog);
            i.WarpPickerDialog = g
        }
        ,
        4137: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ZiggyFont = i.GlyphData = i.ZiggyImage = i.ZiggyPath = void 0;
            var s = n(655)
              , e = s.__importStar(n(6516))
              , r = n(4259)
              , o = n(2497)
              , h = -1
              , u = 0
              , c = 1
              , a = 2
              , f = 3;
            var v = function() {
                function t(t) {
                    this.Ah = t,
                    this.Mh = 0
                }
                return t.prototype.read = function() {
                    return -(1 & (t = this.Ah.charCodeAt(this.Mh++))) ^ t >> 1;
                    var t
                }
                ,
                t.prototype.atEnd = function() {
                    return this.Mh >= this.Ah.length
                }
                ,
                t
            }();
            function d(t, i, n, s, e, r, o) {
                void 0 === r && (r = ""),
                void 0 === o && (o = 0),
                t.fillStyle = e,
                t.beginPath();
                for (var h = 0, v = 0, d = 0; d < i.length; ) {
                    switch (i[d++]) {
                    case u:
                        t.closePath(),
                        h = i[d++],
                        v = i[d++],
                        t.moveTo(h * n, v * s);
                        break;
                    case c:
                        var l = h + i[d++]
                          , w = v + i[d++];
                        t.lineTo(l * n, w * s),
                        h = l,
                        v = w;
                        break;
                    case a:
                        var g = h + i[d++]
                          , m = v + i[d++];
                        l = g + i[d++],
                        w = m + i[d++];
                        t.quadraticCurveTo(g * n, m * s, l * n, w * s),
                        h = l,
                        v = w;
                        break;
                    case f:
                        var p = h + i[d++]
                          , b = v + i[d++]
                          , x = p + i[d++]
                          , k = b + i[d++];
                        l = x + i[d++],
                        w = k + i[d++];
                        t.bezierCurveTo(p * n, b * s, x * n, k * s, l * n, w * s),
                        h = l,
                        v = w
                    }
                }
                t.closePath(),
                o > 0 && (t.strokeStyle = r,
                t.lineWidth = 2 * o,
                t.lineJoin = "round",
                t.stroke()),
                t.fill()
            }
            var l = function() {
                function t() {}
                return t.renderPathAbs = function(t, i, n, s, e) {
                    void 0 === s && (s = ""),
                    void 0 === e && (e = 0),
                    t.fillStyle = n,
                    t.beginPath();
                    for (var r = {
                        xMin: Number.MAX_VALUE,
                        xMax: Number.MIN_VALUE,
                        yMin: Number.MAX_VALUE,
                        yMax: Number.MIN_VALUE
                    }, o = 0, h = 0, v = 0; v < i.length; ) {
                        switch (i[v++]) {
                        case u:
                            t.closePath(),
                            o = i[v++],
                            h = i[v++],
                            t.moveTo(o, h),
                            this.xh(r, [o, h]);
                            break;
                        case c:
                            o = i[v++],
                            h = i[v++],
                            t.lineTo(o, h),
                            this.xh(r, [o, h]);
                            break;
                        case a:
                            var d = i[v++]
                              , l = i[v++];
                            o = i[v++],
                            h = i[v++],
                            t.quadraticCurveTo(d, l, o, h),
                            this.xh(r, [o, h]);
                            break;
                        case f:
                            var w = i[v++]
                              , g = i[v++];
                            this.xh(r, [w, g]);
                            var m = i[v++]
                              , p = i[v++];
                            this.xh(r, [m, p]);
                            o = i[v++],
                            h = i[v++];
                            this.xh(r, [o, h]),
                            t.bezierCurveTo(w, g, m, p, o, h)
                        }
                    }
                    return t.closePath(),
                    e > 0 && (t.strokeStyle = s,
                    t.lineWidth = 2 * e,
                    t.lineJoin = "round",
                    t.stroke()),
                    t.fill(),
                    r
                }
                ,
                t.xh = function(t, i) {
                    var n = i[0]
                      , s = i[1];
                    n < t.xMin && (t.xMin = n),
                    n > t.xMax && (t.xMax = n),
                    s < t.yMin && (t.yMin = s),
                    s > t.yMax && (t.yMax = s)
                }
                ,
                t.updateBBox = function(t, i) {
                    t.xMin = Math.min(t.xMin, i.xMin),
                    t.yMin = Math.min(t.yMin, i.yMin),
                    t.xMax = Math.max(t.xMax, i.xMax),
                    t.yMax = Math.max(t.yMax, i.yMax)
                }
                ,
                t
            }()
              , w = function() {
                function t(t, i) {
                    this.bounds = {
                        xMin: Number.MAX_VALUE,
                        xMax: Number.MIN_VALUE,
                        yMin: Number.MAX_VALUE,
                        yMax: Number.MIN_VALUE
                    },
                    this.data = [],
                    t && (this.data = s.__spreadArray([], t, !0)),
                    i && (this.bounds.xMin = i.xMin,
                    this.bounds.xMax = i.xMax,
                    this.bounds.yMin = i.yMin,
                    this.bounds.yMax = i.yMax)
                }
                return t.prototype.addPath = function(t) {
                    var i, n;
                    !t || t.data.length < 3 || (t.data[0] != u && (i = this.data).push.apply(i, [u, t[1], t[2]]),
                    (n = this.data).push.apply(n, t.data),
                    this.bounds = o.unionBBoxes(this.bounds, t.bounds))
                }
                ,
                t
            }();
            i.ZiggyPath = w;
            var g = function() {
                function t(t) {
                    this.layers = [];
                    var i = new v(t);
                    for (this.width = i.read(),
                    this.height = i.read(); !i.atEnd(); ) {
                        var n = i.read();
                        if (n == h)
                            break;
                        for (var s = {
                            idx: n,
                            data: []
                        }, e = !1; !e; ) {
                            var r = i.read();
                            switch (s.data.push(r),
                            r) {
                            case h:
                                e = !0;
                                break;
                            case u:
                            case c:
                                s.data.push(i.read()),
                                s.data.push(i.read());
                                break;
                            case a:
                                s.data.push(i.read()),
                                s.data.push(i.read()),
                                s.data.push(i.read()),
                                s.data.push(i.read());
                                break;
                            case f:
                                s.data.push(i.read()),
                                s.data.push(i.read()),
                                s.data.push(i.read()),
                                s.data.push(i.read()),
                                s.data.push(i.read()),
                                s.data.push(i.read());
                                break;
                            default:
                                throw "Unexpected command"
                            }
                        }
                        this.layers.push(s)
                    }
                }
                return t.prototype.toImage = function(t, i, n) {
                    if (n.length != this.layers.length)
                        throw "Specify precisely one color per layer.";
                    var s = document.createElement("canvas");
                    s.width = t,
                    s.height = i;
                    for (var e = s.getContext("2d"), r = t / this.width, o = i / this.height, h = 0; h < this.layers.length; ++h)
                        d(e, this.layers[h].data, r, o, "#" + n[h]);
                    return s
                }
                ,
                t
            }();
            i.ZiggyImage = g;
            var m = function(t, i) {
                this.img = t,
                this.key = i
            }
              , p = function() {
                function t() {}
                return t.glyphCacheEntry = function(t, i, n, s, e, r, o) {
                    var h = this.Dh(t, i, n, s, e, r, o);
                    if (!(h in this.Hh))
                        return null;
                    var u = this.Hh[h];
                    return u == this.Vh || (u == this.Rh && (this.Rh = u.prev),
                    u.prev && (u.prev.next = u.next),
                    u.next && (u.next.prev = u.prev),
                    u.prev = null,
                    this.Vh.prev = u,
                    u.next = this.Vh,
                    this.Vh = u),
                    u.img
                }
                ,
                t.putGlyphCacheEntry = function(t, i, n, s, e, r, o, h) {
                    var u = this.Dh(t, i, n, e, r, o, h)
                      , c = new m(s,u);
                    if (this.Hh[u] = c,
                    c.next = this.Vh,
                    this.Vh ? (this.Vh.prev = c,
                    this.Vh = c) : this.Vh = this.Rh = c,
                    ++this.Fh,
                    this.Fh > 1024 && this.Rh) {
                        delete this.Hh[this.Rh.key];
                        var a = this.Rh.prev;
                        a.next = null,
                        this.Rh = a,
                        --this.Fh
                    }
                    return s
                }
                ,
                t.Dh = function(t, i, n, s, e, r, o) {
                    return t + ":" + i + ":" + n + ":" + s + ":" + e + ":" + r + ":" + o
                }
                ,
                t.Fh = 0,
                t.Hh = {},
                t
            }()
              , b = function() {
                function t() {
                    this.Gh = [],
                    this.Wh = 0,
                    this.data = []
                }
                return t.prototype.bbox = function() {
                    if (0 !== this.Gh.length)
                        return {
                            xMin: this.xMin(),
                            yMin: this.yMin(),
                            xMax: this.xMax(),
                            yMax: this.yMax()
                        }
                }
                ,
                t.prototype.xMin = function() {
                    return this.Gh[0]
                }
                ,
                t.prototype.yMin = function() {
                    return this.Gh[1]
                }
                ,
                t.prototype.xMax = function() {
                    return this.Gh[2]
                }
                ,
                t.prototype.yMax = function() {
                    return this.Gh[3]
                }
                ,
                t.prototype.advance = function() {
                    return this.Wh
                }
                ,
                t.prototype.width = function() {
                    return this.xMax() - this.xMin()
                }
                ,
                t.prototype.set_advance = function(t) {
                    this.Wh = t
                }
                ,
                t.prototype.addBoundPoint = function(t, i) {
                    0 === this.Gh.length && (this.Gh = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MIN_VALUE, Number.MIN_VALUE]),
                    t < this.Gh[0] && (this.Gh[0] = t),
                    i < this.Gh[1] && (this.Gh[1] = i),
                    t > this.Gh[2] && (this.Gh[2] = t),
                    i > this.Gh[3] && (this.Gh[3] = i)
                }
                ,
                t
            }();
            i.GlyphData = b;
            var x = function() {
                function t(t, i) {
                    this.Tr = t,
                    this.Uh = [],
                    this.qh = [],
                    this.Yh = [],
                    this.$h = {},
                    this.Xh = Number.MAX_VALUE,
                    this.Jh = Number.MAX_VALUE,
                    this.Zh = Number.MIN_VALUE,
                    this.Kh = Number.MIN_VALUE;
                    var n, s, e = new v(i);
                    for (this.Qh = e.read(),
                    this.tu = e.read(),
                    this.xo = e.read(),
                    this.iu = e.read(); !e.atEnd() && -1 != (n = e.read()); ) {
                        this.Uh.push(n);
                        var r = new b;
                        r.set_advance(n),
                        this.Yh.push(r)
                    }
                    n = 0,
                    s = 0;
                    for (var o, d, l = 0, w = 0, g = [], m = 0; m < this.Yh.length; ++m) {
                        for (var p = this.Yh[m]; ; ) {
                            var x = e.read();
                            if (x == h) {
                                g.push(c, l, w);
                                break
                            }
                            switch (g.push(x),
                            x) {
                            case u:
                                l = n = e.read(),
                                w = s = e.read(),
                                g.push(n),
                                g.push(s);
                                break;
                            case c:
                                n += o = e.read(),
                                s += d = e.read(),
                                g.push(n),
                                g.push(s);
                                break;
                            case a:
                                var k = e.read()
                                  , y = e.read();
                                o = e.read(),
                                d = e.read(),
                                n += k,
                                s += y,
                                g.push(n, s),
                                n += o,
                                s += d,
                                g.push(n, s);
                                break;
                            case f:
                                var M = e.read()
                                  , I = e.read()
                                  , _ = e.read()
                                  , z = e.read();
                                o = e.read(),
                                d = e.read(),
                                n += M,
                                s += I,
                                g.push(n, s),
                                n += _,
                                s += z,
                                g.push(n, s),
                                n += o,
                                s += d,
                                g.push(n, s)
                            }
                            p.addBoundPoint(n, s),
                            this.nu(n, s)
                        }
                        this.qh.push(g),
                        g = []
                    }
                    for (; !e.atEnd(); ) {
                        var P = e.read();
                        if (P === h)
                            break;
                        var B = P
                          , C = e.read()
                          , O = e.read()
                          , S = this.su(B, C);
                        this.$h[S] = O
                    }
                }
                return t.prototype.drawPath = function(t, i, n, s, r) {
                    void 0 === s && (s = 0),
                    r || (r = n);
                    var o = t.bounds.xMin - s
                      , h = t.bounds.xMax + s
                      , u = t.bounds.yMin - s
                      , c = t.bounds.yMax + s
                      , a = (h - o) / this.iu
                      , f = (c - u) / this.iu
                      , v = document.createElement("canvas");
                    v.width = Math.max(Math.ceil(i * a), 1),
                    v.height = Math.max(Math.ceil(i * f), 1);
                    var d = v.getContext("2d", {
                        willReadFrequently: !0
                    })
                      , w = i / this.iu;
                    d.scale(w, w),
                    d.translate(-o, -u),
                    l.renderPathAbs(d, t.data, "#" + n, "#" + r, s);
                    var g = {
                        image: v,
                        width: this.iu * a,
                        height: this.iu * f,
                        offsetX: -o,
                        offsetY: -u
                    }
                      , m = {
                        xMin: o,
                        xMax: h,
                        yMin: u,
                        yMax: c
                    };
                    return {
                        image: new e.Image(g),
                        bounds: m
                    }
                }
                ,
                t.prototype.getCharPath = function(t) {
                    var i = this.Yh[t];
                    if (i) {
                        var n = this.qh[t];
                        return new w(n,i.bbox())
                    }
                    return new w
                }
                ,
                t.prototype.toImage = function(t, i, n, s, o, h) {
                    void 0 === s && (s = 1),
                    void 0 === o && (o = ""),
                    void 0 === h && (h = 0);
                    var u = p.glyphCacheEntry(this.Tr, t, i, n, s, o, h);
                    if (u)
                        return new e.Image(u);
                    var c = this.getCharPath(t);
                    if (!c || 0 === c.data.length)
                        return new e.Image;
                    1 !== s && r.Transforms.nh(c, (function(t, i, n, e) {
                        return [t * s, i, n, e]
                    }
                    ));
                    var a = this.drawPath(c, n, i, h, o);
                    return new e.Image(p.putGlyphCacheEntry(this.Tr, t, i, a.image, n, s, o, h))
                }
                ,
                t.prototype.emHeight = function() {
                    return this.iu
                }
                ,
                t.prototype.rawHeight = function() {
                    return this.Kh - this.Jh
                }
                ,
                t.prototype.glyphWidth = function(t, i, n) {
                    var s;
                    return (null !== (s = this.Uh[t]) && void 0 !== s ? s : 0) * i * n / this.iu
                }
                ,
                t.prototype.lineHeight = function(t) {
                    return this.xo * t / this.iu
                }
                ,
                t.prototype.ascent = function(t) {
                    return this.Qh * t / this.iu
                }
                ,
                t.prototype.descent = function(t) {
                    return this.tu * t / this.iu
                }
                ,
                t.prototype.sizeForWidth = function(t, i, n, s, e) {
                    var r = this.eu(t, i, n, s);
                    return e * this.iu / r
                }
                ,
                t.prototype.measureText = function(t, i, n, s, e) {
                    return this.eu(t, i, n, s) * e / this.iu
                }
                ,
                t.prototype.hasGlyph = function(t) {
                    return t - 1 in this.qh
                }
                ,
                t.prototype.getKerningValue = function(t, i, n) {
                    return this.ru(t, i) * n / this.iu
                }
                ,
                t.prototype.ru = function(t, i) {
                    var n = this.su(t, i);
                    return this.$h[n] || 0
                }
                ,
                t.prototype.su = function(t, i) {
                    return t + ":" + i
                }
                ,
                t.prototype.nu = function(t, i) {
                    t < this.Xh && (this.Xh = t),
                    t > this.Zh && (this.Zh = t),
                    i < this.Jh && (this.Jh = i),
                    i > this.Kh && (this.Kh = i)
                }
                ,
                t.prototype.eu = function(t, i, n, s) {
                    for (var e = 0, r = 0; r < t.length; ++r) {
                        void 0 !== this.Uh[t.charCodeAt(r)] && (e += this.Uh[t.charCodeAt(r)],
                        r != t.length - 1 && (e += n * this.iu / 1e3,
                        i && (e += this.ru(t.charCodeAt(r), t.charCodeAt(r + 1)))))
                    }
                    return e * s
                }
                ,
                t
            }();
            i.ZiggyFont = x
        }
        ,
        3566: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.EmailDialog = i.Email = void 0;
            var s = n(655)
              , e = n(6059)
              , r = n(2497)
              , o = n(1156)
              , h = function() {
                function t() {
                    this.Lt = new u
                }
                return t.prototype.show = function(t) {
                    this.Lt.setShare(t.id, t.token),
                    this.Lt.show()
                }
                ,
                t
            }();
            i.Email = h;
            var u = function(t) {
                function i() {
                    var i = t.call(this, "EmailDialog") || this;
                    i.ou = i.$(".form-wrapper"),
                    i.hu = i.$(".success-wrapper"),
                    i.Ys = i.$(".fail"),
                    i.Ds = i.$(".form"),
                    i.uu = i.$(".toEmails"),
                    i.cu = i.$(".fromEmail"),
                    i.au = i.$(".fromName"),
                    i.pr = i.$(".message"),
                    i.fu = i.$(".shareId"),
                    i.vu = i.$(".token");
                    var n = i.$(".closeButton");
                    return (0,
                    r.onClick)(n, (function() {
                        i.hide()
                    }
                    )),
                    (0,
                    r.onSubmit)(i.Ds, i.$(".sendButton"), (function() {
                        i.du()
                    }
                    )),
                    i
                }
                return s.__extends(i, t),
                i.prototype.du = function() {
                    var t = this
                      , i = {
                        mailTo: this.uu.value,
                        mailFrom: this.cu.value,
                        mailFromName: this.au.value,
                        mailMessage: this.pr.value,
                        tempdesignId: parseInt(this.fu.value),
                        token: this.vu.value
                    };
                    o.API.sendDesign(i, (function(i) {
                        1 == i.result ? t.yr() : t.V(i.message)
                    }
                    ))
                }
                ,
                i.prototype.setShare = function(t, i) {
                    if (!t || !i)
                        throw "missing share information";
                    this.fu.value = t.toString(),
                    this.vu.value = i
                }
                ,
                i.prototype.show = function() {
                    this.R(),
                    this.kr(),
                    this.ou.style.display = "block",
                    t.prototype.show.call(this)
                }
                ,
                i.prototype.hide = function() {
                    t.prototype.hide.call(this)
                }
                ,
                i.prototype.yr = function() {
                    this.ou.style.display = "none",
                    this.hu.style.display = "block"
                }
                ,
                i.prototype.kr = function() {
                    this.hu.style.display = "none"
                }
                ,
                i.prototype.V = function(t) {
                    this.Ys.textContent = t,
                    this.Ys.style.display = "inline-block"
                }
                ,
                i.prototype.R = function() {
                    this.Ys.textContent = "",
                    this.Ys.style.display = "none"
                }
                ,
                i
            }(e.Dialog);
            i.EmailDialog = u
        }
        ,
        593: (t, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Facebook = void 0;
            var n = function() {
                function t() {
                    var t, i, n, s, e, r = document.getElementById("fb-root");
                    r || ((r = document.createElement("div")).id = "fb-root",
                    document.querySelectorAll("body")[0].appendChild(r),
                    window.fbAsyncInit = function() {
                        FB.init({
                            appId: "480830695318587",
                            status: !0,
                            xfbml: !0,
                            frictionlessRequests: !0,
                            oauth: !0
                        })
                    }
                    ,
                    t = document,
                    i = "script",
                    n = "facebook-jssdk",
                    e = t.getElementsByTagName(i)[0],
                    t.getElementById(n) || ((s = t.createElement(i)).id = n,
                    s.src = "//connect.facebook.net/en_US/all.js",
                    e.parentNode.insertBefore(s, e)))
                }
                return t.prototype.show = function(t) {
                    if (null == FB)
                        throw "Missing facebook sdk";
                    var i = {
                        method: "feed",
                        link: t.url
                    };
                    null != t.images && t.images.length > 1 && (i.picture = t.images[0]),
                    null != t.text && (i.name = t.text),
                    null != t.summary && (i.description = t.summary),
                    FB.ui(i, (function() {}
                    ))
                }
                ,
                t
            }();
            i.Facebook = n
        }
        ,
        4801: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.PinterestDialog = i.Pinterest = void 0;
            var s = n(655)
              , e = n(6059)
              , r = function() {
                function t() {
                    this.Lt = new o
                }
                return t.prototype.show = function(t) {
                    this.Lt.setFrame(t.url),
                    this.Lt.show()
                }
                ,
                t
            }();
            i.Pinterest = r;
            var o = function(t) {
                function i() {
                    var i = t.call(this, "PinterestDialog") || this;
                    return i.L = i.$(".frame"),
                    i
                }
                return s.__extends(i, t),
                i.prototype.setFrame = function(t) {
                    this.L.src = t + "?pinterest=true"
                }
                ,
                i.prototype.show = function() {
                    t.prototype.show.call(this)
                }
                ,
                i
            }(e.Dialog);
            i.PinterestDialog = o
        }
        ,
        3383: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.ShareContext = void 0;
            var s = n(1156)
              , e = n(3566)
              , r = n(593)
              , o = n(3829)
              , h = n(4801)
              , u = function() {
                function t(t) {
                    this.gi = t,
                    this.lu = {},
                    this.lu.facebook = new r.Facebook,
                    this.lu.twitter = new o.Twitter,
                    this.lu.pinterest = new h.Pinterest,
                    this.lu.email = new e.Email
                }
                return t.prototype.reset = function() {
                    this.wu = null
                }
                ,
                t.prototype.share = function(t, i) {
                    var n = this
                      , e = this.lu[i];
                    if (null == e)
                        throw "cannot find service provider";
                    null == this.wu ? s.API.shareDesign(t, (function(t) {
                        if (null == t)
                            throw "response is not valid";
                        n.wu = t,
                        n.gu(e, t)
                    }
                    )) : this.gu(e, this.wu)
                }
                ,
                t.prototype.onProductChange = function() {
                    var t = this;
                    setTimeout((function() {
                        t.wu = null
                    }
                    ), 100)
                }
                ,
                t.prototype.gu = function(t, i) {
                    this.gi.hideShareOptions(),
                    t.show({
                        id: i.designId,
                        token: i.token,
                        url: i.url,
                        images: i.images,
                        text: "",
                        summary: "Check out my #UberShirt design"
                    })
                }
                ,
                t
            }();
            i.ShareContext = u
        }
        ,
        3829: (t, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.Twitter = void 0;
            var s = n(2497)
              , e = function() {
                function t() {
                    this.mu = "http://twitter.com/share?"
                }
                return t.prototype.show = function(t) {
                    var i, n, e = this.mu + "url=" + encodeURIComponent(t.url) + "&text=" + encodeURIComponent(null !== (i = t.summary) && void 0 !== i ? i : "") + "&via=uberprints";
                    (0,
                    s.openWindow)({
                        url: e,
                        title: null !== (n = t.text) && void 0 !== n ? n : "",
                        size: {
                            width: 550,
                            height: 400
                        }
                    })
                }
                ,
                t
            }();
            i.Twitter = e
        }
        ,
        2466: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M9.3 8.5h1.5v3.1H9.3zM9.3.4h1.5v3H9.3zM9.3 16.7h1.5v3H9.3z"/><path d="M14.5 4.6v2.6h-9V4.6h9m1.3-1.3H4.2v5.1h11.5V3.3h.1zM16.4 12.8v2.6H3.6v-2.6h12.8m1.3-1.3H2.3v5.1h15.4v-5.1z"/></svg>'
        }
        ,
        5208: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M12.7 18.1c.6.6 1.6.5 2.2 0 .6-.7.5-1.6-.1-2.2L8.5 10l6.3-5.9c.6-.5.6-1.5.1-2.1-.6-.6-1.6-.7-2.2-.1l-7.5 7c-.3.3-.5.7-.5 1.1 0 .4.2.8.5 1.1l7.5 7z"/></svg>'
        }
        ,
        3617: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M16.3 10.8c-.1-.3-.6-1.3-.9-1.9-1-1.8-3.1-5.6-3.9-7.2-.2-.3-.4-.8-.6-1-.2-.3-.6-.7-1.1-.7-.3 0-.7.1-1 .5 0 .2-.4.6-.7 1.1-.7 1.6-2.5 5.3-3.6 7.3-.2.4-.8 1.4-.9 2.1-.6 2.2-1.3 7.1 3.6 8.5.6.3 1.4.5 2.7.5 1 0 2.4-.1 3.3-.6 1.7-.8 5-3.1 3.1-8.6zm-7.1.8c-.3.1-1 0-1.2-.1-1.6-.5-1.3-2.3-1-3.6.1-.3.3-.8.4-.9.4-.9 1-2.4 1.2-3.1.1-.2.2-.4.2-.5.3-.4.6-.1.7 0 .1.1.1.3.2.5.3.7.7 4.5.7 4.6.3 2.3-.6 3-1.2 3.1z"/></svg>'
        }
        ,
        7939: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M14 0c.8 0 1.4.6 1.4 1.5 0 .8-.6 1.5-1.4 1.5H7.5v4.9h5.8c.7 0 1.5.6 1.5 1.5 0 .8-.7 1.4-1.5 1.4H7.5v7.8c0 1-.5 1.5-1.5 1.5s-1.4-.5-1.4-1.5V1.5C4.6.6 5.2 0 6 0h8z"/></svg>'
        }
        ,
        6596: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="m19.9 12.6-3.3-2h-.2L10 14.3l-6.2-3.7h-.2l-3.3 2c-.2 0-.3.1-.3.2s.1.2.1.2l9.7 5.8h.2l9.7-5.8c.1-.1.1-.1.1-.2.2-.1.1-.2.1-.2z"/><path d="m19.9 6.9-9.7-5.8H10L.1 6.9c0 .1-.1.2-.1.3s.1.2.1.2l9.7 5.8h.2l9.7-5.8c.2 0 .3-.1.3-.2s-.1-.2-.1-.3z"/></svg>'
        }
        ,
        6506: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M11.2.8s-.1 0 0 0H10.9c-.5.2-.9.6-.9 1.1s.4.9.8 1.1h.4c3.7.2 6.7 3.2 6.7 7 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-.8.1-1.6.4-2.3l2.3.8h.1c.1 0 .2 0 .2-.1 0 0 .1-.2 0-.3l-1.8-5c0-.1 0-.1-.1-.2H4.7L.2 5.6c-.2.1-.2.2-.2.3s.1.2.2.3l2 .7c-.3 1-.5 2-.5 3.1 0 5.1 4.1 9.2 9.2 9.2s9.2-4.1 9.2-9.2c-.1-4.9-4-9-8.9-9.2z"/></svg>'
        }
        ,
        2564: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M11.7 16.4c2.2 0 3.3-1.3 3.3-4V2.2c0-.4.1-.8.3-1.1-.1-.1-.2-.3-.3-.5-.3-.4-.9-.6-1.5-.6-.5 0-1.1.2-1.5.6s-.5 1-.5 1.6v10.2c0 1.2-.2 2.1-.7 2.7-.3.3-.6.6-1.1.8.6.3 1.2.5 2 .5z"/><path d="M4.8 12.4V2.2c0-.5.1-.9.2-1.1 0-.2-.1-.3-.2-.5C4.4.2 3.9 0 3.3 0S2.1.2 1.8.6c-.4.4-.5 1-.5 1.6v10.2c0 2.1.7 4 2 5.4C4.6 19.2 6.4 20 8.6 20c.9 0 1.7-.1 2.4-.4-3.7-.3-6.2-3.2-6.2-7.2z"/><path d="M16.7.6c.8 0 1.3.6 1.3 1.6v10.2c0 4-2.3 6.9-6.3 6.9s-6.6-2.9-6.6-6.9V2.2c0-1 .4-1.6 1.3-1.6s1.4.6 1.4 1.6v10.2c0 2.5 1.3 4.3 3.8 4.3 2.7 0 3.7-1.8 3.7-4.3V2.2c0-1 .5-1.6 1.4-1.6m0-.6c-1.3 0-2 .8-2 2.2v10.2c0 3.3-1.7 3.7-3 3.7-2.9 0-3.2-2.6-3.2-3.7V2.2C8.5.8 7.7 0 6.5 0c-.6 0-2 .2-2 2.2v10.2c0 4.5 3 7.6 7.2 7.6s6.9-3 6.9-7.6V2.2C18.7.8 18 0 16.7 0"/></svg>'
        }
        ,
        8076: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="m19.8.9-3.3.3s-.1 0-.1.1c-.1.1-.1.2 0 .3l.6.5-2.5 2.5c-.1.1-.1.3 0 .5l1.4 1.4c.1.1.3.1.5 0L18.8 4l.6.6c.1.1.1.1.2 0 .1 0 .1-.1.1-.2l.3-3.3V1l-.2-.1c.1 0 0 0 0 0zM19.9 19.1c.1-.1.1-.2.1-.2l-.3-3.3c0-.1-.1-.1-.1-.2h-.2l-.6.6-2.5-2.5c-.1-.1-.3-.1-.5 0l-1.4 1.4c-.1.1-.1.3 0 .5l2.5 2.5-.6.6c-.1.1-.1.2 0 .3l.1.1 3.5.2c-.1 0 0 0 0 0zM.1.9l-.1.2.3 3.3c0 .1.1.1.1.2h.2l.6-.6 2.5 2.5c.1.1.3.1.5 0l1.4-1.4c.1-.1.1-.3 0-.5L3 2.1l.6-.6c.1-.1.1-.2 0-.3l-.1-.1L.1.9c.1 0 0 0 0 0zM.2 19.1l3.3-.3s.1 0 .1-.1c.1-.1.1-.2 0-.3l-.6-.5 2.5-2.5c.1-.1.1-.3 0-.5l-1.4-1.4c-.1-.1-.3-.1-.5 0L1.2 16l-.6-.6c-.1-.1-.1-.1-.2 0-.1 0-.1.1-.1.2L0 18.9v.1l.2.1c-.1 0 0 0 0 0z"/></svg>'
        }
        ,
        1409: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M12 18c-.5 0-.8-.4-.8-.8V2.7c0-.5.4-.8.8-.8.5 0 .8.4.8.8v14.4c.1.5-.3.9-.8.9zM8 18.1c-.5 0-.8-.4-.8-.8V2.9c-.1-.5.3-.9.8-.9s.8.4.8.8v14.4c0 .5-.4.9-.8.9zM20 10.4v-.1s0-.1-.1-.1l-2.3-1.9c-.1 0-.1-.1-.2 0-.1 0-.1.1-.1.2v.7h-3.1c-.2 0-.3.1-.3.3v1.7c0 .2.1.3.3.3h3.1v.7c0 .1.1.2.2.2h.1l2.4-2zM.1 10.5l2.3 1.9h.1c.1 0 .2-.1.2-.2v-.7h3.1c.2 0 .3-.1.3-.3V9.5c0-.2-.1-.3-.3-.3H2.6v-.7c0-.1 0-.1-.1-.2h-.2L0 10.2l-.1.1.2.2c-.1-.1-.1-.1 0 0z"/></svg>'
        }
        ,
        1566: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M14.8 1.2c.8 0 1.2.5 1.2 1.5v9.6c0 3.7-2.1 6.5-5.9 6.5C6.4 18.8 4 16 4 12.3V2.7c0-1 .4-1.5 1.2-1.5.9 0 1.3.5 1.3 1.5v9.6c0 2.4 1.2 4.1 3.6 4.1 2.5 0 3.4-1.7 3.4-4.1V2.7c0-1 .5-1.5 1.3-1.5m0-1.2c-1.5 0-2.5 1.1-2.5 2.7v9.6c0 2.5-1.1 2.8-2.2 2.8-2 0-2.4-1.5-2.4-2.8V2.7c0-1.6-1-2.7-2.5-2.7C4 0 2.7.7 2.7 2.7v9.6c0 4.5 3.1 7.7 7.4 7.7s7.1-3.1 7.1-7.7V2.7c.1-1.6-.9-2.7-2.4-2.7z"/></svg>'
        }
        ,
        5549: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.787 17.953"><path d="m17.741 16.02-2.014-1.66a.154.154 0 0 0-.251.12v1.134H6.717v-1.135a.154.154 0 0 0-.25-.118l-2.015 1.66a.154.154 0 0 0-.046.064v.107a.154.154 0 0 0 .046.066l2.01 1.655a.153.153 0 0 0 .256-.113v-1.135h.005v-.005h8.748v.005h.005V17.8a.153.153 0 0 0 .256.113l2.01-1.655a.153.153 0 0 0 .045-.065v-.107a.153.153 0 0 0-.046-.065ZM17.782 11.808c0 .605-.571 1.024-1.303 1.024a1.438 1.438 0 0 1-1.509-.987l-.845-2.05H8.09l-.823 2.013a1.445 1.445 0 0 1-1.463 1.024c-.983 0-1.417-.713-1.12-1.408l4.366-9.971A2.177 2.177 0 0 1 11.198.227a2.113 2.113 0 0 1 2.103 1.226l4.39 9.898a1.216 1.216 0 0 1 .09.457ZM8.662 7.93h4.891l-2.446-5.526h-.022ZM1.932 13.335l1.66-2.014a.153.153 0 0 0-.118-.251H2.339V2.31h1.135a.154.154 0 0 0 .118-.25L1.932.044A.153.153 0 0 0 1.867 0h-.106a.153.153 0 0 0-.065.045L.04 2.055a.153.153 0 0 0 .113.256h1.134v.005h.005v8.748h-.005v.005H.153a.153.153 0 0 0-.113.256l1.655 2.01a.155.155 0 0 0 .066.046h.107a.155.155 0 0 0 .064-.046Z"/></svg>'
        }
        ,
        4779: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M20 1.9c0 .6-.5 1-1 1H1c-.6 0-1-.5-1-1 0-.6.5-1 1-1h18c.5-.1 1 .4 1 1zM20 5.9c0 .6-.5 1-1 1H1c-.6 0-1-.5-1-1 0-.6.5-1 1-1h18c.5 0 1 .5 1 1zM20 10c0 .6-.5 1-1 1H1c-.6 0-1-.5-1-1 0-.6.5-1 1-1h18c.5 0 1 .4 1 1zM20 14.1c0 .6-.5 1-1 1H1c-.6 0-1-.5-1-1 0-.6.5-1 1-1h18c.5-.1 1 .4 1 1zM20 18.1c0 .6-.5 1-1 1H1c-.6 0-1-.5-1-1 0-.6.5-1 1-1h18c.5 0 1 .5 1 1z"/></svg>'
        }
        ,
        1296: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 20 20" viewBox="0 0 20 20"><path d="M14.2 17.3c-.2 0-.4-.1-.5-.2C12.4 15.7 11 15 9.6 15c-2.5 0-4.5 2.1-4.5 2.1-.2.2-.4.2-.6.2s-.4-.2-.5-.4L0 6.5c-.1-.3 0-.6.2-.8 10.8-7.1 19.5.5 19.6.6.2.2.3.5.1.8L14.8 17c-.1.1-.3.3-.6.3.1 0 0 0 0 0zm-4.6-3.7c1.6 0 3.1.6 4.4 1.9L18.5 7c-1.7-1.3-8.5-5.8-17-.4l3.5 9c.8-.9 2.5-2 4.6-2z"/></svg>'
        }
        ,
        1864: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="arc-lower" d="M.5 5.4h39v18.5c-5.6-4.3-12.4-6.7-19.5-6.7S6.1 19.6.5 23.9V5.4z" class="shape"/></svg>'
        }
        ,
        8473: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="arc-upper" d="M.5 5.4c5.6 4.3 12.4 6.7 19.5 6.7s13.9-2.4 19.5-6.7v18.5H.5V5.4z" class="shape"/></svg>'
        }
        ,
        2072: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="arch" d="M39.5 27.8c-5.3-4.9-12.2-7.6-19.5-7.6S5.8 22.9.5 27.8V9.2c5.2-5.2 12.1-8 19.5-8s14.3 2.8 19.5 8v18.6z" class="shape"/></svg>'
        }
        ,
        4604: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="bulge-lower_" d="M20 28.6c-7.4 0-14.3-2.8-19.5-8V1.3h39v19.3c-5.2 5.1-12.1 8-19.5 8z" class="shape"/></svg>'
        }
        ,
        1158: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="bulge-upper" d="M39.5 9.3v19.3H.5V9.3c5.2-5.2 12.1-8 19.5-8s14.3 2.8 19.5 8z" class="shape"/></svg>'
        }
        ,
        7430: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="bulge" d="M39.5 21.1c-10.8 10.8-28.2 10.8-39 0V8.8C11.3-2 28.7-2 39.5 8.8v12.3z" class="shape"/></svg>'
        }
        ,
        7874: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="chevron" d="M.5 28.5V9L20 1l19.5 8v19.5L20 18.8z" class="shape"/></svg>'
        }
        ,
        5739: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="chisel-bottom" d="M.5 24.5V5h39v19.5L20 14.8z" class="shape"/></svg>'
        }
        ,
        5538: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="curve" d="M.7 13.9C5.5 8.3 12.5 5.1 20 5.1s14.4 3.2 19.3 8.8L25.5 25.3c-1.4-1.5-3.4-2.4-5.5-2.4s-4.1.9-5.5 2.4L.7 13.9z" class="shape"/></svg>'
        }
        ,
        8934: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path d="M20 .7.5 9.8v10.4L20 29.3l19.5-9.1V9.8z" class="shape"/></svg>'
        }
        ,
        8742: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path d="M39.5 24.3c-13 14.9-26-14.9-39 0V5.7c13-14.9 26 14.9 39 0v18.6z" class="shape"/></svg>'
        }
        ,
        3403: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><g id="warp-none"><circle cx="20" cy="15" r="14" class="st1"/><path d="M10.1 24.9 29.9 5.1" class="st1"/></g></svg>'
        }
        ,
        6688: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path d="M39.5 24.7a50.7 50.7 0 0 0-39 0V5.2a50.7 50.7 0 0 0 39 0v19.5z" class="shape"/></svg>'
        }
        ,
        6858: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="pointed-top" d="M.5 28.7V9.2l19.5-8 19.5 8v19.5z" class="shape"/></svg>'
        }
        ,
        1651: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="rise_00000057144202677773018030000015236158382495150226_" d="M39.5 20.7c-13 0-26 7.8-39 7.8V9c13 0 26-7.8 39-7.8v19.5z" class="shape"/></svg>'
        }
        ,
        5412: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="shear" d="M.5 28V9l39-7.1v18.8z" class="shape"/></svg>'
        }
        ,
        5300: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="squueze" d="M39.5 24.7a50.7 50.7 0 0 0-39 0V5.2a50.7 50.7 0 0 0 39 0v19.5z" class="shape"/></svg>'
        }
        ,
        9088: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="wedge-bottom" d="M39.5 24.8.5 15V5.2h39z" class="shape"/></svg>'
        }
        ,
        2424: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="wedge-top" d="m39.6 5.1-39 9.8v9.7h39z" class="shape"/></svg>'
        }
        ,
        7900: t => {
            "use strict";
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="warps" x="0" y="0" style="enable-background:new 0 0 40 30" version="1.1" viewBox="0 0 40 30"><path id="wedge" d="m39.5 24.7-39-4.9v-9.7l39-4.9z" class="shape"/></svg>'
        }
    }, n = {};
    function s(t) {
        var e = n[t];
        if (void 0 !== e)
            return e.exports;
        var r = n[t] = {
            exports: {}
        };
        return i[t].call(r.exports, r, r.exports, s),
        r.exports
    }
    s.m = i,
    t = [],
    s.O = (i, n, e, r) => {
        if (!n) {
            var o = 1 / 0;
            for (a = 0; a < t.length; a++) {
                for (var [n,e,r] = t[a], h = !0, u = 0; u < n.length; u++)
                    (!1 & r || o >= r) && Object.keys(s.O).every((t => s.O[t](n[u]))) ? n.splice(u--, 1) : (h = !1,
                    r < o && (o = r));
                if (h) {
                    t.splice(a--, 1);
                    var c = e();
                    void 0 !== c && (i = c)
                }
            }
            return i
        }
        r = r || 0;
        for (var a = t.length; a > 0 && t[a - 1][2] > r; a--)
            t[a] = t[a - 1];
        t[a] = [n, e, r]
    }
    ,
    s.d = (t, i) => {
        for (var n in i)
            s.o(i, n) && !s.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: i[n]
            })
    }
    ,
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = (t, i) => Object.prototype.hasOwnProperty.call(t, i),
    s.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var t = {
            179: 0
        };
        s.O.j = i => 0 === t[i];
        var i = (i, n) => {
            var e, r, [o,h,u] = n, c = 0;
            if (o.some((i => 0 !== t[i]))) {
                for (e in h)
                    s.o(h, e) && (s.m[e] = h[e]);
                if (u)
                    var a = u(s)
            }
            for (i && i(n); c < o.length; c++)
                r = o[c],
                s.o(t, r) && t[r] && t[r][0](),
                t[r] = 0;
            return s.O(a)
        }
          , n = self.webpackChunkids = self.webpackChunkids || [];
        n.forEach(i.bind(null, 0)),
        n.push = i.bind(null, n.push.bind(n))
    }
    )(),
    s.O(void 0, [952], ( () => s(8690))),
    s.O(void 0, [952], ( () => s(1368)));
    var e = s.O(void 0, [952], ( () => s(6611)));
    e = s.O(e)
}
)();
