FM.uikit.Config = FM.uikit.Config || {};

/**
 * 单例，只读 文件路径配置
 * @method FM.uikit.Config.Utility
 * @author LiuZhe
 * @date   2017-09-11
 * @return {object} 单例对象
 */
FM.uikit.Config.Utility = (function () {
    var instance;

    /**
     * 单例对象构造函数
     * @method Singleton
     * @author LiuZhe
     * @date   2017-09-11
     * @return {object} Singleton 实例对象
     */
    var Singleton = function () {
        var config = {
            ScenePanel: {
                name: '图层设置',
                template: {
                    ctrl: 'components/road/ctrls/layers_switch_ctrl/sceneLayersCtrl.js',
                    tmpl: '@components/road/tpls/layers_switch_tpl/sceneLayers.html'
                }
            },
            RestrictionTopoPanel: {
                name: '交限',
                template: {
                    ctrl: 'components/road/ctrls/toolBar_cru_ctrl/restrictionCtrl/restrictionCtrl.js',
                    tmpl: '@components/road/tpls/toolBar_cru_tpl/restrictionTpl/restrictionTpl.html'
                }
            },
            adminOfLevel: {
                name: '层级划分',
                template: {
                    ctrl: 'components/road/ctrls/attr_administratives_ctrl/adAdminOfLevelCtrl.js',
                    tmpl: '@components/road/tpls/attr_adminstratives_tpl/adAdminOfLevelTpl.html'
                }
            },
            CheckJobPanel: {
                name: '检 查',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/checkJobPanelCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/checkJobPanelTpl.html'
                }
            },
            roadCheckResult: {
                name: '道路检查结果',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/roadCheckResultCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/roadCheckResultTpl.html'
                }
            },
            batchTranslatePanel: {
                name: '批量翻译英文',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/batchTranslateCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/batchTranslateTpl.html'
                }
            },
            poiCheckResult: {
                name: 'POI检查结果',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/poiCheckResultCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/poiCheckResultTpl.html'
                }
            },
            pointAddressCheckResult: {
                name: '点门牌检查结果',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/pointAddressCheckResultCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/pointAddressCheckResultTpl.html'
                }
            },
            pointAddressPanel: {
                name: '检查结果',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/pointAddressPanelCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/pointAddressPanelTpl.html'
                }
            },
            messageAlert: {
                name: '消息提醒',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/messageAlertCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/messageAlertTpl.html'
                }
            },
            batchJobPanel: {
                name: '批处理',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/batchJobPanelCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/batchJobPanelTpl.html'
                }
            },
            autoJobPanel: {
                name: '自动录入',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/autofillJobPanelCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/autofillJobPanelTpl.html'
                }
            },
            BatchDataList: {
                name: '道路批量修改',
                template: {
                    ctrl: 'components/road/ctrls/attr_link_ctrl/batchResultCtrl.js',
                    tmpl: '@components/road/tpls/attr_link_tpl/batchResultTpl.html'
                }
            },
            BatchTipsEditList: {
                name: 'TIPS批量修改',
                template: {
                    ctrl: 'components/road/ctrls/attr_tips_ctrl/batchEditCtrl.js',
                    tmpl: '@components/road/tpls/attr_tips_tpl/batchEditTpl.html'
                }
            },
            tmcTreePanel: {
                name: 'TMC树形结构',
                template: {
                    ctrl: 'components/road/ctrls/attr_tmc_ctrl/tmcTreeCtrl.js',
                    tmpl: '@components/road/tpls/attr_tmc_tpl/tmcTreeTpl.html'
                }
            },
            createPoiPanel: {
                name: '新建POI',
                template: {
                    ctrl: 'components/index/poi/ctrls/attr-base/createPoiCtl.js',
                    tmpl: '@components/index/poi/tpls/attr-base/createPoiTpl.html'
                }
            },
            selpoiParentPanel: {
                name: '修改POI父子关系',
                template: {
                    ctrl: 'components/index/poi/ctrls/attr-tips/poiParentCtrl.js',
                    tmpl: '@components/index/poi/tpls/attr-tips/poiParentTpl.html'
                }
            },
            samePoiPanel: {
                name: '修改同一关系',
                template: {
                    ctrl: 'components/index/poi/ctrls/attr-tips/poiSameCtrl.js',
                    tmpl: '@components/index/poi/tpls/attr-tips/poiSameTpl.html'
                }
            },
            AdminJoinFacesPanel: {
                name: '制作行政区划点关联面',
                template: {
                    ctrl: 'components/road/ctrls/attr_administratives_ctrl/adAdminToFaceController.js',
                    tmpl: '@components/road/tpls/attr_adminstratives_tpl/adAdminToFaceTpl.html'
                }
            },
            LaneConnexityPanel: {
                name: '新增车信',
                template: {
                    ctrl: 'components/road/ctrls/toolBar_cru_ctrl/laneConnexityCtrl/laneConnexityCtrl.js',
                    tmpl: '@components/road/tpls/toolBar_cru_tpl/laneConnexityTpl/laneConnexityTpl.html'
                }
            },
            RdSameNodePanel: {
                name: '制作同一点',
                template: {
                    ctrl: 'components/road/ctrls/attr_same_ctrl/rdMainSameNodeCtrl.js',
                    tmpl: '@components/road/tpls/attr_same_tpl/rdMainSameNodeTpl.html'
                }
            },
            RdSameLinkPanel: {
                name: '制作同一线',
                template: {
                    ctrl: 'components/road/ctrls/attr_same_ctrl/rdMainSameLinkCtrl.js',
                    tmpl: '@components/road/tpls/attr_same_tpl/rdMainSameLinkTpl.html'
                }
            },
            StreetView: {
                name: '查看街景',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/streetViewCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/streetViewTpl.html'
                }
            },
            TipLaneConnexity: {
                name: '制作车信tips',
                template: {
                    ctrl: 'components/infos/ctrls/attr_infoLaneConnexity_ctrl/createLaneConnexity.js',
                    tmpl: '@components/infos/tpls/attr_infoLaneConnexit_tpl/createLaneConnexityTmpl.html'
                }
            },
            RdCrossPanel: {
                name: '选择路口同位点',
                template: {
                    ctrl: 'components/road/ctrls/attr_cross_ctrl/rdCrossAlertNodeCtrl.js',
                    tmpl: '@components/road/tpls/attr_cross_tpl/rdCrossAlertNodeTpl.html'
                }
            },
            createTaskListPanel: {
                name: '选择任务列表',
                template: {
                    ctrl: 'components/task/ctrls/attr_taskList_ctrl/taskList.js',
                    tmpl: '@components/task/tpls/attr_taskList_tpl/taskList.html'
                }
            },
            transitLayersChange: {
                name: '选择任务列表',
                template: {
                    ctrl: 'components/task/ctrls/layers_switch_ctrl/layersSwitchCtrl.js',
                    tmpl: '@components/task/tpls/layers_switch_tpl/layersSwitchTpl.html'
                }
            },
            CheckTipsPanel: {
                name: 'tips检查',
                template: {
                    ctrl: 'components/infos/ctrls/attr_checkInfoTips_ctrl/checkInfoTipsCtrl.js',
                    tmpl: '@components/infos/tpls/attr_checkInfoTips_tpl/checkInfoTipsTmpl.html'
                }
            },
            StaticsResult: {
                name: 'tips统计',
                template: {
                    ctrl: 'components/infos/ctrls/attr_infoTipsStatics_ctrl/infoTipsStaticsCtrl.js',
                    tmpl: '@components/infos/tpls/attr_infoTipsStatics_tpl/infoTipsStaticsTmpl.html'
                }
            },
            TipNomalRestriction: {
                name: '制作交限tips',
                template: {
                    ctrl: 'components/infos/ctrls/attr_infoNomalRestriction_ctrl/createNomalRestriction.js',
                    tmpl: '@components/infos/tpls/attr_infoNomalRestriction_tpl/createNomalRestrictionTmpl.html'
                }
            },
            ExternalQuality: {
                name: '外业质检',
                template: {
                    ctrl: 'components/index/poi/ctrls/edit-tools/externalQualityCtrl.js',
                    tmpl: '@components/index/poi/tpls/edit-tools/externalQualityTmpl.html'
                }
            },
            AdvancedSearch: {
                name: '高级搜索',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/advanceSearchPanelCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/advanceSearchPanelTmpl.html'
                }
            },
            poiFilterPanel: {
                name: '筛选POI',
                template: {
                    ctrl: 'components/index/poi/ctrls/edit-tools/poiFilterPanelCtrl.js',
                    tmpl: '@components/index/poi/tpls/edit-tools/poiFilterPanelTmpl.html'
                }
            },
            DeepInfoQuality: {
                name: '录入质检信息',
                template: {
                    ctrl: 'components/index/poi/ctrls/edit-tools/deepInfoQualityCtrl.js',
                    tmpl: '@components/index/poi/tpls/edit-tools/deepInfoQualityTmpl.html'
                }
            },
            dataPlanPanel: {
                name: '请确认是否保存规划数据',
                template: {
                    ctrl: 'components/task/ctrls/attr_dataPlan_ctrl/dataPlan.js',
                    tmpl: '@components/task/tpls/attr_dataPlan_tpl/dataPlan.html'
                }
            },
            tipListPanel: {
                name: 'tips列表',
                template: {
                    ctrl: 'components/index/poi/ctrls/edit-tools/tipsListCtrl.js',
                    tmpl: '@components/index/poi/tpls/edit-tools/tipsListTpl.html'
                }
            },
            roadnameCheckResult: {
                name: '道路名检查结果',
                template: {
                    ctrl: 'components/road/ctrls/specialwork/checkResultSubModalCtl.js',
                    tmpl: '@components/road/tpls/specialwork/checkResultSubModalTpl.htm'
                }
            },
            roadnameCheck: {
                name: '道路名检查',
                template: {
                    ctrl: 'components/road/ctrls/specialwork/checkSubModalCtl.js',
                    tmpl: '@components/road/tpls/specialwork/checkSubModal.htm'
                }
            },
            createPointAddressPanel: {
                name: '新建点门牌',
                template: {
                    ctrl: 'components/index/pointAddress/ctrls/attr_pointAddress/createPointAddressCtrl.js',
                    tmpl: '@components/index/pointAddress/tpls/attr_pointAddress/createPointAddressTpl.html'
                }
            },
            poiDeepCheckResult: {
                name: '深度信息检查结果',
                template: {
                    ctrl: 'components/tools/ctrls/assist-tools/poiDeepCheckResultCtrl.js',
                    tmpl: '@components/tools/tpls/assist-tools/poiDeepCheckResultTpl.html'
                }
            },
            batchSelectTipLinksResult: {
                name: '侧线框选结果',
                template: {
                    ctrl: 'components/infos/ctrls/attr_batchTipLinks_ctrl/batchTipLinksCtrl.js',
                    tmpl: '@components/infos/tpls/attr_batchTipLinks_tpl/batchTipLinksTmpl.html'
                }
            }
        };

        /**
         * 根据类型获取对应的config
         * @method getConfig
         * @author LiuZhe
         * @date   2017-09-11
         * @param  {string} type 类型
         * @return {object} Config对象
         */
        this.getConfig = function (type) {
            var conf = config[type];
            if (!conf) {
                return null;
            }
            return conf;
        };

        /**
         * 根据类型获取对应的面板名称
         * @method getName
         * @author LiuZhe
         * @date   2017-09-11
         * @param  {string} type 类型
         * @return {object} Config对象
         */
        this.getName = function (type) {
            var conf = this.getConfig(type);
            if (!conf) {
                return null;
            }
            if (!conf.name) {
                return null;
            }
            return conf.name;
        };

        /**
         * 根据类型获取对应的面板文件路径
         * @method getName
         * @author LiuZhe
         * @date   2017-09-11
         * @param  {string} type 类型
         * @return {object} Config对象
         */
        this.getTemplate = function (type) {
            var conf = this.getConfig(type);
            if (!conf) {
                return null;
            }
            if (!conf.template) {
                return null;
            }
            return conf.template;
        };
    };

    return function () {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    };
}());
