const { PORT } = require('./src/config/index');
const { logger } = require('./src/utils/logger');
const app = require('./src/app');

app.listen(PORT, () => {
  logger.info(`=================================`);
  logger.info(`🚀 App listening on the port ${PORT}`);
  logger.info(`=================================`);
});
