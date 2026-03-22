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
"[project]/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
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
function ProfilePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(75);
    if ($[0] !== "8410dcc4461795db7082b7cc9a518a7ee74dba777b76e72015dfc0536c710669") {
        for(let $i = 0; $i < 75; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8410dcc4461795db7082b7cc9a518a7ee74dba777b76e72015dfc0536c710669";
    }
    const { user: storeUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "user-profile"
            ],
            queryFn: _temp
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data: user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    if (isLoading) {
        let t1;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-600",
                    children: "Loading profile..."
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 37,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 37,
                columnNumber: 12
            }, this);
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        return t1;
    }
    const userData = user || storeUser;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 md:mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-3xl font-bold text-gray-900",
                    children: "My Profile"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 47,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mt-1 text-sm md:text-base",
                    children: "Manage your account information"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 47,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== userData?.name) {
        t2 = userData?.name?.charAt(0).toUpperCase() || "U";
        $[4] = userData?.name;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg",
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = userData?.name;
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl md:text-2xl font-bold text-gray-900 mb-2",
            children: t4
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = userData?.email;
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-600 mb-4 text-sm md:text-base",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "break-all",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 87,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== userData?.isVerified) {
        t9 = userData?.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 95,
                    columnNumber: 153
                }, this),
                "Verified Account"
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 95,
            columnNumber: 34
        }, this);
        $[13] = userData?.isVerified;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t5 || $[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-6 md:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start gap-4 md:gap-6",
                children: [
                    t3,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 113,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t3;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-5 h-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 122,
                    columnNumber: 92
                }, this),
                "Account Details"
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Full Name"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = userData?.name;
    let t15;
    if ($[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900 border border-gray-200",
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 137,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Email Address"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const t17 = userData?.email;
    let t18;
    if ($[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900 border border-gray-200",
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 153,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== t15 || $[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-6",
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Authentication Method"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    const t21 = userData?.authProvider || "Email";
    let t22;
    if ($[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900 border border-gray-200 capitalize",
                    children: t21
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Account Status"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    const t24 = `inline-flex items-center gap-1 ${userData?.isVerified ? "text-green-700" : "text-yellow-700"}`;
    let t25;
    if ($[36] !== userData?.isVerified) {
        t25 = userData?.isVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 194,
                    columnNumber: 36
                }, this),
                "Verified"
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 194,
                    columnNumber: 87
                }, this),
                "Pending Verification"
            ]
        }, void 0, true);
        $[36] = userData?.isVerified;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] !== t24 || $[39] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 bg-gray-50 rounded-lg border border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: t24,
                        children: t25
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 202,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 202,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[38] = t24;
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] !== t22 || $[42] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-6",
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[41] = t22;
        $[42] = t26;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] !== userData) {
        t28 = userData?.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Member Since"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 220,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900 border border-gray-200 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "w-4 h-4 text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 220,
                            columnNumber: 233
                        }, this),
                        new Date(userData.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 220,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 220,
            columnNumber: 34
        }, this);
        $[44] = userData;
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== t19 || $[47] !== t27 || $[48] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-6",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t19,
                        t27,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 232,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t27;
        $[48] = t28;
        $[49] = t29;
    } else {
        t29 = $[49];
    }
    let t30;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "w-5 h-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 242,
                    columnNumber: 92
                }, this),
                "Security Information"
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium text-gray-900",
                            children: "Two-Factor Authentication"
                        }, void 0, false, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 249,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "Add an extra layer of security"
                        }, void 0, false, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 249,
                            columnNumber: 163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 249,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-500",
                    children: "Coming Soon"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 249,
                    columnNumber: 240
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[52] = t32;
    } else {
        t32 = $[52];
    }
    const t33 = userData?.authProvider === "google" ? "You sign in with Google" : "Last changed recently";
    let t34;
    if ($[53] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: t33
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 264,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[53] = t33;
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    let t35;
    if ($[55] !== userData?.authProvider) {
        t35 = userData?.authProvider !== "google" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "text-sm text-blue-600 hover:text-blue-700 font-medium",
            children: "Change"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 272,
            columnNumber: 50
        }, this);
        $[55] = userData?.authProvider;
        $[56] = t35;
    } else {
        t35 = $[56];
    }
    let t36;
    if ($[57] !== t34 || $[58] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[57] = t34;
        $[58] = t35;
        $[59] = t36;
    } else {
        t36 = $[59];
    }
    let t37;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: "Connected Accounts"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    const t38 = userData?.googleId ? "Google account connected" : "No connected accounts";
    let t39;
    if ($[61] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: t38
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 297,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[61] = t38;
        $[62] = t39;
    } else {
        t39 = $[62];
    }
    let t40;
    if ($[63] !== userData?.googleId) {
        t40 = userData?.googleId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "w-5 h-5 text-green-600"
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 305,
            columnNumber: 33
        }, this);
        $[63] = userData?.googleId;
        $[64] = t40;
    } else {
        t40 = $[64];
    }
    let t41;
    if ($[65] !== t39 || $[66] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[65] = t39;
        $[66] = t40;
        $[67] = t41;
    } else {
        t41 = $[67];
    }
    let t42;
    if ($[68] !== t36 || $[69] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-6",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t31,
                        t36,
                        t41
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 322,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[68] = t36;
        $[69] = t41;
        $[70] = t42;
    } else {
        t42 = $[70];
    }
    let t43;
    if ($[71] !== t11 || $[72] !== t29 || $[73] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:gap-6",
                    children: [
                        t11,
                        t29,
                        t42
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 331,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[71] = t11;
        $[72] = t29;
        $[73] = t42;
        $[74] = t43;
    } else {
        t43 = $[74];
    }
    return t43;
}
_s(ProfilePage, "BPj5VE/RZE99YDCJKfV1fOibhy0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = ProfilePage;
async function _temp() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].getMe();
    return response.data;
}
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0obsb6k._.js.map