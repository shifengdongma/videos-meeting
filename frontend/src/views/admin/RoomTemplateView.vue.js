import PageHeader from '../../components/layout/PageHeader.vue';
import EmptyState from '../../components/ui/EmptyState.vue';
import SummaryCard from '../../components/ui/SummaryCard.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['summary-grid']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "template-page" },
});
/** @type {[typeof PageHeader, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(PageHeader, new PageHeader({
    eyebrow: "Room templates",
    title: "会议室模板",
    description: "预留不同会议模板与场景配置入口，便于后续扩展专项会议室能力。",
}));
const __VLS_1 = __VLS_0({
    eyebrow: "Room templates",
    title: "会议室模板",
    description: "预留不同会议模板与场景配置入口，便于后续扩展专项会议室能力。",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "summary-grid" },
});
/** @type {[typeof SummaryCard, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(SummaryCard, new SummaryCard({
    label: "模板能力",
    value: "规划中",
    description: "当前阶段以管理入口与展示框架为主",
}));
const __VLS_4 = __VLS_3({
    label: "模板能力",
    value: "规划中",
    description: "当前阶段以管理入口与展示框架为主",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof SummaryCard, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(SummaryCard, new SummaryCard({
    label: "扩展方向",
    value: "多场景",
    description: "可覆盖培训、直播、表决等业务类型",
}));
const __VLS_7 = __VLS_6({
    label: "扩展方向",
    value: "多场景",
    description: "可覆盖培训、直播、表决等业务类型",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_9 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "content-card" },
    shadow: "never",
}));
const __VLS_11 = __VLS_10({
    ...{ class: "content-card" },
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
/** @type {[typeof EmptyState, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(EmptyState, new EmptyState({
    description: "后续可扩展为特殊会议室模板分配能力。",
}));
const __VLS_14 = __VLS_13({
    description: "后续可扩展为特殊会议室模板分配能力。",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_12;
/** @type {__VLS_StyleScopedClasses['template-page']} */ ;
/** @type {__VLS_StyleScopedClasses['summary-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['content-card']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PageHeader: PageHeader,
            EmptyState: EmptyState,
            SummaryCard: SummaryCard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
