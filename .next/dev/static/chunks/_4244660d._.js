(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/ProjectContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTypes",
    ()=>ActionTypes,
    "ProjectProvider",
    ()=>ProjectProvider,
    "useProjectContext",
    ()=>useProjectContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Initial state structure
const initialState = {
    projects: [
        {
            id: 'p1',
            name: 'To Do',
            tasks: [
                {
                    id: 't1',
                    title: 'Setup project structure',
                    description: 'Create folders and files'
                },
                {
                    id: 't2',
                    title: 'Design database schema',
                    description: 'Plan the data model'
                }
            ]
        },
        {
            id: 'p2',
            name: 'In Progress',
            tasks: [
                {
                    id: 't3',
                    title: 'Implement authentication',
                    description: 'Add user login functionality'
                }
            ]
        },
        {
            id: 'p3',
            name: 'Done',
            tasks: [
                {
                    id: 't4',
                    title: 'Setup development environment',
                    description: 'Install dependencies'
                }
            ]
        }
    ]
};
const ActionTypes = {
    LOAD_STATE: 'LOAD_STATE',
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    MOVE_TASK: 'MOVE_TASK'
};
// Reducer function
function projectReducer(state, action) {
    switch(action.type){
        case ActionTypes.LOAD_STATE:
            return action.payload;
        case ActionTypes.ADD_TASK:
            {
                const { projectId, task } = action.payload;
                return {
                    ...state,
                    projects: state.projects.map((project)=>project.id === projectId ? {
                            ...project,
                            tasks: [
                                ...project.tasks,
                                task
                            ]
                        } : project)
                };
            }
        case ActionTypes.DELETE_TASK:
            {
                const { projectId, taskId } = action.payload;
                return {
                    ...state,
                    projects: state.projects.map((project)=>project.id === projectId ? {
                            ...project,
                            tasks: project.tasks.filter((task)=>task.id !== taskId)
                        } : project)
                };
            }
        case ActionTypes.MOVE_TASK:
            {
                const { sourceProjectId, targetProjectId, taskId } = action.payload;
                const sourceProject = state.projects.find((p)=>p.id === sourceProjectId);
                const task = sourceProject?.tasks.find((t)=>t.id === taskId);
                if (!task) return state;
                return {
                    ...state,
                    projects: state.projects.map((project)=>{
                        if (project.id === sourceProjectId) {
                            return {
                                ...project,
                                tasks: project.tasks.filter((t)=>t.id !== taskId)
                            };
                        }
                        if (project.id === targetProjectId) {
                            return {
                                ...project,
                                tasks: [
                                    ...project.tasks,
                                    task
                                ]
                            };
                        }
                        return project;
                    })
                };
            }
        default:
            return state;
    }
}
// Create Context
const ProjectContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ProjectProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "5c476f94ccfc4508838446889817c05ae1df2d11cc1ef837f5340e9e46c811b1") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c476f94ccfc4508838446889817c05ae1df2d11cc1ef837f5340e9e46c811b1";
    }
    const { children } = t0;
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(projectReducer, initialState);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProjectProvider[useEffect()]": ()=>{
                const savedState = localStorage.getItem("projectBoardState");
                if (savedState) {
                    ;
                    try {
                        const parsedState = JSON.parse(savedState);
                        dispatch({
                            type: ActionTypes.LOAD_STATE,
                            payload: parsedState
                        });
                    } catch (t3) {
                        const error = t3;
                        console.error("Error loading state from LocalStorage:", error);
                    }
                }
            }
        })["ProjectProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] !== state) {
        t3 = ({
            "ProjectProvider[useEffect()]": ()=>{
                localStorage.setItem("projectBoardState", JSON.stringify(state));
            }
        })["ProjectProvider[useEffect()]"];
        t4 = [
            state
        ];
        $[3] = state;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== state) {
        t5 = {
            state,
            dispatch
        };
        $[6] = state;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== children || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContext.Provider, {
            value: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/ProjectContext.js",
            lineNumber: 189,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_s(ProjectProvider, "GUSXxL/WUElrtHc/X73NyHNRMdw=");
_c = ProjectProvider;
function useProjectContext() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "5c476f94ccfc4508838446889817c05ae1df2d11cc1ef837f5340e9e46c811b1") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c476f94ccfc4508838446889817c05ae1df2d11cc1ef837f5340e9e46c811b1";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProjectContext);
    if (!context) {
        throw new Error("useProjectContext must be used within a ProjectProvider");
    }
    return context;
}
_s1(useProjectContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ProjectProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useProjectManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProjectManager",
    ()=>useProjectManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ProjectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ProjectContext.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useProjectManager() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "a23643c340ba380f1f84f2af2dfba982dc27d396a59c2757d3453a3950a5db59") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a23643c340ba380f1f84f2af2dfba982dc27d396a59c2757d3453a3950a5db59";
    }
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ProjectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectContext"])();
    let t0;
    if ($[1] !== dispatch) {
        t0 = ({
            "useProjectManager[addTask]": (projectId, title, t1)=>{
                const description = t1 === undefined ? "" : t1;
                if (!title.trim()) {
                    throw new Error("Task title cannot be empty");
                }
                const newTask = {
                    id: `t${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    title: title.trim(),
                    description: description.trim()
                };
                dispatch({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ProjectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].ADD_TASK,
                    payload: {
                        projectId,
                        task: newTask
                    }
                });
            }
        })["useProjectManager[addTask]"];
        $[1] = dispatch;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const addTask = t0;
    let t1;
    if ($[3] !== dispatch) {
        t1 = ({
            "useProjectManager[deleteTask]": (projectId_0, taskId)=>{
                dispatch({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ProjectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].DELETE_TASK,
                    payload: {
                        projectId: projectId_0,
                        taskId
                    }
                });
            }
        })["useProjectManager[deleteTask]"];
        $[3] = dispatch;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const deleteTask = t1;
    let t2;
    if ($[5] !== dispatch) {
        t2 = ({
            "useProjectManager[moveTask]": (sourceProjectId, targetProjectId, taskId_0)=>{
                if (sourceProjectId === targetProjectId) {
                    return;
                }
                dispatch({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ProjectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].MOVE_TASK,
                    payload: {
                        sourceProjectId,
                        targetProjectId,
                        taskId: taskId_0
                    }
                });
            }
        })["useProjectManager[moveTask]"];
        $[5] = dispatch;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const moveTask = t2;
    let t3;
    if ($[7] !== state.projects) {
        t3 = ({
            "useProjectManager[getProjects]": ()=>state.projects
        })["useProjectManager[getProjects]"];
        $[7] = state.projects;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const getProjects = t3;
    let t4;
    if ($[9] !== state.projects) {
        t4 = ({
            "useProjectManager[getProject]": (projectId_1)=>state.projects.find({
                    "useProjectManager[getProject > state.projects.find()]": (project)=>project.id === projectId_1
                }["useProjectManager[getProject > state.projects.find()]"]) || null
        })["useProjectManager[getProject]"];
        $[9] = state.projects;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const getProject = t4;
    let t5;
    if ($[11] !== addTask || $[12] !== deleteTask || $[13] !== getProject || $[14] !== getProjects || $[15] !== moveTask || $[16] !== state.projects) {
        t5 = {
            projects: state.projects,
            addTask,
            deleteTask,
            moveTask,
            getProjects,
            getProject
        };
        $[11] = addTask;
        $[12] = deleteTask;
        $[13] = getProject;
        $[14] = getProjects;
        $[15] = moveTask;
        $[16] = state.projects;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s(useProjectManager, "4lMyru2IJOMqTqxoNlQD5O01Bzg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ProjectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Task.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Task
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Task Component - Displays an individual task
 * This is a presentational component that receives props and calls callbacks
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function Task(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "039de2b10c5ebb6d338577342d16a837824ba2430a11de69f27dd83bb5a13d67") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "039de2b10c5ebb6d338577342d16a837824ba2430a11de69f27dd83bb5a13d67";
    }
    const { task, onDelete, projectId } = t0;
    let t1;
    if ($[1] !== onDelete || $[2] !== projectId || $[3] !== task.id || $[4] !== task.title) {
        t1 = ({
            "Task[handleDelete]": ()=>{
                if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
                    onDelete(projectId, task.id);
                }
            }
        })["Task[handleDelete]"];
        $[1] = onDelete;
        $[2] = projectId;
        $[3] = task.id;
        $[4] = task.title;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleDelete = t1;
    let t2;
    if ($[6] !== task.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex-1",
            children: task.title
        }, void 0, false, {
            fileName: "[project]/src/components/Task.js",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = task.title;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const t3 = `Delete task ${task.title}`;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/src/components/Task.js",
                lineNumber: 50,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Task.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== handleDelete || $[10] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleDelete,
            className: "ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors",
            "aria-label": t3,
            title: "Delete task",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/Task.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[9] = handleDelete;
        $[10] = t3;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t2 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start mb-2",
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.js",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== task.description) {
        t7 = task.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-zinc-600 dark:text-zinc-400 mt-2",
            children: task.description
        }, void 0, false, {
            fileName: "[project]/src/components/Task.js",
            lineNumber: 75,
            columnNumber: 30
        }, this);
        $[15] = task.description;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t6 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 p-4 mb-3 hover:shadow-md transition-shadow",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.js",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_c = Task;
var _c;
__turbopack_context__.k.register(_c, "Task");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Column.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Column
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Task.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Column(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "ea7a7bef468fccfc1dc553aa8e77abd0aa18e22b5c478603cefe6512e5aee9f1") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea7a7bef468fccfc1dc553aa8e77abd0aa18e22b5c478603cefe6512e5aee9f1";
    }
    const { project, onAddTask, onDeleteTask } = t0;
    const [isAddingTask, setIsAddingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [taskTitle, setTaskTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [taskDescription, setTaskDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== onAddTask || $[2] !== project.id || $[3] !== taskDescription || $[4] !== taskTitle) {
        t1 = ({
            "Column[handleSubmit]": (e)=>{
                e.preventDefault();
                if (taskTitle.trim()) {
                    onAddTask(project.id, taskTitle, taskDescription);
                    setTaskTitle("");
                    setTaskDescription("");
                    setIsAddingTask(false);
                }
            }
        })["Column[handleSubmit]"];
        $[1] = onAddTask;
        $[2] = project.id;
        $[3] = taskDescription;
        $[4] = taskTitle;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleSubmit = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Column[handleCancel]": ()=>{
                setTaskTitle("");
                setTaskDescription("");
                setIsAddingTask(false);
            }
        })["Column[handleCancel]"];
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleCancel = t2;
    let t3;
    if ($[7] !== project.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4",
            children: project.name
        }, void 0, false, {
            fileName: "[project]/src/components/Column.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = project.name;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== onDeleteTask || $[10] !== project.id || $[11] !== project.tasks) {
        let t5;
        if ($[13] !== onDeleteTask || $[14] !== project.id) {
            t5 = ({
                "Column[project.tasks.map()]": (task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        task: task,
                        projectId: project.id,
                        onDelete: onDeleteTask
                    }, task.id, false, {
                        fileName: "[project]/src/components/Column.js",
                        lineNumber: 76,
                        columnNumber: 48
                    }, this)
            })["Column[project.tasks.map()]"];
            $[13] = onDeleteTask;
            $[14] = project.id;
            $[15] = t5;
        } else {
            t5 = $[15];
        }
        t4 = project.tasks.map(t5);
        $[9] = onDeleteTask;
        $[10] = project.id;
        $[11] = project.tasks;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/Column.js",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== handleSubmit || $[19] !== isAddingTask || $[20] !== taskDescription || $[21] !== taskTitle) {
        t6 = isAddingTask ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-white dark:bg-zinc-800 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: taskTitle,
                    onChange: {
                        "Column[<input>.onChange]": (e_0)=>setTaskTitle(e_0.target.value)
                    }["Column[<input>.onChange]"],
                    placeholder: "Task title",
                    className: "w-full px-3 py-2 mb-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    autoFocus: true,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Column.js",
                    lineNumber: 102,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: taskDescription,
                    onChange: {
                        "Column[<textarea>.onChange]": (e_1)=>setTaskDescription(e_1.target.value)
                    }["Column[<textarea>.onChange]"],
                    placeholder: "Task description (optional)",
                    rows: "2",
                    className: "w-full px-3 py-2 mb-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/Column.js",
                    lineNumber: 104,
                    columnNumber: 345
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors font-medium",
                            children: "Add Task"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Column.js",
                            lineNumber: 106,
                            columnNumber: 381
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "px-4 py-2 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-md transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Column.js",
                            lineNumber: 106,
                            columnNumber: 531
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Column.js",
                    lineNumber: 106,
                    columnNumber: 353
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Column.js",
            lineNumber: 102,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "Column[<button>.onClick]": ()=>setIsAddingTask(true)
            }["Column[<button>.onClick]"],
            className: "w-full py-2 px-4 border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-lg text-zinc-600 dark:text-zinc-400 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium",
            children: "+ Add Task"
        }, void 0, false, {
            fileName: "[project]/src/components/Column.js",
            lineNumber: 106,
            columnNumber: 761
        }, this);
        $[18] = handleSubmit;
        $[19] = isAddingTask;
        $[20] = taskDescription;
        $[21] = taskTitle;
        $[22] = t6;
    } else {
        t6 = $[22];
    }
    let t7;
    if ($[23] !== t3 || $[24] !== t5 || $[25] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-[280px] bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 mx-2",
            children: [
                t3,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Column.js",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[23] = t3;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    return t7;
}
_s(Column, "Kt8V5lYQQ02lCIlFrDJFnh0UZ90=");
_c = Column;
var _c;
__turbopack_context__.k.register(_c, "Column");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/App.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjectManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProjectManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Column.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function App() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "511c2ee7b2847b7a1312c24d83092423ed06fee1961769b01102fafe50bfb388") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "511c2ee7b2847b7a1312c24d83092423ed06fee1961769b01102fafe50bfb388";
    }
    const { projects, addTask, deleteTask } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjectManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectManager"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "mb-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2",
                    children: "Project Board"
                }, void 0, false, {
                    fileName: "[project]/src/components/App.js",
                    lineNumber: 26,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 dark:text-zinc-400",
                    children: "Manage your tasks across different columns"
                }, void 0, false, {
                    fileName: "[project]/src/components/App.js",
                    lineNumber: 26,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/App.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== addTask || $[3] !== deleteTask || $[4] !== projects) {
        let t2;
        if ($[6] !== addTask || $[7] !== deleteTask) {
            t2 = ({
                "App[projects.map()]": (project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: project,
                        onAddTask: addTask,
                        onDeleteTask: deleteTask
                    }, project.id, false, {
                        fileName: "[project]/src/components/App.js",
                        lineNumber: 36,
                        columnNumber: 43
                    }, this)
            })["App[projects.map()]"];
            $[6] = addTask;
            $[7] = deleteTask;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        t1 = projects.map(t2);
        $[2] = addTask;
        $[3] = deleteTask;
        $[4] = projects;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-zinc-50 dark:bg-black py-8 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 justify-center",
                        children: t1
                    }, void 0, false, {
                        fileName: "[project]/src/components/App.js",
                        lineNumber: 54,
                        columnNumber: 114
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/App.js",
                lineNumber: 54,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/App.js",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_s(App, "jl5hzBotZwtGjSp3J7PfUI8cncY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjectManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectManager"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_4244660d._.js.map