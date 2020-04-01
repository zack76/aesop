class BaseService {
    get(url, params = null) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
    }
}

const baseService = new BaseService();
export default baseService;
