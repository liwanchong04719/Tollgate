const tipLayers = {
    TipBorder: {
        name: '接边作业',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBORDER',
            serverFeatureType: '8002', // 接边作业类型;
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    Tip3DBranch: {
        name: '3d分歧',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIP3DBRANCH',
            serverFeatureType: '1403', // 3D;
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipBridge: {
        name: '桥',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBRIDGE',
            serverFeatureType: '1510',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipBusLane: {
        name: '公交专用道路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBUSLANE',
            serverFeatureType: '1508',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipBypath: {
        name: '私道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBYPATH',
            serverFeatureType: '1506',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipChargeOpenRoad: {
        name: '收费开放道路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPCHARGEOPENROAD',
            serverFeatureType: '1606',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipConnect: {
        name: '挂接',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPCONNECT',
            serverFeatureType: '1803',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipCrossLineOverpass: {
        name: '跨线立交桥',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPCROSSLINEOVERPASS',
            serverFeatureType: '1509',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipDeleteTag: {
        name: '形状删除',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPDELETETAG',
            serverFeatureType: '2101',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipDirect: {
        name: '顺行',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPDIRECT',
            serverFeatureType: '1804',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipDrivewayMount: {
        name: '车道数',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPDRIVEWAYMOUNT',
            serverFeatureType: '1202',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipElevatedRoad: {
        name: '高架路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPELEVATEDROAD',
            serverFeatureType: '1503',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipFC: {
        name: 'fc 预处理',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPFC',
            serverFeatureType: '8001',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipGate: {
        name: '大门',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPGATE',
            serverFeatureType: '1104',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipGPSDot: {
        name: 'GPS打点',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPGPSDOT',
            serverFeatureType: '1706',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipGSBranch: {
        name: '高速分歧',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPGSBRANCH',
            serverFeatureType: '1407',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipGSC: {
        name: '立交',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPGSC',
            serverFeatureType: '1116',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipHighSpeedEntrance: {
        name: '高速入口模式图',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPHIGHSPEEDENTRANCE',
            serverFeatureType: '1410',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipLaneConnexity: {
        name: '车信',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPLANECONNEXITY',
            serverFeatureType: '1301',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipLeftToRight: {
        name: '提左提右',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPLEFTTORIGHT',
            serverFeatureType: '1404',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipLinks: {
        name: '测线',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPLINKS',
            serverFeatureType: '2001',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipMaintenance: {
        name: '施工',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPMAINTENANCE',
            serverFeatureType: '1514',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipMultiDigitized: {
        name: '上下线分离',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPMULTIDIGITIZED',
            serverFeatureType: '1501',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNarrowChannel: {
        name: '窄道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNARROWCHANNEL',
            serverFeatureType: '1513',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNoCrossing: {
        name: '禁止穿行',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNOCROSSING',
            serverFeatureType: '1304',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNoEntry: {
        name: '禁止驶入',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNOENTRY',
            serverFeatureType: '1305',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNomalRestriction: {
        name: '普通交限',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNOMALRESTRICTION',
            serverFeatureType: '1302',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNormalRoadSide: {
        name: '一般道路方面',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNORMALROADSIDE',
            serverFeatureType: '1405',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipObstacle: {
        name: '障碍物',
        // 无deep，只有草图作为附件返回
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPOBSTACLE',
            serverFeatureType: '1701',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipOverpass: {
        name: 'overpass',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPOVERPASS',
            serverFeatureType: '1504',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipOverpassName: {
        name: '立交桥名称',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPOVERPASSNAME',
            serverFeatureType: '1705',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipParkinglot: {
        name: '停车场出入口',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPPARKINGLOT',
            serverFeatureType: '1208',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipPavementCover: {
        name: '路面无覆盖',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPPAVEMENTCOVER',
            serverFeatureType: '1502',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipPedestrianStreet: {
        name: '步行街',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPPEDESTRIANSTREET',
            serverFeatureType: '1507',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipPOIRoad: {
        name: 'POI连接路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPPOIROAD',
            serverFeatureType: '1605',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRailwayCrossing: {
        name: '铁路道口',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPRAILWAYCROSSING',
            serverFeatureType: '1702',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRamp: {
        name: '匝道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPRAMP',
            serverFeatureType: '1207',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRegionRoad: {
        name: '区域内道路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPREGIONROAD',
            serverFeatureType: '1604',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRepair: {
        name: '维修',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPREPAIR',
            serverFeatureType: '1515',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRestriction: {
        name: '点限速',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPRESTRICTION',
            serverFeatureType: '1101',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadCross: {
        name: '交叉路口',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADCROSS',
            serverFeatureType: '1704',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadCrossProm: {
        name: '分叉路口提示',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADCROSSPROM',
            serverFeatureType: '1703',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadDirection: {
        name: '道路方向',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADDIRECTION',
            serverFeatureType: '1203',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadName: {
        name: '道路名',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADNAME',
            serverFeatureType: '1901',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadPA: {
        name: 'PA',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADPA',
            serverFeatureType: '1206',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadSA: {
        name: 'SA',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADSA',
            serverFeatureType: '1205',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoadType: {
        name: '道路种别',
        // 无deep，只有草图作为附件返回
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROADTYPE',
            serverFeatureType: '1201',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoundabout: {
        name: '环岛',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROUNDABOUT',
            serverFeatureType: '1601',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRoute: {
        name: '航线',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPROUTE',
            serverFeatureType: '1209',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipScenicRoute: {
        name: '风景路线',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSCENICROUTE',
            serverFeatureType: '1607',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipSeasonalRoad: {
        name: '季节性关闭道路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSEASONALROAD',
            serverFeatureType: '1516',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipSideRoad: {
        name: '辅路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSIDEROAD',
            serverFeatureType: '1512',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipSketch: {
        name: '草图',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSKETCH',
            serverFeatureType: '1806',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipSlope: {
        name: '坡度',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSLOPE',
            serverFeatureType: '1106',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipSpecialTrafficType: {
        name: '特殊交通类型',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSPECIALTRAFFICTYPE',
            serverFeatureType: '1602',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipSpeedlimit: {
        name: '条件限速',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSPEEDLIMIT',
            serverFeatureType: '1111',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipTollGate: {
        name: '收费站',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPTOLLGATE',
            serverFeatureType: '1107',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipTrafficSignal: {
        name: '红绿灯',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPTRAFFICSIGNAL',
            serverFeatureType: '1102',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    /*    TipTrafficSignalDir: {    屏蔽3个tips：1103, 1108, 1801
            name: '红绿灯方位',
            type: 'vector',
            options: {
                source: 'tipSource',
                featureType: 'TIPTRAFFICSIGNALDIR',
                serverFeatureType: '1103',
                render: FM.mapApi.render.renderer.TipRender,
                minZoom: 10, minEditZoom: 17            }
        },*/
    TipTunnel: {
        name: '隧道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPTUNNEL',
            serverFeatureType: '1511',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipUnderpass: {
        name: 'underpass',
        // 无deep，只有草图作为附件返回
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPUNDERPASS',
            serverFeatureType: '1505',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipUsageFeeRequired: {
        name: 'usage fee',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPUSAGEFEEREQUIRED',
            serverFeatureType: '1517',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipWarningInfo: {
        name: '危险信息',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPWARNINGINFO',
            serverFeatureType: '1105',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipElectronicEye: {
        name: '电子眼',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPELECTRONICEYE',
            serverFeatureType: '1109',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    //  315不上线
    /*    TipSpeedBump: {   屏蔽3个tips：1103, 1108, 1801
            name: '减速带',
            type: 'vector',
            options: {
                source: 'tipSource',
                featureType: 'TIPSPEEDBUMP',
                serverFeatureType: '1108',
                render: FM.mapApi.render.renderer.TipRender,
                minZoom: 10, minEditZoom: 17            }
        },*/
    TipTruckLimit: {
        name: '卡车限制',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPTRUCKLIMIT',
            serverFeatureType: '1110',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipVariableSpeed: {
        name: '可变限速',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPVARIABLESPEED',
            serverFeatureType: '1112',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipDrivewayLimit: {
        name: '车道限速',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPDRIVEWAYLIMIT',
            serverFeatureType: '1113',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipTruckSpeedLimit: {
        name: '卡车限速',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPTRUCKSPEEDLIMIT',
            serverFeatureType: '1114',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipLaneChangePoint: {
        name: '车道变化点',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPLANECHANGEPOINT',
            serverFeatureType: '1115',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipReversibleLane: {
        name: '可逆车道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPREVERSIBLELANE',
            serverFeatureType: '1204',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipTruckRestrictionTemp: {
        name: '卡车交限',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPTRUCKRESTRICTION',
            serverFeatureType: '1303',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipCrossVoiceGuide: {
        name: '路口语音引导',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPCROSSVOICEGUIDE',
            serverFeatureType: '1306',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    /*    TipNatureVoiceGuide: {  //  未制作
            name: '自然语音引导',
            type: 'vector',
            options: {
                source: 'tipSource',
                featureType: 'TIPNATUREVOICEGUIDE',
                serverFeatureType: '1307',
                render: FM.mapApi.render.renderer.TipRender,
                minZoom: 10, minEditZoom: 17            }
        },*/
    TipBanTrucksIn: {
        name: '禁止卡车驶入',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBANTRUCKSIN',
            serverFeatureType: '1308',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipBusDriveway: {
        name: '公交车道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBUSDRIVEWAY',
            serverFeatureType: '1310',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipVariableDirectionLane: {
        name: '可变导向车道',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPVARIABLEDIRECTIONLANE',
            serverFeatureType: '1311',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipOrientation: {
        name: '方向看板',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPORIENTATION',
            serverFeatureType: '1401',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipRealSign: {
        name: 'Real sign',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPREALSIGN',
            serverFeatureType: '1402',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipJVCBranch: {
        name: '实景图',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPJVCBRANCH',
            serverFeatureType: '1406',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNormalCross: {
        name: '普通路口模式图',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNORMALCROSS',
            serverFeatureType: '1409',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipMileagePeg: {
        name: '里程桩',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPMILEAGEPEG',
            serverFeatureType: '1707',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    // 新增
    TipADASLink: {
        name: 'ADAS测线',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPADASLINK',
            serverFeatureType: '2002',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipADASNode: {
        name: 'ADAS打点',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPADASNODE',
            serverFeatureType: '1708',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipStair: {
        name: '阶梯',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPSTAIR',
            serverFeatureType: '1518',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipNodeShift: {
        name: '点位移',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPNODESHIFT',
            serverFeatureType: '1709',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipOverBridge: {
        name: '地下通道／天桥',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPOVERBRIDGE',
            serverFeatureType: '2201',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipGeneral: {
        name: '万能标记',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPGENERAL',
            serverFeatureType: '2102',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipHighWayConnect: {
        name: '高速连接路',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPHIGHWAYCONNECT',
            serverFeatureType: '1211',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipLaneLimitWidthHeight: {
        name: '车道限宽限高',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPLANELIMITWIDTHHEIGHT',
            serverFeatureType: '1117',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipDeletePropertyInProgress: {
        name: '删除在建属性',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPDELETEPROPERTYINPROGRESS',
            serverFeatureType: '1214',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    },
    TipBuildTimeChange: {
        name: '在建时间变更',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBUILDTIMECHANGE',
            serverFeatureType: '1520',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10,
            minEditZoom: 17
        }
    }
    /* 未制作
    TipAirPortFace: {
        name: '机场功能面',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPAIRPORTFACE',
            serverFeatureType: '8005',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10, minEditZoom: 17        }
    },
    TipHighway: {
        name: 'Highway道路名',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPHIGHWAY',
            serverFeatureType: '8006',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10, minEditZoom: 17        }
    },
    TipAOIFace: {
        name: 'AOI面',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPAOIFACE',
            serverFeatureType: '8007',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10, minEditZoom: 17        }
    },
    TipAOINode: {
        name: 'AOI代表点',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPAOINODE',
            serverFeatureType: '8008',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10, minEditZoom: 17        }
    },
    TipRailWay: {
        name: '地铁',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPRAILWAY',
            serverFeatureType: '8009',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10, minEditZoom: 17        }
    },
    TipBUAFace: {
        name: 'BUA',
        type: 'vector',
        options: {
            source: 'tipSource',
            featureType: 'TIPBUAFACE',
            serverFeatureType: '8010',
            render: FM.mapApi.render.renderer.TipRender,
            minZoom: 10, minEditZoom: 17        }
    }*/
}

export default tipLayers;
