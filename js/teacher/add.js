define(['jquery_form','jquery','aside','header','jquery_cookie','util','nprogress'],
    function (ud,$,ud,ud,ud,util,nprogress) {
        // util����ÿһ�������ķ���ֵ�������Ǹ����Ǹ�����������
        var returns = util({
            'checkLoginStatus':[],
            'loading':[]
        });
        //��תajax�ύ,�ɹ�����ת����ʦ�б�ҳ
        $('.teacher-add form').ajaxForm(function () {
            location.href = '/html/teacher/list.html';
        })

        //������վ������
        nprogress.done();
    })