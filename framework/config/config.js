const path = require('path');


const ROOT = process.cwd();
exports.path = {
    ROOT_PATH: ROOT,

    CORE_PATH: path.resolve(ROOT, 'framework/core'),
    DATABASE_PATH: path.resolve(ROOT, 'framework/database'),

    PUBLIC_PATH: path.resolve(ROOT, 'public'),

    SRC_PATH: path.resolve(ROOT, 'src'),

    CONFIG_PATH: path.resolve(ROOT, 'framework/config'),

    ACTION_PATH: path.resolve(ROOT, 'src/action'),
    SERVICE_PATH: path.resolve(ROOT, 'src/service'),
    DAO_PATH: path.resolve(ROOT, 'src/dao'),
    ENTITY_PATH: path.resolve(ROOT, 'src/entity'),

    UTIL_PATH: path.resolve(ROOT, 'src/util')


}
