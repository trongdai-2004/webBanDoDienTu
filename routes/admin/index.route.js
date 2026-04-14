const systemConfig = require("../../config/systems")
const systems = require("../../config/systems");
const dashboardRoutes = require("./dashboard.route")

module.exports = (app) =>{
    const PATH_ADMIN = systemConfig.prefixAdmin


    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);

}