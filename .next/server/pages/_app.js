(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/ThemeChanger.tsx




const ThemeChanger = ()=>{
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "text-gray-400 hover:text-gray-500 mx-3",
                onClick: ()=>setTheme("light"),
                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaSun, {
                    size: 20
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "text-gray-400 hover:text-gray-500 mx-3",
                onClick: ()=>setTheme("dark"),
                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaMoon, {
                    size: 20
                })
            })
        ]
    });
};
/* harmony default export */ const components_ThemeChanger = (ThemeChanger);

;// CONCATENATED MODULE: ./components/Header.tsx








const Header = ()=>{
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const router = (0,router_.useRouter)();
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Paul Eschli Design & Innovation Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "Paul Eschli Design & Innovation Portfolio",
                        content: "Paul Eschli Design & Innovation Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "w-full bg-black-500 border-b-2 border-black:500 mb-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between py-3 md:py-20 md:block",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "text-4xl font-semibold font-sans hover:text-black text-gray-500 dark:text-white hover:animate-pulse",
                                                children: "Paul Eschli"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "md:hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border h-10",
                                                onClick: ()=>setNavbar(!navbar),
                                                children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaBars, {
                                                    className: "w-6 h-6 text-gray-500 dark:text-white",
                                                    size: 30
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaBars, {
                                                    className: "w-6 h-6 text-gray-500 dark:text-white",
                                                    size: 30
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "md:flex md:space-x-6 md:space-y-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "font-semibold text-gray-600 dark:text-white text-l h-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: router.pathname == "/" ? "active" : "",
                                                        children: "Projects"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "font-semibold text-gray-600 dark:text-white text-l h-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    passHref: true,
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: router.pathname == "/about" ? "active" : "",
                                                        children: "About"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "font-semibold text-gray-600 dark:text-white text-l h-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    passHref: true,
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: router.pathname == "/contact" ? "active" : "",
                                                        children: "Contact"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "float-right pt-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeChanger, {})
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "flex flex-col items-center justify-center w-full h-32 border-t border-gray-200 pt-9 mt-9",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://github.com/webinternaut",
                        passHref: true,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-gray-400 hover:text-gray-500 mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                size: 20
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.linkedin.com/in/peschli",
                        passHref: true,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-gray-400 hover:text-gray-500 mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLinkedin, {
                                size: 20
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://twitter.com/yourusername",
                        passHref: true,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-gray-400 hover:text-gray-500 mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitter, {
                                size: 20
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-4 text-gray-400 text-sm",
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Paul Eschli"
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.tsx



function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-screen-xl m-auto px-9",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
        attribute: "class",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(9158)));
module.exports = __webpack_exports__;

})();