try {
    $("<link>").attr({href: "http://127.0.0.1:8080/live2d/assets/waifu.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: 'http://127.0.0.1:8080/live2d/assets/waifu-tips.js?v=1.4.2',dataType:"script", cache: true, async: false});
    $.ajax({url: 'http://127.0.0.1:8080/live2d/assets/live2d.js?v=1.0.5',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
    live2d_settings['modelId'] = 6;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 11;          // 默认材质 ID
    live2d_settings['modelStorage'] = true;         // 不储存模型 ID
    /* 在 initModel 前添加 */
    initModel('http://127.0.0.1:8080/live2d/assets/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
