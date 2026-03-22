(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiAPI",
    ()=>aiAPI,
    "analyticsAPI",
    ()=>analyticsAPI,
    "api",
    ()=>api,
    "authAPI",
    ()=>authAPI,
    "channelsAPI",
    ()=>channelsAPI,
    "feedbackAPI",
    ()=>feedbackAPI,
    "milestoneAPI",
    ()=>milestoneAPI,
    "taskAPI",
    ()=>taskAPI,
    "workspaceAPI",
    ()=>workspaceAPI,
    "workspaceMembersAPI",
    ()=>workspaceMembersAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:3001/api") || 'http://localhost:3001/api';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add token to requests
api.interceptors.request.use((config)=>{
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const authAPI = {
    register: (data)=>api.post('/auth/register', data),
    login: (data)=>api.post('/auth/login', data),
    getMe: ()=>api.get('/auth/me'),
    // Google OAuth
    googleAuth: (token)=>api.post('/auth/google', {
            token
        }),
    // OTP
    sendOTP: (data)=>api.post('/auth/otp/send', data),
    verifyOTP: (data)=>api.post('/auth/otp/verify', data)
};
const workspaceAPI = {
    create: (data)=>api.post('/workspaces', data),
    getAll: ()=>api.get('/workspaces'),
    getById: (id)=>api.get(`/workspaces/${id}`),
    update: (id, data)=>api.put(`/workspaces/${id}`, data),
    delete: (id)=>api.delete(`/workspaces/${id}`)
};
const taskAPI = {
    create: (data)=>api.post('/tasks', data),
    getByWorkspace: (workspaceId, params)=>api.get(`/tasks/workspace/${workspaceId}`, {
            params
        }),
    update: (id, data)=>api.put(`/tasks/${id}`, data),
    delete: (id)=>api.delete(`/tasks/${id}`)
};
const milestoneAPI = {
    create: (data)=>api.post('/milestones', data),
    getByWorkspace: (workspaceId)=>api.get(`/milestones/workspace/${workspaceId}`),
    update: (id, data)=>api.put(`/milestones/${id}`, data),
    delete: (id)=>api.delete(`/milestones/${id}`)
};
const feedbackAPI = {
    createRequest: (data)=>api.post('/feedback/request', data),
    updateRequest: (id, data)=>api.put(`/feedback/request/${id}`, data),
    deleteRequest: (id)=>api.delete(`/feedback/request/${id}`),
    submitFeedback: (shareableLink, data)=>api.post(`/feedback/submit/${shareableLink}`, data),
    getFeedbackRequest: (shareableLink)=>api.get(`/feedback/request/${shareableLink}`),
    getByWorkspace: (workspaceId)=>api.get(`/feedback/workspace/${workspaceId}`),
    markAddressed: (id)=>api.put(`/feedback/${id}/address`)
};
const analyticsAPI = {
    getWorkspaceAnalytics: (workspaceId)=>api.get(`/analytics/workspace/${workspaceId}`)
};
const aiAPI = {
    generateInsights: (workspaceId)=>api.post(`/ai/insights/${workspaceId}`),
    generatePitch: (workspaceId)=>api.post(`/ai/pitch/${workspaceId}`)
};
const workspaceMembersAPI = {
    getMembers: (workspaceId)=>api.get(`/workspace-members/${workspaceId}/members`),
    generateInvite: (workspaceId)=>api.post(`/workspace-members/${workspaceId}/invite`),
    joinWorkspace: (inviteToken, workspaceId)=>api.post(`/workspace-members/join/${inviteToken}`, {
            workspaceId
        }),
    removeMember: (workspaceId, memberId)=>api.delete(`/workspace-members/${workspaceId}/members/${memberId}`),
    updateRole: (workspaceId, memberId, role)=>api.put(`/workspace-members/${workspaceId}/members/${memberId}/role`, {
            role
        })
};
const channelsAPI = {
    create: (data)=>api.post('/channels', data),
    getByWorkspace: (workspaceId)=>api.get(`/channels/workspace/${workspaceId}`),
    join: (channelId)=>api.post(`/channels/${channelId}/join`),
    leave: (channelId)=>api.post(`/channels/${channelId}/leave`),
    delete: (channelId)=>api.delete(`/channels/${channelId}`),
    addMember: (channelId, userId)=>api.post(`/channels/${channelId}/members`, {
            userId
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ children, className, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white rounded-lg shadow-sm border border-gray-200 p-6", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Card.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ children, className, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-4", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Card.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ children, className, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-gray-900", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Card.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c2 = CardTitle;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "046b96cc1033eec4a09b81178b0bbf987d0be88de3b60c2a294bf030cd9fc7ce";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ children, className, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Card.tsx",
            lineNumber: 181,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c3 = CardContent;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardContent");
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
"[project]/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Input(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "bd86fb26809ee6af4531269a5b94fa1294e1581df223995d3d32d29c38fa8f11") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd86fb26809ee6af4531269a5b94fa1294e1581df223995d3d32d29c38fa8f11";
    }
    let className;
    let error;
    let helperText;
    let label;
    let props;
    if ($[1] !== t0) {
        ({ label, error, helperText, className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = error;
        $[4] = helperText;
        $[5] = label;
        $[6] = props;
    } else {
        className = $[2];
        error = $[3];
        helperText = $[4];
        label = $[5];
        props = $[6];
    }
    let t1;
    if ($[7] !== label || $[8] !== props) {
        t1 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: [
                label,
                props.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 ml-1",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/components/ui/Input.tsx",
                    lineNumber: 45,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Input.tsx",
            lineNumber: 45,
            columnNumber: 19
        }, this);
        $[7] = label;
        $[8] = props;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const t2 = error ? "border-red-300" : "border-gray-300";
    let t3;
    if ($[10] !== className || $[11] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-gray-900 placeholder:text-gray-400", t2, className);
        $[10] = className;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== props || $[14] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: t3,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/Input.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[13] = props;
        $[14] = t3;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    let t5;
    if ($[16] !== error) {
        t5 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-red-600",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/ui/Input.tsx",
            lineNumber: 73,
            columnNumber: 19
        }, this);
        $[16] = error;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== error || $[19] !== helperText) {
        t6 = helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-gray-500",
            children: helperText
        }, void 0, false, {
            fileName: "[project]/components/ui/Input.tsx",
            lineNumber: 81,
            columnNumber: 34
        }, this);
        $[18] = error;
        $[19] = helperText;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== t1 || $[22] !== t4 || $[23] !== t5 || $[24] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                t1,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Input.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[21] = t1;
        $[22] = t4;
        $[23] = t5;
        $[24] = t6;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    return t7;
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
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
"[project]/components/dashboard/WorkspaceList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceList",
    ()=>WorkspaceList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
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
;
;
;
;
function WorkspaceList() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "104d3c55f8fda014e6108a0b07fe9d5175a47d9773bdf60266a5a351601e9b07") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "104d3c55f8fda014e6108a0b07fe9d5175a47d9773bdf60266a5a351601e9b07";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { user: currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [editingWorkspace, setEditingWorkspace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingWorkspace, setDeletingWorkspace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            description: "",
            industry: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            queryKey: [
                "workspaces"
            ],
            queryFn: _temp
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { data: workspaces, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t1);
    let t2;
    if ($[3] !== queryClient) {
        t2 = {
            mutationFn: _temp2,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "workspaces"
                    ]
                });
                setEditingWorkspace(null);
            }
        };
        $[3] = queryClient;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
    let t3;
    if ($[5] !== queryClient) {
        t3 = {
            mutationFn: _temp3,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "workspaces"
                    ]
                });
                setDeletingWorkspace(null);
            }
        };
        $[5] = queryClient;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t3);
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "WorkspaceList[handleEdit]": (workspace, e)=>{
                e.preventDefault();
                e.stopPropagation();
                setFormData({
                    name: workspace.name,
                    description: workspace.description || "",
                    industry: workspace.industry || ""
                });
                setEditingWorkspace(workspace);
                setOpenMenuId(null);
            }
        })["WorkspaceList[handleEdit]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleEdit = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "WorkspaceList[handleDelete]": (workspace_0, e_0)=>{
                e_0.preventDefault();
                e_0.stopPropagation();
                setDeletingWorkspace(workspace_0);
                setOpenMenuId(null);
            }
        })["WorkspaceList[handleDelete]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleDelete = t5;
    let t6;
    if ($[9] !== editingWorkspace || $[10] !== formData || $[11] !== updateMutation) {
        t6 = ({
            "WorkspaceList[handleUpdateSubmit]": (e_1)=>{
                e_1.preventDefault();
                if (editingWorkspace) {
                    updateMutation.mutate({
                        id: editingWorkspace.id,
                        data: formData
                    });
                }
            }
        })["WorkspaceList[handleUpdateSubmit]"];
        $[9] = editingWorkspace;
        $[10] = formData;
        $[11] = updateMutation;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleUpdateSubmit = t6;
    let t7;
    if ($[13] !== deleteMutation || $[14] !== deletingWorkspace) {
        t7 = ({
            "WorkspaceList[handleDeleteConfirm]": ()=>{
                if (deletingWorkspace) {
                    deleteMutation.mutate(deletingWorkspace.id);
                }
            }
        })["WorkspaceList[handleDeleteConfirm]"];
        $[13] = deleteMutation;
        $[14] = deletingWorkspace;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const handleDeleteConfirm = t7;
    let t8;
    if ($[16] !== openMenuId) {
        t8 = ({
            "WorkspaceList[toggleMenu]": (workspaceId, e_2)=>{
                e_2.preventDefault();
                e_2.stopPropagation();
                setOpenMenuId(openMenuId === workspaceId ? null : workspaceId);
            }
        })["WorkspaceList[toggleMenu]"];
        $[16] = openMenuId;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const toggleMenu = t8;
    let t9;
    if ($[18] !== currentUser?.id) {
        t9 = ({
            "WorkspaceList[getUserRole]": (workspace_1)=>{
                const member = workspace_1.members?.find({
                    "WorkspaceList[getUserRole > (anonymous)()]": (m)=>m.userId === currentUser?.id
                }["WorkspaceList[getUserRole > (anonymous)()]"]);
                return member?.role || "member";
            }
        })["WorkspaceList[getUserRole]"];
        $[18] = currentUser?.id;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const getUserRole = t9;
    let t10;
    if ($[20] !== getUserRole) {
        t10 = ({
            "WorkspaceList[canEditWorkspace]": (workspace_2)=>{
                const role = getUserRole(workspace_2);
                return role === "owner";
            }
        })["WorkspaceList[canEditWorkspace]"];
        $[20] = getUserRole;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const canEditWorkspace = t10;
    let t11;
    if ($[22] !== getUserRole) {
        t11 = ({
            "WorkspaceList[canDeleteWorkspace]": (workspace_3)=>{
                const role_0 = getUserRole(workspace_3);
                return role_0 === "owner";
            }
        })["WorkspaceList[canDeleteWorkspace]"];
        $[22] = getUserRole;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const canDeleteWorkspace = t11;
    const getRoleBadge = _WorkspaceListGetRoleBadge;
    if (isLoading) {
        let t12;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "Loading workspaces..."
            }, void 0, false, {
                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this);
            $[24] = t12;
        } else {
            t12 = $[24];
        }
        return t12;
    }
    if (!workspaces || workspaces.length === 0) {
        let t12;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                            lineNumber: 234,
                            columnNumber: 54
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "No workspaces yet"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                            lineNumber: 234,
                            columnNumber: 116
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Create your first workspace to get started"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                            lineNumber: 234,
                            columnNumber: 193
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                    lineNumber: 234,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this);
            $[25] = t12;
        } else {
            t12 = $[25];
        }
        return t12;
    }
    let t12;
    if ($[26] !== canDeleteWorkspace || $[27] !== canEditWorkspace || $[28] !== getUserRole || $[29] !== openMenuId || $[30] !== toggleMenu || $[31] !== workspaces) {
        let t13;
        if ($[33] !== canDeleteWorkspace || $[34] !== canEditWorkspace || $[35] !== getUserRole || $[36] !== openMenuId || $[37] !== toggleMenu) {
            t13 = ({
                "WorkspaceList[workspaces.map()]": (workspace_4)=>{
                    const userRole = getUserRole(workspace_4);
                    const canEdit = canEditWorkspace(workspace_4);
                    const canDelete = canDeleteWorkspace(workspace_4);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/workspace/${workspace_4.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "hover:shadow-md transition cursor-pointer h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-gray-900 truncate",
                                                            children: workspace_4.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 263
                                                        }, this),
                                                        workspace_4.industry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mt-1 truncate",
                                                            children: workspace_4.industry
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 372
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 231
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 flex-shrink-0 ml-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                            className: "w-5 h-5 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 516
                                                        }, this),
                                                        (canEdit || canDelete) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "WorkspaceList[workspaces.map() > <button>.onClick]": (e_3)=>toggleMenu(workspace_4.id, e_3)
                                                            }["WorkspaceList[workspaces.map() > <button>.onClick]"],
                                                            className: "p-1 hover:bg-gray-100 rounded-md transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 134
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 590
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 456
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                            lineNumber: 250,
                                            columnNumber: 176
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: getRoleBadge(userRole)
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                            lineNumber: 252,
                                            columnNumber: 206
                                        }, this),
                                        workspace_4.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm mb-4 line-clamp-2",
                                            children: workspace_4.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                            lineNumber: 252,
                                            columnNumber: 286
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-sm text-gray-600 mt-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 483
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                workspace_4.members?.length || 0,
                                                                " members"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 512
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 442
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 614
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                workspace_4._count?.tasks || 0,
                                                                " tasks"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 649
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 573
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                            lineNumber: 252,
                                            columnNumber: 371
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                    lineNumber: 250,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 250,
                                columnNumber: 65
                            }, this),
                            openMenuId === workspace_4.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 z-10",
                                        onClick: {
                                            "WorkspaceList[workspaces.map() > <div>.onClick]": ()=>setOpenMenuId(null)
                                        }["WorkspaceList[workspaces.map() > <div>.onClick]"]
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                        lineNumber: 252,
                                        columnNumber: 762
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-2 top-12 z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[160px]",
                                        children: [
                                            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "WorkspaceList[workspaces.map() > <button>.onClick]": (e_4)=>handleEdit(workspace_4, e_4)
                                                }["WorkspaceList[workspaces.map() > <button>.onClick]"],
                                                className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 177
                                                    }, this),
                                                    "Edit Workspace"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                lineNumber: 254,
                                                columnNumber: 201
                                            }, this),
                                            canDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "WorkspaceList[workspaces.map() > <button>.onClick]": (e_5)=>handleDelete(workspace_4, e_5)
                                                }["WorkspaceList[workspaces.map() > <button>.onClick]"],
                                                className: "w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 174
                                                    }, this),
                                                    "Delete Workspace"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                                lineNumber: 256,
                                                columnNumber: 243
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                        lineNumber: 254,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, workspace_4.id, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 250,
                        columnNumber: 18
                    }, this);
                }
            })["WorkspaceList[workspaces.map()]"];
            $[33] = canDeleteWorkspace;
            $[34] = canEditWorkspace;
            $[35] = getUserRole;
            $[36] = openMenuId;
            $[37] = toggleMenu;
            $[38] = t13;
        } else {
            t13 = $[38];
        }
        t12 = workspaces.map(t13);
        $[26] = canDeleteWorkspace;
        $[27] = canEditWorkspace;
        $[28] = getUserRole;
        $[29] = openMenuId;
        $[30] = toggleMenu;
        $[31] = workspaces;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    let t13;
    if ($[39] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: t12
        }, void 0, false, {
            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[39] = t12;
        $[40] = t13;
    } else {
        t13 = $[40];
    }
    let t14;
    if ($[41] !== editingWorkspace || $[42] !== formData || $[43] !== handleUpdateSubmit || $[44] !== updateMutation) {
        t14 = editingWorkspace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: !!editingWorkspace,
            onClose: {
                "WorkspaceList[<Modal>.onClose]": ()=>setEditingWorkspace(null)
            }["WorkspaceList[<Modal>.onClose]"],
            title: "Edit Workspace",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleUpdateSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Workspace Name"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 293,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.name,
                                onChange: {
                                    "WorkspaceList[<Input>.onChange]": (e_6)=>setFormData({
                                            ...formData,
                                            name: e_6.target.value
                                        })
                                }["WorkspaceList[<Input>.onChange]"],
                                placeholder: "Enter workspace name",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 293,
                                columnNumber: 214
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 293,
                        columnNumber: 123
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Industry"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 298,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.industry,
                                onChange: {
                                    "WorkspaceList[<Input>.onChange]": (e_7)=>setFormData({
                                            ...formData,
                                            industry: e_7.target.value
                                        })
                                }["WorkspaceList[<Input>.onChange]"],
                                placeholder: "e.g., Technology, Healthcare"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 298,
                                columnNumber: 193
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 298,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 303,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: formData.description,
                                onChange: {
                                    "WorkspaceList[<textarea>.onChange]": (e_8)=>setFormData({
                                            ...formData,
                                            description: e_8.target.value
                                        })
                                }["WorkspaceList[<textarea>.onChange]"],
                                placeholder: "Describe your workspace",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900",
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 303,
                                columnNumber: 188
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 303,
                        columnNumber: 100
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: {
                                    "WorkspaceList[<Button>.onClick]": ()=>setEditingWorkspace(null)
                                }["WorkspaceList[<Button>.onClick]"],
                                className: "bg-gray-200 text-gray-700 hover:bg-gray-300",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 308,
                                columnNumber: 282
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                disabled: updateMutation.isPending,
                                children: updateMutation.isPending ? "Saving..." : "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 310,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 308,
                        columnNumber: 242
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                lineNumber: 293,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
            lineNumber: 291,
            columnNumber: 31
        }, this);
        $[41] = editingWorkspace;
        $[42] = formData;
        $[43] = handleUpdateSubmit;
        $[44] = updateMutation;
        $[45] = t14;
    } else {
        t14 = $[45];
    }
    let t15;
    if ($[46] !== deleteMutation || $[47] !== deletingWorkspace || $[48] !== handleDeleteConfirm) {
        t15 = deletingWorkspace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: !!deletingWorkspace,
            onClose: {
                "WorkspaceList[<Modal>.onClose]": ()=>setDeletingWorkspace(null)
            }["WorkspaceList[<Modal>.onClose]"],
            title: "Delete Workspace",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: [
                            "Are you sure you want to delete ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: deletingWorkspace.name
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 323,
                                columnNumber: 155
                            }, this),
                            "? This action cannot be undone and will delete all associated data."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 323,
                        columnNumber: 94
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: {
                                    "WorkspaceList[<Button>.onClick]": ()=>setDeletingWorkspace(null)
                                }["WorkspaceList[<Button>.onClick]"],
                                className: "bg-gray-200 text-gray-700 hover:bg-gray-300",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 323,
                                columnNumber: 307
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleDeleteConfirm,
                                disabled: deleteMutation.isPending,
                                className: "bg-red-600 hover:bg-red-700",
                                children: deleteMutation.isPending ? "Deleting..." : "Delete Workspace"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                                lineNumber: 325,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                        lineNumber: 323,
                        columnNumber: 267
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                lineNumber: 323,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
            lineNumber: 321,
            columnNumber: 32
        }, this);
        $[46] = deleteMutation;
        $[47] = deletingWorkspace;
        $[48] = handleDeleteConfirm;
        $[49] = t15;
    } else {
        t15 = $[49];
    }
    let t16;
    if ($[50] !== t13 || $[51] !== t14 || $[52] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true);
        $[50] = t13;
        $[51] = t14;
        $[52] = t15;
        $[53] = t16;
    } else {
        t16 = $[53];
    }
    return t16;
}
_s(WorkspaceList, "gmb7yCG0uYccBZ/OfYPP9P3Y6Ug=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = WorkspaceList;
function _WorkspaceListGetRoleBadge(role_1) {
    switch(role_1){
        case "owner":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1 text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                            lineNumber: 349,
                            columnNumber: 131
                        }, this),
                        "Owner"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                    lineNumber: 349,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1 text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                            lineNumber: 353,
                            columnNumber: 127
                        }, this),
                        "Member"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/WorkspaceList.tsx",
                    lineNumber: 353,
                    columnNumber: 16
                }, this);
            }
    }
}
function _temp3(id_0) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceAPI"].delete(id_0);
}
function _temp2(t0) {
    const { id, data } = t0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceAPI"].update(id, data);
}
async function _temp() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceAPI"].getAll();
    return response.data;
}
var _c;
__turbopack_context__.k.register(_c, "WorkspaceList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/QuickStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickStats",
    ()=>QuickStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function QuickStats() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "f6fe93d8d56cbebeefa6f7a716649fc52a13e91bc219076895e5214bd233e4eb") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f6fe93d8d56cbebeefa6f7a716649fc52a13e91bc219076895e5214bd233e4eb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "workspaces"
            ],
            queryFn: _temp
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data: workspaces } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    const totalWorkspaces = workspaces?.length || 0;
    let t1;
    if ($[2] !== workspaces) {
        t1 = workspaces?.reduce(_QuickStatsAnonymous, 0) || 0;
        $[2] = workspaces;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const totalTasks = t1;
    let t2;
    if ($[4] !== workspaces) {
        t2 = workspaces?.reduce(_QuickStatsAnonymous2, 0) || 0;
        $[4] = workspaces;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const totalMilestones = t2;
    let t3;
    if ($[6] !== workspaces) {
        t3 = workspaces?.reduce(_QuickStatsAnonymous3, 0) || 0;
        $[6] = workspaces;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const totalMembers = t3;
    let t4;
    if ($[8] !== totalWorkspaces) {
        t4 = {
            label: "Workspaces",
            value: totalWorkspaces,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        };
        $[8] = totalWorkspaces;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== totalTasks) {
        t5 = {
            label: "Total Tasks",
            value: totalTasks,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            color: "text-green-600",
            bgColor: "bg-green-50"
        };
        $[10] = totalTasks;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== totalMilestones) {
        t6 = {
            label: "Milestones",
            value: totalMilestones,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        };
        $[12] = totalMilestones;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== totalMembers) {
        t7 = {
            label: "Team Members",
            value: totalMembers,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        };
        $[14] = totalMembers;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t4 || $[17] !== t5 || $[18] !== t6 || $[19] !== t7) {
        t8 = [
            t4,
            t5,
            t6,
            t7
        ];
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const stats = t8;
    let t9;
    if ($[21] !== stats) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: stats.map(_QuickStatsStatsMap)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/QuickStats.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[21] = stats;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(QuickStats, "L3hP8mhYhsBcy4OhRdr8fn5cCUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = QuickStats;
function _QuickStatsStatsMap(stat) {
    const Icon = stat.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-1",
                            children: stat.label
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/QuickStats.tsx",
                            lineNumber: 137,
                            columnNumber: 89
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold text-gray-900",
                            children: stat.value
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/QuickStats.tsx",
                            lineNumber: 137,
                            columnNumber: 147
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/QuickStats.tsx",
                    lineNumber: 137,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 rounded-lg ${stat.bgColor}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: `w-6 h-6 ${stat.color}`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/QuickStats.tsx",
                        lineNumber: 137,
                        columnNumber: 267
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/QuickStats.tsx",
                    lineNumber: 137,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/QuickStats.tsx",
            lineNumber: 137,
            columnNumber: 33
        }, this)
    }, stat.label, false, {
        fileName: "[project]/components/dashboard/QuickStats.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
function _QuickStatsAnonymous3(sum_1, w_1) {
    return sum_1 + (w_1.members?.length || 0);
}
function _QuickStatsAnonymous2(sum_0, w_0) {
    return sum_0 + (w_0._count?.milestones || 0);
}
function _QuickStatsAnonymous(sum, w) {
    return sum + (w._count?.tasks || 0);
}
async function _temp() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceAPI"].getAll();
    return response.data;
}
var _c;
__turbopack_context__.k.register(_c, "QuickStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/CreateWorkspaceModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateWorkspaceModal",
    ()=>CreateWorkspaceModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
;
const INDUSTRY_OPTIONS = [
    'SaaS',
    'E-commerce',
    'FinTech',
    'HealthTech',
    'EdTech',
    'AI/ML',
    'Blockchain',
    'Gaming',
    'Social Media',
    'Marketplace',
    'Enterprise Software',
    'Mobile Apps',
    'IoT',
    'Cybersecurity',
    'Other'
];
function CreateWorkspaceModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "46320073328a0989e216ec76844da440fa1ce61457ea0cff8b33c3025745d537") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46320073328a0989e216ec76844da440fa1ce61457ea0cff8b33c3025745d537";
    }
    const { isOpen, onClose } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [industry, setIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== onClose || $[2] !== queryClient || $[3] !== router) {
        t1 = {
            mutationFn: _temp,
            onSuccess: (response)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "workspaces"
                    ]
                });
                onClose();
                router.push(`/workspace/${response.data.id}`);
            }
        };
        $[1] = onClose;
        $[2] = queryClient;
        $[3] = router;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t1);
    let t2;
    if ($[5] !== createMutation || $[6] !== description || $[7] !== industry || $[8] !== name) {
        t2 = ({
            "CreateWorkspaceModal[handleSubmit]": (e)=>{
                e.preventDefault();
                createMutation.mutate({
                    name,
                    description,
                    industry
                });
            }
        })["CreateWorkspaceModal[handleSubmit]"];
        $[5] = createMutation;
        $[6] = description;
        $[7] = industry;
        $[8] = name;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const handleSubmit = t2;
    let t3;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CreateWorkspaceModal[<Input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["CreateWorkspaceModal[<Input>.onChange]"];
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            label: "Workspace Name",
            value: name,
            onChange: t3,
            placeholder: "My Startup",
            required: true
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[11] = name;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "CreateWorkspaceModal[<textarea>.onChange]": (e_1)=>setDescription(e_1.target.value)
        })["CreateWorkspaceModal[<textarea>.onChange]"];
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== description) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: description,
                    onChange: t6,
                    placeholder: "Brief description of your startup...",
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900",
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[15] = description;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Industry"
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "CreateWorkspaceModal[<select>.onChange]": (e_2)=>setIndustry(e_2.target.value)
        })["CreateWorkspaceModal[<select>.onChange]"];
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select an industry"
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        t11 = INDUSTRY_OPTIONS.map(_CreateWorkspaceModalINDUSTRY_OPTIONSMap);
        $[19] = t10;
        $[20] = t11;
    } else {
        t10 = $[19];
        t11 = $[20];
    }
    let t12;
    if ($[21] !== industry) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: industry,
                    onChange: t9,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
                    lineNumber: 144,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[21] = industry;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== onClose) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            fullWidth: true,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[23] = onClose;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== createMutation.isPending) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            fullWidth: true,
            loading: createMutation.isPending,
            children: "Create Workspace"
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[25] = createMutation.isPending;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t13 || $[28] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 pt-4",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t14;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== handleSubmit || $[31] !== t12 || $[32] !== t15 || $[33] !== t4 || $[34] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t4,
                t7,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[30] = handleSubmit;
        $[31] = t12;
        $[32] = t15;
        $[33] = t4;
        $[34] = t7;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== isOpen || $[37] !== onClose || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: "Create New Workspace",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[36] = isOpen;
        $[37] = onClose;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(CreateWorkspaceModal, "FvOZt1ly+UhDnSHznonwc3HYsxA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = CreateWorkspaceModal;
function _CreateWorkspaceModalINDUSTRY_OPTIONSMap(option) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: option,
        children: option
    }, option, false, {
        fileName: "[project]/components/workspace/CreateWorkspaceModal.tsx",
        lineNumber: 200,
        columnNumber: 10
    }, this);
}
function _temp(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceAPI"].create(data);
}
var _c;
__turbopack_context__.k.register(_c, "CreateWorkspaceModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/CreateWorkspaceButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateWorkspaceButton",
    ()=>CreateWorkspaceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$CreateWorkspaceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/CreateWorkspaceModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreateWorkspaceButton() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "3fa2eb0e1038e5cad39e349cfcc67881f049789a523a9ccac854d583db1a1c3c") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3fa2eb0e1038e5cad39e349cfcc67881f049789a523a9ccac854d583db1a1c3c";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: {
                "CreateWorkspaceButton[<Button>.onClick]": ()=>setIsOpen(true)
            }["CreateWorkspaceButton[<Button>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "w-4 h-4 mr-2"
                }, void 0, false, {
                    fileName: "[project]/components/workspace/CreateWorkspaceButton.tsx",
                    lineNumber: 21,
                    columnNumber: 51
                }, this),
                "New Workspace"
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/CreateWorkspaceButton.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CreateWorkspaceButton[<CreateWorkspaceModal>.onClose]": ()=>setIsOpen(false)
        })["CreateWorkspaceButton[<CreateWorkspaceModal>.onClose]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== isOpen) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$CreateWorkspaceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateWorkspaceModal"], {
                    isOpen: isOpen,
                    onClose: t1
                }, void 0, false, {
                    fileName: "[project]/components/workspace/CreateWorkspaceButton.tsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true);
        $[3] = isOpen;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(CreateWorkspaceButton, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = CreateWorkspaceButton;
var _c;
__turbopack_context__.k.register(_c, "CreateWorkspaceButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0bksbn0._.js.map