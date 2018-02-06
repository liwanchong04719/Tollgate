/**
 * Created by zhaohang on 2017/10/16.
 */

fastmap.uikit.complexEdit.CopyTool = fastmap.uikit.complexEdit.RectSelectTool.extend({
    initialize: function () {
        fastmap.uikit.complexEdit.RectSelectTool.prototype.initialize.call(this);
        // 绑定函数作用域
        FM.Util.bind(this);

        this.name = 'CopyTool';
    },

    startup: function () {
        this.resetStatus();

        fastmap.uikit.complexEdit.RectSelectTool.prototype.startup.apply(this, arguments);

        this.selectFeedback = new fastmap.mapApi.Feedback();
        this.installFeedback(this.selectFeedback);
        this.selectTypes = this.editResult.types;
        this.selectedFeatures = [];

        this.refresh();
    },

    refresh: function () {
        this.resetSelectFeedback();
        this.resetEditResultFeedback();
        this.resetMouseInfo();
    },

    resetMouseInfo: function () {
        if (this.editResult.links.length === 0) {
            this.setMouseInfo('请在地图上框选收费站');
        } else {
            this.setMouseInfo('按ctrl键继续框选，或者按空格结束框选');
        }
    },

    resetEditResultFeedback: function () {
        if (!this.defaultFeedback) {
            return;
        }

        this.defaultFeedback.clear();

        if (this.editResult && this.editResult.links) {
            var length = this.editResult.links.length;
            if (length > 0) {
                for (var i = 0; i < length; ++i) {
                    var feature = this.editResult.links[i];
                    var linkSymbol = this.symbolFactory.getSymbol('pt_relation_border');
                    this.defaultFeedback.add(feature.geometry, linkSymbol);
                }
            }
        }

        this.refreshFeedback();
    },

    onLeftButtonUp: function (event) {
        if (!fastmap.uikit.complexEdit.RectSelectTool.prototype.onLeftButtonUp.apply(this, arguments)) {
            return false;
        }

        if (event.originalEvent.ctrlKey) {
            this.modifyLinks();
        } else {
            this.replaceLinks();
        }

        return true;
    },

    modifyLinks: function () {
        var newEditResult = FM.Util.clone(this.editResult);
        var addItems = FM.Util.differenceBy(this.selectedFeatures, newEditResult.links, 'properties.id');
        var remainItems = FM.Util.differenceBy(newEditResult.links, this.selectedFeatures, 'properties.id');
        newEditResult.links = remainItems.concat(addItems);
        this.createOperation('框选增加link', newEditResult);
    },

    replaceLinks: function () {
        var newEditResult = FM.Util.clone(this.editResult);
        newEditResult.links = this.selectedFeatures;
        this.createOperation('框选link', newEditResult);
    },

    onRedo: function (oldEditResult, newEditResult) {
        this.editResult = newEditResult;
        this.refresh();
    },

    onUndo: function (oldEditResult, newEditResult) {
        this.editResult = oldEditResult;
        this.refresh();
    }
});
