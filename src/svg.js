!function (e) {
    var t, n, o, i, a, l,
        d = '<svg><symbol id="iconright" viewBox="0 0 1024 1024"><path d="M686.083 512l-354.04 354.04a48.546 48.546 0 1 0 68.643 68.642l388.363-388.36a48.546 48.546 0 0 0 0-68.642L400.686 89.316a48.546 48.546 0 0 0-68.643 68.643L686.083 512z"  ></path></symbol><symbol id="iconedit" viewBox="0 0 1024 1024"><path d="M850.622159 29.124904c-31.331849-33.126756-82.334296-33.126756-113.660501 0L672.525631 97.602293l151.494653 160.582075 64.441672-68.454812c31.676155-33.143689 31.676155-87.019116 0-120.168449l-37.839797-40.436203z m-208.683321 100.514783l-421.684577 447.919568V587.01356h36.411774v36.417418h36.417418v36.417418h36.417418v36.411774h36.411774V748.318113l427.882085-458.090707-151.855892-160.587719zM183.836843 616.516635l-15.663103 16.379936-57.166089 219.238276 223.21755-69.555462 12.378084-13.484379h-17.102414v-36.411774h-36.417418v-36.417418h-36.417418v-36.411774h-36.411774v-36.417418H183.836843v-6.919987z m-43.704289 338.672958v68.810407h758.528762v-68.810407H140.132554z"  ></path></symbol><symbol id="iconxingzhuang" viewBox="0 0 1024 1024"><path d="M431.633655 87.958069a80.366345 80.366345 0 1 0 160.697379 0 80.366345 80.366345 0 1 0-160.732689 0h0.03531zM119.966897 220.689655a78.035862 78.035862 0 1 0 156.071724 0 78.035862 78.035862 0 1 0-156.071724 0zM1.182897 514.153931a71.044414 71.044414 0 0 0 142.088827 0 71.044414 71.044414 0 0 0-142.088827 0z m125.775448 320.211862a61.722483 61.722483 0 0 0 123.444965 0 61.722483 61.722483 0 0 0-123.444965 0z m333.806345 133.755586a53.707034 53.707034 0 0 0 107.414069 0 53.707034 53.707034 0 0 0-107.414069 0z m345.829517-123.233103a38.488276 38.488276 0 1 0 76.976552 0 38.488276 38.488276 0 1 0-76.976552 0z m160.114759-332.199724a27.277241 27.277241 0 1 0 54.554482 0 27.277241 27.277241 0 1 0-54.554482 0z m-81.937656-286.102069a19.473655 19.473655 0 0 0 38.964966 0 19.473655 19.473655 0 0 0-38.964966 0z"  ></path></symbol><symbol id="iconleft" viewBox="0 0 1024 1024"><path d="M337.91658667 512l354.04003555-354.04003555a48.54556445 48.54556445 0 1 0-68.64213333-68.64213334L234.95111111 477.67779555a48.54556445 48.54556445 0 0 0 0 68.64213334L623.31448889 934.68444445a48.54556445 48.54556445 0 0 0 68.64213333-68.64327112L337.91658667 512z"  ></path></symbol></svg>',
        c = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");
    if (c && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }

    function s() {
        a || (a = !0, o())
    }

    t = function () {
        var e, t, n, o;
        (o = document.createElement("div")).innerHTML = d, d = null, (n = o.getElementsByTagName("svg")[0]) && (n.setAttribute("aria-hidden", "true"), n.style.position = "absolute", n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", e = n, (t = document.body).firstChild ? (o = e, (n = t.firstChild).parentNode.insertBefore(o, n)) : t.appendChild(e))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), t()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, a = !1, (l = function () {
        try {
            i.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(l, 50)
        }
        s()
    })(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, s())
    })
}(window);