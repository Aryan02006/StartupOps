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
"[project]/components/workspace/WorkspaceHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceHeader",
    ()=>WorkspaceHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function WorkspaceHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "32aac3a860bbf46da2b9c5c3527517370c1de8fea3ef31b15263258355e19630") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "32aac3a860bbf46da2b9c5c3527517370c1de8fea3ef31b15263258355e19630";
    }
    const { workspaceId } = t0;
    let t1;
    if ($[1] !== workspaceId) {
        t1 = {
            queryKey: [
                "workspace",
                workspaceId
            ],
            queryFn: async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceAPI"].getById(workspaceId);
                return response.data;
            }
        };
        $[1] = workspaceId;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t1);
    if (!workspace) {
        return null;
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "w-8 h-8 text-blue-600"
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceHeader.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== workspace.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900",
                    children: workspace.name
                }, void 0, false, {
                    fileName: "[project]/components/workspace/WorkspaceHeader.tsx",
                    lineNumber: 47,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/WorkspaceHeader.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[4] = workspace.name;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== workspace.description) {
        t4 = workspace.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600",
            children: workspace.description
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceHeader.tsx",
            lineNumber: 55,
            columnNumber: 35
        }, this);
        $[6] = workspace.description;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/WorkspaceHeader.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(WorkspaceHeader, "FNzg0Zh+D8bfVSFnpLa6bQ17Ifo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = WorkspaceHeader;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/WorkspaceSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceSidebar",
    ()=>WorkspaceSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
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
function WorkspaceSidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "f812596308071e10039f73d473d3b0dcea8268e22bc5d78d8d078207e2387cdd") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f812596308071e10039f73d473d3b0dcea8268e22bc5d78d8d078207e2387cdd";
    }
    const { workspaceId } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t1;
    if ($[1] !== logout || $[2] !== router) {
        t1 = ({
            "WorkspaceSidebar[handleLogout]": ()=>{
                logout();
                router.push("/login");
            }
        })["WorkspaceSidebar[handleLogout]"];
        $[1] = logout;
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleLogout = t1;
    const t2 = `/workspace/${workspaceId}`;
    let t3;
    if ($[4] !== t2) {
        t3 = {
            href: t2,
            label: "Overview",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `/workspace/${workspaceId}/tasks`;
    let t5;
    if ($[6] !== t4) {
        t5 = {
            href: t4,
            label: "Tasks",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
        };
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = `/workspace/${workspaceId}/milestones`;
    let t7;
    if ($[8] !== t6) {
        t7 = {
            href: t6,
            label: "Milestones",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
        };
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = `/workspace/${workspaceId}/team`;
    let t9;
    if ($[10] !== t8) {
        t9 = {
            href: t8,
            label: "Team",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        };
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `/workspace/${workspaceId}/chat`;
    let t11;
    if ($[12] !== t10) {
        t11 = {
            href: t10,
            label: "Chat",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
            badge: "LIVE"
        };
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const t12 = `/workspace/${workspaceId}/feedback`;
    let t13;
    if ($[14] !== t12) {
        t13 = {
            href: t12,
            label: "Feedback",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
        };
        $[14] = t12;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const t14 = `/workspace/${workspaceId}/analytics`;
    let t15;
    if ($[16] !== t14) {
        t15 = {
            href: t14,
            label: "Analytics",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        };
        $[16] = t14;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    const t16 = `/workspace/${workspaceId}/insights`;
    let t17;
    if ($[18] !== t16) {
        t17 = {
            href: t16,
            label: "AI Insights",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            badge: "NEW"
        };
        $[18] = t16;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t11 || $[21] !== t13 || $[22] !== t15 || $[23] !== t17 || $[24] !== t3 || $[25] !== t5 || $[26] !== t7 || $[27] !== t9) {
        t18 = [
            t3,
            t5,
            t7,
            t9,
            t11,
            t13,
            t15,
            t17
        ];
        $[20] = t11;
        $[21] = t13;
        $[22] = t15;
        $[23] = t17;
        $[24] = t3;
        $[25] = t5;
        $[26] = t7;
        $[27] = t9;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const links = t18;
    let t19;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/dashboard",
            className: "flex items-center gap-3 px-4 py-3 rounded-lg transition text-gray-700 hover:bg-gray-50 mb-4 border-b border-gray-200 pb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
                    lineNumber: 164,
                    columnNumber: 169
                }, this),
                "Back to Home"
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== links || $[31] !== pathname) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "p-4 space-y-2 flex-1 overflow-y-auto",
            children: [
                t19,
                links.map({
                    "WorkspaceSidebar[links.map()]": (link)=>{
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-3 rounded-lg transition", isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 217
                                }, this),
                                link.label,
                                link.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs px-2 py-0.5 rounded-full font-medium", link.badge === "LIVE" ? "bg-green-100 text-green-700" : link.badge === "NEW" ? "bg-purple-100 text-purple-700" : "bg-orange-100 text-orange-700"),
                                    children: link.badge
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 272
                                }, this)
                            ]
                        }, link.href, true, {
                            fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
                            lineNumber: 175,
                            columnNumber: 18
                        }, this);
                    }
                }["WorkspaceSidebar[links.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[30] = links;
        $[31] = pathname;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== handleLogout) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-gray-200 mt-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLogout,
                className: "flex items-center gap-3 px-4 py-3 rounded-lg transition text-red-600 hover:bg-red-50 w-full",
                children: [
                    t21,
                    "Logout"
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
                lineNumber: 193,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[34] = handleLogout;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] !== t20 || $[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] hidden md:flex md:flex-col fixed top-16 left-0 z-20",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/workspace/WorkspaceSidebar.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    return t23;
}
_s(WorkspaceSidebar, "GGrONMuCd3PqMQkPlSqqHHhPDVY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = WorkspaceSidebar;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/WorkspaceMobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceMobileMenu",
    ()=>WorkspaceMobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
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
function WorkspaceMobileMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "1a4bc8fa96712bfb5eab2fda45b3e425d21427cc4a172d547b6ccbfbc5181be8") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a4bc8fa96712bfb5eab2fda45b3e425d21427cc4a172d547b6ccbfbc5181be8";
    }
    const { workspaceId } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t1;
    if ($[1] !== logout || $[2] !== router) {
        t1 = ({
            "WorkspaceMobileMenu[handleLogout]": ()=>{
                logout();
                setIsOpen(false);
                router.push("/login");
            }
        })["WorkspaceMobileMenu[handleLogout]"];
        $[1] = logout;
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleLogout = t1;
    const t2 = `/workspace/${workspaceId}`;
    let t3;
    if ($[4] !== t2) {
        t3 = {
            href: t2,
            label: "Overview",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `/workspace/${workspaceId}/tasks`;
    let t5;
    if ($[6] !== t4) {
        t5 = {
            href: t4,
            label: "Tasks",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
        };
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = `/workspace/${workspaceId}/milestones`;
    let t7;
    if ($[8] !== t6) {
        t7 = {
            href: t6,
            label: "Milestones",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
        };
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = `/workspace/${workspaceId}/team`;
    let t9;
    if ($[10] !== t8) {
        t9 = {
            href: t8,
            label: "Team",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        };
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `/workspace/${workspaceId}/chat`;
    let t11;
    if ($[12] !== t10) {
        t11 = {
            href: t10,
            label: "Chat",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
            badge: "LIVE"
        };
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const t12 = `/workspace/${workspaceId}/feedback`;
    let t13;
    if ($[14] !== t12) {
        t13 = {
            href: t12,
            label: "Feedback",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
        };
        $[14] = t12;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const t14 = `/workspace/${workspaceId}/analytics`;
    let t15;
    if ($[16] !== t14) {
        t15 = {
            href: t14,
            label: "Analytics",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        };
        $[16] = t14;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    const t16 = `/workspace/${workspaceId}/insights`;
    let t17;
    if ($[18] !== t16) {
        t17 = {
            href: t16,
            label: "AI Insights",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            badge: "NEW"
        };
        $[18] = t16;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t11 || $[21] !== t13 || $[22] !== t15 || $[23] !== t17 || $[24] !== t3 || $[25] !== t5 || $[26] !== t7 || $[27] !== t9) {
        t18 = [
            t3,
            t5,
            t7,
            t9,
            t11,
            t13,
            t15,
            t17
        ];
        $[20] = t11;
        $[21] = t13;
        $[22] = t15;
        $[23] = t17;
        $[24] = t3;
        $[25] = t5;
        $[26] = t7;
        $[27] = t9;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const links = t18;
    let t19;
    if ($[29] !== isOpen) {
        t19 = ({
            "WorkspaceMobileMenu[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["WorkspaceMobileMenu[<button>.onClick]"];
        $[29] = isOpen;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== isOpen) {
        t20 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-6 h-6 text-gray-700"
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
            lineNumber: 177,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "w-6 h-6 text-gray-700"
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
            lineNumber: 177,
            columnNumber: 62
        }, this);
        $[31] = isOpen;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t19 || $[34] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t19,
            className: "md:hidden p-2 rounded-lg hover:bg-gray-100 transition",
            "aria-label": "Toggle menu",
            children: t20
        }, void 0, false, {
            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[33] = t19;
        $[34] = t20;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== handleLogout || $[37] !== isOpen || $[38] !== links || $[39] !== pathname) {
        t22 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
                    onClick: {
                        "WorkspaceMobileMenu[<div>.onClick]": ()=>setIsOpen(false)
                    }["WorkspaceMobileMenu[<div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                    lineNumber: 194,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-0 left-0 right-0 bottom-0 bg-white z-50 md:hidden overflow-y-auto flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600",
                                            children: "Startup"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                            lineNumber: 196,
                                            columnNumber: 273
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900",
                                            children: "Ops"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                            lineNumber: 196,
                                            columnNumber: 319
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                    lineNumber: 196,
                                    columnNumber: 237
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "WorkspaceMobileMenu[<button>.onClick]": ()=>setIsOpen(false)
                                    }["WorkspaceMobileMenu[<button>.onClick]"],
                                    className: "p-2 rounded-lg hover:bg-gray-100 transition",
                                    "aria-label": "Close menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                        lineNumber: 198,
                                        columnNumber: 135
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                    lineNumber: 196,
                                    columnNumber: 368
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                            lineNumber: 196,
                            columnNumber: 157
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "p-4 space-y-2 flex-1 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    onClick: {
                                        "WorkspaceMobileMenu[<Link>.onClick]": ()=>setIsOpen(false)
                                    }["WorkspaceMobileMenu[<Link>.onClick]"],
                                    className: "flex items-center gap-3 px-4 py-3 rounded-lg transition text-gray-700 hover:bg-gray-50 mb-4 border-b border-gray-200 pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                            lineNumber: 200,
                                            columnNumber: 187
                                        }, this),
                                        "Back to Home"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                    lineNumber: 198,
                                    columnNumber: 243
                                }, this),
                                links.map({
                                    "WorkspaceMobileMenu[links.map()]": (link)=>{
                                        const Icon = link.icon;
                                        const isActive = pathname === link.href;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            onClick: {
                                                "WorkspaceMobileMenu[links.map() > <Link>.onClick]": ()=>setIsOpen(false)
                                            }["WorkspaceMobileMenu[links.map() > <Link>.onClick]"],
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-3 rounded-lg transition", isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 231
                                                }, this),
                                                link.label,
                                                link.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs px-2 py-0.5 rounded-full font-medium", link.badge === "LIVE" ? "bg-green-100 text-green-700" : link.badge === "NEW" ? "bg-purple-100 text-purple-700" : "bg-orange-100 text-orange-700"),
                                                    children: link.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 286
                                                }, this)
                                            ]
                                        }, link.href, true, {
                                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                            lineNumber: 204,
                                            columnNumber: 22
                                        }, this);
                                    }
                                }["WorkspaceMobileMenu[links.map()]"])
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                            lineNumber: 198,
                            columnNumber: 189
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "flex items-center gap-3 px-4 py-3 rounded-lg transition text-red-600 hover:bg-red-50 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                        lineNumber: 208,
                                        columnNumber: 237
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                                lineNumber: 208,
                                columnNumber: 102
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                            lineNumber: 208,
                            columnNumber: 56
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/workspace/WorkspaceMobileMenu.tsx",
                    lineNumber: 196,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true);
        $[36] = handleLogout;
        $[37] = isOpen;
        $[38] = links;
        $[39] = pathname;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== t21 || $[42] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t21,
                t22
            ]
        }, void 0, true);
        $[41] = t21;
        $[42] = t22;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    return t23;
}
_s(WorkspaceMobileMenu, "PICIVC935WAfm1WyrToUvsKW/9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = WorkspaceMobileMenu;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceMobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0.8t.1q._.js.map