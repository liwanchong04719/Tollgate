/**
 * 获取事件控制器的函数
 * @method fastmap.uikit.EventController
 * @author ZhongXiaoMing
 * @date   2017-09-11
 * @return {object} EventController单例对象
 */
fastmap.uikit.EventController = (function () {
    var instantiated;
    var eventsKey = '_leaflet_events';

    /**
     * 初始化方法
     * @method init
     * @author ZhongXiaoMing
     * @date   2017-09-11
     * @param  {object} options 可选对象
     * @return {object} EventController实例对象
     */
    function init(options) {
        var Controller = L.Class.extend({
            /**
             * 事件管理器
             * @property includes
             */
            includes: [L.Mixin.Events, {
                /**
                 * 添加事件监听器
                 * @method addEventListener
                 * @author ZhongXiaoMing
                 * @date   2017-09-11
                 * @param  {object} types 事件类型
                 * @param  {object} fn 回调函数
                 * @param  {object} context 执行上下文
                 * @return {object} this
                 */
                addEventListener: function (types, fn, context) {
                    // (String, Function[, Object]) or (Object[, Object])

                    // types can be a map of types/handlers
                    if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) {
                        return this;
                    }

                    var events = this._leaflet_events = this._leaflet_events || {};
                    var contextId = context && context !== this && L.stamp(context);
                    var i,
                        len,
                        event,
                        type,
                        indexKey,
                        indexLenKey,
                        typeIndex;

                    // types can be a string of space-separated words
                    types = L.Util.splitWords(types);

                    for (i = 0, len = types.length; i < len; i++) {
                        event = {
                            action: fn,
                            context: context || this
                        };
                        type = types[i];

                        if (contextId) {
                            // store listeners of a particular context in a separate hash (if it has an id)
                            // gives a major performance boost when removing thousands of map layers

                            indexKey = type + '_idx';
                            indexLenKey = indexKey + '_len';

                            typeIndex = events[indexKey] = events[indexKey] || {};

                            if (!typeIndex[contextId]) {
                                typeIndex[contextId] = [];

                                // keep track of the number of keys in the index to quickly check if it's empty
                                events[indexLenKey] = (events[indexLenKey] || 0) + 1;
                            }

                            typeIndex[contextId].push(event);
                        } else {
                            events[type] = events[type] || [];
                            events[type].push(event);
                        }


                        if (!this.eventTypesMap[type]) {
                            this.eventTypesMap[type] = [];
                        }
                        this.eventTypesMap[type].push(fn);
                    }

                    return this;
                },

                /**
                 * 移除事件监听器
                 * @method removeEventListener
                 * @author ZhongXiaoMing
                 * @date   2017-09-11
                 * @param  {object} types 事件类型
                 * @param  {object} fn 回调函数
                 * @param  {object} context 执行上下文
                 * @return {object} this
                 */
                removeEventListener: function (types, fn, context) {
                    // ([String, Function, Object]) or (Object[, Object])

                    if (!this[eventsKey]) {
                        return this;
                    }

                    if (!types) {
                        return this.clearAllEventListeners();
                    }

                    if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) {
                        return this;
                    }

                    var events = this[eventsKey];
                    var contextId = context && context !== this && L.stamp(context);
                    var i,
                        len,
                        type,
                        listeners,
                        j,
                        ll,
                        indexKey,
                        indexLenKey,
                        typeIndex,
                        removed;

                    types = L.Util.splitWords(types);

                    for (i = 0, len = types.length; i < len; i++) {
                        type = types[i];
                        indexKey = type + '_idx';
                        indexLenKey = indexKey + '_len';

                        typeIndex = events[indexKey];

                        if (!fn) {
                            // clear all listeners for a type if function isn't specified
                            delete events[type];
                            delete events[indexKey];
                            delete events[indexLenKey];
                            if (this.eventTypesMap[type]) {
                                delete this.eventTypesMap[type];
                            }
                        } else {
                            listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

                            if (listeners) {
                                for (j = listeners.length - 1; j >= 0; j--) {
                                    if ((listeners[j].action === fn) && (!context || (listeners[j].context === context))) {
                                        removed = listeners.splice(j, 1);
                                        // set the old action to a no-op, because it is possible
                                        // that the listener is being iterated over as part of a dispatch
                                        removed[0].action = L.Util.falseFn;
                                    }
                                }

                                if (context && typeIndex && (listeners.length === 0)) {
                                    delete typeIndex[contextId];
                                    events[indexLenKey]--;
                                }
                            }
                            if (this.eventTypesMap[type]) {
                                for (j = 0, ll = this.eventTypesMap[type].length; j < ll; j++) {
                                    if (this.eventTypesMap[type][j] === fn) {
                                        this.eventTypesMap[type].splice(j, 1);
                                    }
                                }
                            }
                        }
                    }

                    return this;
                },

                /**
                 * 清空事件监听器
                 * @method removeEventListener
                 * @author ZhongXiaoMing
                 * @date   2017-09-11
                 * @return {object} this
                 */
                clearAllEventListeners: function () {
                    // delete this[eventsKey];
                    this.eventTypesMap = {};
                    return this;
                }
            }],

            options: {},

            /**
             * 初始化方法
             * @method init
             * @author ZhongXiaoMing
             * @date   2017-09-11
             * @param  {object} option 可选对象
             * @return {undefined}
             */
            initialize: function (option) {
                this.options = option || {};
                L.setOptions(this, option);
                this.eventTypes = L.Mixin.EventTypes;
                this.on = this.addEventListener;
                this.off = this.removeEventListener;
                this.eventTypesMap = {};
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
