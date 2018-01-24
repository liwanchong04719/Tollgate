/**
 * Created by liwanchong on 2015/9/9.
 * 元素类型
 * @namespace fast
 * @class FeatCodeController 单例
 */


fastmap.uikit.FeatCodeController = (function () {
    var instantiated;
  /**
   * @param {Object} options 要素
   * @return {Object} Controller
   */
    function init(options) {
        var Controller = L.Class.extend({
            /**
             * 相关属性
             */
            options: {},
            /**
             * 构造函数
             * @class FeatCodeController
             * @constructor
             * @namespace  fastmap
             * @param {Object} option 要素
             * @return {undefined}
             */
            initialize: function (option) {
                L.setOptions(this, option);
            },
            /**
             * geometry代码的设置
             * @method setFeatCode
             * @param {String} featCode code
             * @return {undefined}
             */
            setFeatCode: function (featCode) {
                this.newObj = featCode;
            },
            getFeatCode: function () {
                return this.newObj;
            }
        });
        return new Controller(options);
    }
    return function (options) {
        if (!instantiated) {
            instantiated = init(options);
        }
        return instantiated;
    };
}());

