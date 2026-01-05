(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/StepperContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepperProvider",
    ()=>StepperProvider,
    "useStepperContext",
    ()=>useStepperContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * StepperContext - Manages stepper state without prop drilling
 * Provides:
 * - Current active step
 * - Navigation functions (next, previous, goTo)
 * - Step validation state
 * - Total step count
 */ const StepperContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useStepperContext() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "a256c5cef0cdae48ec31ff4ca49e648dc8631ecb4dcf3b171a209834bdf54b88") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a256c5cef0cdae48ec31ff4ca49e648dc8631ecb4dcf3b171a209834bdf54b88";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StepperContext);
    if (!context) {
        throw new Error("Stepper components must be used within a Stepper provider");
    }
    return context;
}
_s(useStepperContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function StepperProvider(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "a256c5cef0cdae48ec31ff4ca49e648dc8631ecb4dcf3b171a209834bdf54b88") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a256c5cef0cdae48ec31ff4ca49e648dc8631ecb4dcf3b171a209834bdf54b88";
    }
    const { children, initialStep: t1, onStepChange, onComplete } = t0;
    const initialStep = t1 === undefined ? 0 : t1;
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStep);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const [stepStates, setStepStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {};
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const [stepValidations, setStepValidations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [totalSteps, setTotalSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "StepperProvider[registerStep]": (stepId)=>{
                setTotalSteps({
                    "StepperProvider[registerStep > setTotalSteps()]": (prev)=>{
                        const newTotal = Math.max(prev, stepId + 1);
                        return newTotal;
                    }
                }["StepperProvider[registerStep > setTotalSteps()]"]);
            }
        })["StepperProvider[registerStep]"];
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const registerStep = t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "StepperProvider[updateStepState]": (stepId_0, state)=>{
                setStepStates({
                    "StepperProvider[updateStepState > setStepStates()]": (prev_0)=>({
                            ...prev_0,
                            [stepId_0]: {
                                ...prev_0[stepId_0],
                                ...state
                            }
                        })
                }["StepperProvider[updateStepState > setStepStates()]"]);
            }
        })["StepperProvider[updateStepState]"];
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    const updateStepState = t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "StepperProvider[setStepValid]": (stepId_1, isValid)=>{
                setStepValidations({
                    "StepperProvider[setStepValid > setStepValidations()]": (prev_1)=>({
                            ...prev_1,
                            [stepId_1]: isValid
                        })
                }["StepperProvider[setStepValid > setStepValidations()]"]);
            }
        })["StepperProvider[setStepValid]"];
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    const setStepValid = t6;
    let t7;
    if ($[6] !== onStepChange) {
        t7 = ({
            "StepperProvider[nextStep]": ()=>{
                setActiveStep({
                    "StepperProvider[nextStep > setActiveStep()]": (prev_2)=>{
                        const next = prev_2 + 1;
                        if (onStepChange) {
                            onStepChange(next, prev_2);
                        }
                        return next;
                    }
                }["StepperProvider[nextStep > setActiveStep()]"]);
            }
        })["StepperProvider[nextStep]"];
        $[6] = onStepChange;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const nextStep = t7;
    let t8;
    if ($[8] !== onStepChange) {
        t8 = ({
            "StepperProvider[previousStep]": ()=>{
                setActiveStep({
                    "StepperProvider[previousStep > setActiveStep()]": (prev_3)=>{
                        if (prev_3 > 0) {
                            const next_0 = prev_3 - 1;
                            if (onStepChange) {
                                onStepChange(next_0, prev_3);
                            }
                            return next_0;
                        }
                        return prev_3;
                    }
                }["StepperProvider[previousStep > setActiveStep()]"]);
            }
        })["StepperProvider[previousStep]"];
        $[8] = onStepChange;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const previousStep = t8;
    let t9;
    if ($[10] !== onStepChange || $[11] !== totalSteps) {
        t9 = ({
            "StepperProvider[goToStep]": (stepIndex)=>{
                setActiveStep({
                    "StepperProvider[goToStep > setActiveStep()]": (prev_4)=>{
                        if (stepIndex >= 0 && stepIndex < totalSteps) {
                            if (onStepChange) {
                                onStepChange(stepIndex, prev_4);
                            }
                            return stepIndex;
                        }
                        return prev_4;
                    }
                }["StepperProvider[goToStep > setActiveStep()]"]);
            }
        })["StepperProvider[goToStep]"];
        $[10] = onStepChange;
        $[11] = totalSteps;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const goToStep = t9;
    let t10;
    if ($[13] !== activeStep || $[14] !== totalSteps) {
        t10 = ({
            "StepperProvider[canGoNext]": ()=>activeStep < totalSteps - 1
        })["StepperProvider[canGoNext]"];
        $[13] = activeStep;
        $[14] = totalSteps;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const canGoNext = t10;
    let t11;
    if ($[16] !== activeStep) {
        t11 = ({
            "StepperProvider[canGoPrevious]": ()=>activeStep > 0
        })["StepperProvider[canGoPrevious]"];
        $[16] = activeStep;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    const canGoPrevious = t11;
    let t12;
    if ($[18] !== activeStep || $[19] !== stepValidations) {
        t12 = ({
            "StepperProvider[isCurrentStepValid]": ()=>stepValidations[activeStep] !== false
        })["StepperProvider[isCurrentStepValid]"];
        $[18] = activeStep;
        $[19] = stepValidations;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    const isCurrentStepValid = t12;
    let t13;
    if ($[21] !== onComplete || $[22] !== stepStates) {
        t13 = ({
            "StepperProvider[complete]": ()=>{
                if (onComplete) {
                    onComplete(stepStates);
                }
            }
        })["StepperProvider[complete]"];
        $[21] = onComplete;
        $[22] = stepStates;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const complete = t13;
    let t14;
    if ($[24] !== activeStep || $[25] !== canGoNext || $[26] !== canGoPrevious || $[27] !== complete || $[28] !== goToStep || $[29] !== isCurrentStepValid || $[30] !== nextStep || $[31] !== previousStep || $[32] !== stepStates || $[33] !== stepValidations || $[34] !== totalSteps) {
        t14 = {
            activeStep,
            totalSteps,
            stepStates,
            stepValidations,
            registerStep,
            updateStepState,
            setStepValid,
            nextStep,
            previousStep,
            goToStep,
            canGoNext,
            canGoPrevious,
            isCurrentStepValid,
            complete
        };
        $[24] = activeStep;
        $[25] = canGoNext;
        $[26] = canGoPrevious;
        $[27] = complete;
        $[28] = goToStep;
        $[29] = isCurrentStepValid;
        $[30] = nextStep;
        $[31] = previousStep;
        $[32] = stepStates;
        $[33] = stepValidations;
        $[34] = totalSteps;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    const value = t14;
    let t15;
    if ($[36] !== children || $[37] !== value) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepperContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/StepperContext.js",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[36] = children;
        $[37] = value;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    return t15;
}
_s1(StepperProvider, "TB+o4eK72QrXpguPc81KONubI1E=");
_c = StepperProvider;
var _c;
__turbopack_context__.k.register(_c, "StepperProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Stepper/Stepper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/StepperContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
function StepperKeyboardHandler(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { children, orientation: t1, className: t2 } = t0;
    const orientation = t1 === undefined ? "horizontal" : t1;
    const className = t2 === undefined ? "" : t2;
    const { activeStep, nextStep, previousStep, goToStep, totalSteps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"])();
    const stepperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    let t4;
    if ($[1] !== activeStep || $[2] !== goToStep || $[3] !== nextStep || $[4] !== previousStep || $[5] !== totalSteps) {
        t3 = ({
            "StepperKeyboardHandler[useEffect()]": ()=>{
                const handleKeyDown = {
                    "StepperKeyboardHandler[useEffect() > handleKeyDown]": (event)=>{
                        if (!stepperRef.current?.contains(document.activeElement)) {
                            return;
                        }
                        bb21: switch(event.key){
                            case "ArrowRight":
                            case "ArrowDown":
                                {
                                    event.preventDefault();
                                    if (activeStep < totalSteps - 1) {
                                        nextStep();
                                    }
                                    break bb21;
                                }
                            case "ArrowLeft":
                            case "ArrowUp":
                                {
                                    event.preventDefault();
                                    if (activeStep > 0) {
                                        previousStep();
                                    }
                                    break bb21;
                                }
                            case "Home":
                                {
                                    event.preventDefault();
                                    goToStep(0);
                                    break bb21;
                                }
                            case "End":
                                {
                                    event.preventDefault();
                                    goToStep(totalSteps - 1);
                                    break bb21;
                                }
                            default:
                        }
                    }
                }["StepperKeyboardHandler[useEffect() > handleKeyDown]"];
                document.addEventListener("keydown", handleKeyDown);
                return ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                };
            }
        })["StepperKeyboardHandler[useEffect()]"];
        t4 = [
            activeStep,
            totalSteps,
            nextStep,
            previousStep,
            goToStep
        ];
        $[1] = activeStep;
        $[2] = goToStep;
        $[3] = nextStep;
        $[4] = previousStep;
        $[5] = totalSteps;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = `stepper stepper-${orientation} ${className}`;
    let t6;
    if ($[8] !== children || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: stepperRef,
            role: "group",
            "aria-label": "Stepper",
            className: t5,
            tabIndex: 0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 96,
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
_s(StepperKeyboardHandler, "/dS6mX/jVTNCH3HBTHTWmZRi/Hg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"]
    ];
});
_c = StepperKeyboardHandler;
function StepperComponent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { children, initialStep: t1, onStepChange, onComplete, className: t2, orientation: t3 } = t0;
    const initialStep = t1 === undefined ? 0 : t1;
    const className = t2 === undefined ? "" : t2;
    const orientation = t3 === undefined ? "horizontal" : t3;
    let t4;
    if ($[1] !== children || $[2] !== className || $[3] !== orientation) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepperKeyboardHandler, {
            orientation: orientation,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = className;
        $[3] = orientation;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== initialStep || $[6] !== onComplete || $[7] !== onStepChange || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepperProvider"], {
            initialStep: initialStep,
            onStepChange: onStepChange,
            onComplete: onComplete,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[5] = initialStep;
        $[6] = onComplete;
        $[7] = onStepChange;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_c1 = StepperComponent;
// Internal component that uses context (must be inside StepperProvider)
function StepperSteps(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const { registerStep } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t2;
    let t3;
    if ($[1] !== children || $[2] !== registerStep) {
        t2 = ({
            "StepperSteps[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, {
                    "StepperSteps[useEffect() > React.Children.forEach()]": (child, index)=>{
                        if (child && child.props.stepId !== undefined) {
                            registerStep(child.props.stepId);
                        }
                    }
                }["StepperSteps[useEffect() > React.Children.forEach()]"]);
            }
        })["StepperSteps[useEffect()]"];
        t3 = [
            children,
            registerStep
        ];
        $[1] = children;
        $[2] = registerStep;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = `stepper-steps ${className}`;
    let t5;
    if ($[5] !== children || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            role: "list",
            "aria-label": "Steps",
            className: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s1(StepperSteps, "Vi1EEmwoLMVvHrB+/ugEvA0+IZs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = StepperSteps;
function StepperStep(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { stepId, children, label, description, className: t1, renderLabel, renderDescription } = t0;
    const className = t1 === undefined ? "" : t1;
    const { activeStep, goToStep, stepValidations, registerStep } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"])();
    const stepRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isActive = activeStep === stepId;
    const isCompleted = activeStep > stepId;
    const isValid = stepValidations[stepId] !== false;
    const stepIndex = stepId;
    let t2;
    let t3;
    if ($[1] !== registerStep || $[2] !== stepId) {
        t2 = ({
            "StepperStep[useEffect()]": ()=>{
                registerStep(stepId);
            }
        })["StepperStep[useEffect()]"];
        t3 = [
            stepId,
            registerStep
        ];
        $[1] = registerStep;
        $[2] = stepId;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== goToStep || $[6] !== stepId) {
        t4 = ({
            "StepperStep[handleClick]": ()=>{
                goToStep(stepId);
            }
        })["StepperStep[handleClick]"];
        $[5] = goToStep;
        $[6] = stepId;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleClick = t4;
    let t5;
    if ($[8] !== goToStep || $[9] !== stepId) {
        t5 = ({
            "StepperStep[handleKeyDown]": (event)=>{
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goToStep(stepId);
                }
            }
        })["StepperStep[handleKeyDown]"];
        $[8] = goToStep;
        $[9] = stepId;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleKeyDown = t5;
    let t6;
    if ($[11] !== children || $[12] !== isActive || $[13] !== isCompleted || $[14] !== isValid || $[15] !== label || $[16] !== renderLabel || $[17] !== stepIndex) {
        t6 = renderLabel ? renderLabel({
            isActive,
            isCompleted,
            isValid,
            stepIndex
        }) : label || children;
        $[11] = children;
        $[12] = isActive;
        $[13] = isCompleted;
        $[14] = isValid;
        $[15] = label;
        $[16] = renderLabel;
        $[17] = stepIndex;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const stepLabel = t6;
    let t7;
    if ($[19] !== description || $[20] !== isActive || $[21] !== isCompleted || $[22] !== isValid || $[23] !== renderDescription || $[24] !== stepIndex) {
        t7 = renderDescription ? renderDescription({
            isActive,
            isCompleted,
            isValid,
            stepIndex
        }) : description;
        $[19] = description;
        $[20] = isActive;
        $[21] = isCompleted;
        $[22] = isValid;
        $[23] = renderDescription;
        $[24] = stepIndex;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    const stepDescription = t7;
    const t8 = `stepper-step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""} ${!isValid ? "invalid" : ""} ${className}`;
    const t9 = isActive ? "step" : undefined;
    const t10 = `Step ${stepIndex + 1}: ${stepLabel}`;
    const t11 = isActive || isCompleted ? 0 : -1;
    let t12;
    if ($[26] !== isCompleted || $[27] !== stepIndex) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stepper-step-indicator",
            "aria-hidden": "true",
            children: isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "stepper-check-icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5 13l4 4L19 7"
                }, void 0, false, {
                    fileName: "[project]/src/components/Stepper/Stepper.js",
                    lineNumber: 325,
                    columnNumber: 176
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 325,
                columnNumber: 86
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stepper-step-number",
                children: stepIndex + 1
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 325,
                columnNumber: 273
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[26] = isCompleted;
        $[27] = stepIndex;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== stepLabel) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stepper-step-label",
            children: stepLabel
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[29] = stepLabel;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== stepDescription) {
        t14 = stepDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stepper-step-description",
            children: stepDescription
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 342,
            columnNumber: 30
        }, this);
        $[31] = stepDescription;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== handleClick || $[34] !== handleKeyDown || $[35] !== t10 || $[36] !== t11 || $[37] !== t12 || $[38] !== t13 || $[39] !== t14 || $[40] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleClick,
            onKeyDown: handleKeyDown,
            "aria-current": t9,
            "aria-label": t10,
            "aria-disabled": false,
            tabIndex: t11,
            className: "stepper-step-button",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[33] = handleClick;
        $[34] = handleKeyDown;
        $[35] = t10;
        $[36] = t11;
        $[37] = t12;
        $[38] = t13;
        $[39] = t14;
        $[40] = t9;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    let t16;
    if ($[42] !== t15 || $[43] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            ref: stepRef,
            role: "listitem",
            className: t8,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t8;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    return t16;
}
_s2(StepperStep, "qBUrnoZkd60pdWnhj3x43CSfjS8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"]
    ];
});
_c3 = StepperStep;
function StepperContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `stepper-content ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "region",
            "aria-live": "polite",
            "aria-atomic": "true",
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 390,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c4 = StepperContent;
function StepperStepContent(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { stepId, children, className: t1, render } = t0;
    const className = t1 === undefined ? "" : t1;
    const { activeStep, stepStates, updateStepState, setStepValid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"])();
    const isActive = activeStep === stepId;
    if (!isActive) {
        return null;
    }
    if (render) {
        const t2 = `step-content-${stepId}`;
        const t3 = `step-${stepId}`;
        const t4 = `stepper-step-content ${className}`;
        let t5;
        if ($[1] !== render || $[2] !== setStepValid || $[3] !== stepId || $[4] !== stepStates || $[5] !== updateStepState) {
            let t6;
            if ($[7] !== stepId || $[8] !== updateStepState) {
                t6 = (state)=>updateStepState(stepId, state);
                $[7] = stepId;
                $[8] = updateStepState;
                $[9] = t6;
            } else {
                t6 = $[9];
            }
            let t7;
            if ($[10] !== setStepValid || $[11] !== stepId) {
                t7 = (isValid)=>setStepValid(stepId, isValid);
                $[10] = setStepValid;
                $[11] = stepId;
                $[12] = t7;
            } else {
                t7 = $[12];
            }
            t5 = render({
                stepId,
                stepState: stepStates[stepId] || {},
                updateStepState: t6,
                setStepValid: t7
            });
            $[1] = render;
            $[2] = setStepValid;
            $[3] = stepId;
            $[4] = stepStates;
            $[5] = updateStepState;
            $[6] = t5;
        } else {
            t5 = $[6];
        }
        let t6;
        if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4 || $[16] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: t2,
                "aria-labelledby": t3,
                className: t4,
                children: t5
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 465,
                columnNumber: 12
            }, this);
            $[13] = t2;
            $[14] = t3;
            $[15] = t4;
            $[16] = t5;
            $[17] = t6;
        } else {
            t6 = $[17];
        }
        return t6;
    }
    if (typeof children === "function") {
        const t2 = `step-content-${stepId}`;
        const t3 = `step-${stepId}`;
        const t4 = `stepper-step-content ${className}`;
        let t5;
        if ($[18] !== children || $[19] !== setStepValid || $[20] !== stepId || $[21] !== stepStates || $[22] !== updateStepState) {
            let t6;
            if ($[24] !== stepId || $[25] !== updateStepState) {
                t6 = (state_0)=>updateStepState(stepId, state_0);
                $[24] = stepId;
                $[25] = updateStepState;
                $[26] = t6;
            } else {
                t6 = $[26];
            }
            let t7;
            if ($[27] !== setStepValid || $[28] !== stepId) {
                t7 = (isValid_0)=>setStepValid(stepId, isValid_0);
                $[27] = setStepValid;
                $[28] = stepId;
                $[29] = t7;
            } else {
                t7 = $[29];
            }
            t5 = children({
                stepId,
                stepState: stepStates[stepId] || {},
                updateStepState: t6,
                setStepValid: t7
            });
            $[18] = children;
            $[19] = setStepValid;
            $[20] = stepId;
            $[21] = stepStates;
            $[22] = updateStepState;
            $[23] = t5;
        } else {
            t5 = $[23];
        }
        let t6;
        if ($[30] !== t2 || $[31] !== t3 || $[32] !== t4 || $[33] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: t2,
                "aria-labelledby": t3,
                className: t4,
                children: t5
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 517,
                columnNumber: 12
            }, this);
            $[30] = t2;
            $[31] = t3;
            $[32] = t4;
            $[33] = t5;
            $[34] = t6;
        } else {
            t6 = $[34];
        }
        return t6;
    }
    const t2 = `step-content-${stepId}`;
    const t3 = `step-${stepId}`;
    const t4 = `stepper-step-content ${className}`;
    let t5;
    if ($[35] !== children || $[36] !== t2 || $[37] !== t3 || $[38] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "tabpanel",
            id: t2,
            "aria-labelledby": t3,
            className: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 533,
            columnNumber: 10
        }, this);
        $[35] = children;
        $[36] = t2;
        $[37] = t3;
        $[38] = t4;
        $[39] = t5;
    } else {
        t5 = $[39];
    }
    return t5;
}
_s3(StepperStepContent, "+TTuN2j4X1sYstWaWCgJbpndBOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"]
    ];
});
_c5 = StepperStepContent;
function StepperNavigation(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a071d45a742abfa8ec729a1e0f0b4f12a994b976b2eebf07491154c3abaad3b0";
    }
    const { className: t1, renderPrevious, renderNext, renderComplete, showPrevious: t2, showNext: t3, previousLabel: t4, nextLabel: t5, completeLabel: t6 } = t0;
    const className = t1 === undefined ? "" : t1;
    const showPrevious = t2 === undefined ? true : t2;
    const showNext = t3 === undefined ? true : t3;
    const previousLabel = t4 === undefined ? "Previous" : t4;
    const nextLabel = t5 === undefined ? "Next" : t5;
    const completeLabel = t6 === undefined ? "Complete" : t6;
    const { activeStep, totalSteps, nextStep, previousStep, canGoNext, canGoPrevious, isCurrentStepValid, complete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"])();
    const isLastStep = activeStep === totalSteps - 1;
    const isFirstStep = activeStep === 0;
    let t7;
    if ($[1] !== previousStep) {
        t7 = ({
            "StepperNavigation[handlePrevious]": ()=>{
                previousStep();
            }
        })["StepperNavigation[handlePrevious]"];
        $[1] = previousStep;
        $[2] = t7;
    } else {
        t7 = $[2];
    }
    const handlePrevious = t7;
    let t8;
    if ($[3] !== canGoNext || $[4] !== nextStep) {
        t8 = ({
            "StepperNavigation[handleNext]": ()=>{
                if (canGoNext()) {
                    nextStep();
                }
            }
        })["StepperNavigation[handleNext]"];
        $[3] = canGoNext;
        $[4] = nextStep;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const handleNext = t8;
    let t9;
    if ($[6] !== complete || $[7] !== isCurrentStepValid) {
        t9 = ({
            "StepperNavigation[handleComplete]": ()=>{
                if (isCurrentStepValid()) {
                    complete();
                }
            }
        })["StepperNavigation[handleComplete]"];
        $[6] = complete;
        $[7] = isCurrentStepValid;
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    const handleComplete = t9;
    const t10 = `stepper-navigation ${className}`;
    let t11;
    if ($[9] !== canGoPrevious || $[10] !== handlePrevious || $[11] !== isFirstStep || $[12] !== previousLabel || $[13] !== renderPrevious || $[14] !== showPrevious) {
        t11 = showPrevious && !isFirstStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stepper-nav-button-wrapper",
            children: renderPrevious ? renderPrevious({
                onClick: handlePrevious,
                disabled: !canGoPrevious(),
                isFirstStep
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handlePrevious,
                disabled: !canGoPrevious(),
                "aria-label": "Go to previous step",
                className: "stepper-nav-button stepper-nav-button-previous",
                children: previousLabel
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 633,
                columnNumber: 12
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 629,
            columnNumber: 43
        }, this);
        $[9] = canGoPrevious;
        $[10] = handlePrevious;
        $[11] = isFirstStep;
        $[12] = previousLabel;
        $[13] = renderPrevious;
        $[14] = showPrevious;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== canGoNext || $[17] !== handleNext || $[18] !== isCurrentStepValid || $[19] !== isLastStep || $[20] !== nextLabel || $[21] !== renderNext || $[22] !== showNext) {
        t12 = showNext && !isLastStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stepper-nav-button-wrapper",
            children: renderNext ? renderNext({
                onClick: handleNext,
                disabled: !canGoNext() || !isCurrentStepValid(),
                isLastStep
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleNext,
                disabled: !canGoNext() || !isCurrentStepValid(),
                "aria-label": "Go to next step",
                className: "stepper-nav-button stepper-nav-button-next",
                children: nextLabel
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 650,
                columnNumber: 12
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 646,
            columnNumber: 38
        }, this);
        $[16] = canGoNext;
        $[17] = handleNext;
        $[18] = isCurrentStepValid;
        $[19] = isLastStep;
        $[20] = nextLabel;
        $[21] = renderNext;
        $[22] = showNext;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== completeLabel || $[25] !== handleComplete || $[26] !== isCurrentStepValid || $[27] !== isLastStep || $[28] !== renderComplete) {
        t13 = isLastStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stepper-nav-button-wrapper",
            children: renderComplete ? renderComplete({
                onClick: handleComplete,
                disabled: !isCurrentStepValid()
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleComplete,
                disabled: !isCurrentStepValid(),
                "aria-label": "Complete stepper",
                className: "stepper-nav-button stepper-nav-button-complete",
                children: completeLabel
            }, void 0, false, {
                fileName: "[project]/src/components/Stepper/Stepper.js",
                lineNumber: 667,
                columnNumber: 12
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 664,
            columnNumber: 25
        }, this);
        $[24] = completeLabel;
        $[25] = handleComplete;
        $[26] = isCurrentStepValid;
        $[27] = isLastStep;
        $[28] = renderComplete;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t10 || $[31] !== t11 || $[32] !== t12 || $[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            role: "navigation",
            "aria-label": "Stepper navigation",
            className: t10,
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Stepper/Stepper.js",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    return t14;
}
_s4(StepperNavigation, "7T4tK8QhbvIE/roXC54NNJ2n4RU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$StepperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStepperContext"]
    ];
});
_c6 = StepperNavigation;
// Compound component pattern - attach sub-components
StepperComponent.Steps = StepperSteps;
StepperComponent.Step = StepperStep;
StepperComponent.Content = StepperContent;
StepperComponent.StepContent = StepperStepContent;
StepperComponent.Navigation = StepperNavigation;
const __TURBOPACK__default__export__ = StepperComponent;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StepperKeyboardHandler");
__turbopack_context__.k.register(_c1, "StepperComponent");
__turbopack_context__.k.register(_c2, "StepperSteps");
__turbopack_context__.k.register(_c3, "StepperStep");
__turbopack_context__.k.register(_c4, "StepperContent");
__turbopack_context__.k.register(_c5, "StepperStepContent");
__turbopack_context__.k.register(_c6, "StepperNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/stepper-demo/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepperDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Stepper/Stepper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StepperDemo() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "819795eae4183280615c6ceabb4df42a3f88fde867860f4ffa1a2b10a06a892b") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "819795eae4183280615c6ceabb4df42a3f88fde867860f4ffa1a2b10a06a892b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            personalInfo: {
                name: "",
                email: "",
                phone: ""
            },
            address: {
                street: "",
                city: "",
                zipCode: ""
            },
            preferences: {
                newsletter: false,
                notifications: true
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [, setCompletedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleStepChange = _StepperDemoHandleStepChange;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "StepperDemo[handleComplete]": (allStepStates)=>{
                console.log("Stepper completed!", allStepStates);
                setCompletedData(allStepStates);
                alert("Form submitted successfully! Check console for data.");
            }
        })["StepperDemo[handleComplete]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleComplete = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-gray-900 mb-2",
            children: "Stepper Component Library Demo"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 mb-8",
            children: "A flexible, accessible multi-step form component using Compound Components and Render Props patterns."
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold text-gray-800 mb-4",
            children: "Example 1: Basic Multi-Step Form"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Steps, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Step, {
                    stepId: 0,
                    label: "Personal Info",
                    description: "Enter your details"
                }, void 0, false, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 74,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Step, {
                    stepId: 1,
                    label: "Address",
                    description: "Where do you live?"
                }, void 0, false, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 74,
                    columnNumber: 107
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Step, {
                    stepId: 2,
                    label: "Preferences",
                    description: "Your preferences"
                }, void 0, false, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 74,
                    columnNumber: 183
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Step, {
                    stepId: 3,
                    label: "Review",
                    description: "Review and submit"
                }, void 0, false, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 74,
                    columnNumber: 261
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== formData) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].StepContent, {
            stepId: 0,
            children: (t7)=>{
                const { updateStepState, setStepValid } = t7;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Personal Information"
                        }, void 0, false, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 86,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Full Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 86,
                                    columnNumber: 116
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.personalInfo.name,
                                    onChange: {
                                        "StepperDemo[<anonymous> > <input>.onChange]": (e)=>{
                                            const newData = {
                                                ...formData,
                                                personalInfo: {
                                                    ...formData.personalInfo,
                                                    name: e.target.value
                                                }
                                            };
                                            setFormData(newData);
                                            updateStepState({
                                                personalInfo: newData.personalInfo
                                            });
                                            setStepValid(!!e.target.value);
                                        }
                                    }["StepperDemo[<anonymous> > <input>.onChange]"],
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "John Doe",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 86,
                                    columnNumber: 199
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 86,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Email *"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 101,
                                    columnNumber: 230
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: formData.personalInfo.email,
                                    onChange: {
                                        "StepperDemo[<anonymous> > <input>.onChange]": (e_0)=>{
                                            const newData_0 = {
                                                ...formData,
                                                personalInfo: {
                                                    ...formData.personalInfo,
                                                    email: e_0.target.value
                                                }
                                            };
                                            setFormData(newData_0);
                                            updateStepState({
                                                personalInfo: newData_0.personalInfo
                                            });
                                            const isValid = !!formData.personalInfo.name && !!e_0.target.value;
                                            setStepValid(isValid);
                                        }
                                    }["StepperDemo[<anonymous> > <input>.onChange]"],
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "john@example.com",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 101,
                                    columnNumber: 309
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 101,
                            columnNumber: 225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 117,
                                    columnNumber: 238
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    value: formData.personalInfo.phone,
                                    onChange: {
                                        "StepperDemo[<anonymous> > <input>.onChange]": (e_1)=>{
                                            const newData_1 = {
                                                ...formData,
                                                personalInfo: {
                                                    ...formData.personalInfo,
                                                    phone: e_1.target.value
                                                }
                                            };
                                            setFormData(newData_1);
                                            updateStepState({
                                                personalInfo: newData_1.personalInfo
                                            });
                                        }
                                    }["StepperDemo[<anonymous> > <input>.onChange]"],
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "+1 (555) 123-4567"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 117,
                                    columnNumber: 315
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 117,
                            columnNumber: 233
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 86,
                    columnNumber: 16
                }, this);
            }
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[7] = formData;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== formData) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].StepContent, {
            stepId: 1,
            children: (t8)=>{
                const { updateStepState: updateStepState_0, setStepValid: setStepValid_0 } = t8;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Address Information"
                        }, void 0, false, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 145,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Street Address *"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 145,
                                    columnNumber: 115
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.address.street,
                                    onChange: {
                                        "StepperDemo[<anonymous> > <input>.onChange]": (e_2)=>{
                                            const newData_2 = {
                                                ...formData,
                                                address: {
                                                    ...formData.address,
                                                    street: e_2.target.value
                                                }
                                            };
                                            setFormData(newData_2);
                                            updateStepState_0({
                                                address: newData_2.address
                                            });
                                            setStepValid_0(!!e_2.target.value);
                                        }
                                    }["StepperDemo[<anonymous> > <input>.onChange]"],
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "123 Main St",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 145,
                                    columnNumber: 203
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 145,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "City *"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 160,
                                    columnNumber: 233
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.address.city,
                                    onChange: {
                                        "StepperDemo[<anonymous> > <input>.onChange]": (e_3)=>{
                                            const newData_3 = {
                                                ...formData,
                                                address: {
                                                    ...formData.address,
                                                    city: e_3.target.value
                                                }
                                            };
                                            setFormData(newData_3);
                                            updateStepState_0({
                                                address: newData_3.address
                                            });
                                            const isValid_0 = !!formData.address.street && !!e_3.target.value;
                                            setStepValid_0(isValid_0);
                                        }
                                    }["StepperDemo[<anonymous> > <input>.onChange]"],
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "New York",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 160,
                                    columnNumber: 311
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 160,
                            columnNumber: 228
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "ZIP Code *"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 176,
                                    columnNumber: 230
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.address.zipCode,
                                    onChange: {
                                        "StepperDemo[<anonymous> > <input>.onChange]": (e_4)=>{
                                            const newData_4 = {
                                                ...formData,
                                                address: {
                                                    ...formData.address,
                                                    zipCode: e_4.target.value
                                                }
                                            };
                                            setFormData(newData_4);
                                            updateStepState_0({
                                                address: newData_4.address
                                            });
                                            const isValid_1 = !!formData.address.street && !!formData.address.city && !!e_4.target.value;
                                            setStepValid_0(isValid_1);
                                        }
                                    }["StepperDemo[<anonymous> > <input>.onChange]"],
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "10001",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 176,
                                    columnNumber: 312
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 176,
                            columnNumber: 225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 145,
                    columnNumber: 16
                }, this);
            }
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[9] = formData;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== formData) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].StepContent, {
            stepId: 2,
            children: (t9)=>{
                const { updateStepState: updateStepState_1 } = t9;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Preferences"
                        }, void 0, false, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 205,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.preferences.newsletter,
                                            onChange: {
                                                "StepperDemo[<anonymous> > <input>.onChange]": (e_5)=>{
                                                    const newData_5 = {
                                                        ...formData,
                                                        preferences: {
                                                            ...formData.preferences,
                                                            newsletter: e_5.target.checked
                                                        }
                                                    };
                                                    setFormData(newData_5);
                                                    updateStepState_1({
                                                        preferences: newData_5.preferences
                                                    });
                                                }
                                            }["StepperDemo[<anonymous> > <input>.onChange]"],
                                            className: "mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 205,
                                            columnNumber: 166
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Subscribe to newsletter"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 219,
                                            columnNumber: 150
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 205,
                                    columnNumber: 129
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.preferences.notifications,
                                            onChange: {
                                                "StepperDemo[<anonymous> > <input>.onChange]": (e_6)=>{
                                                    const newData_6 = {
                                                        ...formData,
                                                        preferences: {
                                                            ...formData.preferences,
                                                            notifications: e_6.target.checked
                                                        }
                                                    };
                                                    setFormData(newData_6);
                                                    updateStepState_1({
                                                        preferences: newData_6.preferences
                                                    });
                                                }
                                            }["StepperDemo[<anonymous> > <input>.onChange]"],
                                            className: "mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 219,
                                            columnNumber: 265
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Enable email notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 233,
                                            columnNumber: 150
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 219,
                                    columnNumber: 228
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 205,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: "Preferences are optional. You can proceed without selecting any."
                            }, void 0, false, {
                                fileName: "[project]/src/app/stepper-demo/page.js",
                                lineNumber: 233,
                                columnNumber: 259
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 233,
                            columnNumber: 237
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 205,
                    columnNumber: 16
                }, this);
            }
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[11] = formData;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== formData.address.city || $[14] !== formData.address.street || $[15] !== formData.address.zipCode || $[16] !== formData.personalInfo.email || $[17] !== formData.personalInfo.name || $[18] !== formData.personalInfo.phone || $[19] !== formData.preferences.newsletter || $[20] !== formData.preferences.notifications) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].StepContent, {
            stepId: 3,
            children: (t10)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Review Your Information"
                        }, void 0, false, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 242,
                            columnNumber: 77
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-md space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-gray-700",
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 206
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: formData.personalInfo.name || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 242,
                                    columnNumber: 201
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-gray-700",
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 355
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: formData.personalInfo.email || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 409
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 242,
                                    columnNumber: 350
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-gray-700",
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 506
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: formData.personalInfo.phone || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 560
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 242,
                                    columnNumber: 501
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-gray-700",
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 657
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: formData.address.street && formData.address.city ? `${formData.address.street}, ${formData.address.city}, ${formData.address.zipCode}` : "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 713
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 242,
                                    columnNumber: 652
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-gray-700",
                                            children: "Newsletter:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 916
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: formData.preferences.newsletter ? "Yes" : "No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 975
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 242,
                                    columnNumber: 911
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-gray-700",
                                            children: "Notifications:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 1073
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: formData.preferences.notifications ? "Enabled" : "Disabled"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/stepper-demo/page.js",
                                            lineNumber: 242,
                                            columnNumber: 1135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 242,
                                    columnNumber: 1068
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 242,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-4",
                            children: "Please review all information before submitting."
                        }, void 0, false, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 242,
                            columnNumber: 1247
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 242,
                    columnNumber: 50
                }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 242,
            columnNumber: 10
        }, this);
        $[13] = formData.address.city;
        $[14] = formData.address.street;
        $[15] = formData.address.zipCode;
        $[16] = formData.personalInfo.email;
        $[17] = formData.personalInfo.name;
        $[18] = formData.personalInfo.phone;
        $[19] = formData.preferences.newsletter;
        $[20] = formData.preferences.notifications;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t6 || $[23] !== t7 || $[24] !== t8 || $[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
            children: [
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Navigation, {
            previousLabel: "\u2190 Previous",
            nextLabel: "Next \u2192",
            completeLabel: "Submit Form"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-12",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    initialStep: 0,
                    onStepChange: handleStepChange,
                    onComplete: handleComplete,
                    className: "mb-8",
                    children: [
                        t5,
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 275,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-blue-900 mb-2",
            children: "Keyboard Navigation"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "text-sm text-blue-800 space-y-1 list-disc list-inside",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-blue-100 rounded",
                                    children: "Arrow Right/Down"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 290,
                                    columnNumber: 161
                                }, this),
                                " - Next step"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 290,
                            columnNumber: 157
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-blue-100 rounded",
                                    children: "Arrow Left/Up"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 290,
                                    columnNumber: 251
                                }, this),
                                " - Previous step"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 290,
                            columnNumber: 247
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-blue-100 rounded",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 290,
                                    columnNumber: 342
                                }, this),
                                " - Go to first step"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 290,
                            columnNumber: 338
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-blue-100 rounded",
                                    children: "End"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 290,
                                    columnNumber: 427
                                }, this),
                                " - Go to last step"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 290,
                            columnNumber: 423
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-blue-100 rounded",
                                    children: "Enter/Space"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 290,
                                    columnNumber: 510
                                }, this),
                                " - Activate step button"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 290,
                            columnNumber: 506
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-blue-100 rounded",
                                    children: "Tab"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 290,
                                    columnNumber: 606
                                }, this),
                                " - Navigate between interactive elements"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 290,
                            columnNumber: 602
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 290,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-gray-900 mb-2",
            children: "Component Features"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Compound Components:"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "bg-gray-200 px-1 rounded",
            children: "<Stepper.Steps>"
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 p-4 bg-gray-50 rounded-md",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "text-sm text-gray-700 space-y-1 list-disc list-inside",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                t16,
                                " Flexible API with",
                                " ",
                                t17,
                                ",",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "bg-gray-200 px-1 rounded",
                                    children: "<Stepper.Step>"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 318,
                                    columnNumber: 177
                                }, this),
                                ", etc."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 318,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Render Props:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 318,
                                    columnNumber: 260
                                }, this),
                                " Customize step content with function children"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 318,
                            columnNumber: 256
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "No Prop Drilling:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 318,
                                    columnNumber: 345
                                }, this),
                                " State managed via Context API"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 318,
                            columnNumber: 341
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Full A11y:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 318,
                                    columnNumber: 418
                                }, this),
                                " ARIA attributes, keyboard navigation, screen reader support"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 318,
                            columnNumber: 414
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Step Validation:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/stepper-demo/page.js",
                                    lineNumber: 318,
                                    columnNumber: 514
                                }, this),
                                " Control navigation based on step validity"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/stepper-demo/page.js",
                            lineNumber: 318,
                            columnNumber: 510
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 318,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t12) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg p-8",
                    children: [
                        t2,
                        t3,
                        t12,
                        t14,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/stepper-demo/page.js",
                    lineNumber: 325,
                    columnNumber: 114
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/stepper-demo/page.js",
                lineNumber: 325,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/stepper-demo/page.js",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    return t19;
}
_s(StepperDemo, "KUV50dkgt1TtAOSEBQXxSvb2Mt4=");
_c = StepperDemo;
function _StepperDemoHandleStepChange(newStep, oldStep) {
    console.log(`Step changed from ${oldStep} to ${newStep}`);
}
var _c;
__turbopack_context__.k.register(_c, "StepperDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_792563d9._.js.map