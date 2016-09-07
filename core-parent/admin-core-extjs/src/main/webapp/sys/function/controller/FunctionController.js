/**
 * 功能模块控制器
 *
 * @author majian <br/>
 *         date:2015-7-31
 * @version 1.0.0
 */
Ext.define('kalix.admin.function.controller.FunctionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.functionController',
    requires: [
        'kalix.admin.application.view.ApplicationTreeList',
        'kalix.admin.function.view.FunctionGrid'
    ],
    /**
     * 初始化面板.
     * @returns {Ext.panel.Panel}
     */
    onInitPanel: function () {
        var panel = Ext.create('Ext.panel.Panel', {
            border: false,
            layout: 'hbox',
            autoScroll: true,
            itemId: 'mainPanel',
            items: [
                {xtype:'container', margin:'5 2 5 5', flex: 1, items:[this.onInitApplicationList()]},
                {xtype:'container', padding:'5 5 5 2', flex:3, items:[this.onInitDataGrid()]}]
        });

        return panel;
    },
    /**
     * 应用单击
     */
    onApplicationClick: function (view, record, item, index, e) {
        var grid = Ext.ComponentQuery.query('functionGridPanel')[0];
        grid.applicationId = record.data.id;
        grid.applicationCode = record.data.code;
        grid.applicationName = record.data.name;
        var store = grid.getStore();
        store.setProxy({
            type: 'ajax',
            url: CONFIG.restRoot + '/camel/rest/functions/application/' + record.data.id
        });
        store.reload();
    },
    /**
     * 应用刷新
     */
    onApplicationRefersh: function () {
        //Ext.ComponentQuery.query('functionPanel')[0].down('#mainPanel>#applicationList').getStore().reload();
        Ext.ComponentQuery.query('functionPanel')[0].down('#mainPanel').items.items[0].items.items[0].getStore().reload();
    },
    /**
     * 应用展开
     * @constructor
     */
    onApplicationAxpandAll: function () {
        Ext.ComponentQuery.query('functionPanel')[0].down('#mainPanel>#applicationList').expandAll(function () {
        });
    },
    /**
     * 应用收起
     * @constructor
     */
    onApplicationCollapseAll: function () {
        Ext.ComponentQuery.query('functionPanel')[0].down('#mainPanel>#applicationList').collapseAll(function () {
        });
    },
    /**
     * 初始化应用列表.
     * @returns {Ext.panel.Panel}
     */
    onInitApplicationList: function () {
        var applicationListPanel = Ext.create('kalix.admin.application.view.ApplicationTreeList', {
            store: Ext.create('kalix.admin.application.store.ApplicationTreeListStore'),
            region: 'west',
            itemId: 'applicationList',
            title: '应用列表',
            iconCls: 'iconfont icon-application-management',
            listeners: {
                itemClick: this.onApplicationClick
            },
            tbar: [
                {
                    text: '刷新',
                    iconCls:'iconfont icon-refresh',
                    handler: this.onApplicationRefersh
                }]
        });
        return applicationListPanel;
    },
    /**
     * 初始化数据表格.
     * @returns {Ext.panel.Panel}
     */
    onInitDataGrid: function () {
        var dataGird = Ext.create('kalix.admin.function.view.FunctionGrid', {
            store: Ext.create('kalix.admin.function.store.FunctionStore')
        });
        return dataGird;
    }
});