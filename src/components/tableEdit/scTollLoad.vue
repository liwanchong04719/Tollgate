<template>
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(243, 239, 239, 0.5);">
    <div class="grid-content">
      <div v-show="!dataModels[1] || !Object.keys(dataModels[1]).length" class="grid-wraper">
        <div class="grid-list">
          <div title="桥梁或隧道名称组号：" class="labelText">桥梁或隧道名称组号：</div>
          <div class="inputPart">
            <el-input :disabled="true" v-model="originModel.name_bt_id" size="mini"></el-input>
          </div>
        </div>
        <div class="grid-list">
          <div title="桥梁或隧道名称：" class="labelText">桥梁或隧道名称：</div>
          <div class="inputPart">
            <el-input :disabled="true" v-model="originModel.name_bt" size="mini"></el-input>
          </div>
        </div>
        <el-button @click="toggleSearchPanel(true)" style="padding:5px;height:28px;margin:3px" type="primary" class="btn-icon" icon="el-icon-edit"></el-button>
        <el-button @click="addOuter" style="padding:5px;height:28px;margin:3px" type="primary" class="btn-icon" icon="el-icon-plus"></el-button>
      </div>
    </div>
    <div v-for="(dataItem, outerKey, outerIndex) in dataModels" :key="outerKey" :inline="true" class="wraper">
      <div style="margin-bottom: 5x;display:flex;flex-direction:column" class="grid-content">
        <el-form v-for="(innerDataItem,innerKey, innerIndex) in dataItem" :rules="loadRules" :key="innerKey" :model="dataItem[innerKey]" ref="dataItem" style="display: flex;flex-direction: column;" class="grid-list">
          <div v-show="outerIndex==0 && innerIndex==0" class="grid-wraper">
            <div class="grid-list">
              <div title="桥梁或隧道名称组号：" class="labelText">桥梁或隧道名称组号：</div>
              <div class="inputPart">
                <el-input :disabled="true" v-model="dataItem[innerKey].name_bt_id" size="mini"></el-input>
              </div>
            </div>
            <div class="grid-list">
              <div title="桥梁或隧道名称：" class="labelText">桥梁或隧道名称：</div>
              <div class="inputPart">
                <el-input :disabled="true" v-model="dataItem[innerKey].name_bt" size="mini"></el-input>
              </div>
            </div>
            <el-button @click="toggleSearchPanel(true)" style="padding:5px;height:28px;margin:3px" type="primary" class="btn-icon" icon="el-icon-edit"></el-button>
            <el-button @click="addOuter" style="padding:5px;height:28px;margin:3px" type="primary" class="btn-icon" icon="el-icon-plus"></el-button>
          </div>
          <div v-show="innerIndex==0" class="grid-wraper">
            <div class="grid-list">
              <div style="width:180px" class="labelText">
                <span style="font-weight:bold;font-size:14px;">{{outerKey}}类装载</span>：区间闭合标识：</div>
              <div class="inputPart">
                <el-select size="mini" v-model.number="dataItem[innerKey].tunnage_flag" placeholder="请选择">
                  <el-option v-for="item in seatFlagClass" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="grid-list">
              <div class="labelText" title="正常装载级别吨数范围(车货总重)">正常装载级别吨数范围(车货总重)：</div>
              <div class="inputPart">
                 > 
                <el-form-item prop="tunnage_min">
                  <el-input v-model="dataItem[innerKey].tunnage_min" :disabled="outerKey == 1" size="mini"></el-input>
                </el-form-item>
                  <= 
                <el-form-item prop="tunnage_max" v-show="outerKey != 5">
                  <el-input v-model="dataItem[innerKey].tunnage_max" size="mini"></el-input>
                </el-form-item>
                <el-input v-model="dataItem[innerKey].tunnage_max" v-show="outerKey == 5" :disabled="outerKey == 5" size="mini"></el-input>
              </div>
            </div>
            <el-button @click="addInner(outerKey)" style="padding:5px;height:28px;margin:3px" type="primary" class="btn-icon" icon="el-icon-circle-plus-outline"></el-button>
            <el-button @click="minusOuter(outerKey)" style="padding:5px;height:28px;margin:3px" type="primary" class="btn-icon" icon="el-icon-minus"></el-button>
          </div>
          <div style="display:flex;flex-direction: row;">
            <fieldset :style="dataItem[innerKey].insertFlag ? 'border: 1px dashed red': 'border: 1px dashed #636ef5;'">
              <legend style="font-size:12px">{{innerKey}} 区间</legend>
              <div class="grid-wraper">
                <div class="grid-list">
                  <div title="区间闭合标识：" class="labelText">区间闭合标识：</div>
                  <div class="inputPart">
                    <el-select size="mini" v-model.number="innerDataItem.interval_flag" placeholder="请选择">
                      <el-option v-for="item in seatFlagClass" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="grid-list">
                  <div title="正常装载区间吨数范围：" class="labelText">正常装载区间吨数范围：</div>
                  <div class="inputPart">
                    <div class="inputPart">
                      <el-input v-model="innerDataItem.interval_min" size="mini"></el-input> -
                      <el-input v-model="innerDataItem.interval_max" size="mini"></el-input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-wraper">
                <div class="grid-list">
                  <div title="基本费率：" class="labelText">基本费率：</div>
                  <div class="inputPart">
                    <el-form-item prop="rate_base">
                      <el-input v-model="innerDataItem.rate_base" size="mini"></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="grid-list">
                  <div title="费率上限(广东为倍数)：" class="labelText">费率上限(广东为倍数)：</div>
                  <div class="inputPart">
                    <el-input v-model="innerDataItem.rate_min" size="mini"></el-input>
                  </div>
                </div>
              </div>
              <div class="grid-wraper">
                <div class="grid-list">
                  <div title="费率下限(广东为倍数)：" class="labelText">费率下限(广东为倍数)：</div>
                  <div class="inputPart">
                    <el-input v-model="innerDataItem.rate_max" size="mini"></el-input>
                  </div>
                </div>
                <div class="grid-list">
                  <div title="基本费率车道数：" class="labelText">基本费率车道数：</div>
                  <div class="inputPart">
                    <el-select :disabled="!isGuangdong" size="mini" v-model.number="innerDataItem.lane_num" placeholder="请选择">
                      <el-option v-for="item in feeOptions" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div class="grid-wraper">
                <div class="grid-list">
                  <div title="费 率 1：" class="labelText">费 率 1：</div>
                  <div class="inputPart">
                    <el-input :disabled="!isGuangdong" v-model="innerDataItem.rate_base1" size="mini"></el-input>
                  </div>
                </div>
                <div class="grid-list">
                  <div title="费率1车道数：" class="labelText">费率1车道数：</div>
                  <div class="inputPart">
                    <el-select :disabled="!isGuangdong" size="mini" v-model.number="innerDataItem.lane_num1" placeholder="请选择">
                      <el-option v-for="item in feeOptions" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div class="grid-wraper">
                <div class="grid-list">
                  <div title="最低计重(吨)：" class="labelText">最低计重(吨)：</div>
                  <div class="inputPart">
                    <el-form-item prop="weight_min">
                      <el-input v-model="innerDataItem.weight_min" size="mini"></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="grid-list">
                  <div title="最低收费(元)：" class="labelText">最低收费(元)：</div>
                  <div class="inputPart">
                    <el-form-item prop="charge_min">
                      <el-input v-model="innerDataItem.charge_min" size="mini"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </fieldset>
            <el-button @click="minusInner(outerKey,innerKey)" style="padding:5px;height:25px;width:25px;margin-top:100px"
              type="primary" class="btn-icon" icon="el-icon-remove-outline"></el-button>
          </div>
        </el-form>
      </div>
    </div>
    <div style="padding:10px 20px 0 0;text-align: right;" class="footerPart">
      <el-row :gutter="5">
        <el-button type="primary" @click="onSubmit('dataItem')">保 存</el-button>
      </el-row>
    </div>
    <search-name @selectBtName="setBtName" @toggleSearch="toggleSearchPanel" v-if="serachShow"></search-name>
  </div>
