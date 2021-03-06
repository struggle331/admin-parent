package com.kalix.admin.template.biz;


import com.kalix.admin.template.api.biz.ITemplateConfigBeanService;
import com.kalix.admin.template.api.dao.ITemplateConfigBeanDao;
import com.kalix.admin.template.entities.TemplateConfigBean;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.GenericBizServiceImpl;

/**
 * @类描述：审计配置管理
 * @创建人： sunlf
 * @创建时间：2014/10/10
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class TemplateConfigBeanServiceImpl extends GenericBizServiceImpl<ITemplateConfigBeanDao, TemplateConfigBean> implements ITemplateConfigBeanService {

    public TemplateConfigBeanServiceImpl() {
        super.init(TemplateConfigBean.class.getName());
    }

    @Override
    public void beforeUpdateEntity(TemplateConfigBean entity, JsonStatus status) {

    }

    @Override
    public void beforeSaveEntity(TemplateConfigBean entity, JsonStatus status) {

    }

    @Override
    public void beforeDeleteEntity(Long id, JsonStatus status) {

    }
}
