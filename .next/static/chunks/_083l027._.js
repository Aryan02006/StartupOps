(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
function formatDateTime(date) {
    return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "07a27e7d177c4e36b0fe1a63d6971dfddb8370b9e7eba1482a61a89ff1efa673") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07a27e7d177c4e36b0fe1a63d6971dfddb8370b9e7eba1482a61a89ff1efa673";
    }
    let children;
    let className;
    let disabled;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== t0) {
        ({ children, variant: t1, size: t2, loading: t3, fullWidth: t4, className, disabled, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = disabled;
        $[5] = props;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        children = $[2];
        className = $[3];
        disabled = $[4];
        props = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const loading = t3 === undefined ? false : t3;
    const fullWidth = t4 === undefined ? false : t4;
    let t5;
    if ($[10] !== className || $[11] !== fullWidth || $[12] !== size || $[13] !== variant) {
        const variants = {
            primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
            secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
            outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
            ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
            danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
        };
        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg"
        };
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", variants[variant], sizes[size], fullWidth && "w-full", className);
        $[10] = className;
        $[11] = fullWidth;
        $[12] = size;
        $[13] = variant;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const t6 = disabled || loading;
    let t7;
    if ($[15] !== loading) {
        t7 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-4 h-4 mr-2 animate-spin"
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 87,
            columnNumber: 21
        }, this);
        $[15] = loading;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== children || $[18] !== props || $[19] !== t5 || $[20] !== t6 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t5,
            disabled: t6,
            ...props,
            children: [
                t7,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[17] = children;
        $[18] = props;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    return t8;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "cb1c5e325d2e78ee371921a87fe59bf6330c801d44ba389229bafc0b8d43d1a3") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cb1c5e325d2e78ee371921a87fe59bf6330c801d44ba389229bafc0b8d43d1a3";
    }
    const { isOpen, onClose, title, children, size: t1 } = t0;
    const size = t1 === undefined ? "md" : t1;
    let t2;
    let t3;
    if ($[1] !== isOpen) {
        t2 = ({
            "Modal[useEffect()]": ()=>{
                if (isOpen) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "unset";
                }
                return _temp;
            }
        })["Modal[useEffect()]"];
        t3 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!isOpen) {
        return null;
    }
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[4] !== onClose || $[5] !== size) {
        const sizes = {
            sm: "max-w-md",
            md: "max-w-lg",
            lg: "max-w-2xl",
            xl: "max-w-4xl"
        };
        t6 = "fixed inset-0 z-50 overflow-y-auto";
        if ($[10] !== onClose) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-sm bg-white/30 transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ui/Modal.tsx",
                lineNumber: 68,
                columnNumber: 12
            }, this);
            $[10] = onClose;
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        t5 = "flex min-h-full items-center justify-center p-4";
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative bg-white rounded-lg shadow-xl w-full", sizes[size]);
        $[4] = onClose;
        $[5] = size;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[12] !== onClose || $[13] !== title) {
        t8 = title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-6 border-b border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-gray-900",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/ui/Modal.tsx",
                    lineNumber: 90,
                    columnNumber: 99
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-gray-600 transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Modal.tsx",
                        lineNumber: 90,
                        columnNumber: 246
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/Modal.tsx",
                    lineNumber: 90,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 90,
            columnNumber: 19
        }, this);
        $[12] = onClose;
        $[13] = title;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== children) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[15] = children;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t4 || $[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[17] = t4;
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t10
        }, void 0, false, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t5;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t6 || $[26] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t6;
        $[26] = t7;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