</template>

<script>
  import searchName from './searchName';
  import {updateTollGate,getTollGate} from '../../dataService/api';
  import {appUtil} from '../../Application';
  export default {
    name: 'scTollCar',
    props: ['tableName', 'selectedData'],
    components: {searchName},
    data() {
      // 装载机别数
      let validateTunnage = (rule, value, callback) => {
        let self = this;
        if (value >49 || value < 0) {
          callback(new Error('座位数必须大于0小于49')); 
        } else {
          callback();
        }
      };
      // 最低收费
      let validateChargeMin = (rule, value, callback) => {
        let self = this;
        if (value > 20) {
          this.$confirm('最低收费值大于20, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            callback();
          }).catch(() => {
            callback(new Error('最低收费值必须小于20'));         
          });
        }
      };
      // 最低计重吨数
      let validateWeightMin = (rule, value, callback) => {
        let self = this;
        if (value > 10) {
          this.$confirm('最低收费值大于10, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            callback();
          }).catch(() => {
            callback(new Error('最低收费值必须小于10'));         
          });
        }
      };
      // 基本费率
      let validateRateBase = (rule, value, callback) => {
        let self = this;
        if (value > 10 || value < 0) {
          this.$confirm('基本费率值大于10或者小于0, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            callback();
          }).catch(() => {
            callback(new Error('基本费率值必须小于10并且大于0'));         
          });
        }
      };
      return {
        loading: false,
        isGuangdong: false,
        dataModels: {},
        serachShow: false,
        originModel: {
          group_id: this.$store.state.editSelectedData[0],
          loading_class: 1,
          tunnage_flag: 1,
          tunnage_min: 1,
          tunnage_max: 1,
          loading_subclss: 1,
          interval_flag: 1,
          interval_min: 1,
          interval_max: 1,
          rate_max: 1,
          rate_min: 1,
          charge_min: 0,
          weight_min: 0,
          rate_base: 0,
          lane_num: 0,
          rate_base1: 0,
          lane_num1: 0,
          name_bt_id: 0,
          name_bt: '',
          source: 0
        },
        loadRules: {
          tunnage_min: [{ validator: validateTunnage, trigger: 'blur' }],
          tunnage_max: [{ validator: validateTunnage, trigger: 'blur' }],
          charge_min: [{ validator: validateChargeMin, trigger: 'blur' }],
          weight_min: [{ validator: validateWeightMin, trigger: 'blur' }],
          rate_base: [{ validator: validateRateBase, trigger: 'blur' }],
        },
        mountFlag: false,
        feeOptions: [{
          value: 0,
          label: '空'
        }, {
          value: 1,
          label: '4'
        }, {
          value: 2,
          label: '6'
        }],
        seatFlagClass: [{
          value: 1,
          label: '前开后闭'
        }, {
          value: 2,
          label: '前闭后开'
        }, {
          value: 3,
          label: '前闭后闭'
        }]
      }
    },
    watch: {
      dataModels: {
        handler(newValue, oldValue) {
          if (!this.mountFlag) {
            this.$emit('tabStatusChange', {
              status: true,
              tabIndex: 2
            });
          } else {
            this.mountFlag = false;
          }
        },
        deep: true
      }
    },
    methods: {
      toggleSearchPanel(flag){
        this.serachShow = flag;
      },
      setBtName() {
        this.originModel.name_bt_id = this.$store.state.btData.name_groupid;
        this.originModel.name_bt = this.$store.state.btData.name;
        Object.keys(this.dataModels).forEach(item => {
          Object.keys(this.dataModels[item]).forEach(innerItem => {
            this.dataModels[item][innerItem].name_bt_id = this.$store.state.btData.name_groupid;
            this.dataModels[item][innerItem].name_bt = this.$store.state.btData.name;
          });
        });
      },
      _reSort() {
        let a = _.groupBy(this.dataModels, 'loading_class');
        Object.keys(a).forEach(item => {
          a[item] = _.groupBy(a[item], 'loading_subclss');
          Object.keys(a[item]).forEach(innerItem => {
            a[item][innerItem] = a[item][innerItem][0]
          });
        });
        this.dataModels = a;
      },
      addOuter() {
        let _self = this;
        let existsKeys = Object.keys(this.dataModels);
        let allKeys = ['1', '2', '3', '4', '5'];
        let leftKeys = _.difference(allKeys, existsKeys);
        if (leftKeys.length) {
          let newObj = Object.assign({insertFlag: true}, _self.originModel);
          newObj.loading_class = leftKeys[0];
          if (leftKeys[0] === '1') {
            newObj.tunnage_min = 0;
          } else {
            newObj.tunnage_min = this.dataModels[leftKeys[0] - 1][1].tunnage_max;
            // 最后类型的最大值为1000
            if (leftKeys[0] === allKeys[allKeys.length - 1]) {
              newObj.tunnage_max = 1000;
            } else {
              // 控制最大值比最小值大1
              newObj.tunnage_max = newObj.tunnage_min + 1;
            }
          }
          _self.$set(_self.dataModels, leftKeys[0], {'1': newObj});
        }
      },
      minusOuter(index) {
        Object.keys(this.dataModels).length > 1 && this.$delete(this.dataModels, index);
      },
      addInner(index) {
        let _self = this;
        let existsKeys = [];
        for (let key in this.dataModels[index]) {
          existsKeys.push(this.dataModels[index][key].loading_subclss);
        }
        let allKeys = [1, 2, 3, 4, 5];
        let leftKeys = _.difference(allKeys, existsKeys);
        if (leftKeys.length) {
          let newObj = Object.assign({insertFlag: true}, _self.originModel);
          newObj.loading_class = index;
          newObj.loading_subclss = leftKeys[0];
          _self.$set(_self.dataModels[index], leftKeys[0], newObj);
        }
      },
      minusInner(outerIndex, innerIndex) {
        (Object.keys(this.dataModels).length > 1 || Object.keys(this.dataModels[outerIndex]).length>1) && this.$delete(this.dataModels[outerIndex], innerIndex);
        if (!Object.keys(this.dataModels[outerIndex]).length) {
          this.$delete(this.dataModels, outerIndex);
        }
      },
      onSubmit(formName) {
        let _self = this;
        let validateFlag = true;
        if (!this.$store.state.editSelectedData.length) {
          return false;
        }
        this.$refs[formName].forEach((formItem, index) => {
          formItem.validate((valid) => {
            if (!valid) {
              validateFlag = false; 
            }
          });
        });
        if (validateFlag) {
          let submitData = [];
          this.$store.state.editSelectedData.forEach(outer => {
            Object.keys(this.dataModels).forEach(item => {
              Object.keys(this.dataModels[item]).forEach(innerItem => {
                let cloneData = Object.assign({},this.dataModels[item][innerItem]);
                cloneData.group_id = outer;
                delete this.dataModels[item][innerItem].insertFlag;
                delete cloneData.insertFlag;
                submitData.push(cloneData);
              });
            });
          });
          let params = {
            table: 'SC_TOLL_LOAD',
            data: submitData,
            workFlag: appUtil.getGolbalData().workType,
            adminCode: appUtil.getGolbalData().adminCode
          };
          this.loading = true;
          updateTollGate(params)
            .then(result => {
              let {
                errorCode
              } = result;
              const h = this.$createElement;
              if (errorCode === 0) {
                this.$emit('tabStatusChange', {
                  status: false,
                  tabIndex: 2
                });
                return this.$message({
                  message: '数据更新成功！',
                  type: 'success'
                });
              } else {
                return this.$message({
                  message: '数据更新失败！',
                  type: 'warning'
                });
              }
            })
            .finally(() => {
              this.loading = false;
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },
    mounted() {
      let _self = this;
      this.isGuangdong = appUtil.getGolbalData().adminCode == '440000';
      this.mountFlag = true;
      if (this.$store.state.handleFlag === 'update') {
        let param = {
          table: 'SC_TOLL_LOAD',
          pid: this.$store.state.editSelectedData[0],
          workFlag: appUtil.getGolbalData().workType
        };
        this.loading = true;
        getTollGate(param)
        .then(result => {
          let {errorCode,data} = result;
          let a = _.groupBy(data, 'loading_class');
          Object.keys(a).forEach(item => {
            a[item] = _.groupBy(a[item], 'loading_subclss');
            Object.keys(a[item]).forEach(innerItem => {
              a[item][innerItem] = a[item][innerItem][0]
            });
          });
          _self.dataModels = a;
        })
        .finally(() => {
          _self.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        _self.loading = false;
      }
    }
  }

</script>

<style scoped>
  fieldset {
    padding: 0;
    width:100%;
  }

  fieldset legend {
    color: #151616;
    font-size: 14px;
    font-weight: bold;
  }

  .grid-wraper {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
  }

  .grid-content {
    margin: 0 15px;
  }

  .grid-content .grid-list {
    flex: 1;
    padding:  0 5px;
    display: flex;
    flex-direction: row;
  }

  .grid-content .labelText {
    flex: 1;
    margin-right: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: right;
  }

  .grid-content .inputPart {
    flex: 2;
    display: flex;
    flex-direction: row;
  }

  .el-select,
  .el-select--mini {
    display: block;
    width: 100%;
  }
  .inputPart .el-form-item {
    width: 100%;
    margin-bottom: 0
  }

</style>
