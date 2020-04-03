class BaseService {
    get(url, params = null) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
                'Access-Control-Allow-Headers': 'Authorization, Lang',
            }
        });
    }
}

const baseService = new BaseService();
export default baseService;
