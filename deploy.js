const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "root",
    password: "12039500",
    host: "109.251.233.11",
    port: 22,
    localRoot: __dirname + "/build",
    remoteRoot: "/var/www/okshimel.shop/",
    include: ["*", "**/*", ".*"],
    exclude: [
        // "dist/**/*.map",
        // "node_modules/**",
        // "node_modules/**/.*",
        // ".git/**",
    ],
    deleteRemote: true,
    forcePasv: false,
    sftp: true,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));