/**
 * Created by xujie3949 on 2016/12/8.
 */

fastmap.uikit.relationEdit.RelationEditor = fastmap.uikit.Editor.extend({
    initialize: function (options) {
        fastmap.uikit.Editor.prototype.initialize.call(this, options);

        // 绑定函数作用域
        FM.Util.bind(this);

        this.checkController = fastmap.uikit.check.CheckController.getInstance();
        this.toolController = fastmap.uikit.ToolController.getInstance();
        this.operationController = fastmap.uikit.operation.OperationController.getInstance();
        this.isEditing = false;
        this.editResult = null;
        this.onFinish = null;

        this.loadTools();
    },

    loadTools: function () {

    },

    start: function (editResult, onFinish) {
        if (this.isEditing) {
            this.abort();
        }

        this.isEditing = true;

        this.editResult = editResult;
        this.onFinish = onFinish;

        var type = this.editResult.type;
        var toolName;
        switch (type) {
            case 'LinkNodeResult':
                toolName = 'LinkNodeTool';
                break;
            case 'LinkNodeLinkResult':
                toolName = 'LinkNodeLinkTool';
                break;
            case 'LinkNodeLinksResult':
                toolName = 'LinkNodeLinksTool';
                break;
            case 'RestrictionResult':
                toolName = 'RestrictionTool';
                break;
            case 'PointLinkResult':
                toolName = 'PointLinkTool';
                break;
            case 'LinkPointDirectResult':
                toolName = 'LinkPointDirectTool';
                break;
            case 'NodeLinksResult':
                toolName = 'NodeLinksTool';
                break;
            case 'NodeResult':
                toolName = 'NodeTool';
                break;
            case 'LinkNodeViasLinkResult':
                toolName = 'LinkNodeViasLinkTool';
                break;
            case 'LinkNodeLinkContinueLinkResult':
                toolName = 'LinkNodeLinkContinueLinkTool';
                break;
            case 'LaneConnexityResult':
                toolName = 'LaneConnexityTool';
                break;
            case 'SamePointRelationResult':
                toolName = 'SamePointRelationTool';
                break;
            case 'SameLineRelationResult':
                toolName = 'SameLineRelationTool';
                break;
            case 'CrfInterResult':
                toolName = 'CrfInterTool';
                break;
            case 'CrfRoadResult':
                toolName = 'CrfRoadTool';
                break;
            case 'CrfObjectResult':
                toolName = 'CrfObjectTool';
                break;
            case 'GradeSeperateCrossResult':
                toolName = 'GradeSeperateCrossTool';
                break;
            case 'RDCrossResult':
                toolName = 'RDCrossTool';
                break;
            case 'CmgBuildingResult':
                toolName = 'CmgBuildingTool';
                break;
            case 'SpeedLimitResult':
                toolName = 'SpeedLimitTool';
                break;
            case 'ScopeLineResult':
                toolName = 'ScopeLineTool';
                break;
            case 'StartFinishPointResult':
                toolName = 'StartFinishPointTool';
                break;
            case 'PolygonResult':
                toolName = 'PolygonTool';
                break;
            case 'TipMultiDigitizedResult':
                toolName = 'TipMultiDigitizedTool';
                break;
            case 'TipGSCResult':
                toolName = 'TipGSCTool';
                break;
            default:
                throw new Error('未知的关系编辑类型');
        }

        this.toolController.resetCurrentTool(toolName, this.onToolFinish, {
            editResult: editResult,
            toolOptions: this.options
        });
    },

    stop: function () {
        if (!this.isEditing) {
            return;
        }

        this.isEditing = false;

        this.toolController.resetCurrentTool('PanTool', null, null);
    },

    abort: function () {
        if (!this.isEditing) {
            return;
        }

        this.isEditing = false;

        this.toolController.resetCurrentTool('PanTool', null, null);
    },

    onToolFinish: function (editResult) {
        if (!this.onFinish) {
            return;
        }

        this.editResult = editResult;

        this.onFinish(this.editResult);
    },

    destroy: function () {
        fastmap.uikit.relationEdit.RelationEditor.instance = null;
    },

    statics: {
        instance: null,

        getInstance: function (options) {
            if (!fastmap.uikit.relationEdit.RelationEditor.instance) {
                fastmap.uikit.relationEdit.RelationEditor.instance =
                    new fastmap.uikit.relationEdit.RelationEditor(options);
            }
            return fastmap.uikit.relationEdit.RelationEditor.instance;
        }
    }
});
