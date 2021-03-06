/**
 * 用户首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.admin.user.Main', {
  extend: 'kalix.container.BaseContainer',
  requires: [
    'kalix.admin.user.view.UserGrid',
    'kalix.admin.user.view.UserSearchForm'
  ],
  items: [
    {
      title: '用户查询',
      xtype: 'userSearchForm'
    }, {
      xtype: 'userGridPanel',
      id: 'userGridPanel',
      title: '用户列表'
    }
  ]
});
