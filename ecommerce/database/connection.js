import Sequelize from 'sequelize'
import config from './config/config.mjs';

let sequelize;
if(process.env.NODE.ENV === 'production') {
  sequelize = new Sequelize(config.production)
} else if (process.env.NODE.ENV === 'test') {
  sequelize = new Sequelize(config.test)
} else {
  sequelize = new Sequelize(config.development)
}

const connection = sequelize;

export default connection

