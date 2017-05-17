define(['jquery_form','jquery','aside','header','jquery_cookie','util','nprogress','template'],
    function (ud,$,ud,ud,ud,util,nprogress,template) {
        // util����ÿһ�������ķ���ֵ�������Ǹ����Ǹ�����������
        var returns = util({
            'checkLoginStatus':[],
            'loading':[],
            'getSearch':['tc_id']
        });
        /**
         * ������ʦ��ǰ��Ϣ�������ݻ��ԣ�
         * Ȼ��ʹ�ñ��ύ����ѱ�תajax�����޸Ľ�ʦ��Ϣ��
         * */
        var tcId = returns.getSearch;
        $.get('/v6/teacher/edit',{tc_id:tcId}, function (data) {
            $('.teacher-add').append(template('tc-edit-tpl',data.result));
            //�޸Ľ�ʦ��Ϣ,�޸ĳɹ�����ת���б�ҳ
            $('.teacher-add form').ajaxForm({
                // �����data���Ḵд�������ݣ����ڱ����ݻ����Ͻ�������
                data:{tc_id:tcId},
                //�ɹ��ص�
                success: function(){
                    location.href = '/html/teacher/list.html';
                }
            })
        })
        //������վ������
        nprogress.done();
    })