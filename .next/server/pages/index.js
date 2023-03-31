"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ProjectCard.tsx


function ProjectCard({ project  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-sm m-3  ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: `/projects/${project.id}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: project.imageUrl,
                    alt: project.title,
                    className: "rounded-lg hover:shadow-lg transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-200 duration-600"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: project.title
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/GoogleAnalytics.tsx




const TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;
const GoogleAnalytics = ()=>{
    const router = (0,router_.useRouter)();
    const handleRouteChange = (0,external_react_.useCallback)((url)=>{
        if (!TRACKING_ID || router.isPreview) return;
        // manually send page views
        gtag("event", "page_view", {
            page_path: url,
            send_to: TRACKING_ID
        });
    }, [
        router.isPreview
    ]);
    // send page views when users get to the landing page
    (0,external_react_.useEffect)(()=>{
        if (!TRACKING_ID || router.isPreview) return;
        gtag("config", TRACKING_ID, {
            send_page_view: false
        });
        gtag("event", "page_view", {
            page_path: window.location.pathname,
            send_to: TRACKING_ID
        });
    }, []);
    // send page views on route change
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [
        handleRouteChange,
        router.events
    ]);
    // prevent rendering scripts if there is no TRACKING_ID or if it's preview mode.
    if (!TRACKING_ID || router.isPreview) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "gtag-init",
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `
                }
            })
        ]
    });
};
/* harmony default export */ const components_GoogleAnalytics = (/*#__PURE__*/(0,external_react_.memo)(GoogleAnalytics));

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.tsx



function Home(props) {
    const projects = props.projects;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_GoogleAnalytics, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid gap-4 md:grid-cols-3 sm:grid-cols-2",
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectCard, {
                        project: project
                    }, project.id))
            })
        ]
    });
}
// Fetching data from the JSON file


async function getStaticProps() {
    const filePath = external_path_default().join(process.cwd(), "/public/data.json");
    const jsonData = await promises_default().readFile(filePath, "utf-8");
    const objectData = JSON.parse(jsonData);
    return {
        props: objectData
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,170,298], () => (__webpack_exec__(5603)));
module.exports = __webpack_exports__;

})();