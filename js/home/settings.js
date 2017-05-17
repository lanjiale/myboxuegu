define(['header','aside','util','nprogress','template','jquery_form','jquery_region',
'jquery_datepicker','jquery_datepicker_CN','jquery_uploadify','jquery'],
    function (ud, ud, util, nprogress, template, ud, ud, ud, ud, ud, $) {
        //util返回每一个方法的返回值,想用哪个用那个，不用拉到
        var returns = util({
            'checkLoginStatus': [],
            'loading': []
        });
        /**
         * 个人中心详细信息回显:
         * 1.请求接口
         * 2.渲染模板
         * */
        $.get('/v6/teacher/profile', function (data) {
            $('.teacher-profile').html(template('tc-settings-tpl',data.result));
            profileSubmit();
            initPCD();
        });
        /**
         * 个人中心表单提交转ajax:
         * 注意：因为表单是动态渲染上去的，所以必须等待渲染完毕才能获取到它
         * */
        function profileSubmit(){
            // 因为在表单提交前获取页面省级数据拼出hometown，所以不能使用这个方法了，不灵活
            /*$('.teacher-profile form').ajaxForm(function() {
             location.reload();
             });*/
            $('.teacher-profile form').on('submit', function (e) {
                //阻止表单的默认提交
                e.preventDefault();
                $(this).ajaxSubmit({
                    data:{
                        tc_hometown:$('#p').find(':selected').text()+'|'+$('#c').find(':selected').text()+'|'+$('#d').find(':selected').text(),
                    },
                    success: function () {
                        location.reload();//成功的话刷新页面
                    }
                });
                //为了兼容老版本IE
                //return false;
            })
        }

        //初始化省市县三级联动
        function initPCD(){
            $('#tc_region').region({
                url: '/lib/jquery-region/region.json'
            })
        }

        // 销毁网站加载进度条
        nprogress.done();
    })
