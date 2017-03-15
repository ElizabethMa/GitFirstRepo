import http from './http'

/**
 *  登录
 * @param  {
 *     account_id	string	 	账号
 *     password	string	 	密码
 * }
 */
function login(param) {
    return http.post('/account_sessions', param, {withCredentials: true})
}

/**
 * 创建模拟账号
 * @param {string} mobile 
 */
function register(param) {
    return http.post('/sim_accounts', param)
}

/**
 * 重置密码
 * @param {
 *     mobile	string	 	账号
 *     broker_id	string	 	'sim' / ''
 * }
 */
function resetPassword(param) {
    return http.post('/account_password', param)
}

/**
 * 修改密码
 * @param  {
 *     account_id	string	 	账号
 *     old_password	string	 	密码
 *     new_password	string	 	新密码
 * }
 */
function changePassword(param) {
    return http.put('/account_password', param)
}

/**
 * 获取手机号的使用情况
 * @param {string} mobile 
 */
function mobileStatus(mobile) {
    return http.get('/mobiles/' + mobile)
}

module.exports = {
    do_login: function(account_id, password){
        return login({
            account_id: account_id,
            password: password
        }).then(function(response){
            http.defaults.headers.common['Shinny-Session'] = response['Shinny-Session'];
            return Promise.resolve(response);
        });
    }
};