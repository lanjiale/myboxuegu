/**
 * bootstrap是普通模块，也没有对外暴露任何全局变量，所以我们这里接收到的值为undefined，
 * jquery_form也是普通模块，也没有对外暴露任何全局变量，收到的值也为undefined，
 * jquery是ADM模块，我们这里可以接收到正常jQuery对外暴露的方法
 * */
define(['bootstrap','jquery','jquery_form','jquery_cookie','nprogress','util'],
    function (ud,$,ud,ud,nprogress,util) {
        //销毁网站进度条
        nprogress.done();
        // util返回每一个方法的返回值，想用那个用那个，不用拉到
        var returns = util({
            'loading': []
        });
    /**
     * 这里的形参用来接收模块的输出，
     * 但是需要注意它们是按照顺序接收输出值的，
     * 同时这些形参的名字可以任意起。
     */
    //监听form表单的提交事件,转为ajax请求,请求成功,那么跳转到首页
    $('#login-form').ajaxForm({

        /**
         * 登录成功后,服务器会返回该用户的信息,
         * 我们把他存储到cookie,供其他页面使用.
         * 为了让其他页面能够使用cookie,所以配置path为根
         *默认请求下存储的cookie在浏览器关闭后就会失效,为了延长有效期,可以配置max-age */
        success:function(data){
            $.cookie('userInfo', JSON.stringify(data.result),{path:'/'});
            location.href='/';
        },
        error: function () {
            alert('登录失败!!!');
        }
    });
    //登录状态检测
    if($.cookie('PHPSESSID')){
        location.href='/';
    }
});