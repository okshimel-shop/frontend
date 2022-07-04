const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "root",
    // Password optional, prompted if none given
    password: "12039500",
    host: "109.251.233.11",
    port: 22,
    localRoot: __dirname + "/build",
    remoteRoot: "/var/www/okshimel.shop/",
    include: ["*", "**/*", ".*"],      // this would upload everything except dot files

    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        // "dist/**/*.map",
        // "node_modules/**",
        // "node_modules/**/.*",
        // ".git/**",
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: false,
    // use sftp or ftp
    sftp: true,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));