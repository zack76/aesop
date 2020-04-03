import BaseService from './BaseService';
import { Config } from '../config';

class ItemService {
    // getItemDetail = ()=> BaseService.get(Config.CROS_ANYWHERE + Config.AESOP_URL);
    getItemDetail = ()=> BaseService.get(Config.AESOP_URL);
}
const itemService = new ItemService();
export default itemService;