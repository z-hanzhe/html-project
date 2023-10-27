$(function() {
    // 页面加载时自动获取焦点
    $('#inp_url·').focus();
    /**
     * 清空消息窗口的内容
     */
    $("#clean-console").click(() => {
        $("#div_msg").empty();
    })
});
