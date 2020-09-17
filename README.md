# nexus-example

## Nexus 模版示例

### 常用脚本

安装依赖（第一步） `npm install`

生成数据库迁移文件 `npm run migration:save`

执行迁移（需先生成数据库迁移文件） `npm run migrate:up`

填充数据（需先执行迁移） `npm run migrate:seed`

构建 `npm run build`

运行（需先构建） `npm run start`