function _temp() {
    document.body.style.overflow = "unset";
}
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/pricing/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/authStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function PricingPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "f200de2c07fd04fa269833c104af6f74c53f05c510b9cc192dd77560505001a3") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f200de2c07fd04fa269833c104af6f74c53f05c510b9cc192dd77560505001a3";
    }
    const [isCheckoutOpen, setIsCheckoutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("plans");
    const [billingCycle, setBillingCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("monthly");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t0;
    if ($[1] !== isAuthenticated || $[2] !== router) {
        t0 = ({
            "PricingPage[handleBackClick]": ()=>{
                if (isAuthenticated) {
                    router.push("/dashboard");
                } else {
                    router.push("/");
                }
            }
        })["PricingPage[handleBackClick]"];
        $[1] = isAuthenticated;
        $[2] = router;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleBackClick = t0;
    let addOns;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[4] !== activeTab || $[5] !== billingCycle || $[6] !== handleBackClick || $[7] !== isAuthenticated) {
        const plans = [
            {
                name: "Free",
                price: 0,
                yearlyPrice: 0,
                description: "Startups & Small Teams",
                subtitle: "Perfect for getting started",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                gradient: "from-blue-500 to-cyan-500",
                features: [
                    "Basic surveys (up to 5 active)",
                    "100 responses/month",
                    "Basic analytics",
                    "Email support",
                    "1 AI Sarthi query/day",
                    "Up to 10 users"
                ],
                cta: "Get Started Free",
                popular: false
            },
            {
                name: "Starter",
                price: 49,
                yearlyPrice: 490,
                description: "Growing Startups",
                subtitle: "10-50 employees",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
                gradient: "from-purple-500 to-pink-500",
                features: [
                    "Unlimited surveys",
                    "1,000 responses/month",
                    "Advanced analytics",
                    "Team collaboration (basic)",
                    "Task management (50 tasks)",
                    "50 AI Sarthi queries/month",
                    "Priority email support",
                    "Custom branding"
                ],
                cta: "Start 14-Day Trial",
                popular: false
            },
            {
                name: "Professional",
                price: 199,
                yearlyPrice: 1990,
                description: "Mid-size Companies",
                subtitle: "50-200 employees",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                gradient: "from-orange-500 to-red-500",
                features: [
                    "Everything in Starter",
                    "Unlimited responses",
                    "Advanced team collaboration",
                    "Unlimited task management",
                    "500 AI Sarthi queries/month",
                    "All AI Sarthi tools",
                    "2 Founder Academy courses/month",
                    "Priority chat support",
                    "Custom integrations"
                ],
                cta: "Start 14-Day Trial",
                popular: true,
                badge: "MOST POPULAR"
            },
            {
                name: "Enterprise",
                price: 599,
                yearlyPrice: 5990,
                description: "Large Organizations",
                subtitle: "200+ employees",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
                gradient: "from-indigo-500 to-purple-600",
                features: [
                    "Everything in Professional",
                    "Unlimited AI Sarthi queries",
                    "Dedicated account manager",
                    "Custom integrations",
                    "SSO & advanced security",
                    "Unlimited Founder Academy",
                    "White-label options",
                    "24/7 phone support",
                    "SLA guarantees",
                    "On-premise deployment"
                ],
                cta: "Contact Sales",
                popular: false,
                badge: "ENTERPRISE"
            }
        ];
        const apiPlans = [
            {
                name: "Basic API",
                price: 99,
                yearlyPrice: 990,
                description: "For developers getting started",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
                gradient: "from-green-500 to-emerald-500",
                features: [
                    "10,000 API calls/month",
                    "Standard rate limits",
                    "REST API access",
                    "Basic documentation",
                    "Email support",
                    "99.5% uptime SLA"
                ],
                specs: {
                    calls: "10K",
                    rateLimit: "100/min",
                    support: "Email"
                },
                cta: "Get API Key",
                popular: false
            },
            {
                name: "Pro API",
                price: 299,
                yearlyPrice: 2990,
                description: "For production applications",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                gradient: "from-blue-500 to-indigo-500",
                features: [
                    "100,000 API calls/month",
                    "Higher rate limits",
                    "REST + GraphQL API",
                    "Advanced documentation",
                    "Priority support",
                    "99.9% uptime SLA",
                    "Webhook support",
                    "Custom endpoints"
                ],
                specs: {
                    calls: "100K",
                    rateLimit: "500/min",
                    support: "Priority"
                },
                cta: "Get API Key",
                popular: true,
                badge: "RECOMMENDED"
            },
            {
                name: "Enterprise API",
                price: "Custom",
                yearlyPrice: "Custom",
                description: "For large-scale integrations",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
                gradient: "from-purple-500 to-pink-500",
                features: [
                    "Unlimited API calls",
                    "No rate limits",
                    "REST + GraphQL + WebSocket",
                    "Dedicated support engineer",
                    "Custom SLA",
                    "99.99% uptime guarantee",
                    "Advanced webhooks",
                    "Custom integrations",
                    "White-label API",
                    "On-premise option"
                ],
                specs: {
                    calls: "Unlimited",
                    rateLimit: "Custom",
                    support: "Dedicated"
                },
                cta: "Contact Sales",
                popular: false
            }
        ];
        let t9;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = [
                {
                    name: "AI Query Pack - Small",
                    price: 19,
                    description: "100 extra AI queries",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
                },
                {
                    name: "AI Query Pack - Medium",
                    price: 79,
                    description: "500 extra AI queries",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                },
                {
                    name: "AI Query Pack - Large",
                    price: 149,
                    description: "1,000 extra AI queries",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
                },
                {
                    name: "Founder Academy Standalone",
                    price: 29,
                    description: "Full course library access",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                }
            ];
            $[17] = t9;
        } else {
            t9 = $[17];
        }
        addOns = t9;
        const handleSelectPlan = {
            "PricingPage[handleSelectPlan]": (planName)=>{
                setSelectedPlan(planName);
                setIsCheckoutOpen(true);
            }
        }["PricingPage[handleSelectPlan]"];
        const getPrice = {
            "PricingPage[getPrice]": (plan)=>{
                if (typeof plan.price === "string") {
                    return plan.price;
                }
                const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.price;
                return price === 0 ? "Free" : `$${price}`;
            }
        }["PricingPage[getPrice]"];
        const getSavings = _PricingPageGetSavings;
        t7 = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden";
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 196,
                        columnNumber: 82
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 196,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 196,
                        columnNumber: 311
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 196,
                columnNumber: 12
            }, this);
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        t1 = "max-w-7xl mx-auto px-4 py-16 relative z-10";
        let t10;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "w-5 h-5 group-hover:-translate-x-1 transition-transform"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 204,
                columnNumber: 13
            }, this);
            $[19] = t10;
        } else {
            t10 = $[19];
        }
        const t11 = isAuthenticated ? "Back to Dashboard" : "Back to Home";
        let t12;
        if ($[20] !== t11) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium",
                children: t11
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this);
            $[20] = t11;
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        if ($[22] !== handleBackClick || $[23] !== t12) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBackClick,
                    className: "inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group",
                    children: [
                        t10,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 219,
                    columnNumber: 34
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 219,
                columnNumber: 12
            }, this);
            $[22] = handleBackClick;
            $[23] = t12;
            $[24] = t2;
        } else {
            t2 = $[24];
        }
        let t13;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "w-4 h-4 text-purple-400"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 228,
                        columnNumber: 185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-purple-300 text-sm font-medium",
                        children: "14-Day Free Trial • No Credit Card Required"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 228,
                        columnNumber: 231
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 228,
                columnNumber: 13
            }, this);
            $[25] = t13;
        } else {
            t13 = $[25];
        }
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent",
                        children: [
                            "Pricing That Scales",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 234,
                                columnNumber: 208
                            }, this),
                            "With Your Dreams"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 234,
                        columnNumber: 52
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                        children: "From solo founders to enterprise teams, we've got the perfect plan to supercharge your startup journey with AI-powered tools."
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 234,
                        columnNumber: 235
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 234,
                columnNumber: 12
            }, this);
            $[26] = t3;
        } else {
            t3 = $[26];
        }
        let t14;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = ({
                "PricingPage[<button>.onClick]": ()=>setActiveTab("plans")
            })["PricingPage[<button>.onClick]"];
            $[27] = t14;
        } else {
            t14 = $[27];
        }
        const t15 = `px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === "plans" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50" : "text-gray-400 hover:text-white"}`;
        let t16;
        if ($[28] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t14,
                className: t15,
                children: "Subscription Plans"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this);
            $[28] = t15;
            $[29] = t16;
        } else {
            t16 = $[29];
        }
        let t17;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = ({
                "PricingPage[<button>.onClick]": ()=>setActiveTab("api")
            })["PricingPage[<button>.onClick]"];
            $[30] = t17;
        } else {
            t17 = $[30];
        }
        const t18 = `px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === "api" ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50" : "text-gray-400 hover:text-white"}`;
        let t19;
        if ($[31] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t17,
                className: t18,
                children: "API Access"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this);
            $[31] = t18;
            $[32] = t19;
        } else {
            t19 = $[32];
        }
        if ($[33] !== t16 || $[34] !== t19) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-1.5",
                    children: [
                        t16,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 276,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 276,
                columnNumber: 12
            }, this);
            $[33] = t16;
            $[34] = t19;
            $[35] = t4;
        } else {
            t4 = $[35];
        }
        if ($[36] !== activeTab || $[37] !== billingCycle) {
            t5 = activeTab === "plans" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "PricingPage[<button>.onClick]": ()=>setBillingCycle("monthly")
                            }["PricingPage[<button>.onClick]"],
                            className: `px-6 py-2 rounded-xl font-medium transition-all duration-300 ${billingCycle === "monthly" ? "bg-white text-slate-900" : "text-gray-400 hover:text-white"}`,
                            children: "Monthly"
                        }, void 0, false, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 284,
                            columnNumber: 203
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "PricingPage[<button>.onClick]": ()=>setBillingCycle("yearly")
                            }["PricingPage[<button>.onClick]"],
                            className: `px-6 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${billingCycle === "yearly" ? "bg-white text-slate-900" : "text-gray-400 hover:text-white"}`,
                            children: [
                                "Yearly",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-0.5 rounded-full",
                                    children: "Save 17%"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 244
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 286,
                            columnNumber: 231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 284,
                    columnNumber: 80
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 284,
                columnNumber: 37
            }, this);
            $[36] = activeTab;
            $[37] = billingCycle;
            $[38] = t5;
        } else {
            t5 = $[38];
        }
        t6 = activeTab === "plans" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
            children: plans.map({
                "PricingPage[plans.map()]": (plan_1, index)=>{
                    const Icon = plan_1.icon;
                    const savings_0 = getSavings(plan_1);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group ${plan_1.popular ? "lg:scale-105 z-10" : ""}`,
                        style: {
                            animationDelay: `${index * 100}ms`
                        },
                        children: [
                            plan_1.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-1/2 transform -translate-x-1/2 z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `bg-gradient-to-r ${plan_1.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`,
                                    children: plan_1.badge
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 301,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative h-full bg-slate-800/50 backdrop-blur-sm border-2 ${plan_1.popular ? "border-purple-500" : "border-slate-700"} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan_1.popular ? "shadow-2xl shadow-purple-500/20" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `inline-flex p-4 bg-gradient-to-br ${plan_1.gradient} rounded-2xl mb-6 shadow-lg`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 626
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 527
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-2",
                                        children: plan_1.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 671
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mb-1",
                                        children: plan_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 740
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-xs mb-6",
                                        children: plan_1.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 806
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-5xl font-bold text-white",
                                                        children: getPrice(plan_1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 934
                                                    }, this),
                                                    typeof plan_1.price === "number" && plan_1.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: [
                                                            "/",
                                                            billingCycle === "yearly" ? "year" : "month"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 1064
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 891
                                            }, this),
                                            billingCycle === "yearly" && savings_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-green-400 text-sm mt-2 font-medium",
                                                children: [
                                                    "Save $",
                                                    plan_1.price * 12 - plan_1.yearlyPrice,
                                                    "/year"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 1200
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 869
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 mb-8",
                                        children: plan_1.features.map(_PricingPagePlansMapPlan_1FeaturesMap)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 1317
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "PricingPage[plans.map() > <button>.onClick]": ()=>handleSelectPlan(plan_1.name)
                                        }["PricingPage[plans.map() > <button>.onClick]"],
                                        className: `w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan_1.popular ? `bg-gradient-to-r ${plan_1.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105` : "bg-slate-700 text-white hover:bg-slate-600"}`,
                                        children: plan_1.cta
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 1413
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 301,
                                columnNumber: 253
                            }, this)
                        ]
                    }, plan_1.name, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 299,
                        columnNumber: 18
                    }, this);
                }
            }["PricingPage[plans.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 295,
            columnNumber: 34
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-8 mb-16",
            children: apiPlans.map({
                "PricingPage[apiPlans.map()]": (plan_2, index_0)=>{
                    const Icon_0 = plan_2.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group ${plan_2.popular ? "lg:scale-105 z-10" : ""}`,
                        style: {
                            animationDelay: `${index_0 * 100}ms`
                        },
                        children: [
                            plan_2.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-1/2 transform -translate-x-1/2 z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `bg-gradient-to-r ${plan_2.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`,
                                    children: plan_2.badge
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 310,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative h-full bg-slate-800/50 backdrop-blur-sm border-2 ${plan_2.popular ? "border-blue-500" : "border-slate-700"} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan_2.popular ? "shadow-2xl shadow-blue-500/20" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `inline-flex p-4 bg-gradient-to-br ${plan_2.gradient} rounded-2xl mb-6 shadow-lg`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_0, {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 622
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 523
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-2",
                                        children: plan_2.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 669
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mb-6",
                                        children: plan_2.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 738
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl font-bold text-white",
                                                    children: typeof plan_2.price === "number" ? `$${plan_2.price}` : plan_2.price
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pricing/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 869
                                                }, this),
                                                typeof plan_2.price === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "/month"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pricing/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 1031
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pricing/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 826
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 804
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3 mb-6 p-4 bg-slate-900/50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-1",
                                                        children: "API Calls"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 1194
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-white",
                                                        children: plan_2.specs.calls
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 1249
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 1165
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-1",
                                                        children: "Rate Limit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 1352
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-white",
                                                        children: plan_2.specs.rateLimit
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 1408
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 1323
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-1",
                                                        children: "Support"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 1515
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-white",
                                                        children: plan_2.specs.support
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 1568
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 1486
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 1089
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 mb-8",
                                        children: plan_2.features.map(_PricingPageApiPlansMapPlan_2FeaturesMap)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 1650
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "PricingPage[apiPlans.map() > <button>.onClick]": ()=>handleSelectPlan(plan_2.name)
                                        }["PricingPage[apiPlans.map() > <button>.onClick]"],
                                        className: `w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan_2.popular ? `bg-gradient-to-r ${plan_2.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105` : "bg-slate-700 text-white hover:bg-slate-600"}`,
                                        children: plan_2.cta
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 1749
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 310,
                                columnNumber: 253
                            }, this)
                        ]
                    }, plan_2.name, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 308,
                        columnNumber: 18
                    }, this);
                }
            }["PricingPage[apiPlans.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 305,
            columnNumber: 47
        }, this);
        $[4] = activeTab;
        $[5] = billingCycle;
        $[6] = handleBackClick;
        $[7] = isAuthenticated;
        $[8] = addOns;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        addOns = $[8];
        t1 = $[9];
        t2 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
    }
    let t9;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "Power-Ups & Add-Ons"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 341,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-lg",
                    children: "Supercharge your plan with additional features"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 341,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        $[39] = t9;
    } else {
        t9 = $[39];
    }
    let t10;
    if ($[40] !== addOns) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-16",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: addOns.map(_PricingPageAddOnsMap)
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 348,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[40] = addOns;
        $[41] = t10;
    } else {
        t10 = $[41];
    }
    let t11;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-bold text-white mb-2",
                                    children: "99.9%"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 224
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: "Uptime SLA"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 287
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 356,
                            columnNumber: 219
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-bold text-white mb-2",
                                    children: "10K+"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 345
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: "Active Users"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 407
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 356,
                            columnNumber: 340
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-bold text-white mb-2",
                                    children: "24/7"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 467
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 529
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 356,
                            columnNumber: 462
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-bold text-white mb-2",
                                    children: "SOC 2"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 584
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: "Certified"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 647
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 356,
                            columnNumber: 579
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 356,
                    columnNumber: 164
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 356,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[42] = t11;
    } else {
        t11 = $[42];
    }
    let t12;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-white text-center mb-12",
            children: "Frequently Asked Questions"
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[43] = t12;
    } else {
        t12 = $[43];
    }
    let t13;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: [
                        {
                            q: "Can I change plans later?",
                            a: "Absolutely! Upgrade or downgrade anytime. Changes take effect immediately with prorated billing."
                        },
                        {
                            q: "What payment methods do you accept?",
                            a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
                        },
                        {
                            q: "Is there a free trial?",
                            a: "Yes! All paid plans include a 14-day free trial. No credit card required to start."
                        },
                        {
                            q: "What happens after the trial?",
                            a: "You'll be prompted to add payment info. You can also downgrade to our free plan anytime."
                        },
                        {
                            q: "Do you offer refunds?",
                            a: "Yes! We offer a 30-day money-back guarantee on all annual plans. No questions asked."
                        },
                        {
                            q: "Can I cancel anytime?",
                            a: "Yes, cancel anytime with no penalties. Your access continues until the end of your billing period."
                        }
                    ].map(_PricingPageAnonymous)
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 370,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[44] = t13;
    } else {
        t13 = $[44];
    }
    let t14;
    let t15;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-white mb-4",
            children: "Still have questions?"
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto",
            children: "Our team is here to help you find the perfect plan for your needs."
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[45] = t14;
        $[46] = t15;
    } else {
        t14 = $[45];
        t15 = $[46];
    }
    let t16;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-20 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12",
                children: [
                    t14,
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50",
                                children: "Schedule a Demo"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 406,
                                columnNumber: 239
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-all duration-300",
                                children: "Contact Sales"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 406,
                                columnNumber: 449
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 406,
                        columnNumber: 186
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 406,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] !== t1 || $[49] !== t10 || $[50] !== t2 || $[51] !== t3 || $[52] !== t4 || $[53] !== t5 || $[54] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t10,
                t11,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[48] = t1;
        $[49] = t10;
        $[50] = t2;
        $[51] = t3;
        $[52] = t4;
        $[53] = t5;
        $[54] = t6;
        $[55] = t17;
    } else {
        t17 = $[55];
    }
    let t18;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "PricingPage[<Modal>.onClose]": ()=>setIsCheckoutOpen(false)
        })["PricingPage[<Modal>.onClose]"];
        $[56] = t18;
    } else {
        t18 = $[56];
    }
    const t19 = `Subscribe to ${selectedPlan}`;
    let t20;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-purple-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Demo Mode:"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 437,
                        columnNumber: 150
                    }, this),
                    " This is a demonstration. In production, this would integrate with Stripe or your payment processor."
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 437,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[57] = t20;
    } else {
        t20 = $[57];
    }
    let t21;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Card Number"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 444,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "4242 4242 4242 4242",
                    disabled: true,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 444,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[58] = t21;
    } else {
        t21 = $[58];
    }
    let t22;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Expiry"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 88
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "MM/YY",
                                    disabled: true,
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 166
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 451,
                            columnNumber: 83
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "CVC"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 322
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "123",
                                    disabled: true,
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 397
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pricing/page.tsx",
                            lineNumber: 451,
                            columnNumber: 317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 451,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[59] = t22;
    } else {
        t22 = $[59];
    }
    let t23;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t20,
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        fullWidth: true,
                        disabled: true,
                        children: "Complete Payment (Demo)"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 458,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 458,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 text-center",
                    children: "This is a demonstration. No actual payment will be processed."
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 458,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[60] = t23;
    } else {
        t23 = $[60];
    }
    let t24;
    if ($[61] !== isCheckoutOpen || $[62] !== t19) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isCheckoutOpen,
            onClose: t18,
            title: t19,
            children: t23
        }, void 0, false, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[61] = isCheckoutOpen;
        $[62] = t19;
        $[63] = t24;
    } else {
        t24 = $[63];
    }
    let t25;
    if ($[64] !== t17 || $[65] !== t24 || $[66] !== t7 || $[67] !== t8) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t17,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/page.tsx",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[64] = t17;
        $[65] = t24;
        $[66] = t7;
        $[67] = t8;
        $[68] = t25;
    } else {
        t25 = $[68];
    }
    return t25;
}
_s(PricingPage, "80shjSXEMU3j3sOj8cin0Hhb60c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = PricingPage;
function _PricingPageAnonymous(faq, index_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-white mb-3 text-lg",
                children: faq.q
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 486,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: faq.a
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 486,
                columnNumber: 228
            }, this)
        ]
    }, index_2, true, {
        fileName: "[project]/app/pricing/page.tsx",
        lineNumber: 486,
        columnNumber: 10
    }, this);
}
function _PricingPageAddOnsMap(addon, index_1) {
    const Icon_1 = addon.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-purple-500",
        style: {
            animationDelay: `${index_1 * 100}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_1, {
                    className: "w-6 h-6 text-white"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/page.tsx",
                    lineNumber: 492,
                    columnNumber: 101
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 492,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-white mb-2",
                children: addon.name
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 492,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm mb-4",
                children: addon.description
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 492,
                columnNumber: 215
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-1 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-3xl font-bold text-white",
                        children: [
                            "$",
                            addon.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 492,
                        columnNumber: 328
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: "/month"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 492,
                        columnNumber: 397
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 492,
                columnNumber: 280
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium",
                children: "Add to Plan"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 492,
                columnNumber: 448
            }, this)
        ]
    }, addon.name, true, {
        fileName: "[project]/app/pricing/page.tsx",
        lineNumber: 490,
        columnNumber: 10
    }, this);
}
function _PricingPageApiPlansMapPlan_2FeaturesMap(feature_0, idx_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 495,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300 text-sm",
                children: feature_0
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 495,
                columnNumber: 126
            }, this)
        ]
    }, idx_0, true, {
        fileName: "[project]/app/pricing/page.tsx",
        lineNumber: 495,
        columnNumber: 10
    }, this);
}
function _PricingPagePlansMapPlan_1FeaturesMap(feature, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 498,
                columnNumber: 59
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300 text-sm",
                children: feature
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 498,
                columnNumber: 124
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/app/pricing/page.tsx",
        lineNumber: 498,
        columnNumber: 10
    }, this);
}
function _PricingPageGetSavings(plan_0) {
    if (typeof plan_0.price === "string" || plan_0.price === 0) {
        return null;
    }
    const monthlyCost = plan_0.price * 12;
    const savings = monthlyCost - plan_0.yearlyPrice;
    return Math.round(savings / monthlyCost * 100);
}
var _c;
__turbopack_context__.k.register(_c, "PricingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_083l027._.js.map